export function addEqualButtonListener(result) {
  const equalButton = document.querySelector(".equal");

  if (equalButton) {
    equalButton.addEventListener("click", () => {
      let calculation = result.value;
      console.log(result.value);
      result.value = eval(calculation);
    });
  }
}
