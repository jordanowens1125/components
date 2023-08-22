const clearAllBackgroundImages = () => {
  const wrapper = document.getElementById("img-wrapper");
  for (const child of wrapper.children) {
    child.classList.remove("show");
    child.classList.add("hide");
  }
};

const setImg = (imgNum) => {
  clearAllBackgroundImages();
  const img = document.getElementById("img-wrapper").children[imgNum];
  img.classList.remove("hide");
  img.classList.add("show");
};
