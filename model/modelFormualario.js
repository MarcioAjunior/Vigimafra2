'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formularioModel = new schema({
    nomeFormulario: { type: String, required: true, trim : true },
    descricao: { type: String, required: true, default : ''},
    questoes: {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'questoes' },
      dataCriacao: { type: Date, default: Date.now }
    }, { versionKey: false });


module.exports = mongoose.model('formularios', formularioModel);
