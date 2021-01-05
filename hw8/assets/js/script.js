function averageThreeNumbers(a, b, c) {
  let sum = a + b + c;
  let avg = sum / 3;
  return avg;
}

function createSentence(num, noun) {
  return "On average, a Berkeley student has " + num + " " + noun + "s.";
}

function getRandomNum(max) {
  return Math.random(0, max+1);
}

function toggleSongs() {
  let songsSecondHalf = document.getElementById("songs-second-half");
  songsSecondHalf.classList.toggle("hidden");

}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("toggle-button").onclick = toggleSongs;
});
