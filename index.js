var inquirer = require('inquirer');



(async () => {
  var name = await inquirer.prompt([
    {
        
        message: 'What is your name?',
        type: 'input',
        name: 'Name',
    },
  ]);
  var ID = await inquirer.prompt([
    {
      type: "input",
      name: "ID",
      message: "Enter employee ID" ,
    },
  ]);
  var email = await inquirer.prompt([
    {
      type: "input",
      name: "Email",
      message: "Enter employee email" ,
    },
  ]);
  return { ...name, ...ID, ...email };
})()
  .then(console.log)
  .catch(console.error);

 

