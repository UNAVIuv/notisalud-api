const mongoose = require("mongoose");


const notasSchema = mongoose.Schema({
    fecha: {
      type: String,
      required: true,
    },
    nombrenota: {
      type: String,
      required: true
    },
    autor: {
      type: String,
      required: true
    },
    estamento: {
        type: String,
        required: true
    },
    escuela: {
        type: String,
        required: true
    },
    programa: {
        type: String,
        required: true
    },
    cargo_directivo: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    },
    tipo_publicacion: {
        type: String,
        required: true
    },
    enlace: {
        type: String,
        required: true
    }

  });

  module.exports = mongoose.model('Notas', notasSchema);