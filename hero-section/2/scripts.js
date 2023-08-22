const clearAllBackgroundImages = () => {
  const wrapper = document.getElementById("img-wrapper");
  for (const child of wrapper.children) {
    child.classList.remove("show-bg");
    child.classList.add("hide-bg");
  }
};

const clearAllSections = () => {
  const wrapper = document.getElementById("content-sections");
  for (const child of wrapper.children) {
    child.classList.remove("show-section");
    child.classList.add("hide-section");
  }
};

const setImg = (imgNum) => {
  clearAllBackgroundImages();
  clearAllSections();
  const img = document.getElementById("img-wrapper").children[imgNum];
  img.classList.remove("hide-bg");
  img.classList.add("show-bg");
  setSection(imgNum);
};

const setSection = (num) => {
  const section = document.getElementById("content-sections").children[num];
  section.classList.remove("hide-section");
  section.classList.add("show-section");
};
