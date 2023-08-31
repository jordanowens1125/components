const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
const lastImg = carousel.querySelectorAll("img:last-of-type")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const observerOfLastImg = new window.IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      arrowIcons[1].style.display = "none";
      return;
    }
    arrowIcons[1].style.display = "block";
  },
  {
    root: null,
    threshold: 1, // set offset 1 means trigger if all of image is in viewport
  }
);


// const observerOfFirstImg = new window.IntersectionObserver(
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       arrowIcons[0].style.display = "none";
//       return;
//     }
//     arrowIcons[0].style.display = "block";
//   },
//   {
//     root: null,
//     threshold: 1, // set offset 1 means trigger if all of image is in viewport
//   }
// );

// observerOfFirstImg.observe(firstImg);

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  console.log(carousel.scrollLeft, scrollWidth);
  // arrowIcons[1].style.display =
  //   carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 30);
    showHideIcons();
  });
});

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", dragStart);
window.addEventListener("mouseup", dragStop);
