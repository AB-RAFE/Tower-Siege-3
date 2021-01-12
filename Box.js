class Box {
    constructor(x, y, width, height) {
      var options = {
        // 'isStatic': false,
        'restitution':0.8,
        'friction':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visblity = 255;
      World.add(world, this.body);
    }
    display() {
      push();
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    score() {
      if(this.visblity<0 && this.visblity>-15) {
        score++;
      }
    }
  }