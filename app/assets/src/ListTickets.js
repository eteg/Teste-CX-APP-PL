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

const ListTickets = {
    getListTickets,
}

export default ListTickets;