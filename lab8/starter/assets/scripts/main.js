
// Usually we wouldn't do this, but making the canvas & context globally available here's easier for making this hands-on
let canvas, context, colorPickerElement;

// Step 3 Part 1/3
// Let's make a variable called counter and initialize its value to 0

let counter = 0;



/**
 * Function to run after the page successfully loads
 * We only want to use document.getElementById() after the browser finishes reading everything in index.html
 */
function pageLoaded() {

    // Get the canvas and a 2d drawing context
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // Get the hue slider element
    colorPickerElement = document.getElementById("color-picker");

    //
    // When the mouse moves...
    //

    /**
     * @param {MouseEvent} event
     */
    function mouseMoved(event) {
        // Step 3 Part 2/3
        // Every time the mouse moves, we increase the value of the counter by one

        counter += 1;



        /* Step 1
        Let's draw a circle at the position of the mouse cursor!

        When the user moves the mouse over the canvas, the browser runs this function.
        The function argument, event, is an object that contains information about the mouse position.

        You can get the position of the mouse from event.clientX and event.clientY -- these are X, Y
        coordinate numbers (in pixels) that correspond to the position of the mouse on screen.

        Try using console.log() to see these values.
        Since this function runs every time you move your mouse over the page, console.log() in this function will run multiple times too

        Use the fillCircle or strokeCircle functions, defined at the bottom of this file.
        They take two arguments, the first one is the x-coordinate and the second is the y-coordinate.
        */

        console.log(event.clientX);
        console.log(event.clientY);

        fillCircle(event.clientX, event.clientY, radiusFunction1(counter, counter, counter));
        strokeCircle(event.clientX, event.clientY, radiusFunction1(counter, counter, counter));



        // For Step 3 Part 3/3, you'll modify the code written for Step 1
        // Once you've done Step 3 part 1 & 2, check out functions radiusFunction at the bottom of the file.
        // Rather than drawing circles at a uniform radius, we can make its radius vary by position & time

        strokeCircle(event.clientX, event.clientY, radiusFunction2(counter, counter, counter));

        strokeCircle(event.clientX, event.clientY, radiusFunction3(counter, counter, counter));

        fillCircle(event.clientX, event.clientY, radiusFunction4(counter, counter, counter));


    }

    // Let the browser run mouseMoved() when the mouse moves on the canvas
    canvas.onmousemove = mouseMoved;

    //
    // When the user interacts with the slider...
    //

    /**
     * Handler function that runs when a new color is picked
     */
    function colorChanged() {
        // Step 2 Part 1/3
        /* In index.html, the <input> element is the color picker.
           The <input> element object in JavaScript has a property, .value
           So colorPickerElement.value contains the color code of the selected color.
           Store this value in a variable called color */

        let color = colorPickerElement.value;


        // Step 2 Part 2/3
        /* We have this variable called context, which
           is an object that stores information about how we are drawing things.

           This object has a property called fillStyle, which is a string that is the color.

           Set fillStyle property of context to our new color.
        */

        context.fillStyle = color;
        context.strokeStyle = color;

    }

    colorPickerElement.onchange = colorChanged;



    //
    // When the window resizes...
    //

    /**
     * Handler function that runs every time the window is resized
     */
    function windowResized() {
        // While setting the canvas width/height, the drawing is cleared
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        // We manually trigger a hue change because the fill/stroke color is cleared too
        colorChanged();
    }

    // We let the browser run windowResized() for us when the window size changes
    window.onresize = windowResized;
    // We manually trigger the window resize on page load
    windowResized();

}

// We let the browser run pageLoaded() for us when the page is loaded
window.onload = pageLoaded;

//
// A couple of functions that returns some funky radius, given the positions "x", "y" and "t" (time)
//

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction1(x, y, t) {
    return 20 * Math.abs(Math.sin(t / 100 * Math.PI));
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction2(x, y, t) {
    return 20 * Math.random();
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction3(x, y, t) {
    return t % 50;
}

/**
 * Returns some radius given the position and time
 *
 * @param {number} x
 * @param {number} y
 * @param {number} t
 */
function radiusFunction4(x, y, t) {
    return 20 * Math.abs(Math.sin(x / 100 * Math.PI) * Math.sin(y / 100 * Math.PI));
}




//
// A couple of useful functions to clear the canvas, and to draw some circles
//

/**
 * Clears the canvas
 */
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Fills a circle at the given location
 *
 * fillCircle(50, 40) draws a solid circle at (50, 40) with a (default) radius 20
 * fillCircle(20, 50, 10) draws a solid circle at (20, 50) with a radius 10
 *
 * @param {number} x
 * @param {number} y
 * @param {number?} radius
 */
function fillCircle(x, y, radius = 20) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}

/**
 * Outlines a circle at the given location
 *
 * strokeCircle(50, 40) outlines a circle at (50, 40) with a (default) radius 20
 * strokeCircle(20, 50, 10) outlines a circle at (20, 50) with a radius 10
 *
 * @param {number} x
 * @param {number} y
 * @param {number?} radius
 */
function strokeCircle(x, y, radius = 20) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
}
