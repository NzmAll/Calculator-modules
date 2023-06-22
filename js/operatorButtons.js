export function addOperatorButtonListeners(result) {
  const operatorButtons = document.querySelectorAll(".operator-btn");

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!result.classList.contains("operator")) {
        result.value += button.innerText;
        classAdd(result);
      }
    });
  });
}
