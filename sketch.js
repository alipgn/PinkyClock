function setup() {
  createCanvas (800,800)
  angleMode(DEGREES)
}

function draw() {
   background (255)
   translate (width/2,height/2)
   
     for (var r = 1; r <= 12; r++) {
        push();
        rotate(r * 30);
        fill(193, 149, 180);
        noStroke();
        rect(190,0,50,3);
        pop();
    }

	push();
	rotate((second())*6);
	fill(140, 21,168);
	noStroke();
	ellipse(210, -135, 15, 15);
	pop();
 
   push();
   rotate ((minute()*6));
   fill(179, 118, 193);
   noStroke();
   ellipse(220, -135, 25, 25);
   pop();
   
   push();
   if (hour()>12){
     var h = hour()-13
   }else{
     var h= hour()
   }
   
  rotate ((h+1)*30);
  fill(231, 173, 244)
  noStroke();
  ellipse(230, -125, 50, 50);
  pop();
 
}
