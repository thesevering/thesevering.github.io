const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const datesMarkdownPath = path.join(__dirname, '../content/dates.md');
const datesTemplatePath = path.join(__dirname, '../htmltemplates/dates.html');
const datesOutputPath = path.join(__dirname, '../dates-rendered.html');

const datesMarkdown = fs.readFileSync(datesMarkdownPath, 'utf-8');
const datesHtmlContent = marked(datesMarkdown);

let existingPageContent = '';
if (fs.existsSync(datesOutputPath)) {
  existingPageContent = fs.readFileSync(datesOutputPath, 'utf-8');
} else {
  existingPageContent = fs.readFileSync(datesTemplatePath, 'utf-8');
}

const updatedDatesPage = existingPageContent.replace(
  /<div id="dates-list">[\s\S]*?<\/div>/,
  `<div id="dates-list">${datesHtmlContent}</div>`
);

fs.writeFileSync(datesOutputPath, updatedDatesPage);
console.log('Dates content updated successfully in dates-rendered.html.');

