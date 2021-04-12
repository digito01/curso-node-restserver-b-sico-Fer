const { response, request } = require('express');

  const usuariosGet = (req = request, res = response) =>{

    const { q, nombre = "no name", apikey, page=1, limit} = req.query

    res.json({
        msg: 'get API - controlador',
        q, 
        nombre, 
        apikey, 
        page, 
        limit
    });
  }

  const usuariosPost = (req, res = response) =>{

    const body = req.body;
    
    res.json({
        msg: 'post API - controlador',
        body
    });
  }


  const usuariosPut = (req, res = response) =>{

    const id = req.params.id

    res.status(201).json({
        msg: 'put API - controlador',
        id
    });
  }

  
  const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'delete API - controller'
    });
  }

  const usuariosPatch = (req, res = response) =>{
    res.json({
        msg: 'Patch API - controller'
    });
  }

  
  module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
  }