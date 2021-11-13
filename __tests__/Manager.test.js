const Manager = require('../lib/Manager');

test('checks if there is an Engineer Object', () => {
    const manager = new Manager('Gord', 2, 'gord@gmail.com', 'GitHubGord');
    expect(manager.getName()).toBe('Gord');
    expect(manager.getId()).toBe(2);
    expect(manager.getEmail()).toBe('gord@gmail.com');
    expect(manager.getOfficeNumber()).toBe('GitHubGord');
    expect(manager.getRole()).toBe('Manager');
});