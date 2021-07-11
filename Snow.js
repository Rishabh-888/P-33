class Snow{
    constructor (x, y, r){
        var options = {
            'restitution' : 0.8,
            'friction' : 0.8
        }
        this.r = 40;
        this.lifetime = 100;
        this.image = loadImage("sprites/snow4.webp");
        this.body = Bodies.circle(x, y, 40, 40, 20, options);
        World.add(world, this.body);
    }
    changePosition(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0, 1400), y:random(0, 50)});
        }
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.r, this.r);
        pop();
    }
}