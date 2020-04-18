let amount = 40;
let balls = [];
var canvas;

function setup()
{  
  canvas = createCanvas(710, 400);
  canvas.position(0,0);
  clear();  
  createButton("FoodAttack");
  
  for(let i = 0; i < amount; i++)
  {
    let x = random(width);
    let y = random(height);
    balls[i] = new Ball(x,y,20,3,i);
    
  }
}

function draw()
{
  for(let i = 0; i < amount; i++)
  {
    balls[i].move();
  }
}

class Ball{
constructor(x,y,radios,speed,ids)
  {
    this.posX = x;
    this.posY = y;
    this.radio = radios;
    this.speedo = speed;
    this.id = ids;
    //  radio = random(radio, radio * 1.5);
    
    noStroke();
    
    this.r = random(100,255);
    print(this.r);
    this.g = random(100,255);
    this.b = random(100,255);
    fill(this.r,this.g,this.b,20);
    
    circle(x, y, this.radio);
    
  }
  
  
  move()
  {  
    let dir = random(0,4);
    if(dir <= 1)
    {
      this.posX += this.speedo;
    }
    else if(dir > 1 && dir <= 2)
    {
      this.posX -= this.speedo;
    }
    else if(dir > 2 && dir <= 3)
    {
      this.posY += this.speedo;
    }
    else if(dir > 3)
    {
      this.posY -= this.speedo;
    }
    
    if(this.posX > width) this.posX = width;
    if(this.posX < 0) this.posX = 0;
    if(this.posY > height) this.posY = height;
    if(this.posY < 0) this.posY = 0;
    
    fill(this.r,this.g,this.b,10);
    circle(this.posX, this.posY,this.radio);    
  }

}
