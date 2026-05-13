let currentScene = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {

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
}