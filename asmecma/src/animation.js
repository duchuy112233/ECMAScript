const tabs = document.querySelectorAll(".tab-items a");
const tabActive = document.querySelector(".tab-items.active a");
const tabLine = document.querySelector(".tabs-option .tab-line");
tabLine.style.left = tabActive.offsetLeft + "px";
tabLine.style.width = tabActive.offsetWidth + "px";
tabs.forEach((tab) => {
  tab.onclick = function (e) {
    document.querySelector(".tab-items.active").classList.remove("active");
    tabLine.style.left = this.offsetLeft + "px";
    tabLine.style.width = this.offsetWidth + "px";
    this.closest(".tab-items").classList.add("active");
  };
});
// carousel
let currentCarousel = 0;
let widthItemCarousel = 213;
document.querySelector(".btn-similar .next").addEventListener("click", () => {
  console.log("hello");
  const carousel = document.querySelector(".similar-list .carousel");
  currentCarousel++;
  let width = currentCarousel * widthItemCarousel + "px";
  carousel.style.transform = `translate(${width},0)`;
});
