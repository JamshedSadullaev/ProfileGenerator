// const { exportAllDeclaration } = require('@babel/types');
// const { default: test } = require('node:test');
const Manager = require ('../lib/Manager');
const manager = new Manager('james','123','james@gmail.com','321');
 test('test',()=> {
    expect(manager.name).toBe('james');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('james@gmail.com');
    expect(manager.officeNumber).toBe('321');
 });
 test('it should get the name from the getName() method', ()=>{
    expect(manager.getName()).toBe('james');
});
test('it should get the id from the getId() method',() => {
    expect(manager.getId()).toBe('123');
 });
 test('it should get the email from the getEmail() method', ()=>{
    expect(manager.getEmail()).toBe('james@gmail.com');
 });
 test('it should get the officeNumber from the getofficeNumber() method', ()=>{
    expect(manager.getOfficeNumber()).toBe('321');
 });
 test('it should get the role from the getRole() method',()=>{
    expect(manager.getRole()).toBe('Manager');
 });