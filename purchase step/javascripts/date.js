document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("date-modal");
  const openModalBtn = document.getElementById("open-date-modal");
  const closeModalBtn = document.querySelector(".close");
  const saveDatesBtn = document.getElementById("modal-save-dates");
  const selectedDateDisplay = document.getElementById("selected-date");
  const modalStartDateInput = document.getElementById("modal-start-date");
  const modalEndDateInput = document.getElementById("modal-end-date");

  // 모달 열기
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // 모달 닫기
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 모달 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // 날짜 저장
  saveDatesBtn.addEventListener("click", () => {
    const startDate = modalStartDateInput.value;
    const endDate = modalEndDateInput.value;
    selectedDateDisplay.textContent = `선택된 날짜: ${startDate} ~ ${endDate}`;
    modal.style.display = "none";
  });

  // flatpickr 설정
  flatpickr(modalStartDateInput, {
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        modalEndDateInput._flatpickr.set("minDate", selectedDates[0]);
      }
    },
  });

  flatpickr(modalEndDateInput, {
    dateFormat: "Y-m-d",
    onChange: function (selectedDates, dateStr, instance) {
      if (selectedDates.length > 0) {
        modalStartDateInput._flatpickr.set("maxDate", selectedDates[0]);
      }
    },
  });
});
