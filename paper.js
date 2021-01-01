class Log {
  constructor(x, y) {
    var options = {
        isStatic:false,
        friction:0.3,
        restitution:0.1,
        density:1.2
    }
    this.body = Bodies.circle(x, y,20,options);
  this.radius=20;
    World.add(world, this.body);
    this.image = loadImage("paper.png");
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop();
  }
};