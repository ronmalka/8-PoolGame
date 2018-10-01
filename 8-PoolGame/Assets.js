let images= {};
let assetsStillLoading = 0 ;

function assetsLoadingLoop(callback){
if(assetsStillLoading){
  requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
}
else{
  callback();
  }
}

function LoadAssets(callback){
  function loadImage(fileName){
    assetsStillLoading++;
    let image = new Image();
    image.src = "./assets/images/" + fileName;
    image.onload = function(){
      assetsStillLoading--;
  }
  return image;
}

  images.background = loadImage('spr_background4.png');
  images.stick = loadImage('spr_stick.png');
  images.whiteball = loadImage ('spr_ball2.png');
  images.redball = loadImage ('spr_redBall2.png');
  images.yellowball = loadImage ('spr_yellowBall2.png');
  images.blackball = loadImage ('spr_blackBall2.png');
  assetsLoadingLoop(callback);

}

function getBallImageByColor(color){
  switch (color) {
    case COLOR.RED:
      return images.redball;
    case COLOR.YELLOW:
      return images.yellowball;
    case COLOR.BLACK:
      return images.blackball;
    case COLOR.WHITE:
      return images.whiteball;

  }
}
