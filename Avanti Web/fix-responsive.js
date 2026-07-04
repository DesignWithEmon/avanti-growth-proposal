const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `

/* ==========================================================================
   GLOBAL RESPONSIVE OVERRIDES (ADDED VIA AUDIT)
   ========================================================================== */
@media (max-width: 768px) {
    /* Enforce body overflow to prevent horizontal scrolling */
    html, body {
        overflow-x: hidden !important;
        width: 100%;
        max-width: 100vw;
    }

    /* Force all major sections to 1 column on mobile */
    .hero-section,
    .about-container,
    .reserve-container,
    .contact-container,
    .footer-container,
    .form-row,
    .menu-grid-layout,
    .reviews-grid,
    .gallery-grid {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
    }
    
    /* Ensure images never overflow */
    img, video, iframe {
        max-width: 100% !important;
        height: auto !important;
    }

    /* Fix typography scaling */
    h1, .hero-title { font-size: clamp(2rem, 8vw, 3rem) !important; }
    h2, .section-title { font-size: clamp(1.8rem, 6vw, 2.5rem) !important; }
    h3 { font-size: clamp(1.5rem, 5vw, 2rem) !important; }

    /* Adjust paddings for mobile */
    .container {
        padding-left: 15px !important;
        padding-right: 15px !important;
        width: 100% !important;
        max-width: 100% !important;
    }
    
    section {
        padding-top: 60px !important;
        padding-bottom: 60px !important;
    }
    
    /* Fix forms */
    .form-group input, 
    .form-group select, 
    .form-group textarea {
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
    }
    
    /* Ensure flex rows wrap or stack */
    .hero-actions,
    .filter-btn-group,
    .dish-actions {
        flex-direction: column !important;
        align-items: stretch !important;
        width: 100% !important;
    }
    
    .hero-actions .btn,
    .dish-actions .btn {
        width: 100% !important;
        margin-bottom: 10px !important;
        text-align: center !important;
    }
}

@media (max-width: 480px) {
    /* Extra small screen fixes */
    section {
        padding-top: 40px !important;
        padding-bottom: 40px !important;
    }
    
    .hero-title {
        font-size: clamp(1.8rem, 10vw, 2.5rem) !important;
    }
    
    .section-title {
        font-size: clamp(1.5rem, 8vw, 2rem) !important;
    }
    
    /* Adjust buttons */
    .btn {
        padding: 12px 20px !important;
        font-size: 0.95rem !important;
    }
    
    /* Make cart drawer full width on very small screens */
    .cart-drawer {
        width: 100% !important;
        max-width: 100vw !important;
    }
}
`;

if (!cssContent.includes('GLOBAL RESPONSIVE OVERRIDES')) {
    fs.writeFileSync(cssPath, cssContent + additionalCss);
    console.log('Successfully appended responsive overrides to style.css');
} else {
    console.log('Overrides already present in style.css');
}
