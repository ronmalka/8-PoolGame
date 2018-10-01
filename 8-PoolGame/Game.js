function Game () {

}

Game.prototype.init = function(){

this.gameworld = new GameWorld();

}

Game.prototype.start = function(){

PoolGame.init();
PoolGame.mainloop();

}

Game.prototype.mainloop = function () {

Canvas.clear();
PoolGame.gameworld.update();
PoolGame.gameworld.draw();

requestAnimationFrame(PoolGame.mainloop);

Mouse.reset();

}

let PoolGame = new Game();
