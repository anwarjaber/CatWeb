document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".filter-options input");
  const catCards = document.querySelectorAll(".cat-card");
  document.querySelectorAll(".filter-title").forEach((title) => {
    title.addEventListener("click", () => {
      const group = title.parentElement;
      group.classList.toggle("active");
    });
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterCats);
  });

  function getCheckedValues(name) {
    return Array.from(
      document.querySelectorAll(`input[name="${name}"]:checked`)
    ).map((cb) => cb.value);
  }

  function filterCats() {
    const selectedColors = getCheckedValues("color");
    const selectedAges = getCheckedValues("age");
    const selectedGenders = getCheckedValues("gender");

    catCards.forEach((card) => {
      const cardColors = card.dataset.color.split(",").map((c) => c.trim());
      const cardAge = card.dataset.age.trim();
      const cardGender = card.dataset.gender.trim();

      const matchColor =
        selectedColors.length === 0 ||
        selectedColors.some((color) => cardColors.includes(color));
      const matchAge =
        selectedAges.length === 0 || selectedAges.includes(cardAge);
      const matchGender =
        selectedGenders.length === 0 || selectedGenders.includes(cardGender);

      if (matchColor && matchAge && matchGender) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }
});
