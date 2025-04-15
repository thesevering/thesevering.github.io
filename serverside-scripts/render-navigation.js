const fs = require('fs');
const path = require('path');

const logoTemplate = '<a href="index.html"><img src="/images/sev_logo.png" alt="The Severing Logo" class="logo"></a>';

const navigationTemplate = `
<nav class="normal-nav">
    <ul>        
        <li><a href="news-rendered.html">News</a></li>
        <li><a href="bandinfo-rendered.html">Info</a></li>
        <li><a href="dates-rendered.html">Dates</a></li>
        <li><a href="music-rendered.html">Music</a></li>
        <li><a href="videos-rendered.html">Videos</a></li>
        <li><a href="pictures-rendered.html">Pictures</a></li>
    </ul>
</nav>`;

const burgerMenuTemplate = fs.readFileSync(path.join(__dirname, '../htmltemplates/burger-menu.html'), 'utf-8');

const pages = [
    'index',
    'news',
    'bandinfo',
    'dates',
    'music',
    'videos',
    'pictures'
];

pages.forEach((page) => {
    const templatePath = path.join(__dirname, '../htmltemplates', `${page}.html`);
    const outputPath = path.join(__dirname, '../', page === 'index' ? 'index.html' : `${page}-rendered.html`);
    let content = fs.readFileSync(templatePath, 'utf-8');
    content = content.replace(/<header>[\s\S]*?<\/header>/, `<header>${burgerMenuTemplate}${logoTemplate}${navigationTemplate}</header>`);
    fs.writeFileSync(outputPath, content);
    console.log(`${outputPath} rendered successfully.`);
});