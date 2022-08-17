const inquirer = require('inquirer');
const fs = require('fs');



function htmlTemplate(data){
return  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${data}
</body>
</html>`

}


    


fs.writeFile('1.html', htmlTemplate('<h1>hello</h1>s'), function(){
    console.log('test')
});