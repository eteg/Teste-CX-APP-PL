import Core from './Core.js';
import Tickets from './Tickets.js';

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async (requester_id) => {
  const { GetAddress, NewComment } = Core;
  const { getTickets, setTickets} = Tickets;

  const ticketsRequest = await client.request(`/api/v2/search.json?query=type:ticket requester_id:${requester_id}`);
  const tickets = await getTickets(ticketsRequest);

  setTickets(tickets);

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
