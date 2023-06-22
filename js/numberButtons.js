export function addNumberButtonListeners(result) {
  const numButtons = document.querySelectorAll(".number-btn");

  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (result.value === "0") {
        result.value = "";
      }
      result.value += button.innerText;
    });
  });
}
