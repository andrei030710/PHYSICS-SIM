
let observer;

function setup() {
  createCanvas(1200, 800);
  observer = new Observer(100, 1200, 2);
  background(0);
}

function draw() {
  background(0);

  if (mouseIsPressed){ // CONTROLS ACCELERATION IN X-AXIS
     let accel = createVector(0.5, -2);
     observer.applyForce(accel);
  }

    // GRAVITY VECTOR
    let gravity = createVector(0, 0.8);
    let weightObs = p5.Vector.mult(gravity, observer.mass)
    observer.applyForce(weightObs);

  observer.drag();
  observer.friction();
  observer.update();
  observer.ground();
  observer.show();
}


  //FOR NOW F = a DUE TO m = 1
  //x = x + v 
  // Moving up at a constant speed
  //y = y
  
  // Reset to the bottom
  //if (x < 0) {
    //x = width;
  //}
