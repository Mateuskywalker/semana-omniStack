const connection = require('../database/connection');
const generateRandomId = require('../utils/generateRandomId');

module.exports = {
    async index(req, res) {
        try {
            const ongs = await connection('ongs').select('*');
            return res.json(ongs);
        }catch(err) {
            console.log(err);
            // return res.sendStatus(500);
        }
    },
    async create(req, res){
        const {name, email, whatsapp, city, uf} = req.body;

        const id = generateRandomId();

        try {
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp, 
                city,
                uf
            });
        }catch(err) {
            console.log('Erro ao inserir a ONG na tabela', err);
        }
    
        return res.json({ id });
    }
};