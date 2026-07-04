<?php
/**
 * Template Name: About Page
 * Full About experience with ICP Highlights + Services
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- About Hero -->
    <section id="about" class="about-section" style="padding-top: 12rem;">
        <div class="container about-container">
            <div class="about-image-column scroll-reveal">
                <div class="about-image-card">
                    <img src="<?php echo esc_url( $theme_uri ); ?>/assets/special_meal.png" alt="Avanti Gourmet Platter Plating" class="about-img">
                    <div class="card-glow"></div>
                </div>
            </div>
            
            <div class="about-content-column scroll-reveal">
                <h5 class="section-subtitle"><?php echo esc_html( get_theme_mod( 'avanti_about_subtitle', 'Our Journey' ) ); ?></h5>
                <h2 class="section-title"><?php echo esc_html( get_theme_mod( 'avanti_about_title', 'Moving Forward with Flavor Since 2012' ) ); ?></h2>
                <div class="section-divider"></div>
                <p class="about-text">
                    <?php echo esc_html( get_theme_mod( 'avanti_about_text1', "Founded in 2012 by partners with a shared vision of culinary excellence, Avanti Restaurant has become a benchmark for high-quality dining in Mymensingh Sadar. The name Avanti, meaning 'let's move forward' in Italian, guides our commitment to fresh ingredients and progressive recipes." ) ); ?>
                </p>
                <p class="about-text">
                    <?php echo esc_html( get_theme_mod( 'avanti_about_text2', 'We serve a wide variety of cuisines ranging from artisanal pizzas and creamy pasta to set platters and refreshing custom beverages. Every dish is cooked to order by our dedicated kitchen crew, ensuring a memorable dining experience.' ) ); ?>
                </p>
                <div class="about-highlights">
                    <!-- ICP 1: Corporate Elite -->
                    <div class="highlight-item">
                        <i class="fa-solid fa-briefcase highlight-icon"></i>
                        <span>Premium Conference Hall & Business Lunch</span>
                    </div>
                    <!-- ICP 2: Premium Families -->
                    <div class="highlight-item">
                        <i class="fa-solid fa-users highlight-icon"></i>
                        <span>100% Family-Friendly & Hygienic Environment</span>
                    </div>
                    <!-- ICP 3: Youth & Creators -->
                    <div class="highlight-item">
                        <i class="fa-solid fa-camera highlight-icon"></i>
                        <span>Instagrammable Vibe & Signature Cuisine</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="about-section" style="border-top: 1px solid rgba(255, 255, 255, 0.02); background: rgba(255,255,255,0.01);">
        <div class="container">
            <div class="text-center scroll-reveal" style="margin-bottom: 4rem;">
                <h5 class="section-subtitle">What We Offer</h5>
                <h2 class="section-title">Our Premier Services</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">From private family gatherings to corporate events, we offer tailored culinary arrangements to suit your requirements.</p>
            </div>
            
            <div class="about-highlights" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; justify-content: center; margin-top: 0;">
                <div class="highlight-item" style="flex-direction: column; text-align: center; padding: 2rem 1.5rem;">
                    <i class="fa-solid fa-cake-candles highlight-icon" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 600;">In-house Party</h3>
                    <p style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 300;">Corporate meetings, birthday celebrations, and special family gatherings.</p>
                </div>
                
                <div class="highlight-item" style="flex-direction: column; text-align: center; padding: 2rem 1.5rem;">
                    <i class="fa-solid fa-bell-concierge highlight-icon" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 600;">Outdoor Catering</h3>
                    <p style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 300;">Professional scale catering team and custom food arrangements at your venue.</p>
                </div>

                <div class="highlight-item" style="flex-direction: column; text-align: center; padding: 2rem 1.5rem;">
                    <i class="fa-solid fa-utensils highlight-icon" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 600;">Buffet Setup</h3>
                    <p style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 300;">Global standard buffet setups for corporate launches or private events.</p>
                </div>

                <div class="highlight-item" style="flex-direction: column; text-align: center; padding: 2rem 1.5rem;">
                    <i class="fa-solid fa-users-rectangle highlight-icon" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 600;">Conference Hall</h3>
                    <p style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 300;">Equipped space with sound support and screens for corporate client events.</p>
                </div>

                <div class="highlight-item" style="flex-direction: column; text-align: center; padding: 2rem 1.5rem;">
                    <i class="fa-solid fa-people-roof highlight-icon" style="font-size: 2.5rem; margin-bottom: 1rem;"></i>
                    <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: var(--font-body); font-weight: 600;">Private Dining</h3>
                    <p style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 300;">Secluded dining rooms for up to 25 guests for private family dining.</p>
                </div>
            </div>

            <div class="text-center scroll-reveal" style="margin-top: 3.5rem;">
                <a href="<?php echo esc_url( home_url( '/menu/' ) ); ?>" class="btn btn-primary">Explore Our Menu</a>
                <a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-secondary" style="margin-left: 1rem;">Book a Table</a>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
