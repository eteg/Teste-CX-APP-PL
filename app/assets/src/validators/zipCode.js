const validZipCode = () => {
    const PATTERN ='^[0-9]{5}(-)?[0-9]{3}$';
    const re = new RegExp(PATTERN);

    const messageZipError = document.getElementById("message-zip-error");
    const zipCodeText = document.getElementById("zipcode-text");

    if (zipCodeText.value && !re.test(zipCodeText.value)) {
        zipCodeText.className = "c-txt__input c-txt__input--error";
        messageZipError.className = messageZipError.className.replace("hidden", "show");
    } else {
        document.getElementById("zipcode-text").className = "c-txt__input c-txt__input--success";
        messageZipError.className = messageZipError.className.replace("show", "hidden");
    }
}

const addZipCodeMask = () => {
    const zipCodeText = document.getElementById("zipcode-text");
    const zipCodeTextValue = zipCodeText.value;

    if (zipCodeTextValue && /^-?\d+$/.test(zipCodeTextValue) && zipCodeTextValue.length === 8) {
        zipCodeText.value = `${zipCodeTextValue.slice(0, 5)}-${zipCodeTextValue.slice(5)}`;
    } else {
        zipCodeText.value = zipCodeTextValue.replace('-', '');
    }
}
