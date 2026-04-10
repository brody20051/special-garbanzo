import { saveBest, getBest, saveSettings, getSettings } from "./storage.js";

const treeContainer = document.getElementById("tree");
const startBtn = document.getElementById("startBtn");
const launchBtn = document.getElementById("launchBtn");
const resetBtn = document.getElementById("resetBtn");

const statusText = document.getElementById("status");
const timeDisplay = document.getElementById("time");
const bestDisplay = document.getElementById("best");

const form = document.getElementById("settingsForm");

let lights = [];
let startTime = null;
let greenLight = false;
let gameActive = false;

/* tree */
const treeData = [
  { type: "pre" },
  { type: "stage" },
  { type: "yellow" },
  { type: "yellow" },
  { type: "yellow" },
  { type: "green" }
];

function renderTree() {
  treeContainer.innerHTML = "";
  lights = [];

  treeData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("light");
    if (item.type === "yellow") div.classList.add("yellow");
    if (item.type === "green") div.classList.add("green");

    treeContainer.appendChild(div);
    lights.push(div);
  });
}

renderTree();

/* storage */
const best = getBest();
if (best) bestDisplay.textContent = parseFloat(best).toFixed(3);

const settings = getSettings();
if (settings) {
  document.getElementById("playerName").value = settings.name;
  document.getElementById("difficulty").value = settings.mode;
}

/* events */
startBtn.addEventListener("click", startGame);
launchBtn.addEventListener("click", handleLaunch);
resetBtn.addEventListener("click", resetGame);


form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = document.getElementById("playerName").value;
  const mode = document.getElementById("difficulty").value;

  saveSettings({ name, mode });

  alert("Settings Saved!");
});

/* logic */
function startGame() {
  resetLights();

  launchBtn.disabled = false;
  greenLight = false;
  gameActive = true;
  startTime = null;

  const delay = Math.random() * 2000 + 1000;

  setTimeout(() => lights[2].classList.add("active"), delay);

  const mode = document.getElementById("difficulty").value;

  if (mode === "pro") {
    setTimeout(goGreen, delay + 500);
  } else {
    setTimeout(() => lights[3].classList.add("active"), delay + 500);
    setTimeout(() => lights[4].classList.add("active"), delay + 1000);
    setTimeout(goGreen, delay + 1500);
  }
}

function goGreen() {
  lights[5].classList.add("active");
  greenLight = true;
  startTime = performance.now();
  statusText.textContent = "GO!!!";
}

function handleLaunch() {
  if (!gameActive) return;

  if (!greenLight) {
    statusText.textContent = "❌ RED LIGHT!";
    launchBtn.disabled = true;
    gameActive = false;
    return;
  }

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
  timeDisplay.textContent = "0.000";
  statusText.textContent = "Click Start";
  launchBtn.disabled = true;
}

function resetLights() {
  lights.forEach(l => l.classList.remove("active"));
}
