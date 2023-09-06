let currentTabIndex = 0;

const tabs = document.getElementById("tabs").getElementsByTagName("li");

const contentOptions = document
  .getElementById("tab-contents")
  .getElementsByClassName("tab-option");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    contentOptions[currentTabIndex].classList.remove("show");
    contentOptions[i].classList.add("show");

    tabs[currentTabIndex].classList.remove("selected");
    tabs[i].classList.add("selected");
    currentTabIndex = i;
  });
}
