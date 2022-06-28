import { inserirvilao, ListarTodosvilaos } from "../repository/vilaorep.js"

import { Router } from "express"



const server = Router();

server.post('/vilao', async (req, resp) =>{
    try{
        const nome = req.body;
        const resposta = await inserirvilao (nome);
        resp.send (resposta);
    }

    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})




server.get('/vilao', async (req, resp) => {
    try {
        const resposta = await ListarTodosvilaos();
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;