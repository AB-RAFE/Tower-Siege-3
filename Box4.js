class Box4 extends Box{
    constructor(x, y) {
      super(x,y,30,40);
    }
    display() {
      if(this.body.speed<5) {
        fill(144, 237, 144);
        super.display();
      }
      else{
        World.remove(world,this.body)
        push();
        this.visblity = this.visblity-10;
        tint(255,this.visblity);
        rect(this.x, this.y, 30, 40);
        pop();
        }
    }
  }