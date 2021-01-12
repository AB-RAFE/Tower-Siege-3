class Polygon {
    constructor(x, y, radius, angle) {
        var options = {
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.angle = angle;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}