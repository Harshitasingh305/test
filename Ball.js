class Ball {
    constructor(x,y,width) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, width,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
       fill("red");
       push()
        rectMode(CENTER);
       translate(this.body.position.x,this.body.position.y)
             ellipse(pos.x, pos.y,20,20);
       pop()


     

    }
  };