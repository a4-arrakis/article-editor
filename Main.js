let SelectBox = document.querySelector("select");
let Article = document.querySelector("article");

SelectBox.addEventListener("change", function () {
  Article.style.setProperty("font-family", SelectBox.value);
});

let BoldBtn = document.querySelector(".boldButton");

BoldBtn.onclick = function () {
  Article.classList.toggle("bold");
  BoldBtn.classList.toggle("bolded");
};

let Min = document.querySelector(".Min");
let label = document.querySelector("p");
let size = parseInt(document.querySelector("p").innerHTML);
let Max = document.querySelector(".Max");

function updateSize() {
  label.innerHTML = size;
}

Min.onclick = function () {
  if (size == 16) {
    Min.disabled = true;
  } else {
    Min.disabled = false;
    size--;
    updateSize();
    Article.style.fontSize = `${size}px`;
  }
};

Max.onclick = function () {
  Min.disabled = false;
  size++;
  updateSize();
  Article.style.fontSize = `${size}px`;
};

let Invert = document.querySelector(".Inv");

Invert.addEventListener("click", function () {
  if (Invert.classList.contains("Inverted")) {
    Article.classList.toggle("Inverted");
    Invert.classList.toggle("Inverted")
    console.log("Ok");
  } else {
    Invert.classList.toggle("Inverted")
    Article.classList.toggle("Inverted");
    console.log("No");
  }
});
