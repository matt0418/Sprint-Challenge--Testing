const db = require('../data/dbConfig')

module.exports = {
    getAll,
    add,
    getById
}

function getAll() {
    return db('games')
}

async function add(game) {
    const [id] = await db('games').insert(game)
    return db('games').where({ id }).first()
}

function getById(id) {
    return db('games').where({ id }).first()
}