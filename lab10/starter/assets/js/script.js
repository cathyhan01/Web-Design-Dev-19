// We want it so that when we press a key, it plays its corresponding sound.
// Therefore, we have three arrays, such that, their indexes match the sound we want to play, and a color we want to flash.
let keys = ["1", "2", "3", "q", "w", "e", "a", "s", "d"]
let sounds = [
  'brass-sound',
  'bit-sound',
  'piano-sound',
  'kick-sound',
  'hat-sound',
  'snare-sound',
  'bass-sound',
  'lokick-sound',
  'esnare-sound'
]
let colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'lightblue',
  'purple',
  'lightcoral',
  'pink'
]

document.onkeydown = function(event) {
    // Our event handler is a function takes in an input event.
    // Try console logging it here to see what it looks like!
    // Notably, look at what "key" value is inside our event.
    console.log(event);
    console.log(event.key); // this is the value we want to use!
    // array.indexOf(element) is a function that finds the index of the element that we pass in.
    // for example, if we have:
    // list = ['apples', 'bananas', 'oranges'];
    // list.indexOf('apples') => returns 0

    // We want to use array.IndexOf(element) on our array called keys, to find the index of
    // the element of our key pressed.

    // YOUR CODE HERE
    let keyIndex = keys.indexOf(event.key);
    let soundId = sounds[keyIndex]; // change this value!
    let colorId = colors[keyIndex]; // change this value!

    if (soundId) {
      //if theres an element sound with an ID sound
      let sound = document.getElementById(soundId); // select the sound tag element with id soundId
      let tile = document.getElementById(soundId + "tile"); // select the element inside our .grid with id soundId + tile

      // YOUR CODE HERE
      tile.style.backgroundColor = colorId;
      sound.currentTime = 0;
      sound.play();
    }
}

document.onkeyup = function(event){
  // YOUR CODE HERE
  let gridCells = document.getElementsByClassName('grid-cell');
  for(let i = 0; i < gridCells.length; i++) {
    gridCells[i].style.backgroundColor = '#333333';
  }
}
