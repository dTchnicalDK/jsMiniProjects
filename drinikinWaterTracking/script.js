const smallGlasses = document.querySelectorAll(".small-glass");
const largeGlassfill = document.querySelector(".large-glass .achieved");
const largeGlassRemaing = document.querySelector(
  ".large-glass .remaining span"
);
// console.log(largeGlassRemaing);

smallGlasses.forEach((smallGlass, indx) => {
  smallGlass.addEventListener("click", () => {
    highlightSmallGlasses(indx);
  });
});

function highlightSmallGlasses(indx) {
  if (
    smallGlasses[indx].classList.contains("filled") &&
    !smallGlasses[indx].nextElementSibling.classList.contains("filled")
  ) {
    indx--;
  }
  smallGlasses.forEach((glass, indx2) => {
    if (indx2 <= indx) {
      glass.classList.add("filled");
    } else {
      glass.classList.remove("filled");
    }
    updateLargeGlassFill(indx);
  });
}

function updateLargeGlassFill(indx) {
  let fillPercent = (100 / smallGlasses.length) * (indx + 1);
  largeGlassfill.innerText = `${fillPercent}%`; //updating fill % text;
  largeGlassfill.style.height = `${fillPercent}%`; // updating fill height;
  let remainingLitre = 2 - (2 / smallGlasses.length) * (indx + 1); //calculation remianing in litres;
  largeGlassRemaing.innerText = `${remainingLitre} L`; // updating remaining text;
  if (remainingLitre === 0) {
    largeGlassRemaing.parentElement.style.visibility = "hidden";
    largeGlassRemaing.parentElement.style.height = 0;
  } else {
    largeGlassRemaing.parentElement.style.visibility = "visible";
  }
}
