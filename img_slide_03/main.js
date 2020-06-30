

imgSrcList = [
  "http://placehold.it/1000x500/aaa/ffffff?text=No.1",
  "http://placehold.it/1000x500/1e4e7c/ffffff?text=No.2",
  "http://placehold.it/1000x500/1e4e11/ffffff?text=No.3",
  "http://placehold.it/1000x500/000/ffffff?text=No.4",
  "http://placehold.it/1000x500/3e3e3e/ffffff?text=No.5"
];

// DOM 초기화

const slideBox = document.getElementById("slideBox");
const slideReset = `
                    <img src="`+ imgSrcList[0] + `" />
                    <button class="prev_arrow" id="prevArrow"></button>
                    <button class="next_arrow" id="nextArrow"></button>
                   `;
slideBox.innerHTML = slideReset;

slideImg = slideBox.firstChild.nextSibling;
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