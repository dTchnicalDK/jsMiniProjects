let counters = document.querySelectorAll(".counter");

counters.forEach((counter, indx) => {
  let target = [12000, 10000, 8000];
  let increment = Math.ceil(target[indx] / 74);
  let initVal = 0;

  function updateStatus() {
    initVal = initVal + increment;
    if (initVal <= target[indx]) {
      counter.innerHTML = `${initVal}`;
      setTimeout(updateStatus, 10);
    }
  }
  updateStatus();
});
