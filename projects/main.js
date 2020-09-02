window.onload = function () {
  for (const project of projects.sort(projectSortCompareFunction)) {
    addCard(project);
  }
  detectScrollbarWidth();
};
window.resize = function () {
  detectScrollbarWidth();
}

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

function addCard(project) {
  const cardContainer = document.querySelector(".card-container");
  const templ = document.querySelector("template[data-template-id=card]");
  const clone = templ.content.cloneNode(true);

  if (project.images.thumbnail) clone.querySelector("[data-template-id=thumbnail]").src = project.images.thumbnail;
  //clone.querySelector(".card").removeChild(clone.querySelector("img"));
  clone.querySelector("[data-template-id=title]").textContent = project.title;
  setSubtitleForProject(clone.querySelector("[data-template-id=subtitle-wrapper]"), project);
  clone.querySelector("[data-template-id=description]").textContent = project.description;
  const links = clone.querySelector("[data-template-id=links-wrapper]");
  for (const link of project.links) {
    links.append(getLinkForCard(link));
  }

  cardContainer.append(clone);
}

function setSubtitleForProject(subtitle, project) {
  const timeElement = subtitle.querySelector("[data-template-id=time-wrapper]");
  timeElement.querySelector("[data-template-id=from]").textContent = project.timeString || formatDate(project.from) || "?";
  if (project.timeString || project.from === project.to) {
    timeElement.removeChild(timeElement.querySelector("[data-template-id=to-wrapper]"));
  } else {
    timeElement.querySelector("[data-template-id=to]").textContent = formatDate(project.to) || "now";
  }

  if (project.stats.githubStars) {
    subtitle.querySelector("[data-template-id=star-count]").textContent = project.stats.githubStars;
  } else {
    subtitle.removeChild(subtitle.querySelector("[data-template-id=star-wrapper]"));
  }

  const contributedElement = subtitle.querySelector("[data-template-id=contributed]");
  if (!project.contributed) {
    subtitle.removeChild(contributedElement);
  } else {
    if (project.to) {
      contributedElement.textContent = "contributed";
    } else {
      contributedElement.textContent = "contributing";
    }
  }
}

function formatDate(date) {
  if (!date) return date;
  const [year, month] = date.split("-");
  return `${month}/${year}`;
}

function getLinkForCard(link) {
  const element = document.createElement("a");
  element.classList.add("link");
  element.href = link.url;
  element.textContent = link.name;
  return element;
}
