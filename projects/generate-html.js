const fs = require("fs");
const Mustache = require("mustache");
const projects = require("./data");
const template = fs.readFileSync("template.html", "utf-8");

const html = Mustache.render(template, {
  title: "Projects & Contributions",
  projects: projects.sort(projectSortCompareFunction).map(setComputedProperties),
});
fs.writeFileSync("index.html", html);

function projectSortCompareFunction(p1, p2) {
  if (p1.to !== p2.to) {
    // recently discontinued projects first
    return (p2.to ? new Date(p2.to) : new Date()) - (p1.to ? new Date(p1.to) : new Date());
  }
  if (p1.contributed !== p2.contributed) {
    // own projects first
    return p1.contributed ? 1 : -1;
  }
  if (p1.stats.githubStars !== p2.stats.githubStars) {
    // most starred projects first
    return p2.stats.githubStars - p1.stats.githubStars;
  }
  if (p1.from !== p2.from) {
    // longer living projects first
    return new Date(p1.from) - new Date(p2.from);
  }
  // A-Z
  return p1.title.toLowerCase().localeCompare(p2.title.toLowerCase());
}

function setComputedProperties(project) {
  return {
    ...project,
    computed: {
      timeFrom: project.timeString || formatDate(project.from) || "?",
      timeTo: project.timeString || project.from === project.to ? "" : formatDate(project.to) || "now",
      contributed: project.contributed ? (project.to ? "contributed" : "contributing") : "",
    },
  };
}

function formatDate(date) {
  if (!date) return date;
  const [year, month] = date.split("-");
  return `${month}/${year}`;
}
