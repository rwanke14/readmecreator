// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {

  if(license === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] (https://opensource.org/licenses/MIT)';
  }
  if(license === "Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if(license === "Mozilla"){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  if(license === "Eclipse"){
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  if(license === "GPL"){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if(license === "IBM"){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  } 
  if(license === 'none') {
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(license === MIT){
//     return '(https://opensource.org/licenses/MIT)';
//   }
//   if(license === Apache){
//     return '(https://opensource.org/licenses/Apache-2.0)';
//   }
//   if(license === Mozilla){
//     return '(https://opensource.org/licenses/MPL-2.0)';
//   }
//   if(license === Eclipse){
//     return '(https://opensource.org/licenses/EPL-1.0)';
//   }
//   if(license === Boost){
//     return '(https://www.boost.org/LICENSE_1_0.txt)';
//   }
//   if(license === IBM){
//     return '(https://opensource.org/licenses/IPL-1.0)';

//   } else {
//     return "";
//   }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license === none){
//     return "";
//   } else {
//     return `##**Licences**\n ${renderLicenseBadge(license)}`;
//   }
// }

// TODO: Create a function to generate markdown for README
function markdown(data) {
  return `# **${data.title}**
  
  ### ${data.name}

  # **Table of Contents**

  1. [Description](#Description)
  2. [Licenses](#Licenses)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
         - [Guide](## How to use the application:)
  5. [Contributors](#Contributors)
  6. [Tests](#Tests)
  7. [FAQ](#FAQ)

  # **License**
  ${renderLicenseBadge(data.license)}

  # **Description**
  
  ${data.description}

  ### Live Link to Application: ${data.link} 
  ### Version: ${data.version}

  # **Installation** /n

  ### Requirements for installation: 

  ${data.dependencies}

  ### How to install: 

  ${data.installation}
  

  # **Usage**
  ${data.usage} /n

  ## How to use the application: /n
  ${data.guide}
  


  # **Constributors** /n
  ${data.contributors}

  # **Tests** /n
  ${data.tests}
  
  # **FAQ** /n
  ${data.faq}

  `;


}

module.exports = markdown;