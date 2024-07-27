let coords = [
  { top: 0, right: 45 },
  { top: 45, right: 0 },
  { top: 80, right: 45 },
  { top: 45, right: 85 },
  { top: 15, right: 15 },
  { top: 15, right: 75 },
  { top: 70, right: 15 },
  { top: 70, right: 70 }
];

function create(top, right) {
  let div = document.createElement("div");
  div.innerHTML = "&#10084;";
  document.getElementById("parent").appendChild(div);
  div.style.top = top + "px";
  div.style.right = right + "px";
}

for (let i = 0; i < coords.length; i++) {
  create(coords[i].top, coords[i].right);
}

document.querySelector("p").addEventListener("mousedown", (e) => {
  e.target.classList.toggle("heart");
  document.querySelectorAll("#parent div").forEach((elt) => {
    elt.classList.toggle("animate");
  });
});