const Employee = require('../lib/Employee');

test('checks if there is an employee Object', () => {
    const employee = new Employee('Fred', 1, 'fred@gmail.com');
    expect(employee.getName()).toBe('Fred');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('fred@gmail.com');
});