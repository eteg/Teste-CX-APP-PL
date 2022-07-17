import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  client.on("app.registered", () => {
    document
      .getElementById("zipcode-text")
      .addEventListener("keyup", Core.addZipCodeMask);

    document
      .getElementById("zipcode-text")
      .addEventListener("keyup", Core.validZipCode);

    document
      .getElementById("zipcode-btn")
      .addEventListener("click", Core.viaCEP);
  });
};

export default Main;
