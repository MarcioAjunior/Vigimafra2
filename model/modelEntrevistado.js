'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const entrevistadoModel = new schema({
    numero: { type: Number, required: true},
    foto: { type: String },
    bairro : {type : String, required : true},
    peso : {type : String, required : true},
    altura : {type : String, required : true},
    peso20 : {type : String, required : true},
    escolaridade : {type : String, required : true},
    idade: { type: String, required: true},
    localizacao : {
        latitude : Number,
        longitude : Number
            },
    sexo : { type : String, required : true } ,
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false })

entrevistadoModel.pre('save', next => {
    let agora = new Date()
    if (!this.dataCriacao)
        this.dataCriacao = agora
    next()
});

module.exports = mongoose.model('entrevistados', entrevistadoModel);
