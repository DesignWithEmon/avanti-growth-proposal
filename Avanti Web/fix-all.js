const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'dashboard.html' && f !== 'auth.html' && f !== 'track.html');

const leafletTags = `
    <!-- Leaflet CSS & JS for Live Location -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
`;

const bottomNavHTML = `        </div>
    </header>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav">
        <div class="mobile-bottom-nav-inner">
            <a href="index.html">
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
            </a>
            <a href="menu.html" class="active">
                <i class="fa-solid fa-book-open"></i>
                <span>Menu</span>
            </a>
            <a href="/chef-specials">
                <i class="fa-solid fa-star"></i>
                <span>Specials</span>
            </a>
            <a href="/about">
                <i class="fa-solid fa-user"></i>
                <span>About</span>
            </a>
            <a href="index.html#reserve">
                <i class="fa-solid fa-comment-dots"></i>
                <span>Contact</span>
            </a>
        </div>
    </nav>`;

const mapHTML = `                        <!-- Live Location Map -->
                        <div style="margin-bottom: 10px; border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; background: var(--bg-card);">
                            <div id="checkout-map" style="height: 200px; width: 100%; z-index: 1;"></div>
                            <button type="button" id="locate-me-btn" style="width: 100%; padding: 10px; background: rgba(223, 177, 91, 0.1); color: var(--gold); border: none; border-top: 1px solid var(--border-color); cursor: pointer; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 0.9rem; transition: all 0.3s;">
                                📍 <span class="lbl-locate-me">Locate Me (Live GPS)</span>
                            </button>
                        </div>
                        <input type="hidden" id="checkout-lat" name="lat">
                        <input type="hidden" id="checkout-lng" name="lng">

                        <textarea id="checkout-address" name="address" rows="3" placeholder="25, TN Roy Road, Amlapara, Mymensingh" required></textarea>`;

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let changed = false;

    // 1. Add Leaflet if not present
    if (!content.includes('leaflet@1.9.4') && content.includes('checkout-address')) {
        content = content.replace('<!-- Custom CSS -->', leafletTags + '\n    <!-- Custom CSS -->');
        changed = true;
    }

    // 2. Fix the address group if checkout-map is missing
    if (content.includes('checkout-address') && !content.includes('checkout-map')) {
        const addressRegex = /<textarea id="checkout-address"[\s\S]*?<\/textarea>/;
        if (addressRegex.test(content)) {
            content = content.replace(addressRegex, mapHTML);
            changed = true;
        }
    }

    // 3. Replace mobile nav if old hamburger exists
    if (content.includes('id="mobileNavToggle"')) {
        const navRegex = /[\s]*<!-- Mobile Hamburger -->[\s\S]*?<\/div>[\s]*<\/header>[\s]*<!-- Mobile Nav Overlay -->[\s\S]*?<\/div>/;
        if (navRegex.test(content)) {
            content = content.replace(navRegex, "\n" + bottomNavHTML);
            changed = true;
        } else {
            // some pages might only have the hamburger and not the overlay, or slightly different spacing
            const altRegex = /[\s]*<!-- Mobile Hamburger -->[\s\S]*?<\/button>[\s]*<\/div>[\s]*<\/header>[\s]*<!-- Mobile Nav Overlay -->[\s\S]*?<\/div>/;
            if (altRegex.test(content)) {
                content = content.replace(altRegex, "\n" + bottomNavHTML);
                changed = true;
            }
        }
    }

    if (changed) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Updated:', file);
    }
});
