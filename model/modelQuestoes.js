'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questaoModel = new schema({
    numQuestao: { type: Number, required: true },
    titulo: { type: String, required: true},
    alternativa: { type: String, required: true}
    }, { versionKey: false });


module.exports = mongoose.model('qustoes', questaoModel);
