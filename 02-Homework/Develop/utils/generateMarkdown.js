// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (no===no){
    return ""
  }
  else {
    return "MIT"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="yes"){
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseLink
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ## ${data.title};
   ${data.description};
   "Table of Contents ${data.tableofcontents}";
   "Install notes: ${data.install}";
   "Contributors: ${data.contributors}";
   






`;
}

module.exports = generateMarkdown;
fs.writeFile('<Readme.md>', )
