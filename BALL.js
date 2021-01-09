class BALL{
 constructor(x,y,radius){

    var options = {
          "restitution":0.8,
          "friction":0.5,
          "density":0.5,

    }
 this.body = Bodies.circle(x,y,radius,options);
 this.radius = radius;
 World.add(world,this.body);
}
display(){
var pos = this.body.position;
push ();
fill(176,219,83);
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.radius);
pop();

 }

}