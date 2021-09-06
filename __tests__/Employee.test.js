
jest.mock = require('../lib/Employee');

test('checks if there is an employee', () => {
    expect.arrayContaining([expect.any(Object)])
})