const fs = require('fs');
const path = require('path');

const logoTemplate = '<img src="/images/sev_logo.png" alt="The Severing Logo" class="logo">';

const pages = [
    'index.html',
    'news-rendered.html',
    'bandinfo-rendered.html',
    'dates.html',
    'music.html',
    'videos.html',
    'pictures.html'
];

pages.forEach((page) => {
    const filePath = path.join(__dirname, '../', page);
    let content = fs.readFileSync(filePath, 'utf-8');
    content = content.replace(/<img src=".*?" alt="The Severing Logo" class="logo">/, logoTemplate);
    content = content.replace(/assets\/log\.png/, '/images/sev_logo.png'); // Ensure old path is replaced
    fs.writeFileSync(filePath, content);
    console.log(`${page} updated with dynamic logo.`);
});