const Engineer = require ('../lib/Engineer');
const engineer = new Engineer('james','123','james@gmail.com','jamshedsadullaev');
 test('test',()=> {
    expect(engineer.name).toBe('james');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('james@gmail.com');
    expect(engineer.github).toBe('jamshedsadullaev');
 });
 test('it should get the name from the getName() method', ()=>{
    expect(engineer.getName()).toBe('james');
});
test('it should get the id from the getId() method',() => {
    expect(engineer.getId()).toBe('123');
 });
 test('it should get the email from the getEmail() method', ()=>{
    expect(engineer.getEmail()).toBe('james@gmail.com');
 });
 test('it should get the github account from the getGithub() method', ()=>{
    expect(engineer.getGithub()).toBe('jamshedsadullaev');
 });
 test('it should get the role from the getRole() method',()=>{
    expect(engineer.getRole()).toBe('Engineer');
 });