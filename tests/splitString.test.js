const splitString = require('../splitString');
const string = '';
describe('SplitString function', () => {
    test(`should function called without argument and return error 'Invalid argument'`, () => {
        expect(() => splitString()).toThrowError(new Error("Invalid argument"));
    })
    test(`should function called with argument 'cat' and return ['c', 'a', 't']`, () => {
        expect(splitString('cat')).toEqual(['c', 'a', 't']);
    })
})