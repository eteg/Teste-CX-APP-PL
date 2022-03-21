import ZipCodeService from './ZipCodeService.js';

// getting zip code
const GetAddressByZipCode = async () => {
  const { getAddressByZipCode } = ZipCodeService;

  const zipCodeInput = document.getElementById('zipecodeInput');

  if (zipCodeInput.value === '' || zipCodeInput.value === undefined) {
    return false;
  }

  const { address, cep } = await getAddressByZipCode(zipCodeInput.value.replace('-', ''))

  if (address.erro) {
    return false;
  }

  return { address, cep };
}

// new comment on ticket
const CommentNewTicket = ({ cep, address }) => {

  const { setAddressByZipCode } = ZipCodeService;

  return `Obrigado por utilizar nosso app, confira os dado do CEP ${cep}\n ${setAddressByZipCode({ cep, address })}`;
}

// leaving functions available
const Core = {
  GetAddressByZipCode,
  CommentNewTicket
};

export default Core;
