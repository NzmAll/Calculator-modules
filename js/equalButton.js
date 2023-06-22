export function addEqualButtonListener(result) {
  const equalButton = document.querySelector(".equal-btn");

  equalButton.addEventListener("click", () => {
    let calculation = result.value;
    result.value = eval(calculation);
  });
}
