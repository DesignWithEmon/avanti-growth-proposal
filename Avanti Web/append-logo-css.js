const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `
@media (max-width: 768px) {
    /* Logo scaling fix */
    .logo img {
        height: 38px !important;
        width: auto !important;
    }
}
`;

fs.writeFileSync(cssPath, cssContent + additionalCss);
console.log('Appended logo fix to style.css');
