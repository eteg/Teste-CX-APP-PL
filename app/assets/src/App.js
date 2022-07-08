// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

let options = {
  url: '/api/v2/tickets.json',
  type: 'GET'
};

client.request(options).then((results) => {
  console.log("Example 1 call results:", results);
});

function buttomClick() {
ButtomList.addEventListener('click', () => {
  console.log("teste")
})
}
// Create screen context
import Main from "./Main.js";
Main();
buttomClick()
