const Emplopyee = require('./Employee');
class Manager extends Emplopyee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.title="Manager";

        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;