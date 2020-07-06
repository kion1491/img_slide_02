
imgSrcList = [
  "http://placehold.it/1000x500/aaa/ffffff?text=No.1",
  "http://placehold.it/1000x500/1e4e7c/ffffff?text=No.2",
  "http://placehold.it/1000x500/1e4e11/ffffff?text=No.3",
  "http://placehold.it/1000x500/000/ffffff?text=No.4",
  "http://placehold.it/1000x500/3e3e3e/ffffff?text=No.5"
];

// 사용자 정의 생성자 함수 방식
function imgSlide(arrowColor) {
  this.arrowColor = arrowColor;
  const slideBox = document.getElementById("slideBox");
  const slideReset = `
                    <div class="prev_arrow" id="prevArrow"></div>
                    <img src="`+ imgSrcList[0] + `" />
                    <div class="next_arrow" id="nextArrow"></div>
                   `;
  slideBox.innerHTML = slideReset;

  // const arrowColor = "#000";
  document.getElementById("prevArrow").style.borderRight = "50px solid " + arrowColor;
  document.getElementById("nextArrow").style.borderLeft = "50px solid " + arrowColor;

  slideImg = slideBox.firstChild.nextElementSibling.nextElementSibling;
  // console.log(slideImg);
  let i = 0;

  function slideNext() {
    if (i == imgSrcList.length - 1) { i = -1 }
    i = i + 1;
    slideImg.src = imgSrcList[i];
  }

  function slidePrev() {
    if (i == 0) { i = imgSrcList.length }
    i = i - 1;
    slideImg.src = imgSrcList[i];
  }

  // next 버튼, prev 버튼 기능
  const prevBtn = document.getElementById("prevArrow");
  const nextBtn = document.getElementById("nextArrow");
  prevBtn.addEventListener("click", slidePrev);
  nextBtn.addEventListener("click", slideNext);


};

// 이미지 슬라이드를 생성해주는 객체 생성 코드. 현재는 맨 밑에줄에 있는 코드 하나만 실행되는데, 함수의 인자값으로 부모 div의 클래스를 받아서 그 클래스의 자식요소로 이미지슬라이드가 생성되도록 만들 예정.
const imgSlide01 = new imgSlide("#000");
const imgSlide02 = new imgSlide("#ddd");


// 자동 슬라이드
function autoSlide() {
  setInterval(function () {
    if (i == imgSrcList.length) { i = 0; }
    slideImg.src = imgSrcList[i];
    i = i + 1;
  }, 1000)
}

// 자동슬라이드 클래스 트리거
if (slideBox.classList.contains('autoSlide')) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  autoSlide();
}