
//renderLicenseBadge function created the conditions for setting up the badges and links to each badge in the markdown. 
//If one of the options is chosen via the prompts then the connected badge will be displayed. If none is chosen then nothing will show.

function renderLicenseBadge(license) {

  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license === "Eclipse") {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  }
  if (license === "GPL") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === "IBM") {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  }
  else {
    return "";
  }

}




// TODO: Create a function to generate markdown for README 

function markdown(data) {
  return `# **${data.title}**

  # **Description**
  
  ${data.description}

  # **Table of Contents**

  1. [Description](#Description)
  2. [Licenses](#Licenses)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  6. [Contributors](#Contributors)
  7. [Tests](#Tests)
  8. [FAQ](#FAQ)

  # **License**

  ${renderLicenseBadge(data.license)}

  ### Live Link to Application: 

  ${data.link} 

  # **Installation**

  ### Version: 
  
  ${data.version}

  ### Requirements for installation: 

  ${data.dependencies}

  ### How to install: 

  ${data.installation}
  

  # **Usage**

  ## How to use the application: 
  ${data.usage}
  

  # **Constributors** 
  ${data.contributors}

  # **Tests** 
  ${data.tests}
  
  # **Questions**

  ## **About Creator**
  ### Name: ${data.name}

  ### Github profile: [GitHub](http://github.com/${data.username})

  ### Email: ${data.email}

  If you have any issues or further questions about how this application works please send me an email at the email listed above.


  ## **FAQ** 
  ${data.faq}

  `;


}

//This ties the markdown page to the main index file that holds the question prompts for the user.

module.exports = markdown;