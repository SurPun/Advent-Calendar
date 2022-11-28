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

// Delete Local Storage Function
const delStorage = function () {
  window.localStorage.clear();
  location.reload();
};

// Get CardElements ---
const getCard = function (num) {
  const card = document.getElementById(`card-${num}`);
  return card;
};

// Card - 1 -----------------------------------------------
let initialValue1 = localStorage.getItem(`card-1`);
const card1 = getCard(1);

if (initialValue1) {
  card1.style.position = initialValue1;
}

function cookies1() {
  if (card1.style.position === "") {
    card1.style.position = "absolute";
  }

  // set the new display value if it's changed
  else localStorage.setItem(`card-1`, card1.style.position);
  console.log(localStorage.setItem);
}

// Card - 2 -----------------------------------------------
const card2 = getCard(2);
let initialValue2 = localStorage.getItem(`card-2`);
if (initialValue2) {
  card2.style.position = initialValue2;
}

function cookies2() {
  if (
    card2.style.position === "" &&
    currentDate.value >= `2022-12-02` &&
    dayHeader.innerText >= `2022-12-02`
  ) {
    card2.style.position = "absolute";
  }

  localStorage.setItem(`card-2`, card2.style.position);
}

// Card - 3 -----------------------------------------------
const card3 = getCard(3);
let initialValue3 = localStorage.getItem(`card-3`);
if (initialValue3) {
  card3.style.position = initialValue3;
}

function cookies3() {
  if (
    card3.style.position === "" &&
    currentDate.value >= `2022-12-03` &&
    dayHeader.innerText >= `2022-12-03`
  ) {
    card3.style.position = "absolute";
  }

  localStorage.setItem(`card-3`, card3.style.position);
}

// Card - 4 -----------------------------------------------
const card4 = getCard(4);
let initialValue4 = localStorage.getItem(`card-4`);
if (initialValue4) {
  card4.style.position = initialValue4;
}

function cookies4() {
  if (
    card4.style.position === "" &&
    currentDate.value >= `2022-12-04` &&
    dayHeader.innerText >= `2022-12-04`
  ) {
    card4.style.position = "absolute";
  }

  localStorage.setItem(`card-4`, card4.style.position);
}

// Card - 5 -----------------------------------------------
const card5 = getCard(5);
let initialValue5 = localStorage.getItem(`card-5`);
if (initialValue5) {
  card5.style.position = initialValue5;
}

function cookies5() {
  if (
    card5.style.position === "" &&
    currentDate.value >= `2022-12-05` &&
    dayHeader.innerText >= `2022-12-05`
  ) {
    card5.style.position = "absolute";
  }

  localStorage.setItem(`card-5`, card5.style.position);
}

// Card - 6 -----------------------------------------------
const card6 = getCard(6);
let initialValue6 = localStorage.getItem(`card-6`);
if (initialValue6) {
  card6.style.position = initialValue6;
}

function cookies6() {
  if (
    card6.style.position === "" &&
    currentDate.value >= `2022-12-06` &&
    dayHeader.innerText >= `2022-12-06`
  ) {
    card6.style.position = "absolute";
  }

  localStorage.setItem(`card-6`, card6.style.position);
}

// Card - 7 -----------------------------------------------
const card7 = getCard(7);
let initialValue7 = localStorage.getItem(`card-7`);
if (initialValue7) {
  card7.style.position = initialValue7;
}

function cookies7() {
  if (
    card7.style.position === "" &&
    currentDate.value >= `2022-12-07` &&
    dayHeader.innerText >= `2022-12-07`
  ) {
    card7.style.position = "absolute";
  }

  localStorage.setItem(`card-7`, card7.style.position);
}

// Card - 8 -----------------------------------------------
const card8 = getCard(8);
let initialValue8 = localStorage.getItem(`card-8`);
if (initialValue8) {
  card8.style.position = initialValue8;
}

function cookies8() {
  if (
    card8.style.position === "" &&
    currentDate.value >= `2022-12-08` &&
    dayHeader.innerText >= `2022-12-08`
  ) {
    card8.style.position = "absolute";
  }

  localStorage.setItem(`card-8`, card8.style.position);
}

// Card - 9 -----------------------------------------------
const card9 = getCard(9);
let initialValue9 = localStorage.getItem(`card-9`);
if (initialValue9) {
  card9.style.position = initialValue9;
}

function cookies9() {
  if (
    card9.style.position === "" &&
    currentDate.value >= `2022-12-09` &&
    dayHeader.innerText >= `2022-12-09`
  ) {
    card9.style.position = "absolute";
  }

  localStorage.setItem(`card-9`, card9.style.position);
}

// Card - 10 -----------------------------------------------
const card10 = getCard(10);
let initialValue10 = localStorage.getItem(`card-10`);
if (initialValue10) {
  card10.style.position = initialValue10;
}

function cookies10() {
  if (
    card10.style.position === "" &&
    currentDate.value >= `2022-12-010` &&
    dayHeader.innerText >= `2022-12-010`
  ) {
    card10.style.position = "absolute";
  }

  localStorage.setItem(`card-10`, card10.style.position);
}

// Card - 11 -----------------------------------------------
const card11 = getCard(11);
let initialValue11 = localStorage.getItem(`card-11`);
if (initialValue11) {
  card11.style.position = initialValue11;
}

function cookies11() {
  if (
    card11.style.position === "" &&
    currentDate.value >= `2022-12-011` &&
    dayHeader.innerText >= `2022-12-011`
  ) {
    card11.style.position = "absolute";
  }

  localStorage.setItem(`card-11`, card11.style.position);
}

// Card - 12 -----------------------------------------------
const card12 = getCard(12);
let initialValue12 = localStorage.getItem(`card-12`);
if (initialValue12) {
  card12.style.position = initialValue12;
}

function cookies12() {
  if (
    card12.style.position === "" &&
    currentDate.value >= `2022-12-012` &&
    dayHeader.innerText >= `2022-12-012`
  ) {
    card12.style.position = "absolute";
  }

  localStorage.setItem(`card-12`, card12.style.position);
}

// Card - 13 -----------------------------------------------
const card13 = getCard(13);
let initialValue13 = localStorage.getItem(`card-13`);
if (initialValue13) {
  card13.style.position = initialValue13;
}

function cookies13() {
  if (
    card13.style.position === "" &&
    currentDate.value >= `2022-12-013` &&
    dayHeader.innerText >= `2022-12-013`
  ) {
    card13.style.position = "absolute";
  }

  localStorage.setItem(`card-13`, card13.style.position);
}

// Card - 14 -----------------------------------------------
const card14 = getCard(14);
let initialValue14 = localStorage.getItem(`card-14`);
if (initialValue14) {
  card14.style.position = initialValue14;
}

function cookies14() {
  if (
    card14.style.position === "" &&
    currentDate.value >= `2022-12-014` &&
    dayHeader.innerText >= `2022-12-014`
  ) {
    card14.style.position = "absolute";
  }

  localStorage.setItem(`card-14`, card14.style.position);
}

// Card - 15 -----------------------------------------------
const card15 = getCard(15);
let initialValue15 = localStorage.getItem(`card-15`);
if (initialValue15) {
  card15.style.position = initialValue15;
}

function cookies15() {
  if (
    card15.style.position === "" &&
    currentDate.value >= `2022-12-015` &&
    dayHeader.innerText >= `2022-12-015`
  ) {
    card15.style.position = "absolute";
  }

  localStorage.setItem(`card-15`, card15.style.position);
}

// Card - 16 -----------------------------------------------
const card16 = getCard(16);
let initialValue16 = localStorage.getItem(`card-16`);
if (initialValue16) {
  card16.style.position = initialValue16;
}

function cookies16() {
  if (
    card16.style.position === "" &&
    currentDate.value >= `2022-12-016` &&
    dayHeader.innerText >= `2022-12-016`
  ) {
    card16.style.position = "absolute";
  }

  localStorage.setItem(`card-16`, card16.style.position);
}

// Card - 17 -----------------------------------------------
const card17 = getCard(17);
let initialValue17 = localStorage.getItem(`card-17`);
if (initialValue17) {
  card17.style.position = initialValue17;
}

function cookies17() {
  if (
    card17.style.position === "" &&
    currentDate.value >= `2022-12-017` &&
    dayHeader.innerText >= `2022-12-017`
  ) {
    card17.style.position = "absolute";
  }

  localStorage.setItem(`card-17`, card17.style.position);
}

// Card - 18 -----------------------------------------------
const card18 = getCard(18);
let initialValue18 = localStorage.getItem(`card-18`);
if (initialValue18) {
  card18.style.position = initialValue18;
}

function cookies18() {
  if (
    card18.style.position === "" &&
    currentDate.value >= `2022-12-018` &&
    dayHeader.innerText >= `2022-12-018`
  ) {
    card18.style.position = "absolute";
  }

  localStorage.setItem(`card-18`, card18.style.position);
}

// Card - 19 -----------------------------------------------
const card19 = getCard(19);
let initialValue19 = localStorage.getItem(`card-19`);
if (initialValue19) {
  card19.style.position = initialValue19;
}

function cookies19() {
  if (
    card19.style.position === "" &&
    currentDate.value >= `2022-12-019` &&
    dayHeader.innerText >= `2022-12-019`
  ) {
    card19.style.position = "absolute";
  }

  localStorage.setItem(`card-19`, card19.style.position);
}

// Card - 20 -----------------------------------------------
const card20 = getCard(20);
let initialValue20 = localStorage.getItem(`card-20`);
if (initialValue20) {
  card20.style.position = initialValue20;
}

function cookies20() {
  if (
    card20.style.position === "" &&
    currentDate.value >= `2022-12-020` &&
    dayHeader.innerText >= `2022-12-020`
  ) {
    card20.style.position = "absolute";
  }

  localStorage.setItem(`card-20`, card20.style.position);
}

// Card - 21 -----------------------------------------------
const card21 = getCard(21);
let initialValue21 = localStorage.getItem(`card-21`);
if (initialValue21) {
  card21.style.position = initialValue21;
}

function cookies21() {
  if (
    card21.style.position === "" &&
    currentDate.value >= `2022-12-021` &&
    dayHeader.innerText >= `2022-12-021`
  ) {
    card21.style.position = "absolute";
  }

  localStorage.setItem(`card-21`, card21.style.position);
}

// Card - 22 -----------------------------------------------
const card22 = getCard(22);
let initialValue22 = localStorage.getItem(`card-22`);
if (initialValue22) {
  card22.style.position = initialValue22;
}

function cookies22() {
  if (
    card22.style.position === "" &&
    currentDate.value >= `2022-12-022` &&
    dayHeader.innerText >= `2022-12-022`
  ) {
    card22.style.position = "absolute";
  }

  localStorage.setItem(`card-22`, card22.style.position);
}

// Card - 23 -----------------------------------------------
const card23 = getCard(23);
let initialValue23 = localStorage.getItem(`card-23`);
if (initialValue23) {
  card23.style.position = initialValue23;
}

function cookies23() {
  if (
    card23.style.position === "" &&
    currentDate.value >= `2022-12-023` &&
    dayHeader.innerText >= `2022-12-023`
  ) {
    card23.style.position = "absolute";
  }

  localStorage.setItem(`card-23`, card23.style.position);
}

// Card - 24 -----------------------------------------------
const card24 = getCard(24);
let initialValue24 = localStorage.getItem(`card-24`);
if (initialValue24) {
  card24.style.position = initialValue24;
}

function cookies24() {
  if (
    card24.style.position === "" &&
    currentDate.value >= `2022-12-024` &&
    dayHeader.innerText >= `2022-12-024`
  ) {
    card24.style.position = "absolute";
  }

  localStorage.setItem(`card-24`, card24.style.position);
}

// Card - 25 -----------------------------------------------
const card25 = getCard(25);
let initialValue25 = localStorage.getItem(`card-25`);
if (initialValue25) {
  card25.style.position = initialValue25;
}

function cookies25() {
  if (
    card25.style.position === "" &&
    currentDate.value >= `2022-12-025` &&
    dayHeader.innerText >= `2022-12-025`
  ) {
    card25.style.position = "absolute";
  }

  localStorage.setItem(`card-25`, card25.style.position);
}
