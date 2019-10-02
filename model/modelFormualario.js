'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formularioModel = new schema({
    nomeFormulario: { type: String, required: true, trim : true },
    descricao: { type: String, required: true}
    }, { versionKey: false });


module.exports = mongoose.model('formularios', formularioModel);
