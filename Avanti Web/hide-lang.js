const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `
/* Hide Language Toggle as requested by user */
#lang-toggle, .lang-toggle-btn {
    display: none !important;
}
`;

fs.writeFileSync(cssPath, cssContent + additionalCss);
console.log('Appended language toggle hide fix to style.css');
