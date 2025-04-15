const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const bandinfoMarkdownPath = path.join(__dirname, '../content/bandinfo.md');
const bandinfoOutputPath = path.join(__dirname, '../bandinfo-rendered.html');

const bandinfoMarkdown = fs.readFileSync(bandinfoMarkdownPath, 'utf-8');
const bandinfoHtmlContent = marked(bandinfoMarkdown);

let bandinfoPage = fs.readFileSync(bandinfoOutputPath, 'utf-8');
bandinfoPage = bandinfoPage.replace(
  /<div id="bandinfo-content">[\s\S]*?<\/div>/,  
  `<div id="bandinfo-content">${bandinfoHtmlContent}</div>`
);

fs.writeFileSync(bandinfoOutputPath, bandinfoPage);
console.log('Bandinfo content updated successfully in bandinfo-rendered.html.');
