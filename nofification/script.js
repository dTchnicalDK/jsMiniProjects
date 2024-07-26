const btn = document.querySelector(".btn");
const notifArea = document.querySelector(".notifications");
const messages = [
  "pratham sandesh",
  "dvitiya sandesh",
  "Tritiya sandesh",
  "chaturth sandesh",
];
const msgType = ["success", "error", "warning"];

btn.addEventListener("click", () => createNotification());

function createNotification(msg = null, msgType) {
  const notif = document.createElement("h3");
  notif.classList.add("notif");
  notif.classList.add(msgType ? msgType : randomType());
  notif.innerText = msg ? msg : randomeMsg();
  notifArea.appendChild(notif);
  console.log(notif);

  //to remove notification message
  setTimeout(() => {
    notifArea.removeChild(notif);
  }, 3000);
}

//function to select random message from Array "messages";
function randomeMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}
//random funtion to select value from Array msgType;
function randomType() {
  return msgType[Math.floor(Math.random() * msgType.length)];
}
