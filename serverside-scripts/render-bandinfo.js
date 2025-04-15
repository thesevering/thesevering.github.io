const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const bandinfoMarkdownPath = path.join(__dirname, '../content/bandinfo.md');
const bandinfoTemplatePath = path.join(__dirname, '../bandinfo.html');
const bandinfoOutputPath = path.join(__dirname, '../bandinfo-rendered.html');

const bandinfoMarkdown = fs.readFileSync(bandinfoMarkdownPath, 'utf-8');
const bandinfoHtmlContent = marked(bandinfoMarkdown);

const bandinfoTemplate = fs.readFileSync(bandinfoTemplatePath, 'utf-8');
const updatedBandinfoPage = bandinfoTemplate.replace(
  /<div id="bandinfo-content">[\s\S]*?<\/div>/,
  `<div id="bandinfo-content">${bandinfoHtmlContent}</div>`
);

fs.writeFileSync(bandinfoOutputPath, updatedBandinfoPage);
console.log('Bandinfo content rendered successfully to bandinfo-rendered.html.');