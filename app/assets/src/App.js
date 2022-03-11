import Main from './Main.js';

let client = ZAFClient.init();

client.on('app.registered', (e) => {
  client.invoke('resize', { width: "100%", height: "130px" });
});

const data = await client.get(
  [
    'ticket.id',
    'ticket.requester.id'
  ]
);

const ticket_id = data['ticket.id'];
const ticket_requester_id = data['ticket.requester.id']

client.on('publish', comment => client.request({
  type: 'PUT',
  url: `/api/v2/tickets/${ticket_id}.json`,
  data: {
    ticket: {
      comment: {
        body: comment,
      },
    }
  }
}));

Main(ticket_requester_id);