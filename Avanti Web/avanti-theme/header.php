<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <style>
        /* ============================================================
           Animated Nav Header — Inspired by React NavHeader Component
           ============================================================ */

        #main-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(6, 7, 8, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--color-border, rgba(255,255,255,0.05));
            transition: background 0.3s ease;
        }

        .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: var(--container-width, 1200px);
            margin: 0 auto;
            padding: 0 20px;
            height: var(--header-height, 80px);
        }

        /* ---- Logo ---- */
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1001;
        }

        .logo img {
            height: 60px;
            width: auto;
        }

        .logo-text {
            font-family: var(--font-heading, 'Outfit', sans-serif);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--color-text-main, #f1f2f6);
        }

        .logo-text .logo-accent {
            color: var(--color-primary, #dfb15b);
        }

        /* ---- Animated Nav (React Style) ---- */
        .animated-nav {
            position: relative;
            display: flex;
            align-items: center;
            gap: 4px;
            margin: 0;
            padding: 6px;
            list-style: none;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 100px;
        }

        .animated-nav .nav-item {
            position: relative;
            z-index: 10;
            display: block;
            cursor: pointer;
            padding: 8px 16px;
            font-family: var(--font-body, 'Inter', sans-serif);
            font-size: 0.85rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--color-text-main, #f1f2f6);
            text-decoration: none;
            white-space: nowrap;
            transition: color 0.2s ease;
            border-radius: 100px;
        }

        .animated-nav .nav-item:hover,
        .animated-nav .nav-item.active {
            color: #fff;
        }

        /* Animated Cursor (the moving pill) */
        .nav-cursor {
            position: absolute;
            top: 6px;
            left: 0;
            height: calc(100% - 12px);
            background: var(--color-primary, #dfb15b);
            border-radius: 100px;
            pointer-events: none;
            transition: left 0.35s cubic-bezier(0.25, 0.8, 0.25, 1),
                        width 0.35s cubic-bezier(0.25, 0.8, 0.25, 1),
                        opacity 0.25s ease;
            opacity: 0;
            z-index: 1;
        }

        .nav-cursor.visible {
            opacity: 1;
        }

        /* ---- Nav Actions (right side) ---- */
        .nav-actions {
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 1001;
        }

        .lang-toggle-btn {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 12px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 100px;
            color: var(--color-text-muted, #9ba3af);
            cursor: pointer;
            font-family: var(--font-body, 'Inter', sans-serif);
            font-size: 0.8rem;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        .lang-toggle-btn:hover {
            border-color: var(--color-primary, #dfb15b);
            color: var(--color-primary, #dfb15b);
        }

        .lang-text-en.active, .lang-text-bn.active {
            color: var(--color-primary, #dfb15b);
        }

        .lang-divider {
            color: rgba(255, 255, 255, 0.2);
        }

        .nav-cta {
            padding: 12px 24px;
            background: var(--color-primary, #dfb15b);
            color: #000 !important;
            border-radius: 100px;
            font-family: var(--font-body, 'Inter', sans-serif);
            font-size: 0.85rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            white-space: nowrap;
        }

        .nav-cta:hover {
            background: var(--color-primary-hover, #c5a880);
            transform: translateY(-1px);
            box-shadow: 0 4px 20px rgba(223, 177, 91, 0.3);
        }

        /* ---- Mobile Toggle ---- */
        .mobile-nav-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 8px;
            z-index: 1001;
        }

        .mobile-nav-toggle .bar {
            display: block;
            width: 24px;
            height: 2px;
            background: var(--color-text-main, #f1f2f6);
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        .mobile-nav-toggle.active .bar:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .mobile-nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        .mobile-nav-toggle.active .bar:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }

        /* ---- Mobile Nav Overlay ---- */
        .mobile-nav-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(6, 7, 8, 0.97);
            backdrop-filter: blur(20px);
            z-index: 999;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .mobile-nav-overlay.active {
            display: flex;
            opacity: 1;
        }

        .mobile-nav-overlay a {
            font-family: var(--font-heading, 'Outfit', sans-serif);
            font-size: 1.8rem;
            color: var(--color-text-main, #f1f2f6);
            text-decoration: none;
            transition: color 0.2s;
        }

        .mobile-nav-overlay a:hover {
            color: var(--color-primary, #dfb15b);
        }

        /* ---- Responsive ---- */
        @media (max-width: 900px) {
            .animated-nav {
                display: none;
            }
            .nav-actions .nav-cta {
                display: none;
            }
            .mobile-nav-toggle {
                display: flex;
            }
        }
    </style>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>



    <!-- Header with Animated Navigation -->
    <header id="main-header">
        <div class="container header-container">
            <!-- Logo -->
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
                <?php 
                $logo_img = get_template_directory_uri() . '/assets/logo.png';
                if ( file_exists( get_template_directory() . '/assets/logo.png' ) ) : ?>
                    <img src="<?php echo esc_url( $logo_img ); ?>" alt="Avanti Logo">
                <?php else : 
                    $logo_text = get_theme_mod( 'avanti_logo_text', 'Avanti' );
                    $first_char = substr($logo_text, 0, 1);
                    $rest_chars = substr($logo_text, 1);
                    ?>
                    <span class="logo-text"><span class="logo-accent"><?php echo esc_html($first_char); ?></span><?php echo esc_html($rest_chars); ?></span>
                <?php endif; ?>
            </a>

            <?php
            // Determine current page slug
            $current_slug = '';
            if ( is_front_page() || is_home() ) {
                $current_slug = 'home';
            } else if ( is_page() ) {
                global $post;
                $current_slug = isset( $post->post_name ) ? $post->post_name : '';
            } else if ( is_singular('menu_item') || is_post_type_archive('menu_item') ) {
                $current_slug = 'menu';
            }
            $is_home = is_front_page() || is_home();
            ?>

            <!-- Animated Navigation (React NavHeader Style) -->
            <nav>
                <ul class="animated-nav" id="animatedNav">
                    <li class="nav-cursor" id="navCursor"></li>
                    <li>
                        <a href="<?php echo $is_home ? '#home' : esc_url( home_url( '/' ) ); ?>" 
                           class="nav-item <?php echo ($current_slug === 'home') ? 'active' : ''; ?>"
                           data-href="home">Home</a>
                    </li>
                    <li>
                        <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" 
                           class="nav-item <?php echo ($current_slug === 'about') ? 'active' : ''; ?>"
                           data-href="about">About</a>
                    </li>
                    <li>
                        <a href="<?php echo esc_url( home_url( '/menu/' ) ); ?>" 
                           class="nav-item <?php echo ($current_slug === 'menu') ? 'active' : ''; ?>"
                           data-href="menu">Menu</a>
                    </li>
                    <li>
                        <a href="<?php echo esc_url( home_url( '/chef-specials/' ) ); ?>" 
                           class="nav-item <?php echo ($current_slug === 'chef-specials' || $current_slug === 'chef-special') ? 'active' : ''; ?>"
                           data-href="chef-specials">Specials</a>
                    </li>
                    <li>
                        <a href="<?php echo $is_home ? '#gallery' : esc_url( home_url( '/gallery/' ) ); ?>" 
                           class="nav-item <?php echo ($current_slug === 'gallery') ? 'active' : ''; ?>"
                           data-href="gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" 
                           class="nav-item <?php echo ($current_slug === 'contact') ? 'active' : ''; ?>"
                           data-href="contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <!-- Nav Actions -->
            <div class="nav-actions">
                <button id="lang-toggle" class="lang-toggle-btn" aria-label="Toggle language">
                    <span class="lang-text-en active">EN</span>
                    <span class="lang-divider">/</span>
                    <span class="lang-text-bn">বাং</span>
                </button>
                <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="nav-cta">Book Table</a>
            </div>

            <!-- Mobile Hamburger -->
            <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle navigation menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </header>

    <!-- Mobile Nav Overlay -->
    <div class="mobile-nav-overlay" id="mobileNavOverlay">
        <a href="<?php echo $is_home ? '#home' : esc_url( home_url( '/' ) ); ?>">Home</a>
        <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a>
        <a href="<?php echo esc_url( home_url( '/menu/' ) ); ?>">Menu</a>
        <a href="<?php echo esc_url( home_url( '/chef-specials/' ) ); ?>">Specials</a>
        <a href="<?php echo $is_home ? '#gallery' : esc_url( home_url( '/gallery/' ) ); ?>">Gallery</a>
        <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact</a>
        <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="nav-cta" style="margin-top: 20px;">Book Table</a>
    </div>

    <!-- Animated Nav Cursor JS -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const nav = document.getElementById('animatedNav');
        const cursor = document.getElementById('navCursor');
        const items = nav ? nav.querySelectorAll('.nav-item') : [];
        
        // Set initial cursor position on active item
        function updateCursor(el) {
            if (!el || !cursor) return;
            const rect = el.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            cursor.style.left = (rect.left - navRect.left) + 'px';
            cursor.style.width = rect.width + 'px';
            cursor.style.opacity = '1';
            cursor.classList.add('visible');
        }

        // Initially position cursor on active item
        let activeItem = null;
        items.forEach(item => {
            if (item.classList.contains('active')) {
                activeItem = item;
            }
        });
        if (activeItem) {
            setTimeout(() => updateCursor(activeItem), 100);
        }

        // Hover effect — move cursor to hovered item
        items.forEach(item => {
            item.addEventListener('mouseenter', function() {
                updateCursor(this);
            });
        });

        // Mouse leave — return to active item
        if (nav) {
            nav.addEventListener('mouseleave', function() {
                if (activeItem) {
                    updateCursor(activeItem);
                } else {
                    cursor.style.opacity = '0';
                    cursor.classList.remove('visible');
                }
            });
        }

        // On click, update active item
        items.forEach(item => {
            item.addEventListener('click', function() {
                items.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                activeItem = this;
                updateCursor(this);
            });
        });

        // Window resize — recalculate cursor
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (activeItem) updateCursor(activeItem);
            }, 100);
        });

        // ---- Mobile Nav Toggle ----
        const toggleBtn = document.getElementById('mobileNavToggle');
        const overlay = document.getElementById('mobileNavOverlay');

        if (toggleBtn && overlay) {
            toggleBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
            });

            // Close overlay on link click
            overlay.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    toggleBtn.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    });
    </script>
