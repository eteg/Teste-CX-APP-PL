import {
  CLASS_INPUT_PRIMARY,
  CLASS_INPUT_ERROR,
  CLASS_INPUT_SUCCESS,
} from "../constants/gardenCss.js";

import { CEP_PATTERN, DIGIT_PATTERN } from "../constants/regex.js";

export const validZipCode = () => {
  const re_rep = new RegExp(CEP_PATTERN);
  const messageZipError = document.getElementById("message-zip-error");
  const zipCodeText = document.getElementById("zipcode-text");
  messageZipError.className = messageZipError.className.replace(
    "success",
    "error"
  );

  if (zipCodeText.value && zipCodeText.value.length < 8) {
    zipCodeText.className = CLASS_INPUT_PRIMARY;
    messageZipError.innerText = "";

    return;
  } else {
    zipCodeText.className = CLASS_INPUT_ERROR;
    messageZipError.innerText = "CEP inválido";
  }

  if (zipCodeText.value && !re_rep.test(zipCodeText.value)) {
    zipCodeText.className = CLASS_INPUT_ERROR;
    messageZipError.className = messageZipError.className.replace(
      "hidden",
      "show"
    );
  } else {
    document.getElementById("zipcode-text").className = CLASS_INPUT_SUCCESS;
    messageZipError.className = messageZipError.className.replace(
      "show",
      "hidden"
    );
  }
};

export const addZipCodeMask = () => {
  const zipCodeText = document.getElementById("zipcode-text");
  const zipCodeTextValue = zipCodeText.value;
  const re_digit = new RegExp(DIGIT_PATTERN);

  if (
    zipCodeTextValue &&
    re_digit.test(zipCodeTextValue) &&
    zipCodeTextValue.length === 8
  ) {
    zipCodeText.value = `${zipCodeTextValue.slice(
      0,
      5
    )}-${zipCodeTextValue.slice(5)}`;
  } else {
    zipCodeText.value = zipCodeTextValue.replace("-", "");
  }
};
