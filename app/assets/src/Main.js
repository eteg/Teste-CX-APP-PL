import Core from './Core.js';

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const App = document.getElementById('app');

  const _submit = document.getElementById('_submit');

  _submit.onclick = async (event) => {
    event.preventDefault();

    const { GetAddress, NewComment } = Core;

    const data = await GetAddress(); 

    const comment = NewComment(data)

    client.trigger('publish', comment);

    let appBody = comment;

    // Write App
    App.innerHTML = appBody;
  }



};

export default Main;
