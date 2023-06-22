export  function addNumberButtonListeners(result) {
  const numButtons = document.querySelectorAll(".num");

  numButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("working");
      console.log("working");
      if (result.value === "0") {
        result.value = "";
      }
      result.value += button.innerText;
    });
  });
}
