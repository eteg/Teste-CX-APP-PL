const API = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

const getAddress = async (cep) => {
    const response = await API.get(`${cep}/json/`);
    
    const { data } = response;
    
    return { cep, address: data }
}

const setAddress = ({ address: { logradouro, complemento, bairro, localidade, uf } }) => {

    return `
        Logradouro: ${logradouro} 
        Complemento: ${complemento} 
        Bairro: ${bairro} 
        Cidade: ${localidade} 
        Estado: ${uf}
    `
}

const CepService = {
    getAddress,
    setAddress
}

export default CepService;