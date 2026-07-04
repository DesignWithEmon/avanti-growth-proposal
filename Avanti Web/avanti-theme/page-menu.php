<?php
/**
 * Template Name: Menu Page
 * ICP-Optimized: Category tabs + badges for Corporate Elite, Families, Youth & Creators
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- Menu Header Section -->
    <section id="menu" class="menu-section" style="padding-top: 12rem;">
        <div class="container menu-container">
            <div class="text-center scroll-reveal">
                <h5 class="section-subtitle">The Culinary List</h5>
                <h2 class="section-title">Savor Our Authentic Masterpieces</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">Explore Avanti's extensive menu in Mymensingh, featuring authentic Italian pizza, creamy pasta, gourmet set meals, and fresh custom drinks.</p>
            </div>
            
            <!-- Live Search Bar -->
            <div class="search-wrapper scroll-reveal" style="max-width: 700px; margin: 2rem auto 2rem auto; display: flex; gap: 10px; background: rgba(255,255,255,0.02); border: 1px solid var(--color-border); padding: 6px 12px; border-radius: var(--border-radius-sm); align-items: center;">
                <i class="fa-solid fa-magnifying-glass" style="color: var(--color-primary); font-size: 1.1rem;"></i>
                <input type="text" id="menu-search-input" placeholder="Search dishes by name or description..." style="width: 100%; border: none; outline: none; background: transparent; padding: 8px 4px; color: var(--color-text-main);">
                <button type="button" id="clear-search-btn" style="display: none; color: var(--color-text-muted); cursor: pointer; background: none; border: none;"><i class="fa-solid fa-circle-xmark"></i></button>
            </div>

            <!-- Menu Tabs — ICP Targeted -->
            <div class="menu-tabs-wrapper scroll-reveal">
                <div class="menu-tabs" id="menu-tabs-container">
                    <button class="tab-btn active" data-category="all">All Items</button>
                    <!-- ICP Categories -->
                    <button class="tab-btn" data-category="signature"><i class="fa-solid fa-star"></i> Signatures</button>
                    <button class="tab-btn" data-category="starter"><i class="fa-solid fa-leaf"></i> Starters</button>
                    <button class="tab-btn" data-category="soup"><i class="fa-solid fa-bowl-food"></i> Soup & Noodles</button>
                    <button class="tab-btn" data-category="pizza"><i class="fa-solid fa-pizza-slice"></i> Pizza & Burger</button>
                    <button class="tab-btn" data-category="main"><i class="fa-solid fa-drumstick-bite"></i> Main Course</button>
                    <button class="tab-btn" data-category="platters"><i class="fa-solid fa-plate-wheat"></i> Platters</button>
                    <button class="tab-btn" data-category="drinks"><i class="fa-solid fa-mug-hot"></i> Drinks & Desserts</button>
                </div>
            </div>

            <!-- Menu Grid (Populated dynamically via JavaScript) -->
            <div class="menu-grid scroll-reveal" id="menu-grid">
                <!-- Dynamic cards will be rendered here -->
            </div>
            
            <div class="text-center scroll-reveal load-more-container" style="margin-top: 3rem;">
                <button class="btn btn-secondary" id="load-more-btn">Load All Dishes</button>
            </div>
        </div>
    </section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // === INLINE CART TOGGLE ===
    var floatingCart = document.querySelector('.floating-cart');
    var cartDrawer = document.getElementById('cart-drawer');
    var cartOverlay = document.getElementById('cart-overlay');
    
    if (floatingCart && cartDrawer && cartOverlay) {
        function openCartDrawer() {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
        }
        function closeCartDrawer() {
            cartDrawer.classList.remove('active');
            cartOverlay.classList.remove('active');
        }
        floatingCart.addEventListener('click', openCartDrawer);
        cartOverlay.addEventListener('click', closeCartDrawer);
        var closeBtn = cartDrawer.querySelector('.close-cart-btn');
        if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    }

    // === MENU DATA FILTERING ===
    var menuData = typeof MENU_DATA !== 'undefined' ? MENU_DATA : [];
    var menuGrid = document.getElementById('menu-grid');
    var searchInput = document.getElementById('menu-search-input');
    var clearBtn = document.getElementById('clear-search-btn');
    var loadMoreBtn = document.getElementById('load-more-btn');
    var tabContainer = document.getElementById('menu-tabs-container');
    var displayCount = 12;
    var currentCategory = 'all';
    var currentSearch = '';

    // Category mapping for new tab structure
    var categoryMap = {
        'starter': ['starter', 'salad'],
        'soup': ['soup', 'noodle', 'noodles', 'chow mein'],
        'pizza': ['pizza', 'burger', 'fast food', 'sandwith', 'premium burger'],
        'main': ['chicken', 'beef', 'mutton', 'rice', 'pasta', 'sea food', 'keto meal', 'vegetable', 'kids', 'snacks'],
        'platters': ['platter'],
        'drinks': ['drink', 'hot coffee', 'cold coffee', 'freppe', 'milk shake', 'juice', 'moctail', 'lassi', 'smoothie', 'lemonade', 'ice-cream', 'dessert', 'iced latte', 'over iced']
    };

    function getItemCategory(item) {
        var cat = (item.category || '').toLowerCase().trim();
        var name = (item.name || '').toLowerCase();
        
        // Signature detection (items with popular/featured names)
        if (name.indexOf('special') >= 0 || name.indexOf('signature') >= 0 || 
            name.indexOf('premium') >= 0 || name.indexOf('chef') >= 0 ||
            item.featured === true || item.featured === 'true' || item.featured === '1') {
            return 'signature';
        }
        
        // Map CSV category to tab
        for (var tab in categoryMap) {
            var keywords = categoryMap[tab];
            for (var k = 0; k < keywords.length; k++) {
                if (cat.indexOf(keywords[k]) >= 0) {
                    return tab;
                }
            }
        }
        
        return 'main';
    }

    function getBadgeHtml(item) {
        var mappedCat = getItemCategory(item);
        if (mappedCat === 'signature') {
            return '<span class="badge badge-special"><i class="fa-solid fa-star"></i> Chef\'s Special</span>';
        }
        return '';
    }

    function getMetaTags(item) {
        var mappedCat = getItemCategory(item);
        var tags = [];
        if (mappedCat === 'signature') {
            tags.push('<span class="tag"><i class="fa-solid fa-camera"></i> Instagrammable</span>');
        }
        if (item.quantity) {
            tags.push('<span class="tag"><i class="fa-solid fa-weight-hanging"></i> ' + item.quantity + '</span>');
        }
        return tags.join(' ');
    }

    function renderMenu() {
        var filtered = menuData.filter(function(item) {
            var catMatch = currentCategory === 'all' || getItemCategory(item) === currentCategory;
            var searchMatch = !currentSearch || 
                (item.name || '').toLowerCase().indexOf(currentSearch) >= 0 || 
                (item.description || '').toLowerCase().indexOf(currentSearch) >= 0 ||
                (item.category || '').toLowerCase().indexOf(currentSearch) >= 0;
            return catMatch && searchMatch;
        });

        var showItems = loadMoreBtn && loadMoreBtn.textContent === 'Show Less' ? filtered : filtered.slice(0, displayCount);
        var hasMore = filtered.length > displayCount && showItems.length < filtered.length;
        var totalCount = filtered.length;

        if (filtered.length === 0) {
            menuGrid.innerHTML = '<div class="text-center" style="grid-column: 1/-1; padding: 4rem 0;"><i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--color-text-muted); margin-bottom: 1rem;"></i><p style="color: var(--color-text-muted);">No items found matching your criteria.</p></div>';
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        var html = '';
        for (var i = 0; i < showItems.length; i++) {
            var item = showItems[i];
            var imgSrc = item.image || '<?php echo $theme_uri; ?>/assets/special_pizza.png';
            var badgeHtml = getBadgeHtml(item);
            var metaTags = getMetaTags(item);
            var detailUrl = '<?php echo home_url(); ?>/dish/' + (item.id || '') + '/';

            html += '<article class="menu-item-card" data-category="' + getItemCategory(item) + '">';
            html += '<div class="menu-item-img-container" onclick="location.href=\'' + detailUrl + '\'">';
            html += badgeHtml;
            html += '<img src="' + imgSrc + '" alt="' + (item.name || '') + '" class="menu-item-img" loading="lazy">';
            html += '<div class="img-overlay"><span class="overlay-text"><i class="fa-solid fa-eye"></i> View Details</span></div>';
            html += '</div>';
            html += '<div class="menu-item-info">';
            html += '<div class="menu-item-header">';
            html += '<h3 class="menu-item-title"><a href="' + detailUrl + '">' + (item.name || '') + '</a></h3>';
            html += '<span class="menu-item-price">৳' + (item.price || '') + '</span>';
            html += '</div>';
            html += '<p class="menu-item-desc">' + (item.description || '').substring(0, 100) + '</p>';
            html += '<div class="menu-item-meta" style="margin-bottom: 1.5rem;">';
            html += '<span class="tag"><i class="fa-solid fa-tags"></i> ' + (item.category || '') + '</span>';
            html += metaTags;
            html += '</div>';
            html += '<button type="button" class="btn-add-to-cart" data-id="' + (item.id || '') + '" data-name="' + (item.name || '') + '" data-price="' + (item.price || '') + '">';
            html += '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
            html += '</button>';
            html += '</div></article>';
        }

        menuGrid.innerHTML = html;

        if (loadMoreBtn) {
            if (hasMore) {
                loadMoreBtn.style.display = 'inline-block';
                loadMoreBtn.textContent = 'Load More (' + (filtered.length - showItems.length) + ' remaining)';
            } else if (showItems.length < totalCount) {
                loadMoreBtn.style.display = 'inline-block';
                loadMoreBtn.textContent = 'Show All (' + totalCount + ' items)';
            } else {
                loadMoreBtn.style.display = filtered.length > displayCount ? 'inline-block' : 'none';
                loadMoreBtn.textContent = 'Show Less';
            }
        }
    }

    // Tab switching
    if (tabContainer) {
        tabContainer.addEventListener('click', function(e) {
            var btn = e.target.closest('.tab-btn');
            if (!btn) return;
            tabContainer.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            if (loadMoreBtn) loadMoreBtn.textContent = 'Load All Dishes';
            renderMenu();
        });
    }

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase().trim();
            if (clearBtn) clearBtn.style.display = currentSearch ? 'block' : 'none';
            if (loadMoreBtn) loadMoreBtn.textContent = 'Load All Dishes';
            renderMenu();
        });
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (searchInput) { searchInput.value = ''; currentSearch = ''; }
            clearBtn.style.display = 'none';
            if (loadMoreBtn) loadMoreBtn.textContent = 'Load All Dishes';
            renderMenu();
        });
    }

    // Load more / show less
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            if (this.textContent === 'Show Less') {
                this.textContent = 'Load All Dishes';
                renderMenu();
            } else {
                this.textContent = 'Show Less';
                renderMenu();
            }
        });
    }

    // Initial render
    renderMenu();

    // Add to Cart handlers
    document.addEventListener('click', function(e) {
        var btn = e.target.closest('.btn-add-to-cart');
        if (!btn) return;
        var badge = document.getElementById('cart-badge');
        if (badge) {
            var count = parseInt(badge.textContent) || 0;
            badge.textContent = count + 1;
            badge.style.display = 'flex';
        }
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
        btn.style.background = '#10b981';
        btn.style.color = '#fff';
        btn.style.borderColor = '#10b981';
        setTimeout(function() {
            btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 1200);
    });
});
</script>

<?php get_footer(); ?>
