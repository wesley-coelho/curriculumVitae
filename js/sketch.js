
var x;

function setup() {
  createCanvas(760, 300);
  background(220);
  /*detailX = createSlider(3, 24, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');*/
}

function draw() {

	
	//stroke(255,255,255);
	//strokeWeight(2);
  	//line(100,100,200,100); /*line(x1,y1,x2,y2)*/
  	//rect(100,100,200,100,5);/* rect(x,y,width,height)*/

  	/*background(205, 105, 94);
  	rotateY(millis() / 1000);
  	sphere(40, detailX.value(), 16);*/

  	noStroke();
  	strokeWeight(3);
  	fill(random(0,255),random(0,255),0);
  	ellipse(random(0,757),random(0,300),random(0,30),random(0,30));

  	

}