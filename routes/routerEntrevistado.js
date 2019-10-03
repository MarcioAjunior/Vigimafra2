'use strict'

const express = require('express')
const router = express.Router()
// const controller = require('../controllers/produto-controller') controller de entrevistado
const auth = require('../bin/authentication')// autenticate

// let _ctrl = new controller()

//GET
router.get('/', auth, _ctrl.get)

//GET por ID
router.get('/:id', auth, _ctrl.getById)

// POST
router.post('/', auth, _ctrl.post)

//PUT
router.put('/:id', auth, _ctrl.put)

//DELETE
router.delete('/:id', auth, _ctrl.delete)

module.exports = router