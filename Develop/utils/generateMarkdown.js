// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ${data.license}

    ### Description
    ${data.description}

    ### Table of Contents

    ### Installation
    \`\`\`
    ${data.installation}
    \`\`\`
    ### Usage
    ${data.usage}
    ${data.license}

    ### Contributing
    ${data.contributing}

    ### Test
    ${data.test}

    ### Questions
    ${data.emails}
    ${data.github}
  `
}

module.exports = generateMarkdown;
