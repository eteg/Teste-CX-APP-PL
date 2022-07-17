import { errorHandlerViaCEP } from "../validators/viaCEP.js";

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
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            errorHandlerViaCEP(
              "Houve algum erro ao adicionar o comentário. Tente novamente mais tarde."
            );
          });
      });
    })
    .catch((e) => {
      errorHandlerViaCEP("CEP não encontrado");
    });
};
