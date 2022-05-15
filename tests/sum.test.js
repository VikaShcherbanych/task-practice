const sum = require('../sum')

describe('math operation - sum', () => {
    test('should add 1 to 2 and return 3', () => {
        expect(sum(1,2)).toBe(3)
    })
})