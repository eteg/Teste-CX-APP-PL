import {
  CLASS_INPUT_ERROR,
  CLASS_INPUT_SUCCESS,
} from "../constants/gardenCss.js";
import { STATE } from "../constants/state.js";

export const handleMessageViaCEP = (message, state) => {
  const messageZip = document.getElementById("message-zip-error");
  const zipCodeText = document.getElementById("zipcode-text");

  if (state === STATE.ERROR) {
    zipCodeText.className = CLASS_INPUT_ERROR;
    messageZip.className = messageZip.className.replace("success", "error");
  }

  if (state === STATE.SUCCESS) {
    zipCodeText.className = CLASS_INPUT_SUCCESS;
    messageZip.className = messageZip.className.replace("error", "success");
  }

  messageZip.innerText = message;
  messageZip.className = messageZip.className.replace("hidden", "show");
};
