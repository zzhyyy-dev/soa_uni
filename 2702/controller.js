const express = require('express')
const getCep = require('./cepService')
const Cep = require('./cepService')
const app = express()
const PORT = 3000

app.get('/cep/:cep', async (req, res) => {
    const cepService = new Cep();
    let [ok, reply] = await cepService.getCep(req);
    if (!ok) {
        return res.status(500).json({ error: reply });
    }
    res.status(200).json(reply);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
