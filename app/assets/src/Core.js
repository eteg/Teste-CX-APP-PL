import CepService from './CepService.js';

const GetAddress = async () => {
  const { getAddress } = CepService;
  const { address, cep } = await getAddress('69104015');
  

  return { address, cep };
}

const NewComment = ({ cep, address }) => {

  const { setAddress } = CepService;

  return ` Olá, segue os dados referentes ao CEP ${cep}\n${setAddress({ cep, address })}`;
}



const Core = {
  GetAddress,
  NewComment
};

export default Core;
