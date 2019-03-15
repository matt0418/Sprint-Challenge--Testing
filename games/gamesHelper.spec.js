const db = require('../data/dbConfig')
const Games = require('./gamesHelper')

describe('Games', () => {
    describe('add()', () => {
        afterEach(async () => {
            await db('games').truncate()
        })
        it('should return the provided game', async() => {
            const game = await Games.add({title:'game', genre:'genre', release_year:2000})
            expect(game.title).toBe('game')
        })
        it('should return an object', async() => {
            const game = await Games.add({title:'another', genre:'another', release_year:2001})
            expect(game).toMatchObject({title:'another', genre:'another', release_year:2001})
        })
    })
    describe('remove()', () => {
        it('should return the number 1', async() => {
            const game = await Games.add({title:'gamejjjj', genre:'genrejjjjj', release_year:2000})
            const deleted = await Games.remove(1)
            expect(deleted).toBe(1)
        })
        it('should return the number zero', async() => {
            const deleted = await Games.remove(1)
            expect(deleted).toBe(0)
        })
    })
})


