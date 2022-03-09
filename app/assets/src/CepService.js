const CepService = {
    getAddress: async (cep) => {

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
            method: 'GET'
        });

        return response.json();
    },

    setAddress: async (address) => {

        return `
            <div>
                Logradouro: ${address.logradouro} 
                Complemento: ${address.complemento} 
                Bairro: ${address.bairro} 
                Cidade: ${address.localidade} 
                Estado: ${address.uf}
            </div>
        `
    }
}


export default CepService;