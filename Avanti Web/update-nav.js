const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Check if it already has the inner div
    if (content.includes('class="mobile-bottom-nav-inner"')) {
        return;
    }

    // Regular expression to find the full mobile-bottom-nav block
    const navRegex = /<nav class="mobile-bottom-nav">([\s\S]*?)<\/nav>/;
    const match = content.match(navRegex);
    
    if (match) {
        const innerContent = match[1];
        const newNavBlock = `<nav class="mobile-bottom-nav">\n        <div class="mobile-bottom-nav-inner">${innerContent}        </div>\n    </nav>`;
        content = content.replace(navRegex, newNavBlock);
        
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Updated:', file);
    }
});
