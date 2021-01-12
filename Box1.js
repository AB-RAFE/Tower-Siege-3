class Box1 extends Box{
  constructor(x,y) {
    super(x,y,30,40);
  }
  display() {
    if(this.body.speed<3) {
      fill(162, 185, 232);
      super.display()
    }
    else{
      push();
      this.visblity = this.visblity-5;
      tint(255,this.visblity)
      rect(this.x, this.y, 30, 40);
      pop();
      World.remove(world,this.body)
    }
  }
}
