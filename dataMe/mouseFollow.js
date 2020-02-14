let cnv;

var images = [];

function preload() {
  for (var i = 0; i< 9; i++) {
    images[i] = loadImage("images/" + i + ".jpg");
  }
}


// function preload(){
//   console.log("loaded");
//   //img = loadImage('images/1.jpg', 'images/2.jpg','images/3.jpg');
//
// }

function setup() {

  cnv = createCanvas(innerWidth,innerHeight);
  cnv.class("myCanvas");
  // canvas.style("z-index", "-1");
//  background(0);
  print(images.length);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  if (mouseIsPressed) {
    ///for(let i = 0; i< images.length; i++){
      image(images[int(random(images.length))], mouseX, mouseY, 20, 20);
      // if(i >= 9){
      //   i = 0;
      // }
    //}
    } else {

    }


}
//console.log("po")

// function setup() {
//   createCanvas(720, 400);
//   background(230);
//   strokeWeight(2);
// }
//
// function draw() {
//   if (mouseIsPressed) {
//     stroke(255);
//   } else {
//     stroke(237, 34, 93);
//   }
//   line(mouseX - 66, mouseY, mouseX + 66, mouseY);
//   line(mouseX, mouseY - 66, mouseX, mouseY + 66);
// }
