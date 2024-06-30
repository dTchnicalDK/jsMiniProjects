const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");
let digitalClock = document.querySelectorAll(".dclock");
let calenderElements = document.querySelectorAll(".calendar");

setInterval(setTime, 1000);

// to map a set of number with other set of number
// link to get function is https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function setTime() {
  //getting time with new Date(method) and passing out hour, min, sec;
  let dateTime = new Date();
  let timeHour = dateTime.getHours();
  let timeMinute = dateTime.getMinutes();
  let timeSecond = dateTime.getSeconds();

  //updating hour hand;
  let hourRotation = scale(timeHour, 0, 12, 0, 360);
  hourNeedle.style.transform = `rotate(${hourRotation}deg)`;

  //updating minute hand;
  let minuteRotation = scale(timeMinute, 0, 60, 0, 360);
  minuteNeedle.style.transform = `rotate(${minuteRotation}deg)`;

  //updating second hand;
  let secondRotation = scale(timeSecond, 0, 60, 0, 360);
  secondNeedle.style.transform = `rotate(${secondRotation}deg)`;
  setDigitalClock(timeHour, timeMinute, timeSecond);
}

function setDigitalClock(timeHour, timeMinute, timeSecond) {
  let hoursIn12HrsClock = timeHour % 12; //coverting 24 hour clock hour into 12 hour clock hour;
  let amPm = "";
  timeHour >= 12 ? (amPm = "PM") : (amPm = "AM");

  // function to decide wether the time elemnt in single digit or more ; if signle digit then add zero berore it;
  function addZero(el) {
    let zero = "";
    el < 10 ? (zero = 0) : (zero = "");
    return zero;
  }

  // updating digital clock elements;
  digitalClock[0].innerHTML = `${addZero(
    hoursIn12HrsClock
  )}${hoursIn12HrsClock}`;
  digitalClock[1].innerHTML = `: ${addZero(timeMinute)}${timeMinute}`;
  digitalClock[2].innerHTML = `: ${addZero(timeSecond)}${timeSecond}`;
  digitalClock[3].innerHTML = `: ${amPm}`;
}

// date elements settlement
let dateElement = new Date();
const days = [
  "Sundary",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
upateDate();

function upateDate() {
  calenderElements[0].innerHTML = dateElement.getDate();
  calenderElements[1].innerHTML = months[dateElement.getMonth()];
  calenderElements[2].innerHTML = days[dateElement.getDay()];
  calenderElements[3].innerHTML = dateElement.getFullYear();
}
