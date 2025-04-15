const { execSync } = require('child_process');

const scripts = [
    'render-navigation.js',
    'render-news.js',
    'render-bandinfo.js',
    'render-dates.js',
  
    
];

scripts.forEach((script) => {
    try {
        console.log(`Running ${script}...`);
        execSync(`node serverside-scripts/${script}`, { stdio: 'inherit' });
        console.log(`${script} completed successfully.`);
    } catch (error) {
        console.error(`Error running ${script}:`, error.message);
    }
});