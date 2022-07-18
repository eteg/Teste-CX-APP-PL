import { handleMessageViaCEP } from "../validators/viaCEP.js";
import { STATE } from "../constants/state.js";

const generateComment = (viaCEPData) => {
  return `
    <strong>Endereço</strong>
    <br><strong>Logradouro</strong>: ${viaCEPData.logradouro}
    <br><strong>Bairro</strong>: ${viaCEPData.bairro}
    <br><strong>Cidade</strong>: ${viaCEPData.localidade}
    <br><strong>UF</strong>: ${viaCEPData.uf}
    <br><strong>DDD</strong>: ${viaCEPData.ddd}
    <br><strong>CEP</strong>: ${viaCEPData.cep}
    `;
};

export const viaCEP = () => {
  const client = ZAFClient.init();
  const zipCode = document
    .getElementById("zipcode-text")
    .value.replace("-", "");

  if (!zipCode || zipCode.length < 8) {
    handleMessageViaCEP("CEP inválido", STATE.ERROR);
    return;
  }

  const url = `https://viacep.com.br/ws/${zipCode}/json/`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.erro) {
        throw new Error();
      }

      client.get("ticket").then((tktProms) => {
        client
          .request({
            url: `/api/v2/tickets/${tktProms.ticket.id}`,
            method: "PUT",
            contentType: "application/json",
            secure: true,
            httpCompleteResponse: true,
            data: JSON.stringify({
              ticket: {
                comment: {
                  html_body: generateComment(data),
                },
              },
            }),
          })
          .then((res) =>
            handleMessageViaCEP(
              "Comentário adicionado com sucesso!",
              STATE.SUCCESS
            )
          )
          .catch((e) =>
            handleMessageViaCEP(
              "Houve algum erro ao adicionar o comentário. Tente novamente mais tarde",
              STATE.ERROR
            )
          );
      });
    })
    .catch((e) => handleMessageViaCEP("CEP não encontrado", STATE.ERROR));
};
