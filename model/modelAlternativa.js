'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questaoModel = new schema({
    //rever valor default
    tituloAlternativa: { type: String, required: true},
    valor: { type: Number, required: true, defaulf : Number}
    }, { versionKey: false });


module.exports = mongoose.model('qustoes', questaoModel);
