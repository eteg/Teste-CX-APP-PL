import Core from "./Core.js";

const client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async (requester_ticket) => {
  const tickets = await client.request(`/api/v2/search.json?query=type:ticket requester_id:${requester_ticket}`);
  console.log(tickets)

  const { GetAddressByZipCode, CommentNewTicket } = Core;

  let submit = document.getElementById('submit');

  submit.onclick = async (event) => {
    event.preventDefault();

    const form = document.getElementById('form');

    const data = await GetAddressByZipCode();

    if (!data === false) {

      const ticket_comment = CommentNewTicket(data)

      client.trigger('publish', ticket_comment);

      form.reset();

    }
  }

};

export default Main;
