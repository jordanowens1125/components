const handleNavExtension = (e) => {
  if (window.innerWidth > 820) {
    return
  }
  var dropdown = e.querySelector(".dropdown");
  const closed = dropdown.classList.contains("closed");
  rotateDrodownIcon(e);
  if (closed) {
    expandedElement(dropdown);
  } else {
    closeElement(dropdown);
  }
};

const expandedElement = (e) => {
  e.classList.remove("closed");
  e.classList.add("expanded");
};

const closeElement = (e) => {
  e.classList.remove("expanded");
  e.classList.add("closed");
};

const rotateDrodownIcon = (e) => {
  const dropdownIcon = e.querySelector("img");
  const open = dropdownIcon.classList.contains("extended-icon");
  if (open) {
    dropdownIcon.classList.remove("extended-icon");
    dropdownIcon.classList.add("closed-icon");
  } else {
    dropdownIcon.classList.remove("closed-icon");
    dropdownIcon.classList.add("extended-icon");
  }
};

const showMobileNav = () => {
  const modal = document.getElementById("nav-modal");
  modal.style.display = "block";
};

const hideMobileNav = () => {
  const modal = document.getElementById("nav-modal");
  modal.style.display = "none";
};

document.addEventListener("click", (e) => {
  // console.log(e.target);
});

window.onresize = function () {
  location.reload();
};
