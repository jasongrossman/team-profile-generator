jest.mock = require('../lib/Engineer');
const Engineer = require('../lib/Engineer');


test('checks to see if there is an Engineer Object', () => {
    const engineer = new Engineer('Jason');
    expect(Engineer.name).toBe('Jason');
    expect(Engineer.id).toEqual(expect.any(Number));
    expect(Engineer.github).toEqual(expect.any(String));
});