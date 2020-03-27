const connection = require('../database/connection');
const crypto = require('crypto');

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

        // gera 4 bytes de caracteres hexadecimais
        const id = crypto.randomBytes(4).toString('HEX');
    
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