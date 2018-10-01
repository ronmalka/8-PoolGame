function HandleMouseMove(evt){
  let x = evt.pageX;
  let y = evt.pageY;

  Mouse.position = new Vector2(x,y);
}

function HandleMouseDown(evt){
  HandleMouseMove(evt);
//left button
  if(evt.which === 1){
    if(!Mouse.left.down)
      Mouse.left.press = true;
    Mouse.left.down = true;
    }
// mid button
else if (evt.which === 2) {
  if(!Mouse.mid.down)
    Mose.mid.press = true;
  Mouse.mid.down = true;
  }
//right button
else if(evt.which === 3){
  if(!Mouse.right.down)
    Mose.right.press = true;
  Mouse.right.down = true;
  }
}

function HandleMouseUp(evt){
  HandleMouseMove(evt);
//left button
  if(evt.which === 1){
    if(Mouse.left.down)
      Mouse.left.down = false ;
    }
//mid button
if(evt.which === 2){
  if(Mouse.mid.down)
    Mouse.mid.down = false ;
  }
  //right button
  if(evt.which === 3){
    if(Mouse.right.down)
      Mouse.right.down = false ;
    }
}
function MouseHandler(){
this.left = new ButtonState();
this.mid = new ButtonState();
this.right = new ButtonState();

this.position = new Vector2();

document.onmousemove = HandleMouseMove;
document.onmousedown = HandleMouseDown;
document.onmouseup = HandleMouseUp;
}

MouseHandler.prototype.reset = function(){
  this.left.press = false;
  this.mid.press = false;
  this.right.press = false;
}
let Mouse = new MouseHandler();
