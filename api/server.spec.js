require('dotenv').config()
const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

describe('server', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('Get /games', () => {
        it('should return status 200', async() => {
            const res = await request(server).get('/games')
            expect(res.status).toBe(200)
        })
        it('should return JSON', async () => {
            const res = await request(server).get('/games')
            expect(res.type).toBe('application/json')
        })
        it('should return data in an array', async() => {
            const res = await request(server).get('/games')
            expect(Array.isArray(res.body)).toBe(true)
        })
    })
    describe('Post /games', () => {
        afterEach(async () => {
            await db('games').truncate()
        })
        it('should return status 201', async() => {
            const res = await request(server).post('/games').send({title:'what', genre:'what',release_year:2000})
            expect(res.status).toBe(201)
        })
        it('should return status 422 with missing title and genre', async () => {
            const res = await request(server).post('/games').send({title:'hhh', release_year:2000})
            expect(res.status).toBe(422)
        })
    })
    describe('Get /games/:id', () => {
        it('should return status 404', async() => {
            const res = await request(server).get('/games/1')
            expect(res.status).toBe(404)
        })
        it('should return status 201', async() => {
            const res = await request(server).post('/games').send({title:'what', genre:'what',release_year:2000})
            expect(res.status).toBe(201)
        })
        it('should return status 200', async() => {
            const res = await request(server).get('/games/1')
            expect(res.status).toBe(200)
        })
    })
    describe('Delete /games/:id', () => {
        it('should return status 204', async() => {
            const res = await request(server).delete('/games/1')
            expect(res.status).toBe(204)
        })
        it('should return status 404', async() => {
            const res = await request(server).delete('/games/1')
            expect(res.status).toBe(404)
        })
    })
})
