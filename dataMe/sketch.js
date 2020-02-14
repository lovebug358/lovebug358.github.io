let canvas;
let select;
//select dropdown menu
let askButton;
let check;
//check box
let radio;
let ads1;//ad images which are preloaded
let ads2;
let virus; //gif
let checkBrush;

let interactiveScene = false; //will be used to switch an interactive element on True and off False
function preload(){
  ads1 = loadImage("images/adsOne.png");
  ads2 = loadImage("images/adsTwo.png");

}


function setup() {
  canvas = createCanvas(windowWidth,windowHeight)
  canvas.style("z-index", "-1");//layers canvas -1 below (DOM library)
  canvas.position(0,0)
  //target this canvas.. use to style individual objects
  background(100, 255, 20);

  virus = createImg("images/virus.gif");//creates an image html tag
  virus.hide();
  virus.position(500,300)

  select = createSelect();
  select.option("yes");
  select.option("no");
  select.position(20,40);
  select.style("z-index", "2");

  askButton = createButton("enter");
  askButton.position(100,120);
  askButton.mousePressed(ask);
  askButton.style("z-index", "2");

  check = createCheckbox(false);
  //checkbox is boulian
  check.position(90,80);
  check.changed(ask);
  //if the checkbox function is changed then ask fuction

  //   radio = createRadio();
  //   radio.option('bird', 1);
  //   radio.option('gooey', 2);
  //   radio.option('tapu', 3);
  //   radio.style('width', '60px');
  //   fill(250, 20, 20);
  // radio.position(420, 120);

  imageMode(CENTER); //by default the image would be placed by CORNERS mode
}

//custom ask function, triggers when button is pressed . DO NOT place a function inside a function
function ask(){
  //storing the select menu selection value (yes or no)
  let val = select.value();
  //conditional statement checks what dropdown option is selected (if clicked on this in the past, then feed user this info)
  if(val == "yes" && check.checked()){ //if val is yes and check is checked
    background(0);
    //width and height are being drawn on the canvas so they reference the canvasWidth, canvasHeight
    image(ads1, width/2, height/2, width, height);//file, x coordinate, y, size, size
    interactiveScene = false;
  } else if (val == "yes"){
    image(ads2, width/2, height/2, width, height);
    interactiveScene = false;
  }

  if(val == "no" && check.checked()){
    background(255,0,0,);
    virus.show()
    interactiveScene = false;
    //  image(ads2, width/2, height/2, width, height);
  } else if(val == "no"){
    interactiveScene = true;
  }

}

function checkBoxBrush(){
  checkBrush = createCheckbox("iii", true); //generates a checkbox every single frame
  checkBrush.position(mouseX, mouseY); //will draw at mouse position
}

function draw() { //runs 60 fps
  //check status of interactiveScene
  if(interactiveScene == true){
    checkBoxBrush();//every frame is checking the stats of interactiveScene boolean
  }

  // let val = radio.value();
  // if(val){
  //   text('juust' + val, width/2, height/2);
  // }

}
