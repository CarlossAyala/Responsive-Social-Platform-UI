//Vars
const btnMenuIconLeft = document.querySelector('.left-side-button #btn');
const leftSide = document.querySelector('.left-side');
const btnMenuIconRight = document.querySelector('.right-side-button #btn');
const rightSide = document.querySelector('.right-side');

btnMenuIconLeft.addEventListener('click', menuLeftBtnChange);
btnMenuIconRight.addEventListener('click', menuRightBtnChange);

function menuLeftBtnChange(){
  leftSide.classList.toggle('active');
  if(leftSide.classList.contains("active")){
    this.classList.replace("bx-menu", "bx-arrow-back");
  }else {
    this.classList.replace("bx-arrow-back","bx-menu");
  }
}
function menuRightBtnChange(){
  rightSide.classList.toggle('active');
  if(rightSide.classList.contains("active")){
    this.classList.replace("bx-message-square-edit", "bx-right-arrow-alt");
  }else {
    this.classList.replace("bx-right-arrow-alt","bx-message-square-edit");
  }
}