document.addEventListener("DOMContentLoaded", function () {
  function moveElements() {
    const section5 = document.querySelector(".section5");
    const section6 = document.querySelector(".section6");
    const section7 = document.querySelector(".section7");
    const article1 = document.querySelector(".article1");
    const article2 = document.querySelector(".article2");

    if (window.innerWidth <= 768) {
      if (section5 && article1) {
        article1.insertBefore(section5, article1.firstChild);
      }
      if (section6 && article1) {
        const thirdChild = article1.children[2];
        article1.insertBefore(section6, thirdChild);
      }
      if (section7 && article1) {
        const fourthChild = article1.children[3];
        article1.insertBefore(section7, fourthChild);
      }
    } else {
      // 화면 크기가 768px 이상일 때 원래 위치로 되돌리기
      if (section5 && article2) {
        article2.insertBefore(section5, article2.firstChild);
      }
      if (section6 && article2) {
        article2.insertBefore(section6, article2.children[2]);
      }
      if (section7 && article2) {
        article2.appendChild(section7);
      }
    }
  }

  // 초기 실행
  moveElements();

  // 화면 크기 변경 시 실행
  window.addEventListener("resize", moveElements);
});
