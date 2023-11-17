let annual = true;
const MONTHLY = "monthly";
const ANNUALLY = "annually";

const handleToggle = () => {
  if (annual) {
    //show monthly classes
    removeHiddenFromGivenClass(MONTHLY);
    //hide annual classes
    addHiddenToGivenClass(ANNUALLY);
  } else {
    //hide monthly classes
    addHiddenToGivenClass(MONTHLY);
    //show annual classes
    removeHiddenFromGivenClass(ANNUALLY);
  }
  annual = !annual;
};

const removeHiddenClass = (el) => {
  el.classList.remove("hidden");
};

const addHiddenClass = (el) => {
  el.classList.add("hidden");
};

const addHiddenToGivenClass = (classname) => {
  const selectedElements = document.getElementsByClassName(classname);
  for (let i = 0; i < selectedElements.length; i++) {
    addHiddenClass(selectedElements[i]);
  }
};

const removeHiddenFromGivenClass = (classname) => {
  const selectedElements = document.getElementsByClassName(classname);
  for (let i = 0; i < selectedElements.length; i++) {
    removeHiddenClass(selectedElements[i]);
  }
};
