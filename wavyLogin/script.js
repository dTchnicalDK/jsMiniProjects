let inputLables = document.querySelectorAll(".form-control label");
// console.log(inputLables);

inputLables.forEach(
  (label) =>
    (label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, indx) =>
          `<span style = "transition-delay: ${indx * 30}ms">${letter}</span>`
      )
      .join(""))
  //   console.log(span);
);
{
  /* <span style="transition-delay: 50ms;"></span> */
}
