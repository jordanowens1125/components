const height = document.documentElement.clientHeight;

const rows = height / 16;

const rowsEl = document.getElementById("rows");

console.log(rows);

// for (let i = 0; i < rows; i++) {
//   const newRow = document.createElement("div");
//   newRow.classList.add("row");
//   rowsEl.appendChild(newRow);
// }
