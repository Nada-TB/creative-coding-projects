/************variables**********/

let state=false;
let play;
/*************functions******************/
function change(){
    document.querySelectorAll('div')
      .forEach(function(val){
    let random=(Math.random() * 3) + 1;
    val
    .style
    .transform="scaleY("+random+")";
  });
}

/**********events*************************/

window.onload=function(){change()};

document.querySelector('button')
.addEventListener('click', function(){
  if(state==false){
    this.textContent="stop";
    play=setInterval(change, 70);
    state=true;
  }else{
    this.textContent="play";
    clearInterval(play);
    state=false;
  }
});