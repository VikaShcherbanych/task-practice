const createArrayWithoutDuplicates = require('../createArrayWithoutDuplicates');

describe('new array does not have duplicate values', () => {
    test('createArrayWithoutDuplicates([1, 1, 3, 3], [2,2,2,4] should return [1,3,2,4]', () => {
        expect(createArrayWithoutDuplicates([1, 1, 3, 3], [2,2,2,4])).toEqual([1,3,2,4]);
    })
    test('createArrayWithoutDuplicates([1, 1, 3, 3], [18, 1, 1]) should return [1,3,18]', () => {
        expect(createArrayWithoutDuplicates([1, 1, 3, 3], [18, 1, 1])).toEqual([1,3,18]);
    })
    test(`createArrayWithoutDuplicates(['a', 'b', 'c', 'a', 'd'], ['a', 'b', 'm'] should return ['a', 'b', 'c', 'd', 'm']`, () => {
        expect(createArrayWithoutDuplicates(['a', 'b', 'c', 'a', 'd'], ['a', 'b', 'm'])).toEqual(['a', 'b', 'c', 'd', 'm']);
    })
    test('createArrayWithoutDuplicates([1, 2, 2, 5, 5, 8], []) should return [1,2,5,8]', () => {
        expect(createArrayWithoutDuplicates([1, 2, 2, 5, 5, 8], [])).toEqual([1, 2, 5, 8]);
    })
    test('createArrayWithoutDuplicates([], []) should return []', () => {
        expect(createArrayWithoutDuplicates([], [])).toEqual([]);
    })
    test('createArrayWithoutDuplicates([]) should return error', () => {
        expect(createArrayWithoutDuplicates([]).message).toBe("The arguments of the function are incorrect");
    })
})