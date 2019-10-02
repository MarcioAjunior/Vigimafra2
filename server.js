const express = require('express');
const mongoose = require('mongoose');

mongoose.connect

const app = express();
mongoose.connect('mongodb+srv://curso:curso@devunc-marcio-lkpu4.mongodb.net/Marcio', { useUnifiedTopology: true });




app.get('/', (req, res) => {
    res.send('API rodando')
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
    
});