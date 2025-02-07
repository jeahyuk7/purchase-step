import {
  showGuestInput,
  showModal,
  createGuestCounter,
  getGuestCount,
} from "./guest.js";

document.addEventListener("DOMContentLoaded", () => {
  const guestModalButton = document.getElementById("open-guest-modal");
  if (guestModalButton) {
    guestModalButton.addEventListener("click", () => {
      const guestCounter = createGuestCounter();
      showModal(`
        <h2>게스트 설정</h2>
        <p>숙박할 인원을 선택하세요.</p>
        <div id="guest-counter-container"></div>
        <button id="save-guest-count" style="margin-top: 20px; padding: 10px 20px; border: none; background: black; color: white; cursor: pointer;">저장</button>
      `);

      const container = document.getElementById("guest-counter-container");
      container.appendChild(guestCounter);

      const saveButton = document.getElementById("save-guest-count");
      saveButton.addEventListener("click", () => {
        const guestCount = getGuestCount();
        const guestCountDisplay = document.getElementById(
          "guest-count-display"
        );
        guestCountDisplay.textContent = `성인 ${guestCount}명`;
        document.body.removeChild(
          document.getElementById("custom-modal").parentNode
        );
      });
    });
  }
});

export { showGuestInput, showModal, createGuestCounter, getGuestCount };
