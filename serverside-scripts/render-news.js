const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const newsMarkdownPath = path.join(__dirname, '../content/news.md');
const newsTemplatePath = path.join(__dirname, '../news.html');
const newsOutputPath = path.join(__dirname, '../news-rendered.html');

const newsMarkdown = fs.readFileSync(newsMarkdownPath, 'utf-8');
const newsHtmlContent = marked(newsMarkdown);

const newsTemplate = fs.readFileSync(newsTemplatePath, 'utf-8');
const updatedNewsPage = newsTemplate.replace(
  /<div id="news-feed">[\s\S]*?<\/div>/,
  `<div id="news-feed">${newsHtmlContent}</div>`
);

fs.writeFileSync(newsOutputPath, updatedNewsPage);
console.log('News content rendered successfully to news-rendered.html.');