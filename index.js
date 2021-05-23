const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{
  type: 'input',
  message: "What is your project title?",
  name: 'projectTitle',
},
{
  type: 'input',
  message: "What is your full name?",
  name: 'username',
},
{
  type: 'confirm',
  message: "Would you like a table of contents?",
  name: 'useToC',
},
{
  type: 'input',
  message: "Please provide a description for your application. This can include the motivation and reason building this application?",
  name: 'description',
},
{
  type: 'input',
  message: "Please describe what problem this application solves.",
  name: 'purpose',
},
{
  type: 'input',
  message: "What did you learn in building this application?",
  name: 'lessonsLearned',
},
{
  type: 'input',
  message: "What are the steps needed for installation? Leave blank if installation instructions are not needed.",
  name: 'install',
},
{
  type: 'input',
  message: "What are the instructions for use? Leave blank if no instructions are needed. ",
  name: 'usage',
},
{
  type: 'input',
  message: "Please paste the path for any image that you would like to include.",
  name: 'includeImage',
},
{
  type: 'input',
  message: "Please list any collaborators.",
  name: 'credits',
},
{
  type: 'checkbox',
  message: "Please select tools used.",
  choices: ["HTML5", "CSS3", "JavaScript", "Node.js", "jQuery", "Markdown", "Bootstrap", "VSCode", "GitHub", ],
  name: 'tools',
},
{
  type: 'list',
  message: "Please select preferred license.",
  choices: ["MIT", "Apache 2.0", "ISC", "BSD",],
  name: 'license',
},
{
  type: 'input',
  message: "List any features and associated information here if needed.",
  name: 'features',
},
{
  type: 'input',
  message: "List instruction for contributors here if needed.",
  name: 'contribute',
},
{
  type: 'input',
  message: "List test information here if needed.",
  name: 'tests',
},
];



inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response);
    
    const readMeContent = generateMarkdown(response)

    console.log(readMeContent);

    const filename =`README_${response.projectTitle.toLowerCase().split(' ').join('')}.md`

    fs.writeFile(filename, readMeContent, (err) => 
    err ? console.error(err) : console.log('Thank you for you inputs!'))
  }
  );
