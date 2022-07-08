import Core from "./Core.js";
const ButtomList = document.querySelector('#criar-tarefa');
const client = ZAFClient.init();
let settings;

function buttomClick() {
  ButtomList.addEventListener('click', () => {
    console.log(client)
  })
  }

buttomClick()

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById("app");
  let appBody = `<div id="main-content"></div>`;

  // Write App
  App.innerHTML = appBody;
};

export default Main;
