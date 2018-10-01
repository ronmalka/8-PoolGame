const DELTA  = 1/177 ;

function GameWorld () {
  this.balls = [
    [new Vector2(1022, 413), COLOR.YELLOW],//1
    [new Vector2(1056, 393), COLOR.YELLOW],//2
    [new Vector2(1056, 433), COLOR.RED],//3
    [new Vector2(1090, 374), COLOR.RED],//4
    [new Vector2(1090, 413), COLOR.BLACK],//5
    [new Vector2(1090, 452), COLOR.YELLOW],//6
    [new Vector2(1126, 354), COLOR.YELLOW],//7
    [new Vector2(1126, 393), COLOR.RED],//8
    [new Vector2(1126, 433), COLOR.YELLOW],//9
    [new Vector2(1126, 472), COLOR.RED],//10
    [new Vector2(1162, 335), COLOR.RED],//11
    [new Vector2(1162, 374), COLOR.RED],//12
    [new Vector2(1162, 413), COLOR.YELLOW],//13
    [new Vector2(1162, 452), COLOR.RED],//14
    [new Vector2(1162, 491), COLOR.YELLOW],//15
    [new Vector2(413, 413), COLOR.WHITE]
  ].map(params => new Ball(params[0] , params[1]))
  this.pockets = [
    new Vector2 (750, 32),
    new Vector2 (750, 794),
    new Vector2 (62,62),
    new Vector2 (1435, 62),
    new Vector2 (62, 762),
    new Vector2 (1435, 762)
  ];
  this.pocketRadius = 46 ;
  this.whiteball = this.balls[this.balls.length - 1];
  this.stick = new Stick(new Vector2(413, 413), this.whiteball.shoot.bind(this.whiteball));
  this.table = {
    TopY:57,
    RightX:1443,
    BottomY:768,
    LeftX:57

  }
}


GameWorld.prototype.HandleCollisions = function () {
    for(let i = 0 ; i < this.balls.length ; i++){
      this.balls[i].collideWithPocket(this.pockets , this.pocketRadius);
      this.balls[i].collideWithTable(this.table);
      for( let j = i + 1 ; j < this.balls.length ; j++){
        const firsball = this.balls[i];
        const secondball = this.balls[j];
        firsball.collideWithBall(secondball);
      }
    }
}

GameWorld.prototype.update = function () {
  this.HandleCollisions();
  this.stick.update();

  for(let i = 0 ; i < this.balls.length ; i++) {
    this.balls[i].update(DELTA);
  }

  if( !this.BallsMoving() && this.stick.shoot){
      this.stick.reposition(this.whiteball.position);
  }
}

GameWorld.prototype.draw = function () {
  Canvas.drawImage(images.background, {x:0 , y:0});

  this.stick.draw();
  for(let i = 0 ; i < this.balls.length ; i++) {
    this.balls[i].draw();
  }
}

GameWorld.prototype.BallsMoving = function () {

  let ballsmoving = false ;

  for (let i = 0; i < this.balls.length ; i++){
    if(this.balls[i].moving){
      ballsmoving = true ;
      break ;
    }
  }

  return ballsmoving ;
}
