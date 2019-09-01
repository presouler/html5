var playerColor=new Array("#DED284","#C0B25A","#C0B25A","#FFD922","#FFD922");
var enemyColor1=new Array("#AE9898","#CAD1C2","#70A5C5","#CFD0D7","#CFD0D7");

function Tank(x,y,direction,color){
		this.x=x;
		this.y=y;
		this.speed=10;
		this.color=color;
		this.direction=direction;
		
		
		this.moveUp=function(){
			this.y-=this.speed;
			this.direction=0;
		}
		this.moveRight=function(){
			this.x+=this.speed;
			this.direction=1;
		}
		this.moveDown=function(){
			this.y+=this.speed;
			this.direction=2;
		}
		this.moveLeft=function(){
			this.x-=this.speed;
			this.direction=3;
		}
		this.shotBullet=function(){
				
				if (mybullets.length<=2){
				var bullet1=new bullet(this.x,this.y,this.direction,1);
				
				mybullets.push(bullet1);
				
				bullet1.timer=setInterval("mybullets["+(mybullets.length-1)+"].run()",50);
				
			}else{return;}
		}
	}
function drawBullet(){
	for(var i=0;i<mybullets.length;i++){
		var mybullet=mybullets[i];
		if(mybullet!=null && mybullet.checklive()){
			// && mybullet.isLive
			switch(mybullet.direction){
				case 0:
					ctx.fillStyle="#DED284";
					ctx.fillRect(mybullet.x+12.5,mybullet.y-6,3,3);
					break;
				case 1:
					ctx.fillStyle="#DED284";
					ctx.fillRect(mybullet.x+31,mybullet.y+13,3,3);
					break;
				case 2:
					ctx.fillStyle="#DED284";
					ctx.fillRect(mybullet.x+13,mybullet.y+31,3,3);
					break;
				case 3:
					ctx.fillStyle="#DED284";
					ctx.fillRect(mybullet.x-6,mybullet.y+13,3,3);
					break;
		}
		
	}
}
}
function EnemyTank(x,y,direction,color){
	this.tank = Tank;
	this.tank(x,y,direction,color);
}

function drawTank(tank){
	switch(tank.direction){
		case 0:
		case 2:
			ctx.fillStyle=tank.color[0];
			//left wheel
			ctx.fillRect(tank.x,tank.y,5,25);
			//right wheel
			ctx.fillRect(tank.x+21,tank.y,5,25);
			ctx.fillStyle=tank.color[1];
			ctx.fillRect(tank.x-0.5,tank.y+3.4,6,2);
			ctx.fillRect(tank.x-0.5,tank.y+8.8,6,2);
			ctx.fillRect(tank.x-0.5,tank.y+14.2,6,2);
			ctx.fillRect(tank.x-0.5,tank.y+19.6,6,2);
		
			ctx.fillRect(tank.x+20.5,tank.y+3.4,6,2);
			ctx.fillRect(tank.x+20.5,tank.y+8.8,6,2);
			ctx.fillRect(tank.x+20.5,tank.y+14.2,6,2);
			ctx.fillRect(tank.x+20.5,tank.y+19.6,6,2);
			ctx.fillStyle=tank.color[2];
			ctx.fillRect(tank.x+7,tank.y+5,12,15);
			ctx.fillStyle=tank.color[3];
			ctx.arc(tank.x+13,tank.y+12.5,3,0,2*Math.PI,true);
			ctx.fill();
			ctx.strokeStyle=tank.color[4];
			ctx.lineWidth=3;
			ctx.beginPath();
			if(tank.direction==0){
				ctx.fillRect(tank.x+10.5,tank.y-3,5,3);
				ctx.moveTo(tank.x+13,tank.y+12.5);
				ctx.lineTo(tank.x+13,tank.y);}else if(tank.direction==2){
				ctx.fillRect(tank.x+10.5,tank.y+25,5,3);
				ctx.moveTo(tank.x+13,tank.y+12.5);
				ctx.lineTo(tank.x+13,tank.y+25);
				}
			ctx.closePath();
			ctx.stroke();
			break;
			
		case 1:
		case 3:
			ctx.fillStyle=tank.color[0];
			//left wheel
			ctx.fillRect(tank.x,tank.y,25,5);
			//right wheel
			ctx.fillRect(tank.x,tank.y+21,25,5);
			ctx.fillStyle=tank.color[1];
			ctx.fillRect(tank.x+3.4,tank.y-0.5,2,6);
			ctx.fillRect(tank.x+8.8,tank.y-0.5,2,6);
			ctx.fillRect(tank.x+14.2,tank.y-0.5,2,6);
			ctx.fillRect(tank.x+19.6,tank.y-0.5,2,6);
		
			ctx.fillRect(tank.x+3.4,tank.y+20.5,2,6);
			ctx.fillRect(tank.x+8.8,tank.y+20.5,2,6);
			ctx.fillRect(tank.x+14.2,tank.y+20.5,2,6);
			ctx.fillRect(tank.x+19.6,tank.y+20.5,2,6);
			ctx.fillStyle=tank.color[2];
			ctx.fillRect(tank.x+5,tank.y+7,15,12);
			ctx.fillStyle=tank.color[3];
			ctx.arc(tank.x+12.5,tank.y+13,3,0,2*Math.PI,true);
			ctx.fill();
			ctx.strokeStyle=tank.color[4];
			ctx.lineWidth=3;
			ctx.beginPath();
			if(tank.direction==3){
				ctx.fillRect(tank.x-3,tank.y+10.5,3,5);
				ctx.moveTo(tank.x+12.5,tank.y+13);
				ctx.lineTo(tank.x,tank.y+13);}else if(tank.direction==1){
				ctx.fillRect(tank.x+25,tank.y+10.5,3,5);
				ctx.moveTo(tank.x+12.5,tank.y+13);
				ctx.lineTo(tank.x+25,tank.y+13);
				}
			ctx.closePath();
			ctx.stroke();
			break;
	}
}


