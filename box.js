class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':1
         // 'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
      console.log(this.body.speed)
    if(this.body.speed<3){
  // Box.display();
      }
      else{
   World.remove(world,this.body);
       push();
        this.visibility=this.visibility-5;
       tint(255,this.visibility);

        pop();

      
     
     }
      } 
      score(){
        if(this.visibility<0 && this.visibility>-105){
         score++;
        }
      } 
    };