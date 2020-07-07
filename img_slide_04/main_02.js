
function imgSlide(parent, arrowColor, auto, slideDuration) {
  this.parent = parent;
  this.arrowColor = arrowColor;
  this.auto = auto;
  this.slideDuration = slideDuration;
  this.makeSlide = makeSlide;

  function makeSlide() {
    document.write("부모요소: " + parent + "<br>");
    document.write("화살표 색: " + arrowColor + "<br>");
    document.write("자동슬라이스 사용여부: " + auto + "<br>");
    document.write("자동슬라이드 시간 간격: " + slideDuration + "<br>");
    document.write("------------------------------------------<br>")
  }
  makeSlide();
}



firstSlide = new imgSlide(".parent", "red", true, "3초(3000ms)");
// secondSlide = new imgSlide(".another_parent", "blue", true, "5초(5000ms)");