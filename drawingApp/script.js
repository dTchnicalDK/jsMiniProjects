const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
console.log(canvas);

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 200, 100);

ctx.strokeStyle = "blue";
ctx.strokeRect(25, 25, 200, 100);
