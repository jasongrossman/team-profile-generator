const Intern = require('../lib/Intern');

test('checks if there is an Intern Object', () => {
    const intern = new Intern('Gord', 2, 'gord@gmail.com', 'University');
    expect(intern.getName()).toBe('Gord');
    expect(intern.getId()).toBe(2);
    expect(intern.getEmail()).toBe('gord@gmail.com');
    expect(intern.getSchool()).toBe('University');
    expect(intern.getRole()).toBe('Intern');
});