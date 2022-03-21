// Start client and resize app
let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

const result = await client.get(["ticket.id", "ticket.requester.id"]);

const id_ticket = result['ticket.id'];
const requester_ticketId = result['ticket.requester.id']

client.on('publish', newcomment => client.request({
  type: 'PUT',
  url: `/api/v2/tickets/${id_ticket}.json`,
  data: {
    ticket: {
      comment: {
        body: newcomment,
      },
    }
  }
}));

Main(requester_ticketId);
