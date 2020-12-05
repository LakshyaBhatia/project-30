class Box{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
      if(this.body.speed < 4){
      var angle = this.body.angle;
      var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill("blue");
        rect(0,0, this.width, this.height);
        pop();
      }else{
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity-5;
        pop();
      }
      }
    }
     
