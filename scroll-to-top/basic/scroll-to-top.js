const scrollButton = document.getElementById("scroll-up");
const topOfPage = document.getElementById("top");

scrollButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const observer = new window.IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      scrollButton.style.display = "none";
      return;
    }
    scrollButton.style.display = "flex";
  },
  {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  }
);

observer.observe(topOfPage);
