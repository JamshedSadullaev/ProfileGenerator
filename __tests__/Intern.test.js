const Intern = require ('../lib/Intern');
const intern = new Intern('james','123','james@gmail.com','University');
 test('test',()=> {
    expect(intern.name).toBe('james');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('james@gmail.com');
    expect(intern.school).toBe('University');
 });
 test('it should get the name from the getName() method', ()=>{
    expect(intern.getName()).toBe('james');
});
test('it should get the id from the getId() method',() => {
    expect(intern.getId()).toBe('123');
 });
 test('it should get the email from the getEmail() method', ()=>{
    expect(intern.getEmail()).toBe('james@gmail.com');
 });
 test('it should get the school name from the getSchool() method', ()=>{
    expect(intern.getSchool()).toBe('University');
 });
 test('it should get the role from the getRole() method',()=>{
    expect(intern.getRole()).toBe('Intern');
 });