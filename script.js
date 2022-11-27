/*----- Header -----*/
const currentDate = document.getElementById("currentDate");
const dayHeader = document.getElementById("dayHeader");

// Display Date
dayHeader.innerHTML = `${currentDate.value}`;
// Select Date
function selectDate() {
  dayHeader.innerHTML = `${currentDate.value}`;
}

/*----- Main -----*/
const handleClick = function (index) {
  for (let i = 1; i < 10; i++) {
    // Reveal Card
    if (
      index === i &&
      currentDate.value >= `2022-12-0${i}` &&
      dayHeader.innerText >= `2022-12-0${i}`
    ) {
      document.querySelector(`.card-${i}`).style.position = "absolute";
    }
  }

  for (let i = 10; i < 20; i++) {
    if (
      index === i &&
      currentDate.value >= `2022-12-${i}` &&
      dayHeader.innerText >= `2022-12-${i}`
    ) {
      document.querySelector(`.card-${i}`).style.position = "absolute";
    }
  }

  for (let i = 20; i < 26; i++) {
    if (
      index === i &&
      currentDate.value >= `2022-12-${i}` &&
      dayHeader.innerText >= `2022-12-${i}`
    ) {
      document.querySelector(`.card-${i}`).style.position = "absolute";
    }
  }
};
