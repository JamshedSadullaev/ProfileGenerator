const fs= require("fs");
const inquirer =require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

const util = require("util");
const generateSite  = require("./src/GenerateHtml");
const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamString =``;
// function to generate question 
async function main () {
    try{
        await prompt()
        for (let i = 0; i<teamArray.length; i++){
            teamString = teamString + generateSite.generateTemplate(teamArray[i]);
        }
        let finalHtml = generateSite.generateHtml(teamString);
        writeFileAsync('./dist/index.html',finalHtml);
        console.log();
        console.log("Profile has been created succesfully")
    }catch (err) {
        return console.log(err);
    }
}

async function prompt () {
    // question goes here 
    let genQuestion = "";
    do{
        try{
            let response = await inquirer.prompt([
                {
                    type:'input',
                    name:'name',
                    message:'What is your name?',
                },
                {
                    type:'input',
                    name:'id',
                    message:'What is your ID?',
                },
                {
                    type:'input',
                    name:'email',
                    message:'What is your email?',
                },
                {
                    type:'list',
                    name:'role',
                    message:'What is your role?',
                    choices:["Engineer","Intern","Manager"],
                },
            ]);
            let response2 =""
            if(response.role==="Engineer"){
                response2 = await inquirer.prompt([{
                    type:'input',
                    name:'name',
                    message:'What is the employees github name',
                }, ]);
                const engineer = new Engineer(response.name,response.id,response.email,response2.name);
                teamArray.push(engineer);
            }else if (response.role ==="Manager"){
                response2 =await inquirer.prompt ([{
                    type:'input',
                    name:'name',
                    message:'What is the office number?',
                }, ]);
                const manager = new Manager(response.name,response.id,response.email,response2.name);
                teamArray.push(manager);
            }else if (response.role ==="Intern"){
                response2 =await inquirer.prompt ([{
                    type:'input',
                    name:'name',
                    message:'What is your school name?',
                },]);
                const intern = new Intern (response.name,response.id,response.email,response2.name);
                teamArray.push(intern);
            }
        }catch(err){
            return console.log(err);
        }
        genQuestion=await inquirer.prompt  ([{
            type:'list',
            name:'finish',
            message:'Do you want to continue?',
            choices:['Yes','No']
        },]);
    }while(genQuestion.finish ==="Yes");


}
// returning the function to start a question
main();
