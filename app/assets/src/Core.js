import { viaCEP } from "./services/viaCEP.js";
import { getRequesterTickets, getTicket } from "./services/zendesk.js";
import { generateList } from "./services/listTickets.js";

import { validZipCode, addZipCodeMask } from "./validators/zipCode.js";

const Core = {
  validZipCode,
  addZipCodeMask,
  viaCEP,
  getRequesterTickets,
  getTicket,
  generateList,
};

export default Core;
