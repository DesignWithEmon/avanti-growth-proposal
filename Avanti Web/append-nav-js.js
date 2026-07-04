const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'script.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

const navLogic = `

// ==========================================================================
// Mobile Bottom Navigation Active State Logic
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const mobileNavLinks = document.querySelectorAll('.mobile-bottom-nav a');
    if (mobileNavLinks.length > 0) {
        let currentPath = window.location.pathname;
        let currentHash = window.location.hash;
        
        // Remove active class from all
        mobileNavLinks.forEach(link => link.classList.remove('active'));
        
        let foundMatch = false;
        
        mobileNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (!linkHref) return;
            
            // If the link has a hash and matches our current hash (e.g. #reserve)
            if (currentHash && linkHref.includes(currentHash)) {
                link.classList.add('active');
                foundMatch = true;
            }
            // If the link matches the path name (e.g. menu.html, /about)
            else if (linkHref !== 'index.html' && linkHref !== '/' && currentPath.includes(linkHref.replace('./', '').replace('/', ''))) {
                link.classList.add('active');
                foundMatch = true;
            }
        });
        
        // Default to Home if no match is found and we are on root or index.html
        if (!foundMatch && (currentPath === '/' || currentPath.includes('index.html') || currentPath.endsWith('Avanti%20Web/'))) {
            mobileNavLinks.forEach(link => {
                if (link.getAttribute('href') === 'index.html' || link.getAttribute('href') === '/') {
                    link.classList.add('active');
                }
            });
        }
    }
});
`;

if (!jsContent.includes('Mobile Bottom Navigation Active State Logic')) {
    fs.writeFileSync(jsPath, jsContent + navLogic);
    console.log('Appended mobile nav active logic to script.js');
} else {
    console.log('Mobile nav active logic already present.');
}
