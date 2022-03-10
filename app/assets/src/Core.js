import CepService from './CepService.js';

const GetAddress = async () => {
  const { getAddress } = CepService;

  const cepValue = document.getElementById('_cepInput');

  if (cepValue.value === '') {
    return false;
  }

  const { address, cep } = await getAddress(cepValue.value.replace('-', ''))

  if(address.erro){
    return false;
  }

  return { address, cep };
}

const NewComment = ({ cep, address }) => {

  const { setAddress } = CepService;

  return ` Olá, segue os dados relacionados ao CEP ${cep}\n${setAddress({ cep, address })}`;
}            

const Core = {
  GetAddress,
  NewComment
};

export default Core;
