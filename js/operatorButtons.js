export function addOperatorButtonListeners(result) {
  const operatorButtons = document.querySelectorAll(".operation");

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!result.classList.contains("operation")) {
        result.value += button.innerText;
        classAdd(result);
      }
    });
  });
}
