const {response, request} = require('express');

const usuariosGet = (req= request,res = response)=>{
    const {q, nombre, apikey} = req.query
    res.json({
        msg: 'get API - controlador',
        q,nombre,apikey
    });
}

const usuarioPost  = (req,res)=>{
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,edad
    });
}

const usuarioPut = (req,res)=>{
    const id = req.params.id;
    
    res.json({
        msg: 'put API - controlador',
        id
    });
}


const usuarioDelete = (req,res)=>{
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
}