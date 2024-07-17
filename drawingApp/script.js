const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let color = "black";
let size = 5;
let x1, y1, x2, y2;
let isMouseDown = false;

canvas.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  x1 = e.offsetX;
  y1 = e.offsetY;
  //   console.log(x1, y1, isMouseDown);
});
canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
  x1 = undefined;
  y1 = undefined;
  //   console.log("mouse up now");
});
canvas.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    x2 = e.offsetX;
    y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
    // console.log(x1, y1, x2, y2);
  }
  console.log("mouse moving");
});
function drawCircle(x1, y1) {
  ctx.moveTo(x1, y1);
  ctx.beginPath();
  ctx.arc(x1, y1, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
