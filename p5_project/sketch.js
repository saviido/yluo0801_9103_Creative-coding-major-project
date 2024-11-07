let angle1 = 0; 
let angle2 = 0; 

function setup() {
  createCanvas(500, 500);
  background(251, 244, 236);
}

function draw() {
  background(251, 244, 236);// Redraw the background
// Set the swing angle
  let angle1 = sin(frameCount * 0.05) * 10; // The swing angle of the upper wing
  let angle2 = cos(frameCount * 0.05) * 10; // The swing angle of the lower wing

 // pigeon's head and chest
  noFill();
  stroke(42, 48, 72);
  strokeWeight(2);
  bezier(300, 180, 350, 148, 362, 138, 370, 120);
  bezier(370, 120, 392, 83, 429, 98, 440, 100);
  bezier(440, 100, 458, 99, 470, 110, 480, 109);
  bezier(480, 109, 447, 118, 440, 159, 440, 180);
  bezier(440, 180, 440, 280, 372, 328, 340, 340);  

  // the wing above
  stroke(42, 48, 72);
  strokeWeight(2);
  bezier(20 + angle1, 40 + angle1, 160 + angle1, 18 + angle1, 323 + angle1, 116 + angle1, 372, 172);
  bezier(20 + angle1, 40 + angle1, 20 + angle1, 60 + angle1, 70 + angle1, 69 + angle1, 83 + angle1, 80 + angle1);
  bezier(83 + angle1, 80 + angle1, 0 + angle1, 98 + angle1, 28 + angle1, 108 + angle1, 100 + angle1, 120 + angle1);
  bezier(100 + angle1, 120 + angle1, 18 + angle1, 141 + angle1, 3 + angle1, 160 + angle1, 80 + angle1, 160 + angle1);
  bezier(80 + angle1, 160 + angle1, 52 + angle1, 186 + angle1, 90 + angle1, 186 + angle1, 100 + angle1, 186 + angle1);
  bezier(100 + angle1, 186 + angle1, 90 + angle1, 186 + angle1, 80 + angle1, 218 + angle1, 120 + angle1, 230 + angle1);
  bezier(120 + angle1, 230 + angle1, 138 + angle1, 238 + angle1, 182 + angle1, 223 + angle1, 190 + angle1, 218 + angle1);

  // the wing below
  bezier(212 + angle2, 276 + angle2, 179 + angle2, 313 + angle2, 239 + angle2, 264 + angle2, 200 + angle2, 305 + angle2);
  bezier(194 + angle2, 312 + angle2, 152 + angle2, 376 + angle2, 239 + angle2, 301 + angle2, 192 + angle2, 348 + angle2);
  bezier(192 + angle2, 348 + angle2, 125 + angle2, 438 + angle2, 138 + angle2, 442 + angle2, 230 + angle2, 370 + angle2);
  bezier(230 + angle2, 370 + angle2, 145 + angle2, 448 + angle2, 190 + angle2, 442 + angle2, 220 + angle2, 425 + angle2);
  bezier(220 + angle2, 425 + angle2, 330 + angle2, 371 + angle2, 383 + angle2, 298 + angle2, 330 + angle2, 220 + angle2);
  bezier(330 + angle2, 220 + angle2, 318 + angle2, 202, 281, 208, 300, 230);

  // tail
  bezier(230, 180, 209, 256, 20, 283, 7, 263);
  bezier(7, 263, 6, 303, 24, 322, 60, 296);
  bezier(60, 296, 24, 322, 10, 376, 100, 315);
  bezier(100, 315, 43, 369, 51, 408, 103, 343);
  bezier(103, 343, 82, 398, 95, 435, 176, 314);

  //leaf
  fill(26, 119, 75);
  stroke(26, 110, 75);
  strokeWeight(2);
  bezier(440, 46, 460, 100, 490, 96, 440, 46);
  bezier(479, 30, 452, 75, 479, 96, 479, 30);
  bezier(500, 40, 458, 80, 470, 100, 500, 40);
  bezier(497, 70, 443, 91, 485, 94, 498, 70);

 //leaves branch
  noFill();
  stroke(26, 119, 75);
  strokeWeight(1.5);
  bezier(468, 70, 472, 92, 468, 96, 462, 103);
  bezier(462, 121, 464, 136, 470, 138, 470, 158);


  noFill();
  stroke(42, 48, 72);
  strokeWeight(2);
  line(446, 117, 480, 109); 

  // circle-pupil
  fill(0);
  ellipse(425, 112, 5, 5);

  // loop-eye socket
  noFill();
  ellipse(425, 112, 12, 12);
}

