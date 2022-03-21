const getListTickets = async ({ data }) => {

    return await data.map(Oneticket => {
        const { url, raw_subject, description } = Oneticket;

        const linkTicket = url.replace('api/v2', 'agent').split('.json')[0];

        console.log(Oneticket)
        console.log(linkTicket)

        return {
            title: raw_subject ? raw_subject : description,
            link: linkTicket
        }

    });

}

const setListTickets = (listTickets) => {
    console.log(listTickets)
    const parent_element = document.getElementById('listTickets');
    const container = document.querySelector('.ticket');

    listTickets.forEach(({ title }, i) => {

        container.classList.remove('hidden')
        container.classList.add('flex')

        const [OneticketLink] = container.children;

        OneticketLink.innerText = `${i + 1}. ${title}`;

        parent_element.append(container);
    })
}

const ListTickets = {
    getListTickets,
    setListTickets
}

export default ListTickets;