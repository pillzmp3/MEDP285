// Define the global variables.
// The symmetry variable will define how many reflective sections the canvas
// is split into.
let symmetry = 5;

// The angle button will calculate the angle at which each section is rotated.
let angle = 90 / symmetry;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background ("#F74E4E")
}

function draw() {
  // Move the 0,0 coordinates of the canvas to the center, instead of in
  // the top left corner.
  translate(width / 2, height / 2);

  // If the cursor is within the limits of the canvas...
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    // Translate the current position and the previous position of the
    // cursor to the new coordinates set with the translate() function above.
    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    // And, if the mouse is pressed while in the canvas...
    if (mouseIsPressed === true) {
      // For every reflective section the canvas is split into, draw the cursor's
      // coordinates while pressed...
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        stroke("#C9E8FF");
        strokeWeight(2.5);
        line(lineStartX, lineStartY, lineEndX, lineEndY);

        // ... and reflect the line within the symmetry sections as well.
        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
    }
  }
}