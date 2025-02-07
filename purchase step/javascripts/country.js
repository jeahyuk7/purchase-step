const countries = [
  { name: "대한민국", code: "KR", phoneCode: "+82" },
  { name: "미국", code: "US", phoneCode: "+1" },
  { name: "일본", code: "JP", phoneCode: "+81" },
  { name: "중국", code: "CN", phoneCode: "+86" },
  { name: "독일", code: "DE", phoneCode: "+49" },
  // 필요한 만큼 국가 추가
];

const countryInput = document.querySelector(".country-input");
const countryList = document.querySelector(".country-list");
const phoneNumberInput = document.querySelector(".phone-number-input");

// 국가 목록 필터링 및 업데이트 함수
function updateCountryList(filteredCountries) {
  countryList.innerHTML = ""; // 기존 목록 초기화
  filteredCountries.forEach((country) => {
    const countryItem = document.createElement("div");
    countryItem.classList.add("country-item");
    countryItem.textContent = `${country.name} (${country.code})`;
    countryItem.addEventListener("click", () => {
      countryInput.value = country.name; // input에 국가 이름 표시
      phoneNumberInput.value = country.phoneCode; // 전화번호 코드 표시
      countryList.classList.remove("show");
    });
    countryList.appendChild(countryItem);
  });

  // 국가 목록 표시/숨김
  if (filteredCountries.length > 0) {
    countryList.classList.add("show");
  } else {
    countryList.classList.remove("show");
  }
}

// input 이벤트 리스너
countryInput.addEventListener("input", () => {
  const inputValue = countryInput.value.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(inputValue)
  );
  updateCountryList(filteredCountries);
});

// input focus 시 국가 목록 표시
countryInput.addEventListener("focus", () => {
  updateCountryList(countries); // 모든 국가를 표시
});

// input click 시 국가 목록 표시
countryInput.addEventListener("click", () => {
  updateCountryList(countries); // 모든 국가를 표시
});

// input blur 시 국가 목록 숨김
countryInput.addEventListener("blur", () => {
  setTimeout(() => {
    countryList.classList.remove("show");
  }, 200); // 클릭 이벤트가 처리될 시간을 주기 위해 약간의 지연을 추가
});
