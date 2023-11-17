const topInfo = document.getElementById("top");
const header = document.getElementById('header')
window.onscroll = function () {
  if (window.scrollY === 0) {
    //user scrolled to the top of the page
    console.log(1);
      topInfo.classList.remove("hidden");
  } else {
      topInfo.classList.add("hidden");
  }
};
