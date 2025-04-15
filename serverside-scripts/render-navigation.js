const fs = require('fs');
const path = require('path');

const navigationTemplate = `
<nav>
    <ul>
                <li><a href="news-rendered.html">News</a></li>
        <li><a href="bandinfo-rendered.html">Info</a></li>
        <li><a href="dates.html">Dates</a></li>
        <li><a href="music.html">Music</a></li>
        <li><a href="videos.html">Videos</a></li>
        <li><a href="pictures.html">Pictures</a></li>
    </ul>
</nav>`;

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
    content = content.replace(/<nav>[\s\S]*?<\/nav>/, '<nav></nav>'); // Clean up navigation
    fs.writeFileSync(filePath, content);
    console.log(`${page} cleaned up for navigation.`);
});