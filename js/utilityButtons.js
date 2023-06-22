export function addClearButtonListener(result, clearBtn) {
  clearBtn.addEventListener("click", () => {
    result.value = 0;
  });
}

export function addDeleteButtonListener(result, deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    let text = result.value;
    result.value = text.slice(0, -1);
  });
}
