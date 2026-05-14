let bgMusic, gameState = "START", dialogueIndex = 0;
let stickers = [], selectedSticker = "🌸";
let stickerOptions = ["❤️", "⭐", "🌸", "🍀"];
let girlX = -120;

let dialogues = [
    "'Today is Mother's day... but I don't have money to buy her a gift...'",
    "'I'll make her a greeting card instead!'",
    "'Mama always smiles when I draw for her.'",
    "'Let's go to my room and make something special!'"
];

let finalDialogues = [
    "'Happy Mother's day mom! I made this for you!'",
    "'Sweetie... Thank you! You made this for me? It is so beautiful.'",
    "'I love you so much!'",
    "'I love you Mumma!'"
];

function preload() {
    bgMusic = loadSound("music.mp3");
}

function setup() {
    createCanvas(800, 600);
    bgMusic.setVolume(0.3);
    textFont("Georgia");
    smooth();
}

function draw() {
    background(255);

    if (gameState === "START") startScreen();
    else if (gameState === "SCENE_2") scene2();
    else if (gameState === "SCENE_3") scene3();
    else if (gameState === "SCENE_4") scene4();
    else if (gameState === "SCENE_5") scene5();
    else if (gameState === "END") endScreen();
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
    text("A tiny story about love and handmade gifts", width / 2, 250);

    fill(255, 180, 210);
    stroke(255);
    strokeWeight(2);

    rect(width / 2 - 120, 340, 240, 70, 20);

    noStroke();
    fill(40);

    textSize(25);
    text("CLICK TO START", width / 2, 376);
}

function scene2() {

    if (bgMusic.isPlaying()) bgMusic.stop();

    drawBackground();
    drawLivingRoom();
    drawRoomLabel("Living Room");

    shadowOn();
    drawFurniture();
    shadowOff();

    if (girlX < width / 2) girlX += 2;

    drawCharacter(girlX, 410);

    if (girlX >= 120 && dialogueIndex === 0) {
        fill(255, 255, 255, 220);
        noStroke();

        rect(30, 70, 320, 110, 15);

        fill(50);
        textAlign(LEFT, TOP);
        textSize(15);

        text(
            "This is Anna.\nShe is an 8-year-old girl who loves drawing,\nmaking cute handmade gifts, and seeing\nher mother smile.",
            50, 92
        );
    }

    if (girlX >= width / 2)
        drawDialogueBox("Anna", dialogues[dialogueIndex]);
    else {
        fill(50);
        textAlign(CENTER);
        textSize(24);

        text("Anna is walking into the room...", width / 2, 80);
    }
}

function scene3() {
    drawBackground();
    drawRoomLabel("Anna's Room");

    noStroke();

    fill(225, 200, 180);
    rect(0, 420, width, 180);

    fill(220, 180, 230, 170);
    ellipse(420, 510, 320, 110);

    shadowOn();

    fill(220, 185, 220);
    rect(500, 310, 220, 95, 20);

    fill(255);
    rect(520, 285, 180, 40, 12);

    fill(170, 120, 90);
    rect(110, 320, 180, 90, 15);

    fill(255, 230, 150);
    ellipse(220, 275, 50);

    shadowOff();

    if (girlX > width / 2) girlX -= 2;

    drawCharacter(girlX, 410);

    if (girlX > width / 2) {
        fill(50);
        textAlign(CENTER);
        textSize(24);

        text("Anna walks into her room...", width / 2, 80);
    } else {
        drawDialogueBox(
            "Anna",
            "Okay! Time to make the prettiest greeting card ever!"
        );
    }
}

function scene4() {
    background(255, 240, 245);

    drawRoomLabel("Anna's Room");

    let x = 230, y = 45, w = 340, h = 440;

    noStroke();

    fill(0, 0, 0, 20);
    rect(x + 8, y + 8, w, h, 15);

    fill(255);
    stroke(230);
    strokeWeight(2);

    rect(x, y, w, h, 15);

    noStroke();

    fill(255, 120, 170);

    textAlign(CENTER);
    textSize(24);

    text("Happy Mother's Day Mom 💖", width / 2, 90);

    fill(120, 80, 120);
    textSize(18);

    text(
        "Thank you for loving me,\nhelping me, and always making me smile.\n\nYou are the best mom ever 💕",
        width / 2, 170
    );

    textSize(30);

    for (let s of stickers)
        text(s.type, s.x, s.y);

    fill(245);
    stroke(220);

    rect(140, 520, 520, 60, 25);

    for (let i = 0; i < stickerOptions.length; i++) {
        let sx = 250 + i * 90;

        if (selectedSticker === stickerOptions[i]) {
            fill(255, 180, 210);
            ellipse(sx, 550, 55);
        }

        noStroke();
        fill(0);

        textSize(32);
        text(stickerOptions[i], sx, 560);
    }

    fill(mouseX > 650 && mouseX < 760 && mouseY > 20 && mouseY < 70
        ? color(140, 255, 170)
        : color(170, 255, 190));

    stroke(255);
    rect(650, 20, 110, 50, 15);

    noStroke();
    fill(50);

    textSize(18);
    text("DONE", 705, 52);

    drawInstruction("Click to decorate • C = clear • U = undo");
}

function scene5() {
    drawBackground();
    drawLivingRoom();
    drawRoomLabel("Living Room");

    shadowOn();
    drawFurniture();
    shadowOff();

    drawMom(width / 2 - 90, 410);
    drawCharacter(width / 2 + 90, 410);

    drawDialogueBox("Mom", finalDialogues[dialogueIndex]);
}

function endScreen() {
    background(40, 20, 50);

    textAlign(CENTER, CENTER);

    fill(255);
    textSize(60);

    text("THE END 💖", width / 2, height / 2 - 20);

    fill(255, 220, 240);
    textSize(20);

    text("Press R to restart", width / 2, height / 2 + 50);
}

function shadowOn() {
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'rgba(0,0,0,0.15)';
}

function shadowOff() {
    drawingContext.shadowBlur = 0;
}

function drawRoomLabel(name) {
    noStroke();

    fill(255, 255, 255, 190);
    rect(20, 15, 150, 35, 12);

    fill(60);

    textAlign(CENTER, CENTER);
    textSize(16);

    text(name, 95, 33);
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

    let bob = sin(frameCount * 0.1) * 2;

    noStroke();

    fill(0, 0, 0, 35);
    ellipse(0, 82, 60, 15);

    stroke(60);
    strokeWeight(4);

    let legSwing = sin(frameCount * 0.15) * 6;

    line(-10, 40, -10 + legSwing, 70);
    line(10, 40, 10 - legSwing, 70);

    noStroke();

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

    noFill();

    stroke(80, 40, 40);
    strokeWeight(2);

    arc(0, -65, 22, 12, 0, PI);

    pop();
}

function drawDialogueBox(name, txt) {
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

        bgMusic.loop();

        gameState = "SCENE_2";
        girlX = -120;
    }

    else if (gameState === "SCENE_4") {

        for (let i = 0; i < stickerOptions.length; i++) {
            let x = 250 + i * 90;

            if (dist(mouseX, mouseY, x, 550) < 30)
                selectedSticker = stickerOptions[i];
        }

        if (
            mouseX > 650 && mouseX < 760 &&
            mouseY > 20 && mouseY < 70
        ) {
            gameState = "SCENE_5";
            dialogueIndex = 0;
        }

        if (
            mouseX > 230 && mouseX < 570 &&
            mouseY > 45 && mouseY < 485
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

        if (gameState === "SCENE_2" && girlX >= width / 2) {

            if (dialogueIndex < dialogues.length - 1)
                dialogueIndex++;
            else {
                gameState = "SCENE_3";
                girlX = width + 120;
            }
        }

        else if (gameState === "SCENE_3")
            gameState = "SCENE_4";

        else if (gameState === "SCENE_5") {

            if (dialogueIndex < finalDialogues.length - 1)
                dialogueIndex++;
            else
                gameState = "END";
        }
    }

    if (gameState === "SCENE_4") {

        if (key === "c" || key === "C")
            stickers = [];

        if ((key === "u" || key === "U") && stickers.length > 0)
            stickers.pop();
    }

    if (gameState === "END" && (key === "r" || key === "R")) {
        gameState = "START";
        dialogueIndex = 0;
        stickers = [];
        girlX = -120;
    }
}