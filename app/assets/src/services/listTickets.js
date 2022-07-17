export const generateList = (listTicket) => {
  const listTicketElement = document.getElementById("ticket-list");

  if (!listTicket || !listTicket.length) {
    listTicketElement.innerHTML =
      '<p class="info">✓ Nenhum ticket anterior encontrado para esse usuário.</p>';
    return;
  }

  let table = `<strong>Últimos tickets encontrados:</strong>
    <table class="c-table">
    <thead>
      <tr class="c-table__row c-table__row--header">
        <th class="c-table__row__cell">ID</th>
        <th class="c-table__row__cell">Título</th>
        <th class="c-table__row__cell">Status</th>
        <th class="c-table__row__cell">Data</th>
      </tr>
    </thead>
    <tbody>
    `;

  listTicket.forEach((tkt) => {
    const tktUrl =
      tkt.url.split(".com/")[0] + ".com" + `/agent/tickets/${tkt.id}`;
    const tktLink = `<a href="${tktUrl}" target="_blank" rel="noopener noreferrer">${tkt.id}</a>`;

    table += `
        <tr class="c-table__row">
          <td class="c-table__row__cell">${tktLink}</td>
          <td class="c-table__row__cell">${tkt.subject}</td>
          <td class="c-table__row__cell">${tkt.status}</td>
          <td class="c-table__row__cell"><small>${new Date(
            tkt.created_at
          ).toLocaleString()}</small></td>
      </tr>
      `;
  });

  table += "</tbody></table>";

  listTicketElement.innerHTML = table;
};
