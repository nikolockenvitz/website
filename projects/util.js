function detectScrollbarWidth() {
  const scrollbarWidth = window.innerWidth - document.body.clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", scrollbarWidth + "px");
}
