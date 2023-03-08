const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";

  incrementCounter();

  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    // If you increase the divisor from the current value of 15 to a higher value, the counter will increment more slowly, which will result in a longer animation duration. Conversely, if you decrease the divisor to a lower value, the counter will increment more quickly, resulting in a shorter animation duration.
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
