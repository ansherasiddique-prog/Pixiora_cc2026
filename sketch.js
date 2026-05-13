let currentScene = 1;

function setup() {
<<<<<<< HEAD
  createCanvas(800, 600);
}

function draw() {
  background(220);

  textSize(32);
  text("Hello Visual Novel", 200, 300);
=======
    createCanvas(800, 600);
}

function draw() {

<<<<<<< HEAD
    textSize(32);
    text("Hello Visual Novel", 200, 300);
>>>>>>> e1e805c (Initial p5.js setup)
=======
    if (currentScene === 1) {
        scene1();
    }

    else if (currentScene === 2) {
        scene2();
    }

    else if (currentScene === 3) {
        scene3();
    }

    else if (currentScene === 4) {
        scene4();
    }

    else if (currentScene === 5) {
        scene5();
    }

    else if (currentScene === 6) {
        scene6();
    }
>>>>>>> b80ddc0 (Added scene structure-took help from AI- Prompted:'Tell me what changes to i make to my index and sketch files to combine these scenes sort of.')
}