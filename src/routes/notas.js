const express = require("express");
const notasSchema = require("../models/notas")

const { searchNotas, searchTipo } = require('../controllers/notas');


const router = express.Router();

router.get('/notassrc', searchNotas);
router.get('/tiposrc', searchTipo);



router.post("/notas",  (req,res) => {
    res.send("crear notas");
});

// recibir todas las notas
router.get("/notas", (req, res) => {
  const variable = new Date().getFullYear();
  const patron = `^${variable}`;

const filtros = {
  fecha: { $regex: new RegExp(patron), $options: 'i' }
};

    notasSchema
      .find(filtros)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


// BORRAR UNA NOTA
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    notasSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  // ACTUALIZAR UNA NOTA
  router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    notasSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


module.exports = router;