const Emplopyee = require('./Employee');
 
class Intern extends Emplopyee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school =school;
        this.title="Intern";
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;