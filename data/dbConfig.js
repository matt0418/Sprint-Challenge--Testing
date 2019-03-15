require('dotenv').config()
const config = require('../knexfile')

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(config[dbEnv])