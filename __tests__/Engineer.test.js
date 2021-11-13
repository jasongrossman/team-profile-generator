const Engineer = require('../lib/Engineer');

test('checks if there is an Engineer Object', () => {
    const engineer = new Engineer('Gord', 2, 'gord@gmail.com', 'GitHubGord');
    expect(engineer.getName()).toBe('Gord');
    expect(engineer.getId()).toBe(2);
    expect(engineer.getEmail()).toBe('gord@gmail.com');
    expect(engineer.getGithub()).toBe('GitHubGord');
    expect(engineer.getRole()).toBe('Engineer');
});