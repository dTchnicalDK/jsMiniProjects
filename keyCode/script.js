let container = document.querySelector(".container");
console.log(container);

window.addEventListener("keydown", (event) => {
  //now keypress event is not good to use, as it don't show control and shift etc. so use "keydown";
  event.preventDefault(); //To prevent default actionsuch as f5 will refresh the page that i don't want.
  container.innerHTML = `<div class="keyContainer">
        <small>key</small>
        <div class="key">${event.key === " " ? "space" : event.key}</div>
      </div>
      <div class="keyContainer">
        <small>keyCode</small>
        <div class="key">${event.keyCode}</div>
      </div>
      <div class="keyContainer">
        <small>code</small>
        <div class="key">${event.code}</div>
      </div>`;
  console.log(event);
});
