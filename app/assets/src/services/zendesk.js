const client = ZAFClient.init();

export const getRequesterTickets = async (requesterId) => {
  try {
    return client.request(
      `/api/v2/search.json?query=type:ticket requester_id:${requesterId}`
    );
  } catch (e) {
    return;
  }
};

export const getTicket = async () => {
  const { ticket } = await client.get("ticket");

  return ticket;
};
