const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const datesMarkdownPath = path.join(__dirname, '../content/dates.md');
const datesTemplatePath = path.join(__dirname, '../dates.html');
const datesOutputPath = path.join(__dirname, '../dates-rendered.html');

const datesMarkdown = fs.readFileSync(datesMarkdownPath, 'utf-8');
const datesHtmlContent = marked(datesMarkdown);

const datesTemplate = fs.readFileSync(datesTemplatePath, 'utf-8');
const updatedDatesPage = datesTemplate.replace(
  /<div id="dates-list">[\s\S]*?<\/div>/,
  `<div id="dates-list">${datesHtmlContent}</div>`
);

fs.writeFileSync(datesOutputPath, updatedDatesPage);
console.log('Dates content rendered successfully to dates-rendered.html.');