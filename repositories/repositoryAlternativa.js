// importando os models
require('../model/modelAlternativa')//model
const base = require('../bin/bases/repository-base')//repository

class usuarioRepository {

    constructor() {
        this._base = new base('alternativas')
    }

    async getAll() {
        return await this._base.getAll()
    }

    async getById(id) {
        return await this._base.getById(id)
    }

    async create(data) {
        return await this._base.create(data)
    }

    async update(id, data) {
        return await this._base.update(id,data)
    }

    async delete(id) {
        return await this._base.delete(id)
    }
}

module.exports = usuarioRepository
