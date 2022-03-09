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

    setAddress: ({ logradouro, complemento, bairro, localidade, uf }) => {

        return `
            Logradouro: ${logradouro} 
            Complemento: ${complemento} 
            Bairro: ${bairro} 
            Cidade: ${localidade} 
            Estado: ${uf}
        `
    }
}


export default CepService;