const exp = require('constants');
// const { it } = require('node:test');
const Employee = require('../lib/Employee');
const employee =new Employee('james','123','james@gmail.com');

test('it should output constrctor values for employee', ()=> {
    expect(employee.name).toBe('james');
    expect(employee.email).toBe('james@gmail.com');
    expect(employee.id).toBe('123');
});

test('it should get the name from the getName() method', ()=>{
    expect(employee.getName()).toBe('james');
});
test('it should get the id from the getId() method',() => {
    expect(employee.getId()).toBe('123');
 });
 test('it should get the email from the getEmail() method', ()=>{
    expect(employee.getEmail()).toBe('james@gmail.com');
 });
 test('it should get the role from the getRole() method',()=>{
    expect(employee.getRole()).toBe('Employee');
 });