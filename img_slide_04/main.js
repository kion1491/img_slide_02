
function imgSlide() {
  this.parent;
  this.arrowColor;
  this.auto;
  this.slideDuration;
  this.makeSlide = makeSlide;
}

function makeSlide() {
  document.write("부모요소: " + this.parent + "<br>");
  document.write("화살표 색: " + this.arrowColor + "<br>");
  document.write("자동슬라이스 사용여부: " + this.auto + "<br>");
  document.write("자동슬라이드 시간 간격: " + this.slideDuration + "<br>");
}

firstSlide = new imgSlide();
firstSlide.parent = ".parent";
firstSlide.arrowColor = "red";
firstSlide.auto = true;
firstSlide.slideDuration = "3초(3000ms)";
firstSlide.makeSlide();
