import Core from './Core.js';

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
  const { GetAddress, NewComment } = Core;

  const _submit = document.getElementById('_submit');
  const _mgsErro = document.getElementById('_mgsErro');

  _submit.onclick = async (event) => {
    event.preventDefault();

    const _form = document.getElementById('_form');

    const cepValue = document.getElementById('_cepInput');

    const data = await GetAddress();

    if (!data === false) {
      const comment = NewComment(data)

      client.trigger('publish', comment);

      _mgsErro.innerText = '';

      cepValue.setAttribute('class', 'default');

      _form.reset();

    } else {
      
      cepValue.setAttribute('class', 'invalid');

      _mgsErro.innerText = 'Por favor, informe um CEP válido.';
    };

  }

};

export default Main;
