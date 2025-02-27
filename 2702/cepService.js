class Service {
    async _fetchData(url) {
        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error('api call failed');
            }
            const res = await req.json();
            return [true, res];
        } catch (error) {
            return [false, error.message];
        }
    }
}

class Cep {
    async getCep(i) {
        const { cep } = i.params;
        const fetchData = new Service();
        let [ok, reply] = await fetchData._fetchData(`https://viacep.com.br/ws/${cep}/json`);
        if (!ok) {
            return [false, reply];
        }
        return [true, reply];
    }
}

module.exports = Cep;
