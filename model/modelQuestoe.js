'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questaoModel = new schema({
    numQuestao: { type: Number, required: true },
    titulo: { type: String, required: true},
    alternativas: {
        type: mongoose.Schema.Types.ObjectId,
      ref: 'alternativas' },
      dataCriacao: { type: Date, default: Date.now }
},{ versionKey: false });


module.exports = mongoose.model('qustoes', questaoModel);
