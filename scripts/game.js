
import { saveBest, getBest } from "./storage.js";

const startBtn = document.getElementById("startBtn");
const launchBtn = document.getElementById("launchBtn");
const resetBtn = document.getElementById("resetBtn");

const statusText = document.getElementById("status");
const timeDisplay = document.getElementById("time");
const bestDisplay = document.getElementById("best");

const yellows = document.querySelectorAll(".yellow");
const green = document.querySelector(".green");

let startTime = null;
let greenLight = false;
let gameActive = false;

// Load best score
const best = getBest();
if (best) bestDisplay.textContent = parseFloat(best).toFixed(3);

// Random delay
function randomDelay() {
  return Math.random() * 2000 + 1000;
}

// Event listeners
startBtn.addEventListener("click", startGame);
launchBtn.addEventListener("click", handleLaunch);
resetBtn.addEventListener("click", resetGame);

function startGame() {
  resetLights();

  statusText.textContent = "Stage... Get Ready";
  launchBtn.disabled = false;

  greenLight = false;
  gameActive = true;
  startTime = null;

  let delay = randomDelay();

  setTimeout(() => activateLight(0), delay);
  setTimeout(() => activateLight(1), delay + 500);
  setTimeout(() => activateLight(2), delay + 1000);
  setTimeout(goGreen, delay + 1500);
}

function activateLight(index) {
  yellows[index].classList.add("active");
}

function goGreen() {
  green.classList.add("active");
  greenLight = true;
  startTime = performance.now();
  statusText.textContent = "GO!!! HIT LAUNCH!";
}

function handleLaunch() {
  if (!gameActive) return;

  // ❌ Early launch
  if (!greenLight) {
    statusText.textContent = "❌ RED LIGHT!";
    timeDisplay.textContent = "0.000";
    launchBtn.disabled = true;
    gameActive = false;
    return;
  }

  // ✅ Valid reaction
  const reaction = (performance.now() - startTime) / 1000;

  timeDisplay.textContent = reaction.toFixed(3);

  let best = getBest();
  if (!best || reaction < best) {
    saveBest(reaction);
    bestDisplay.textContent = reaction.toFixed(3);
  }

  statusText.textContent = "✅ Good Launch!";
  launchBtn.disabled = true;
  gameActive = false;
}

function resetGame() {
  resetLights();

  statusText.textContent = "Click Start";
  timeDisplay.textContent = "0.000";

  launchBtn.disabled = true;

  greenLight = false;
  gameActive = false;
  startTime = null;
}

function resetLights() {
  yellows.forEach(light => light.classList.remove("active"));
  green.classList.remove("active");
}

// Easter Egg 👀
console.log("💡 Type 'instantLaunch()' in console...");

window.instantLaunch = function () {
  goGreen();
};
