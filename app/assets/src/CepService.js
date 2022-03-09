const API = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

const CepService = {
    getAddress: async (cep) => {

        const response = await API.get(`${cep}/json/`);

        const { data } = response;

        return {
            cep,
            address: data
        };
    },

    setAddress: ({ cep, address }) => {

        return `
            Logradouro: ${address.logradouro} 
            Complemento: ${address.complemento} 
            Bairro: ${address.bairro} 
            Cidade: ${address.localidade} 
            Estado: ${address.uf}
        `
    }
}


export default CepService;