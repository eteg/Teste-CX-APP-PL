import { CLASS_INPUT_ERROR } from "../constants/gardenCss.js";

export const errorHandlerViaCEP = (message) => {
  const messageZipError = document.getElementById("message-zip-error");
  const zipCodeText = document.getElementById("zipcode-text");

  zipCodeText.className = CLASS_INPUT_ERROR;
  messageZipError.innerText = message;
  messageZipError.className = messageZipError.className.replace(
    "hidden",
    "show"
  );
};
