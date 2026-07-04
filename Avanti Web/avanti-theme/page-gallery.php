<?php
/**
 * Template Name: Gallery Page
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery-section" style="padding-top: 12rem;">
        <div class="container gallery-container">
            <div class="text-center scroll-reveal">
                <h5 class="section-subtitle">Visual Delights</h5>
                <h2 class="section-title">Moments from Avanti</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">A glimpse into our visual space, dynamic kitchen operations, and gourmet plate presentations.</p>
            </div>
            
            <div class="gallery-grid scroll-reveal">
                <div class="gallery-item lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/special_pizza.png">
                    <img src="<?php echo esc_url( $theme_uri ); ?>/assets/special_pizza.png" alt="Avanti Special Wood-Fired Pizza" class="gallery-img">
                    <div class="gallery-overlay">
                        <div class="overlay-content">
                            <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                            <span class="overlay-title">Wood-Fired Pizza</span>
                            <span class="overlay-category">Kitchen Art</span>
                        </div>
                    </div>
                </div>
                
                <div class="gallery-item lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/special_meal.png">
                    <img src="<?php echo esc_url( $theme_uri ); ?>/assets/special_meal.png" alt="Avanti Gourmet Meal Set" class="gallery-img">
                    <div class="gallery-overlay">
                        <div class="overlay-content">
                            <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                            <span class="overlay-title">Gourmet Meal Set</span>
                            <span class="overlay-category">Plating</span>
                        </div>
                    </div>
                </div>
                
                <div class="gallery-item lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/bbq_meal.png">
                    <img src="<?php echo esc_url( $theme_uri ); ?>/assets/bbq_meal.png" alt="BBQ Chicken Platter" class="gallery-img">
                    <div class="gallery-overlay">
                        <div class="overlay-content">
                            <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                            <span class="overlay-title">BBQ Chicken Platter</span>
                            <span class="overlay-category">Set Menu</span>
                        </div>
                    </div>
                </div>

                <div class="gallery-item lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/chicken_boustead.png">
                    <img src="<?php echo esc_url( $theme_uri ); ?>/assets/chicken_boustead.png" alt="Chicken Boustead Steak Platter" class="gallery-img">
                    <div class="gallery-overlay">
                        <div class="overlay-content">
                            <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                            <span class="overlay-title">Chicken Boustead Platter</span>
                            <span class="overlay-category">Main Course</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
