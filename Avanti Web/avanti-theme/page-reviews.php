<?php
/**
 * Template Name: Reviews Page
 *
 * @package Avanti_Classic
 */

get_header();
?>

    <!-- Reviews Section -->
    <section id="reviews" class="reviews-section" style="padding-top: 12rem;">
        <div class="container reviews-container scroll-reveal">
            <h5 class="section-subtitle text-center">Testimonials</h5>
            <h2 class="section-title text-center">Stories from Our Guests</h2>
            <div class="section-divider center"></div>
            
            <div class="reviews-carousel-wrapper">
                <div class="reviews-carousel" id="reviews-carousel">
                    
                    <!-- Slide 1 -->
                    <div class="review-slide active">
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <blockquote class="review-quote">
                            "The ambiance at Avanti is unmatched. The cozy lighting and premium dark interior design set the perfect mood for our anniversary dinner. The Avanti Special Pizza was an absolute masterpiece—fragrant, hot, and incredibly cheesy. A must-visit dining experience!"
                        </blockquote>
                        <div class="review-author">
                            <div class="author-details">
                                <h4 class="author-name">Sarah Chowdhury</h4>
                                <p class="author-title">Food Connoisseur</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 2 -->
                    <div class="review-slide">
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <blockquote class="review-quote">
                            "Avanti has been a reliable benchmark for great taste in Mymensingh Sadar. Elegant service, stunning dark-mode aesthetics, and the BBQ Chicken Meal was fresh and perfectly balanced. The visual presentation of the dishes makes them look like works of art."
                        </blockquote>
                        <div class="review-author">
                            <div class="author-details">
                                <h4 class="author-name">MH Talukder</h4>
                                <p class="author-title">Local Guide</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Slide 3 -->
                    <div class="review-slide">
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <blockquote class="review-quote">
                            "A true local icon! The attention to detail in both their food flavor profiles and customer service is top-notch. The soft gradient background lighting in the dining hall matches their branding perfectly. Make sure to try their Chicken Boustead platter—it is heavenly."
                        </blockquote>
                        <div class="review-author">
                            <div class="author-details">
                                <h4 class="author-name">Dr. Anisur Rahman</h4>
                                <p class="author-title">Regular Guest</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <!-- Carousel Controls -->
                <button class="carousel-control prev" id="carousel-prev" aria-label="Previous Review">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="carousel-control next" id="carousel-next" aria-label="Next Review">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                
                <!-- Carousel Dots -->
                <div class="carousel-dots" id="carousel-dots">
                    <span class="dot active" data-index="0"></span>
                    <span class="dot" data-index="1"></span>
                    <span class="dot" data-index="2"></span>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
