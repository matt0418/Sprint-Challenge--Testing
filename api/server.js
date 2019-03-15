const express = require('express')
const server = express()
const Games = require('../games/gamesHelper')
server.use(express.json())

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'We Working' })
})

server.post('/games', async (req,res) => {
    const { title, genre} = req.body
    if (!title || !genre) {
       return res.status(422).json({message: "Please provide all fields"})
    } 
    try {
        const game = Games.add(req.body)
        return res.status(201).json(game)
    } catch(error) {
        res.status(500)
    }
})

server.get('/games', async (req, res) => {
    try {
        const games = await Games.getAll()
        return res.status(200).json(games)
    } catch(error) {
        console.log(error)
        return res.status(500).json(error)
    }
})

server.get('/games/:id', async (req, res) => {
    const id = req.params.id
    try {
        const game = await Games.getById(id)
        if (game) {
            return res.status(200).json(game)
        } else {
            return res.status(404).json({ message: 'No game with this id exists' })
        }
    } catch(error) {
        res.status(500)
    }
})

server.delete('/games/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deleted = await Games.remove(id)
        if(deleted > 0) {
            return res.status(204).json(deleted)
        } else {
            return res.status(404).json({ message: 'No such game exists' })
        }
    } catch(error) {
        res.status(500)
    }
})

module.exports = server