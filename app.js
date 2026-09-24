let cardsArea = document.querySelector(".cards-area");
let cardsAreaBottom = document.querySelector(".functioniert .cards-area");
let leftArrBtn = document.querySelector(".leftArr");
let rightArrBtn = document.querySelector(".rightArr");
let leftArrBtn2 = document.querySelector(".paginationMobile  .leftArr");
let rightArrBtn2 = document.querySelector(".paginationMobile  .rightArr");

let step = 150;
let minPos = -1000;
let maxPos = 0;
let initial = 0;

rightArrBtn.addEventListener("click", () => {
  const next = initial - step;
  if (next >= minPos) {
    initial = next;
    cardsArea.style.transform = `translateX(${initial}px)`;
  }
});

leftArrBtn.addEventListener("click", () => {
  const next = initial + step;
  if (next <= maxPos) {
    initial = next;
    cardsArea.style.transform = `translateX(${initial}px)`;
  }
});



rightArrBtn2.addEventListener("click", () => {
    console.log("dasdsa");
    
  const next = initial - step;
  if (next >= minPos) {
    initial = next;
    cardsAreaBottom.style.transform = `translateX(${initial}px)`;
  }
});

leftArrBtn2.addEventListener("click", () => {
  const next = initial + step;
  if (next <= maxPos) {
    initial = next;
    cardsAreaBottom.style.transform = `translateX(${initial}px)`;
  }
});
