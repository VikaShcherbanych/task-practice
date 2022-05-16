const getUpperCaseForUserName = require('../getUpperCaseForUser');

describe('GetUpperCaseForUserName', () => {
    test(`should function with argument 'Emma'return 'EMMA'`, () => {
        expect(getUpperCaseForUserName('Emma')).toBe('EMMA')
    })
    test(`should function with argument 'Bob' and return 'The user's name is Bob'`, () => {
        expect(() => getUpperCaseForUserName("Bob")).toThrowError(new Error("The user's name is Bob"));
    })

})