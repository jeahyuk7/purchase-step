export function showGuestInput() {
  document.getElementById(`guest-input`).style.display = `block`;
}

export function showModal(content) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "100"; // z-index 설정

  const modal = document.createElement("div");
  modal.id = "custom-modal";
  modal.style.backgroundColor = "white";
  modal.style.padding = "20px";
  modal.style.width = "300px";
  modal.style.height = "200px";
  modal.style.position = "relative";

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.onclick = function () {
    document.body.removeChild(overlay);
  };

  const contentContainer = document.createElement("div");
  contentContainer.innerHTML = content;

  modal.appendChild(closeButton);
  modal.appendChild(contentContainer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}

export function createGuestCounter() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";

  const minusButton = document.createElement("button");
  minusButton.textContent = "-";
  minusButton.onclick = function () {
    const countElement = document.getElementById("guest-count");
    let count = parseInt(countElement.textContent, 10);
    if (count > 0) {
      countElement.textContent = count - 1;
    }
  };

  const countElement = document.createElement("span");
  countElement.id = "guest-count";
  countElement.textContent = "0";
  countElement.style.margin = "0 10px";

  const plusButton = document.createElement("button");
  plusButton.textContent = "+";
  plusButton.onclick = function () {
    const countElement = document.getElementById("guest-count");
    let count = parseInt(countElement.textContent, 10);
    countElement.textContent = count + 1;
  };

  container.appendChild(minusButton);
  container.appendChild(countElement);
  container.appendChild(plusButton);

  return container;
}

export function getGuestCount() {
  const countElement = document.getElementById("guest-count");
  return parseInt(countElement.textContent, 10);
}
