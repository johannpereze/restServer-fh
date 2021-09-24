const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  //Ejemplo de peticion: http://localhost:8080/api/usuarios?nombre=sebas&apellido=perez&pagina=1&limit=5
  const {nombre, apellido, pagina = 1, limit = 50} = req.query  //Es recomendable desestructurar y poner valores por defecto para que no se rompa
  
  res.json({
    msg: "get API controlador",
    nombre, apellido, pagina, limit
  });
};

const usuariosPost = (req = request, res = response) => {
  const {nombre, edad} = req.body; //Esta desestructiración sirve para tambien ignorar data innecesaria que venga en el body
  res.json({
    msg: "put API", 
    nombre, edad 
  });
};

const usuariosPut = (req = request, res = response) => {

  const id = req.params.id

  res.json({
    msg: "post API", id
  });
};

const usuariosDelete = (req = request, res = response) => {
  res.json({
    msg: "delete API",
  });
};
const usuariosPatch = (req = request, res = response) => {
  res.json({
    msg: "patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
