/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
// TODO: write your code here
import Lane from "./track.js";

const track = document.querySelector(".race-track table tbody");
const startBtn = document.querySelector("#start-btn");
const playerCount = document.querySelector("#p-count");
const laneLength = 30;
const controls = document.querySelector("#controls");
let start = 0;

const intialize = (laneInstance) => {
  laneInstance.lane = document.createElement("tr");
  laneInstance.lane.classList.add("lane");
  laneInstance.lane.innerHTML = laneInstance.html;
  track.appendChild(laneInstance.lane);
  laneInstance.racer.td = laneInstance.lane.children[0];
  laneInstance.racer.td.insertAdjacentHTML("beforeend", laneInstance.racer.html);
};

const racers = {};
const finishLines = [];

startBtn.addEventListener("click", (event) => {
  console.log("A");
  if (start === 0) {
    console.log(playerCount.value);
    switch (parseInt(playerCount.value, 10)) {
      case 6:
        const laneSix = new Lane(laneLength, "Gary", "images/squidward.png", " ");
        intialize(laneSix);
        racers.laneSix = laneSix;
        finishLines.push(laneSix.lane.children[laneLength - 1]);
        controls.innerText = `, SpaceBar for Squidward${controls.innerText}`;
      case 5:
        const laneFive = new Lane(laneLength, "Gary", "images/sandy.png", "ArrowRight");
        intialize(laneFive);
        racers.laneFive = laneFive;
        finishLines.push(laneFive.lane.children[laneLength - 1]);
        controls.innerText = `, Right Arrow for Sandy${controls.innerText}`;
      case 4:
        const laneFour = new Lane(laneLength, "Gary", "images/patrick.png", "p");
        intialize(laneFour);
        racers.laneFour = laneFour;
        finishLines.push(laneFour.lane.children[laneLength - 1]);
        controls.innerText = `, P - Patrick${controls.innerText}`;
      case 3:
        const laneThree = new Lane(laneLength, "Gary", "images/spongebob.png", "i");
        intialize(laneThree);
        racers.laneThree = laneThree;
        finishLines.push(laneThree.lane.children[laneLength - 1]);
        controls.innerText = `, I- Spongebob${controls.innerText}`;
      case 2:
        const laneTwo = new Lane(laneLength, "Rocky", "images/rocky.png", "t");
        intialize(laneTwo);
        racers.laneTwo = laneTwo;
        finishLines.push(laneTwo.lane.children[laneLength - 1]);
        controls.innerText = `, T- Rocky${controls.innerText}`;
      case 1:
        const laneOne = new Lane(laneLength, "Gary", "images/gary.png", "q");
        intialize(laneOne);
        racers.laneOne = laneOne;
        finishLines.push(laneOne.lane.children[laneLength - 1]);
        controls.innerText = `Controls: Press Q - Gary${controls.innerText}`;
      default:
        break;
    }
    start = 1;
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key;
  switch (key) {
    case "q":
      if (racers.laneOne.racer.move() === false) { alert("Gary Wins!"); }
      break;
    case "t":
      if (racers.laneTwo.racer.move() === false) { alert("Rocky Wins!"); }
      break;
    case "i":
      if (racers.laneThree.racer.move() === false) { alert("Spongebob Wins!"); }
      break;
    case "p":
      if (racers.laneFour.racer.move() === false) { alert("Patrick Wins!"); }
      break;
    case "ArrowRight":
      if (racers.laneFive.racer.move() === false) { alert("Sandy Wins!"); }
      break;
    case " ":
      if (racers.laneSix.racer.move() === false) { alert("Squidward Wins!"); }
      break;
    default:
      break;
  }
});
