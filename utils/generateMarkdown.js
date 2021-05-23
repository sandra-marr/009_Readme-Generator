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
     type: "VSCode",
     img: '<img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/>'
   },
   {
     type: "GitHub",
     img: '<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>'
   },
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
} if (response.collab !== ""){
  tableContents += `* [Credits](#credits)\n`;
} if (response.tools !== ""){
  tableContents += `* [Tools](#tools)\n`;
} if (response.license !== ""){
  tableContents += `* [License](#license)\n`;
} if (response.features !== ""){
  tableContents += `* [Features](#features)\n`;
} if (response.contribute !== ""){
  tableContents += `* [How to Contribute](#how-to-contribute)\n`;
} if (response.tests !== ""){
  tableContents += `* [Tests](#tests)\n`;
};

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
  if(response.tools.includes("HTML5")) {
    badgesRaw.push(badgesArr[0].img);
  }
  if(response.tools.includes("CSS3")) {
    badgesRaw.push(badgesArr[1].img);
  }
  if(response.tools.includes("JavaScript")) {
    badgesRaw.push(badgesArr[2].img);
  }
  if(response.tools.includes("Node.js")) {
    badgesRaw.push(badgesArr[3].img);
  }
  if(response.tools.includes("jQuery")) {
    badgesRaw.push(badgesArr[4].img);
  }
  if(response.tools.includes("Markdown")) {
    badgesRaw.push(badgesArr[5].img);
  }
  if(response.tools.includes("Bootstrap")) {
    badgesRaw.push(badgesArr[6].img);
  }
  if(response.tools.includes("VSCode")) {
    badgesRaw.push(badgesArr[7].img);
  }
  if(response.tools.includes("GitHub")) {
    badgesRaw.push(badgesArr[8].img);
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
  markdownContent += `### Demo
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
