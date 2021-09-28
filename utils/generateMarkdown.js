var badgesArr = [
  {
    type: "Node.js",
    img: '<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>'
  },
  {
     type: "JavaScript",
     img: '<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>'
   },
   {
     type: "HTML5",
     img: '<img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>'
   },
   {
     type: "CSS3",
     img: '<img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>'
   },
   {
     type: "Markdown",
     img: '<img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>'
   },
   {
     type: "jQuery",
     img: '<img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"/>'
   },
   {
     type: "Bootstrap",
     img: '<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>'
   },
   {
    type: "UIKit",
    img: ' <img alt="UIKit" src="https://img.shields.io/badge/uikit-%233399ff.svg?style=for-the-badge&logo=uikit&logoColor=white"/>'
    },  
   {
    type: "Jest",
    img: '<img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>'
    },
   {
     type: "VSCode",
     img: '<img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>'
   },
   {
     type: "GitHub",
     img: '<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>'
   },
   {
    type: "Heroku",
    img: '<img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>'
   },
   {
    type: "MySQL",
    img: '<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>'
   },
   {
    type: "npm-inquirer",
    img: ' <img alt="npm-inquirer" src="https://img.shields.io/badge/npm:-inquirer-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   },   
   {
    type: "Epxress.js",
    img: '<img alt="Epxress.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>'
   },
   {
    type: "npm-sequelize",
    img: '<img alt="npm-sequelize" src="https://img.shields.io/badge/npm:-sequelize-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   },   
   {
    type: "Insomnia",
    img: '<img alt="Insomnia" src="https://img.shields.io/badge/Insomnia-%235849BE.svg?style=for-the-badge&logo=insomnia&logoColor=white"/>'
   },  
   {
    type: "npm-express-session",
    img: '<img alt="npm-express-session" src="https://img.shields.io/badge/npm:-express session-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   }, 
   {
     type: "Handlebars",
     img: '<img alt="Handlbars" src="https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"/>'
   },
   {
    type: "npm-bcrpyt",
    img: '<img alt="npm-bcrpyt" src="https://img.shields.io/badge/npm:-bcrypt-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   },
   {
    type: "npm-dotenv",
    img: '<img alt="npm-dotenv" src="https://img.shields.io/badge/npm:-dotenv-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   },
   {
    type: "MongoDB",
    img: '<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>'
   },
   {
    type: "mongoose",
    img: '<img alt="npm-mongoose" src="https://img.shields.io/badge/npm:-mongoose-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   },
   {
    type: "MongoDB Atlas",
    img: '<img alt="MongoDB Atlas" src="https://img.shields.io/badge/MongoDB_Atlas-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>'
   },
   {
    type: "JawsDB",
    img: '<img alt="JawsDB" src="https://img.shields.io/badge/JawsDB-%23000000.svg?logo=data:image/png;base64,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"/>'
   },
   {
    type: "NPM",
    img: '<img alt="NPM" src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"/>'
   },
   {
    type: "Moment.js",
    img: '<img alt="Moment.js" src="https://img.shields.io/badge/Moment.js-%23404d59.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADeUlEQVRYCcVXPWgUQRR+MxdyCUYbEeUQLCQpUogKgqWWKiSmSEASJIe1QW0FPZW0KrGWS+EPJEW4g2CppSCoIKRIsBAkKmITE5ILZp/vm73Zm9m9u1wuqxk4dt7MvO97u/PmzXeKWmzDM4XOns7e86zVAJHqJ6acIsrBnYmWScmPeEEFXF7dXHo9O1LYbAVaMJq38ZniEZXtusOKRxWpA81Xh7NMvKJYPefKxv3pkfz3Zj4NA7gwNZU9fOzQbVJ8S4j3NQNpNCeBrBGrhz++/Jx8NTFRqbeubgB4a8p2zSlFZ+s57XSMmd5SZWOo3tdIBHC19OJEhmielDqaIGL+Km9VCgKeJ976vP5nVfadqLujJ0cqc1xrdUm+1mBDXw4uTl8e++TiegGE+519lwBgXpZMu7u6OVecHZndcgHi/eGZ4UxP51BekvKe4JgkjdbgBSqVM+6XiAKo7vmbxGdnLv+i9bHy4LXfEZDTyZdfyiEgKg5cibBgD5Se7j9I3c8kCDk1tYbtkJw4Z3NC2ykkXIKcgqnih8WhRuTWt94TPvDlgJ+48+AwyV0dNAGYpJNsdxeSvHnx/dJNKhQCb3wnhvhOf1y8ASzPTbgMpwyaAHDOvaMme47PvityyyhBGCzkUbWBC5wwNSocioydNE9JuHY+u4fhGAZLMJ0hKQ88Cm6N8ioR1SqcZCqy3V2cRt9gCrbFAie4dVjb7TDqOpe2O2q11a33gAls1wPckgNysTjNFBnHTrObxFb9GreaRyIVzrPTNOLYwq2lengB2PKaJq/FimODu8NObve0FW+7dTubZ9ZGTDhe5mJx7DS7cWwm9a0jVDLUFxHJrSb9xciuduK1Pj7fkh1i15aKipJTwAu1EalMcqW6dpr9JDYvaGg4l0QKxCCuVHcsjT4wge1igVtDQEqBWIkmRIiY+zwaSKcTaoSayAEnuDXUKwSkRyNiAve5N7YLw2BBoDgNnOA2tyHUq0S0Fs2LkjFiolAw89F4Ox3BqAqTqN6AC5yAMwRGIol69fBFyeRP9z6SK7n9IMR3/GTf47gqglK2siwCh3Q26tWLQk/kT/XNtbMd8IGv0uq6C1mVZJN2zNNxeypKbUR7KsttEEav/ac/JlEOWHI8kSCQzrJfD7zT4S5qoW+yXTCAZZMu7ublQHwSdpgXe/DnNB7Mv/p7/hd3F9eY8eL+DQAAAABJRU5ErkJggg=="/>'
   },
   {
    type: "Webpack",
    img: '<img alt="webpack" src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"/>'
   },
   {
    type: "IndexedDB",
    img: '<img alt="IndexedDB" src="https://img.shields.io/badge/IndexedDB-%23404d59.svg?logo=data:image/png;base64,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"/>'
   }, 
   {
    type: "React",
    img: '<img alt="react" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>'
   },
   {
    type: "React Router",
    img: '<img alt="react-router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>'
   },
   {
    type: "React Bootstrap",
    img: '<img alt="react-bootstrap" src="https://img.shields.io/badge/React_Bootstrap-%2320232a?style=for-the-badge&logo=react-bootstrap&logoColor=white"/>'
   },
   {
     type: "Apollo Server and GraphQL",
     img: '<img alt="apollo-graphql" src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql"/>'
   }
]



var currentYear = new Date().getFullYear()

const licenseBadgeArray = [ 
  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n`,
  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n`, 
  `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n`,
  `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n`,
  ]

const licenseInfoArray = [ 
  `
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  `
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`,
  `
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`, 
  `
  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`,
  ]
   
  var licenseBadge
  var licenseInfo

function renderLicense(response) {
  if (response.license === "MIT") {
    licenseBadge = licenseBadgeArray[0];
    licenseInfo = licenseInfoArray[0];
  } if (response.license === "Apache 2.0") {
    licenseBadge = licenseBadgeArray[1];
    licenseInfo = licenseInfoArray[1];
  } if (response.license === "ISC") {
    licenseBadge = licenseBadgeArray[2];
    licenseInfo = licenseInfoArray[2];
  } if (response.license === "BSD") {
    licenseBadge = licenseBadgeArray[3];
    licenseInfo = licenseInfoArray[3];
  }
}

var tableContents;
var lessonsLearnedH;
var installationH;
var usageH;
var creditsH;
var licenseH;
var toolsH;
var featuresH;
var contributeH;
var testsH;


function generateToC (response){
  if(!response.useToC){
  tableContents = "\n";
  return;
} else if (response.useToC) {
  tableContents = `## Table of Contents\n* [Description](#description)\n`;
} if (response.lessonsLearned !== "") {
  tableContents += `* [Lessons Learned](#lessons-learned)\n`;
} if (response.install !== "") {
  tableContents += `* [Installation](#installation)\n`;
} if (response.usage !== "") {
  tableContents += `* [Usage](#usage)\n`;
} if (response.credits !== ""){
  tableContents += `* [Credits](#credits)\n`;
} if (response.tools !== ""){
  tableContents += `* [Tools](#tools)\n`;
} if (response.features !== ""){
  tableContents += `* [Features](#features)\n`;
} if (response.contribute !== ""){
  tableContents += `* [How to Contribute](#how-to-contribute)\n`;
} if (response.tests !== ""){
  tableContents += `* [Tests](#tests)\n`;
} if (response.license !== ""){
  tableContents += `* [License](#license)\n`;
} ;

tableContents += `* [Questions](#questions)\n`;

return tableContents;
}

function generateHeaders (response){
  if (response.lessonsLearned !== "") {
    lessonsLearnedH = `## Lessons Learned\n`;
} if (response.install !== "") {
    installationH = `## Installation\n`;
} if (response.usage !== "") {
    usageH = `## Usage\n`;
} if (response.credits !== "") {
    creditsH = `## Credits\n`;
} if (response.license !== "") {
    licenseH = `## License\n`;
} if (response.tools !== "") {
    toolsH = `## Tools\n`;
} if (response.features !== "") {
    featuresH = `## Features\n`;
} if (response.contribute !== "") {
  contributeH = `## How to Contribute\n`;
} if (response.tests !== "") {
  testsH = `## Tests\n`;
}
}

var badgesRaw = [];
var badgesDisplay;

function generateBadges (response){
  if(response.tools.includes("Node.js")) {
    badgesRaw.push(badgesArr[0].img);
  }
  if(response.tools.includes("JavaScript")) {
    badgesRaw.push(badgesArr[1].img);
  }
  if(response.tools.includes("HTML5")) {
    badgesRaw.push(badgesArr[2].img);
  }
  if(response.tools.includes("CSS3")) {
    badgesRaw.push(badgesArr[3].img);
  }
  if(response.tools.includes("Markdown")) {
    badgesRaw.push(badgesArr[4].img);
  }
  if(response.tools.includes("jQuery")) {
    badgesRaw.push(badgesArr[5].img);
  }
  if(response.tools.includes("Bootstrap")) {
    badgesRaw.push(badgesArr[6].img);
  }
  if(response.tools.includes("UIKit")) {
    badgesRaw.push(badgesArr[7].img);
  }
  if(response.tools.includes("Jest")) {
    badgesRaw.push(badgesArr[8].img);
  }
  if(response.tools.includes("VSCode")) {
    badgesRaw.push(badgesArr[9].img);
  }
  if(response.tools.includes("GitHub")) {
    badgesRaw.push(badgesArr[10].img);
  }
  if(response.tools.includes("Heroku")) {
    badgesRaw.push(badgesArr[11].img);
  }
  if(response.tools.includes("MySQL")) {
    badgesRaw.push(badgesArr[12].img);
  }
  if(response.tools.includes("inquirer")) {
    badgesRaw.push(badgesArr[13].img);
  }
  if(response.tools.includes("Express.js")) {
    badgesRaw.push(badgesArr[14].img);
  }
  if(response.tools.includes("sequelize")) {
    badgesRaw.push(badgesArr[15].img);
  }
  if(response.tools.includes("Insomnia")) {
    badgesRaw.push(badgesArr[16].img);
  }
  if(response.tools.includes("express-session")) {
    badgesRaw.push(badgesArr[17].img);
  }
  if(response.tools.includes("Handlebars")) {
    badgesRaw.push(badgesArr[18].img);
  }
  if(response.tools.includes("bcrpyt")) {
    badgesRaw.push(badgesArr[19].img);
  }
  if(response.tools.includes("dotenv")) {
    badgesRaw.push(badgesArr[20].img);
  }
  if(response.tools.includes("MongoDB")) {
    badgesRaw.push(badgesArr[21].img);
  }
  if(response.tools.includes("mongoose")) {
    badgesRaw.push(badgesArr[22].img);
  }
  if(response.tools.includes("MongoDB Atlas")) {
    badgesRaw.push(badgesArr[23].img);
  }
  if(response.tools.includes("JawsDB")) {
    badgesRaw.push(badgesArr[24].img);
  }
  if(response.tools.includes("NPM")) {
    badgesRaw.push(badgesArr[25].img);
  }
  if(response.tools.includes("Moment.js")) {
    badgesRaw.push(badgesArr[26].img);
  }
  if(response.tools.includes("webpack")) {
    badgesRaw.push(badgesArr[27].img);
  }
  if(response.tools.includes("IndexedDB")) {
    badgesRaw.push(badgesArr[28].img);
  }
  if(response.tools.includes("React")) {
    badgesRaw.push(badgesArr[29].img);
  }
  if(response.tools.includes("React-Router")) {
    badgesRaw.push(badgesArr[30].img);
  }
  if(response.tools.includes("React-Bootstrap")) {
    badgesRaw.push(badgesArr[31].img);
  }
  if(response.tools.includes("Apollo Server and GraphQL")) {
    badgesRaw.push(badgesArr[32].img);
  }
return badgesDisplay = badgesRaw.join("  ");
}

function generateMarkdown(response) {
generateToC(response);
renderLicense(response);
generateHeaders(response); 
generateBadges(response);

var markdownContent = 

`# ${response.projectTitle}

` + licenseBadge + `\n` +
 tableContents +
`## Description 
${response.description}
${response.purpose}

`;

if (response.lessonsLearned != "") {
  markdownContent += lessonsLearnedH + `${response.lessonsLearned}\n`;
} 

if (response.install != "") {
  markdownContent += installationH + `${response.install}\n`;
} 

if (response.usage != "") {
  markdownContent += usageH +`${response.usage}\n 
  `; 
} 

if (response.includeImage) {
  markdownContent += `## Demo
  ![Demo](${response.includeImage})\n`; 
} 

if (response.credits != "")  {
  markdownContent += creditsH + `${response.credits}\n`;
} 

if (response.tools != "") {
  markdownContent += toolsH + badgesDisplay + `\n`;
} 

if (response.features != "") {
  markdownContent += featuresH + `${response.features}\n`;
} 

if (response.contribute != "") {
  markdownContent += contributeH + `${response.contribute}\n`;
} 

if (response.tests != "") {
  markdownContent += testsH + `${response.tests}\n`;
}

markdownContent += licenseH + licenseBadge + 
`
Copyright ` + currentYear + ` ${response.username}
` + licenseInfo + 
`

## Questions

For any questions, please contact ${response.username}: [GitHub](https://github.com/${response.github}) or [Email](${response.email})`;

return markdownContent;
}

module.exports = generateMarkdown;
