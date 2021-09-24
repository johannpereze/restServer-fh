const { response } = require("express");

const usuariosGet = (req, res = response) => {
  res.json({
    msg: "get API controlador",
  });
};

const usuariosPut = (req, res) => {
  res.json({
    msg: "put API",
  });
};

const usuariosPost = (req, res) => {
  res.json({
    msg: "post API",
  });
};

const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API",
  });
};
const usuariosPatch = (req, res) => {
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
