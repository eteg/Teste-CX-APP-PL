const APIAXIOS = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

// make API call
const getAddressByZipCode = async (cep) => {
    const result = await APIAXIOS.get(`${cep}/json/`);

    const { data } = result;

    return { cep, address: data };
}


// set values ​​to be displayed properly
const setAddressByZipCode = ({ address: { logradouro, complemento, bairro, localidade, uf } }) => {

    const written_address = ` Logradouro: ${logradouro} Complemento: ${complemento} Bairro: ${bairro} Cidade: ${localidade} Estado: ${uf}`;
    return written_address;
}

const ZipCodeService = {
    getAddressByZipCode,
    setAddressByZipCode
}

export default ZipCodeService;