let gameState = "START";
let dialogueIndex = 0;

let stickers = [];
let selectedSticker = "🌸";

let stickerOptions = ["❤️", "⭐", "🌸", "🍀"];

let dialogues = [
    "'Today is Mother's day... but I don't have money to buy her a gift...'",
    "'I'll make her a greeting card instead!'",
    "'Mama always smiles when I draw for her.'",
    "'Let's go to my room and make something special!'"
];

let finalDialogues = [
    "'Happy Mother's day mom! I made this for you!'",
    "'Sweetie... this is so beautiful. I love it so much!'"
];

function setup() {
    createCanvas(800, 600);
    textFont("Georgia");
    smooth();
}

function draw() {

    background(255);

    if (gameState === "START") {
        startScreen();
    }

    else if (gameState === "SCENE_2") {
        scene2();
    }

    else if (gameState === "SCENE_3") {
        scene3();
    }

    else if (gameState === "SCENE_4") {
        scene4();
    }

    else if (gameState === "SCENE_5") {
        scene5();
    }

    else if (gameState === "END") {
        endScreen();
    }
}

function startScreen() {

    drawSoftBackground();
    drawFloatingHearts();

    textAlign(CENTER, CENTER);

    fill(60);
    textSize(56);

    text("Mother's Day 💖", width / 2, 180);

    fill(90);
    textSize(24);

    text(
        "A tiny story about love and handmade gifts",
        width / 2,
        250
    );

    fill(255, 180, 210);
    stroke(255);
    strokeWeight(2);

    rect(width / 2 - 120, 340, 240, 70, 20);

    noStroke();
    fill(40);

    textSize(30);
    text("CLICK TO START", width / 2, 376);

    fill(80);
    textSize(18);

    text(
        "Press K to continue dialogues",
        width / 2,
        470
    );
}

function scene2() {

    rectMode(CORNER);

    drawBackground();
    drawLivingRoom();

    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'rgba(0,0,0,0.15)';

    drawFurniture();

    drawingContext.shadowBlur = 0;

    drawCharacter(width / 2, 410);

    drawDialogueBox("Anna", dialogues[dialogueIndex]);
}

function scene3() {

    rectMode(CORNER);

    drawBackground();

    noStroke();
    fill(225, 200, 180);

    rect(0, 420, width, 180);

    fill(220, 180, 230, 170);
    ellipse(420, 510, 320, 110);

    drawingContext.shadowBlur = 12;
    drawingContext.shadowColor = 'rgba(0,0,0,0.12)';

    fill(220, 185, 220);
    rect(500, 310, 220, 95, 20);

    fill(255);
    rect(520, 285, 180, 40, 12);

    fill(170, 120, 90);
    rect(110, 320, 180, 90, 15);

    fill(255, 230, 150);
    ellipse(220, 275, 50);

    drawingContext.shadowBlur = 0;

    drawCharacter(width / 2, 410);

    drawDialogueBox(
        "Anna",
        "Okay! Time to make the prettiest greeting card ever!"
    );
}

function scene4() {

    rectMode(CORNER);

    background(255, 240, 245);

    let cardX = 230;
    let cardY = 45;
    let cardW = 340;
    let cardH = 440;

    noStroke();

    fill(0, 0, 0, 20);
    rect(cardX + 8, cardY + 8, cardW, cardH, 15);

    fill(255);

    stroke(230);
    strokeWeight(2);

    rect(cardX, cardY, cardW, cardH, 15);

    noStroke();

    fill(255, 120, 170);

    textAlign(CENTER);
    textSize(24);

    text("Happy Mother's Day Mom 💖", width / 2, 90);

    fill(120, 80, 120);

    textSize(18);

    text(
        "Thank you for loving me,\nhelping me, and always making me smile.\n\nYou are the best mom ever 💕",
        width / 2,
        170
    );

    textSize(30);

    for (let s of stickers) {
        text(s.type, s.x, s.y);
    }

    fill(245);
    stroke(220);

    rect(140, 520, 520, 60, 25);

    for (let i = 0; i < stickerOptions.length; i++) {

        let x = 250 + i * 90;

        if (selectedSticker === stickerOptions[i]) {
            fill(255, 180, 210);
            ellipse(x, 550, 55);
        }

        noStroke();
        fill(0);

        textSize(32);
        text(stickerOptions[i], x, 560);
    }

    let hover =
        mouseX > 650 &&
        mouseX < 760 &&
        mouseY > 20 &&
        mouseY < 70;

    fill(hover ? color(140, 255, 170) : color(170, 255, 190));

    stroke(255);

    rect(650, 20, 110, 50, 15);

    noStroke();
    fill(50);

    textSize(18);

    text("DONE", 705, 52);

    drawInstruction(
        "Click emojis to select • Click card to decorate"
    );
}

function scene5() {

    rectMode(CORNER);

    drawBackground();
    drawLivingRoom();

    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'rgba(0,0,0,0.15)';

    drawFurniture();

    drawingContext.shadowBlur = 0;

    drawMom(width / 2 - 90, 410);
    drawCharacter(width / 2 + 90, 410);

    drawDialogueBox("Mom", finalDialogues[dialogueIndex]);
}

function endScreen() {

    rectMode(CORNER);

    background(40, 20, 50);

    textAlign(CENTER, CENTER);

    fill(255);
    textSize(60);

    text("THE END 💖", width / 2, height / 2 - 20);

    fill(255, 220, 240);
    textSize(20);

    text("Press R to restart", width / 2, height / 2 + 50);
}

function drawSoftBackground() {

    for (let y = 0; y < height; y++) {

        let c = lerpColor(
            color(255, 215, 230),
            color(190, 225, 255),
            y / height
        );

        stroke(c);
        line(0, y, width, y);
    }
}

function drawBackground() {
    drawSoftBackground();
}

function drawLivingRoom() {

    noStroke();

    fill(220, 190, 160);
    rect(0, 420, width, 180);

    fill(210, 170, 230, 180);
    ellipse(400, 510, 340, 120);

    stroke(150, 120, 90, 80);
    line(0, 420, width, 420);

    noStroke();
}

function drawFurniture() {

    fill(150, 100, 80);
    rect(100, 330, 240, 90, 20);

    fill(175, 120, 95);
    rect(100, 380, 240, 60, 20);

    fill(255, 225, 210);

    ellipse(160, 360, 45);
    ellipse(230, 360, 45);

    fill(185, 225, 255);
    rect(520, 110, 180, 140, 12);

    stroke(255, 255, 255, 180);
    strokeWeight(3);

    line(610, 110, 610, 250);
    line(520, 180, 700, 180);

    noStroke();

    fill(255, 160, 190);

    rect(500, 100, 25, 170, 12);
    rect(695, 100, 25, 170, 12);

    fill(120, 80, 60);
    rect(410, 370, 160, 55, 15);

    fill(255, 210, 220);
    ellipse(490, 355, 28, 40);

    fill(120, 210, 140);
    rect(487, 325, 5, 28);
}

function drawCharacter(x, y) {

    push();

    translate(x, y);

    let bob = sin(frameCount * 0.05) * 2;

    noStroke();

    fill(0, 0, 0, 35);
    ellipse(0, 82, 60, 15);

    fill(255, 180, 210);
    triangle(-30, 40, 30, 40, 0, -40 + bob);

    fill(255, 225, 205);
    rect(-5, -55 + bob, 10, 10, 3);

    ellipse(0, -80 + bob, 60, 70);

    fill(50, 25, 15);
    arc(0, -85 + bob, 68, 78, PI, TWO_PI);

    ellipse(-28, -75 + bob, 18, 35);
    ellipse(28, -75 + bob, 18, 35);

    fill(0);

    ellipse(-10, -82 + bob, 5, 7);
    ellipse(10, -82 + bob, 5, 7);

    fill(255, 140, 170, 120);

    ellipse(-18, -70 + bob, 10, 6);
    ellipse(18, -70 + bob, 10, 6);

    pop();
}

function drawMom(x, y) {

    push();

    translate(x, y);

    fill(180, 120, 220);
    triangle(-35, 45, 35, 45, 0, -40);

    fill(255, 225, 205);
    ellipse(0, -80, 65, 75);

    fill(60, 30, 20);
    arc(0, -90, 75, 85, PI, TWO_PI);

    fill(0);

    ellipse(-12, -82, 5, 7);
    ellipse(12, -82, 5, 7);

    pop();
}

function drawDialogueBox(name, txt) {

    rectMode(CORNER);

    fill(255, 255, 255, 238);

    stroke(255);
    strokeWeight(2);

    rect(40, 445, 720, 130, 20);

    fill(255, 185, 215);
    rect(60, 420, 120, 35, 12);

    noStroke();
    fill(40);

    textAlign(LEFT, CENTER);
    textSize(16);

    text(name, 82, 437);

    fill(30);

    textSize(20);
    textAlign(LEFT, TOP);

    text(txt, 70, 472, 650, 80);

    fill(80);

    textSize(13);
    textAlign(RIGHT, CENTER);

    text("Press K to continue", 735, 555);
}

function drawInstruction(txt) {

    rectMode(CORNER);

    fill(0, 120);
    rect(240, 15, 320, 35, 12);

    fill(255);

    noStroke();

    textAlign(CENTER, CENTER);
    textSize(14);

    text(txt, 400, 33);
}

function drawFloatingHearts() {

    textSize(24);

    fill(255, 130, 180);

    text("💖", 150, 130 + sin(frameCount * 0.05) * 10);
    text("🌸", 650, 160 + sin(frameCount * 0.04) * 8);
    text("⭐", 200, 450 + sin(frameCount * 0.03) * 12);
    text("💖", 600, 420 + sin(frameCount * 0.05) * 10);
}

function mousePressed() {

    if (gameState === "START") {
        gameState = "SCENE_2";
    }

    else if (gameState === "SCENE_4") {

        for (let i = 0; i < stickerOptions.length; i++) {

            let x = 250 + i * 90;

            if (dist(mouseX, mouseY, x, 550) < 30) {
                selectedSticker = stickerOptions[i];
            }
        }

        if (
            mouseX > 650 &&
            mouseX < 760 &&
            mouseY > 20 &&
            mouseY < 70
        ) {

            gameState = "SCENE_5";
            dialogueIndex = 0;
        }

        if (
            mouseX > 230 &&
            mouseX < 570 &&
            mouseY > 45 &&
            mouseY < 485
        ) {

            stickers.push({
                x: mouseX,
                y: mouseY,
                type: selectedSticker
            });
        }
    }
}

function keyPressed() {

    if (key === "k" || key === "K") {

        if (gameState === "SCENE_2") {

            if (dialogueIndex < dialogues.length - 1) {
                dialogueIndex++;
            }

            else {
                gameState = "SCENE_3";
            }
        }

        else if (gameState === "SCENE_3") {
            gameState = "SCENE_4";
        }

        else if (gameState === "SCENE_5") {

            if (dialogueIndex < finalDialogues.length - 1) {
                dialogueIndex++;
            }

            else {
                gameState = "END";
            }
        }
    }

    if (
        gameState === "END" &&
        (key === "r" || key === "R")
    ) {

        gameState = "START";
        dialogueIndex = 0;
        stickers = [];
    }
}