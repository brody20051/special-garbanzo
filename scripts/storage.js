export function saveBest(time) {
  localStorage.setItem("bestTime", time);
}

export function getBest() {
  return localStorage.getItem("bestTime");
}

export function saveSettings(settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}

export function getSettings() {
  return JSON.parse(localStorage.getItem("settings"));
}
