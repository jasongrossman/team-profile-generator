const Employee = require('../lib/Employee');

test('checks if there is an employee Object', () => {
    const employee = new Employee('Fred', 1, 'fred@gmail.com');
    expect(employee.name).toBe('Fred');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});