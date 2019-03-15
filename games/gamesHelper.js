const db = require('../data/dbConfig')

module.exports = {
    getAll,
    add
}

function getAll() {
    return db('games')
}

async function add(game) {
    const [id] = await db('games').insert(game)
    return db('games').where({ id }).first()
}