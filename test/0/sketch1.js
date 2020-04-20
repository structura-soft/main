let amount = 40;
let balls = [];
var canvas;
var hyperLink;

function setup()
{  
  
  hyperLink = createA('https://play.google.com/store/apps/details?id=com.structura.FoodAttack', 'FoodAttackk');
  hyperLink.position(300,300);
  canvas = createCanvas(windowWidth*0.98, windowHeight);
  canvas.position(0,0);
  canvas.style('pointer-events','none');
  clear(); 
  
  
  colorMode(HSB);
  
  for(let i = 0; i < amount; i++)
  {
    let x = random(width);
    let y = random(height);
    balls[i] = new Ball(x,y,30,3,i);
    
  }
}

function draw()
{
  clear();
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
    
    noStroke();
    
    this.r = random(160,220);
    this.g = random(30,50);
    this.b = random(85,100);
    fill(this.r,this.g,this.b,0.2);
    
    circle(x, y, this.radio);
    
  }
  
  
  move()
  {  
    let dir = random(0,5);
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
      this.posY -= this.speedo;
    }
    else if(dir > 3)
    {
      this.posY += this.speedo;
    }
    
    if(this.posX > width) this.posX = width;
    if(this.posX < 0) this.posX = 0;
    if(this.posY > height) this.posY = 0;
    if(this.posY < 0) this.posY = 0;
    
    fill(this.r,this.g,this.b,0.3);
    circle(this.posX, this.posY,this.radio);    
  }

}
