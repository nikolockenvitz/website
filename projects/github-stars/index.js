const nodeFetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const oauth = require("./oauth").token;

const localProjectData = require("../data");

const repos = [
  { user: "nikolockenvitz", repo: "sap-addon" },
  { user: "fancy-flashcard", repo: "ffc" },
  { user: "fancy-flashcard", repo: "random-mix" },
  { user: "nikolockenvitz", repo: "tg-status-bot" },
  { user: "nikolockenvitz", repo: "qr-pwa" },
  { user: "nikolockenvitz", repo: "local-image-viewer" },
  { user: "nikolockenvitz", repo: "decision-matrix" },
  { user: "nikolockenvitz", repo: "german-laws" },
  { user: "nikolockenvitz", repo: "logjam" },
  { user: "rcjberlin", repo: "rcj-dss" },
  { user: "nikolockenvitz", repo: "rcj-rescue-clock" },
  { user: "uport-project", repo: "veramo" },
  { user: "uport-project", repo: "ethr-did" },
  { user: "decentralized-identity", repo: "ethr-did-resolver" },
  { user: "decentralized-identity", repo: "did-jwt" },
  { user: "decentralized-identity", repo: "did-jwt-vc" },
  { user: "decentralized-identity", repo: "ion-tools" },
  { user: "michael-spengler", repo: "countries" },
  { user: "hackathon-sidn", repo: "deno-kek" },
  { user: "hackathon-sidn", repo: "cors-proxy" },
  { user: "simple-icons", repo: "simple-icons" },
  { user: "signalapp", repo: "Signal-Android" },
  { user: "AndreAle94", repo: "moneywallet" },
  { user: "Zamiell", repo: "hanabi-live" },
  { user: "pfisterer", repo: "DHBW_LaTeX_Template" },
];

function fetch(url, data) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `token ${oauth}`,
      "Content-Type": "application/json",
    },
  };
  if (data) options.body = JSON.stringify(data);
  let link;
  return nodeFetch(url, options)
    .then((response) => {
      link = response.headers.get("link");
      return response.json();
    })
    .then((json) => {
      return { json, link };
    });
}

async function getStargazerCountForRepository(repo) {
  const { json } = await fetch(`https://api.github.com/repos/${repo.user}/${repo.repo}`);
  return { repo, stargazers: json.stargazers_count };
}

function compareStargazerCountWithLocalFileAndLogDeviations(stargazerCount, log = true) {
  const map = {};
  stargazerCount.forEach((obj) => (map[`https://github.com/${obj.repo.user}/${obj.repo.repo}`] = obj));
  const checked = [];
  const diff = [];
  for (const project of localProjectData) {
    for (const link of project.links) {
      if (link.url in map) {
        checked.push(link.url);
        if (stargazersToString(map[link.url].stargazers) !== String(project.stats.githubStars)) {
          const details = {
            url: link.url,
            actualStargazers: stargazersToString(map[link.url].stargazers),
            projects: project.stats.githubStars,
          };
          if (log) console.log(details);
          diff.push(details);
        }
      }
    }
  }
  Object.keys(map).forEach((url) => {
    if (!checked.includes(url)) {
      console.log({ "wasn't checked": url });
    }
  });
  return diff;
}

function stargazersToString(stargazers) {
  if (stargazers < 1_000) {
    return `${stargazers}`;
  } else if (stargazers < 100_000) {
    return `${Math.round(stargazers / 100) / 10}k`;
  } else {
    return `${Math.round(stargazers / 1000)}k`;
  }
}

function prettyPrintDiff(diff) {
  diff = diff.map(d => ({
    ...d,
    url: d.url.replace("https://github.com/", "")
  }));
  const maxRepoNameLength = diff.reduce((max, d) => Math.max(max, d.url.length), 0);
  for (const d of diff) {
    console.log(`${d.url}: ${" ".repeat(maxRepoNameLength-d.url.length)}${d.projects} -> ${d.actualStargazers}`);
  }
}

function overwriteData(diff) {
  const filepath = path.join(__dirname, "../data.js");
  const fileContent = fs.readFileSync(filepath, "utf-8");
  let newFileContent = fileContent;
  for (const d of diff.slice(0)) {
    const regex = new RegExp(`(${d.url}(.|\n)+?)githubStars: ("|)${d.projects}("|)`);
    newFileContent = newFileContent.replace(regex, `$1githubStars: "${d.actualStargazers}"`);
  }
  fs.writeFileSync(filepath, newFileContent, "utf-8");
}

async function main() {
  const stargazerCount = await Promise.all(repos.map((repo) => getStargazerCountForRepository(repo)));
  const diff = compareStargazerCountWithLocalFileAndLogDeviations(stargazerCount, false);
  console.log(`Found ${diff.length} mismatches. Auto-fix.`);
  prettyPrintDiff(diff);
  overwriteData(diff);
}

main();
