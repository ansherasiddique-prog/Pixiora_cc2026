// Scene management
let gameState = "SCENE_2"; 
let dialogueIndex = 0;

// Dialogue from your sketch: "WhatsApp Image 2026-05-13 at 1.11.44 PM.jpeg"
let dialogues = [
  "Today is mamma's birthday but i dont have money to buy her gift",
  "I'll make her a greeting card!",
  "Mama loves when I draw for her.",
  "Let's go to my room to find some supplies!"
];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  if (gameState === "SCENE_2") {
    drawLivingRoom();
    drawCharacter();
    drawDialogueBox();
  }
}

function drawLivingRoom() {
  // Simple background elements based on "WhatsApp Image 2026-05-13 at 1.11.44 PM.jpeg"
  stroke(0);
  fill(150, 100, 50); // Couch color
  rect(100, 350, 200, 100); // Sofa
  
  fill(100, 150, 200); // Window/TV area
  rect(500, 250, 150, 100); 
  
  line(0, 450, width, 450); // Floor line
}

function drawCharacter() {
  // Anna - 8 years old
  push();
  translate(width / 2, 400);
  stroke(0);
  strokeWeight(2);
  fill(255);
  circle(0, -80, 50); // Head
  line(0, -55, 0, 20); // Body
  line(0, -30, -30, -10); // Left Arm
  line(0, -30, 30, -10); // Right Arm
  line(0, 20, -20, 50); // Left Leg
  line(0, 20, 20, 50); // Right Leg
  
  // Pigtails based on your drawing
  fill(0);
  circle(-25, -90, 15);
  circle(25, -90, 15);
  pop();
}

function drawDialogueBox() {
  // Box at the bottom
  fill(255, 255, 255, 220);
  stroke(0);
  rect(50, 480, 700, 100, 10);
  
  // Name tag
  fill(255, 200, 200);
  rect(70, 465, 80, 30);
  fill(0);
  noStroke();
  textSize(16);
  text("Anna", 90, 485);
  
  // Dialogue Text
  textSize(20);
  textAlign(LEFT);
  text(dialogues[dialogueIndex], 80, 520, 640, 60);
  
  // Prompt to move forward
  textSize(12);
  fill(100);
  text("(Press 'K' to move forward)", 600, 570);
}

// Interaction logic
function keyPressed() {
  if (key === 'k' || key === 'K') {
    if (dialogueIndex < dialogues.length - 1) {
      dialogueIndex++;
    } else {
      // Logic to move to Scene 3 (the Kid's Room)
      console.log("Moving to Scene 3...");
      // gameState = "SCENE_3"; 
    }
  }
}