class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.3,
			density:1
			
			}
		
		
		
		this.body=Bodies.circle(x, y, r, options);
		this.r=r;
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill("blue")
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

