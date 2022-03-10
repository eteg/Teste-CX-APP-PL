const getTickets = async ({ results }) => {

    return await results.map(ticket => {
        const { url, raw_subject, description } = ticket;

        const link = url.replace('api/v2', 'agent').split('.json')[0];

        return {
            title: raw_subject ? raw_subject : description,
            link: link
        }

    });

}

const setTickets = (tickets) => {
    const container = document.getElementById('_tickets');
    const ticketTemplate = document.querySelector('.ticket');

    tickets.forEach(({title, link}, index) => {
        const ticket = ticketTemplate.cloneNode(true);
        
        ticket.style.display = 'flex';

        const [ ticketLink ] = ticket.children;
        
        ticketLink.setAttribute('href', link);
        ticketLink.setAttribute('target', '_blank');
        ticketLink.innerText = `${index + 1}. ${title}`;

        container.append(ticket);
    })
}


const Tickets = {
    getTickets,
    setTickets
}

export default Tickets;