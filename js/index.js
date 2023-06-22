import { classAdd, classRemove } from "./functions.js";
import { addNumberButtonListeners } from "./numberButtons.js";
import { addOperatorButtonListeners } from "./operatorButtons.js";
import { addEqualButtonListener } from "./equalButton.js";
import {
  addClearButtonListener,
  addDeleteButtonListener,
} from "./utilityButtons.js";

const result = document.querySelector(".result");
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");

if (result && clearBtn && deleteBtn) {
  addNumberButtonListeners(result);
  addOperatorButtonListeners(result);
  addEqualButtonListener(result);
  addClearButtonListener(result, clearBtn);
  addDeleteButtonListener(result, deleteBtn);
}
