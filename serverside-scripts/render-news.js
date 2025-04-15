const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const newsMarkdownPath = path.join(__dirname, '../content/news.md');
const newsOutputPath = path.join(__dirname, '../news-rendered.html');

const newsMarkdown = fs.readFileSync(newsMarkdownPath, 'utf-8');
const newsHtmlContent = marked(newsMarkdown);

let existingNewsPage = fs.readFileSync(newsOutputPath, 'utf-8');
existingNewsPage = existingNewsPage.replace(
  /<div id="news-feed">[\s\S]*?<\/div>/,
  `<div id="news-feed">${newsHtmlContent}</div>`
);

fs.writeFileSync(newsOutputPath, existingNewsPage);
console.log('News content updated successfully in news-rendered.html.');
