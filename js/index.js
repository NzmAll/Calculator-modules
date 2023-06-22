import { classAdd, classRemove } from "./functions.js";

import { addOperatorButtonListeners } from "./operatorButtons.js";
import { addEqualButtonListener} from "../js/equalButton.js";
import {
  addClearButtonListener,
  addDeleteButtonListener,
} from "./utilityButtons.js";
import { addNumberButtonListeners } from "./numberButtons.js";
const result = document.querySelector(".result");
console.log(result);
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-delete");

   addNumberButtonListeners(result);
  addOperatorButtonListeners(result);
  addEqualButtonListener(result)
  addClearButtonListener(result, clearBtn);
  addDeleteButtonListener(result, deleteBtn);

