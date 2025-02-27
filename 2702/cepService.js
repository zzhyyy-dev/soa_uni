class Service {
    async getCep(i) {
        const { cep } = i.params;
        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
            if (!res.ok) {
                throw new Error('Não foi possível obter o CEP');
            }
            const address = await res.json();
            return [true, address];
        } catch (error) {
            return [false, error.message];
        }
    }
}

module.exports = Service;
