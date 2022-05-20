const client = ZAFClient.init();

const searchCEP = () => {
  const cep = document.querySelector("#input-cep").value
  
  client.get('ticket')
    .then((res) => {
      let ticket_id = res.ticket.id

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp) => resp.json())
        .then(function (data) {
          const address = data

          const body = {
            ticket: {
              comment: {
                html_body: `<p style="color: red; font-weight: 800; color: #04363c; font-size: 1rem; text-align: center;">Endereço</p>
              <p>${address.logradouro}, ${address.complemento}</p>
              <p>${address.bairro}, ${address.localidade}/${address.uf}</p>
              <p>${address.cep}</p>`
              }
            }
          }

          client.request({
            method: 'PUT',
            url: `/api/v2/tickets/${ticket_id}`,
            contentType: 'application/json',
            data: JSON.stringify(body),
            secure: true
          }).then(function (data) {
            console.log("Ticket update successfully", data)
          }).catch(function (e) {
            console.log(`Error request ${e}`);
          })

        })
        .catch(function (e) {
          console.log(`Error request ${e}`);
        })

    })
    .catch(function (e) {
      console.log(`Error request ${e}`);
    });

};

const listTickets = () => {
  client.get('ticket')
  .then((res) => {
    const id = res.ticket.requester.id

    client.request(`/api/v2/users/${id}/tickets/requested`).then((res) => {
      console.log(res.tickets);
    })
  })
  .catch(function (e) {
    console.log(`Error request ${e}`);
  });
}

const Core = {
  searchCEP,
  listTickets
};

export default Core;
