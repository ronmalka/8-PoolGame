const STICK_ORIGIN = new Vector2(970,11);
const STICK_SHOOT_ORIGIN = new Vector2(950,11);
const MAX_POWER = 7500;

function Stick (position , onShoot) {
  this.position = position;
  this.rotation = 0;
  this.origin = STICK_ORIGIN.copy();
  this.power = 0 ;
  this.onShoot = onShoot;
  this.shoot = false;
}

Stick.prototype.update = function () {
  if(this.shoot){
    return;
  }
  if(Mouse.left.down){
    this.increasePower();
  }
  else if (this.power > 0) {
    this.Shoot();
  }

  this.UpdateRotation();

}

Stick.prototype.draw = function () {
Canvas.drawImage(images.stick, this.position , this.origin ,this.rotation);
}
Stick.prototype.UpdateRotation = function () {
  let opposite = Mouse.position.y - this.position.y ;
  let adjacent = Mouse.position.x - this.position.x;

  this.rotation = Math.atan2(opposite , adjacent);
}

Stick.prototype.increasePower = function () {
  if(this.power > MAX_POWER){
    return;
  }

    this.power +=150;
    this.origin.x += 5;
}

Stick.prototype.Shoot = function () {
    this.onShoot(this.power , this.rotation)
      this.power = 0 ;
      this.origin = STICK_SHOOT_ORIGIN.copy();
      this.shoot = true ;
}

Stick.prototype.reposition = function (position) {
    this.position = position.copy();
    this.origin = STICK_ORIGIN.copy();
    this.shoot = false;
}
