class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visiblity = 255;
  }

display(){
  if(this.body.speed < 2){
   super.display();
  }
  else{
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(0,this.Visiblity);
    rect(this.body.position.x, this.body.position.y, 50, 50)
    pop();
    }
  
  }
}; 