export function addEqualButtonListener(result) {
  const equalButton = document.querySelector(".equal-btn");

  if (equalButton) {
    equalButton.addEventListener("click", () => {
      let calculation = result.value;
      result.value = eval(calculation);
    });
  }
}
