<?php
/**
 * The front page template file
 * ICP-Optimized: Chef Specials Gallery Slider, Background Gradient
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- Hero Section -->
    <section id="home" class="hero-section hero-exterior">
        <div class="container hero-container scroll-reveal">
            <h5 class="hero-subtitle section-subtitle"><?php echo esc_html( get_theme_mod( 'avanti_hero_subtitle', 'Since 2012 • Mymensingh\'s Premier Dining Destination' ) ); ?></h5>
            <h1 class="hero-title">
                <?php 
                $hero_title = get_theme_mod( 'avanti_hero_title', 'Avanti: Where Flavor Meets Elegance' );
                $title_words = explode( ' ', $hero_title );
                if ( count( $title_words ) > 1 ) {
                    $last_word = array_pop( $title_words );
                    $front_title = implode( ' ', $title_words );
                    echo esc_html( $front_title ) . ' <span class="text-gradient">' . esc_html( $last_word ) . '</span>';
                } else {
                    echo esc_html( $hero_title );
                }
                ?>
            </h1>
            <p class="hero-desc"><?php echo esc_html( get_theme_mod( 'avanti_hero_desc', 'Mymensingh\'s finest dining experience. Authentic Mughlai & Italian cuisine, premium corporate conference hall, and a family-friendly ambiance crafted for memorable moments.' ) ); ?></p>
            <div class="hero-actions">
                <a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="btn btn-primary">About Avanti</a>
                <a href="<?php echo esc_url( home_url( '/menu/' ) ); ?>" class="btn btn-secondary">Explore Menu</a>
            </div>
        </div>
        <div class="hero-image-wrapper scroll-reveal">
            <img src="<?php echo esc_url( $theme_uri ); ?>/assets/avanti-exterior.png" alt="Avanti Restaurant Exterior" class="hero-main-image">
        </div>
        <div class="scroll-down-indicator">
            <a href="#specials">
                <span>Chef Specials</span>
                <i class="fa-solid fa-chevron-down"></i>
            </a>
        </div>
    </section>

    <!-- Chef Special Gallery Carousel -->
    <section id="specials" class="menu-section">
        <div class="container">
            <div class="text-center scroll-reveal">
                <h5 class="section-subtitle">Exquisite Creations</h5>
                <h2 class="section-title">Chef Specials Gallery</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">Taste our signature culinary masterpieces — swipe or click through our curated collection.</p>
            </div>
            
            <div class="specials-carousel-wrapper scroll-reveal">
                <div class="specials-carousel-track" id="specialsTrack">
                    <?php
                    $args = array(
                        'post_type'      => 'menu_item',
                        'posts_per_page' => -1,
                        'post_status'    => 'publish',
                        'meta_key'       => '_chef_special_featured',
                        'meta_value'     => '1',
                    );
                    $specials_query = new WP_Query($args);
                    
                    if ($specials_query->have_posts()) :
                        $slide_index = 0;
                        while ($specials_query->have_posts()) : $specials_query->the_post();
                            $pid = get_the_ID();
                            $item_id = get_post_meta($pid, '_menu_item_id', true);
                            $price = get_post_meta($pid, '_menu_item_price', true);
                            $quantity = get_post_meta($pid, '_menu_item_quantity', true);
                            $category = get_post_meta($pid, '_menu_item_category', true);
                            
                            $img_filename = 'special_pizza.png';
                            if ($item_id == 110) $img_filename = 'special_meal.png';
                            elseif ($item_id == 106) $img_filename = 'bbq_meal.png';
                            elseif ($item_id == 108) $img_filename = 'chicken_boustead.png';
                            
                            $img_url = $theme_uri . '/assets/' . $img_filename;
                            
                            $badge_class = 'badge-special';
                            $badge_icon = 'fa-star';
                            $badge_text = "Chef's Special";
                            $tag_html = '<span class="tag"><i class="fa-solid fa-camera"></i> Instagrammable</span>';
                            if ($item_id == 106) {
                                $badge_class = 'badge-popular';
                                $badge_icon = 'fa-users';
                                $badge_text = 'Family Favorite';
                                $tag_html = '<span class="tag"><i class="fa-solid fa-users"></i> Family Size</span>';
                            } elseif ($item_id == 108) {
                                $badge_class = 'corporate-badge';
                                $badge_icon = 'fa-briefcase';
                                $badge_text = 'Corporate Pick';
                                $tag_html = '<span class="tag"><i class="fa-solid fa-clock"></i> Quick Service</span>';
                            }
                            ?>
                            <div class="specials-slide <?php echo $slide_index === 0 ? 'active' : ''; ?>" data-index="<?php echo $slide_index; ?>">
                                <div class="specials-card">
                                    <div class="specials-image-wrapper">
                                        <span class="badge <?php echo $badge_class; ?>"><i class="fa-solid <?php echo $badge_icon; ?>"></i> <?php echo $badge_text; ?></span>
                                        <img src="<?php echo esc_url($img_url); ?>" alt="<?php the_title(); ?>" class="specials-image">
                                        <div class="specials-image-overlay">
                                            <a href="<?php the_permalink(); ?>" class="specials-view-btn"><i class="fa-solid fa-eye"></i> View Details</a>
                                        </div>
                                    </div>
                                    <div class="specials-info">
                                        <div class="specials-header">
                                            <h3 class="specials-title"><?php the_title(); ?></h3>
                                            <span class="specials-price">৳<?php echo esc_html($price); ?></span>
                                        </div>
                                        <p class="specials-desc"><?php echo wp_trim_words(get_the_content(), 12); ?></p>
                                        <div class="specials-meta">
                                            <span class="tag"><i class="fa-solid fa-tags"></i> <?php echo esc_html($category); ?></span>
                                            <?php if ($quantity) : ?><span class="tag"><i class="fa-solid fa-weight-hanging"></i> <?php echo esc_html($quantity); ?></span><?php endif; ?>
                                            <?php echo $tag_html; ?>
                                        </div>
                                        <button type="button" class="btn-add-to-cart" data-id="<?php echo esc_attr($item_id); ?>" data-name="<?php echo esc_attr(get_the_title()); ?>" data-price="<?php echo esc_attr($price); ?>">
                                            <i class="fa-solid fa-cart-plus"></i> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <?php
                            $slide_index++;
                        endwhile;
                        wp_reset_postdata();
                    else :
                        echo '<p class="text-center" style="grid-column: 1/-1;">No specials found.</p>';
                    endif;
                    ?>
                </div>

                <!-- Carousel Controls -->
                <button class="specials-arrow prev" id="specialsPrev"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="specials-arrow next" id="specialsNext"><i class="fa-solid fa-chevron-right"></i></button>

                <!-- Dots -->
                <div class="specials-dots" id="specialsDots">
                    <?php
                    for ($d = 0; $d < ($specials_query->have_posts() ? $specials_query->post_count : 0); $d++) {
                        echo '<span class="specials-dot ' . ($d === 0 ? 'active' : '') . '" data-index="' . $d . '"></span>';
                    }
                    ?>
                </div>
            </div>
            
            <div class="text-center scroll-reveal" style="margin-top: 3rem;">
                <a href="<?php echo esc_url( home_url( '/chef-specials/' ) ); ?>" class="btn btn-secondary">View All Specials</a>
            </div>
        </div>
    </section>

    <!-- Services Carousel Section -->
    <section id="services" class="about-section" style="border-top: 1px solid rgba(255, 255, 255, 0.02); background: rgba(255,255,255,0.01);">
        <div class="container">
            <div class="text-center scroll-reveal" style="margin-bottom: 3rem;">
                <h5 class="section-subtitle">What We Offer</h5>
                <h2 class="section-title">Our Premier Services</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">From private family gatherings to corporate events, we offer tailored culinary arrangements to suit your requirements.</p>
            </div>
            
            <div class="services-carousel-wrapper scroll-reveal">
                <div class="services-carousel-track" id="servicesTrack">
                    <!-- Slide 1: 3 cards -->
                    <div class="services-slide active" data-index="0">
                        <div class="services-slide-grid">
                            <div class="service-card">
                                <div class="service-icon-wrap">
                                    <i class="fa-solid fa-cake-candles"></i>
                                </div>
                                <h3 class="service-title">In-house Party</h3>
                                <p class="service-desc">Corporate meetings, birthday celebrations, and special family gatherings in our dedicated event space.</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon-wrap">
                                    <i class="fa-solid fa-bell-concierge"></i>
                                </div>
                                <h3 class="service-title">Outdoor Catering</h3>
                                <p class="service-desc">Professional scale catering team and custom food arrangements at your venue. We bring the feast to you.</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon-wrap">
                                    <i class="fa-solid fa-utensils"></i>
                                </div>
                                <h3 class="service-title">Buffet Setup</h3>
                                <p class="service-desc">Global standard buffet setups for corporate launches, weddings, or private events with diverse menu options.</p>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 2: 2 remaining cards -->
                    <div class="services-slide" data-index="1">
                        <div class="services-slide-grid">
                            <div class="service-card">
                                <div class="service-icon-wrap">
                                    <i class="fa-solid fa-users-rectangle"></i>
                                </div>
                                <h3 class="service-title">Conference Hall</h3>
                                <p class="service-desc">Equipped space with sound support and screens for corporate client events, board meetings, and seminars.</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon-wrap">
                                    <i class="fa-solid fa-people-roof"></i>
                                </div>
                                <h3 class="service-title">Private Dining</h3>
                                <p class="service-desc">Secluded dining rooms for up to 25 guests. Perfect for intimate family celebrations and VIP gatherings.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="services-arrow prev" id="servicesPrev"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="services-arrow next" id="servicesNext"><i class="fa-solid fa-chevron-right"></i></button>

                <div class="services-dots" id="servicesDots">
                    <span class="services-dot active" data-index="0"></span>
                    <span class="services-dot" data-index="1"></span>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section — ICP Social Proof -->
    <section id="reviews" class="reviews-section">
        <div class="container">
            <div class="text-center scroll-reveal">
                <h5 class="section-subtitle">Testimonials</h5>
                <h2 class="section-title">What Our Guests Say</h2>
                <div class="section-divider center"></div>
            </div>

            <div class="reviews-carousel-wrapper scroll-reveal">
                <div class="reviews-carousel">
                    <!-- Review 1: Corporate Elite -->
                    <div class="review-slide active">
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="review-quote">"Avanti's conference hall and business set menu are truly exceptional for corporate meetings in Mymensingh. Professional ambiance with outstanding hospitality."</p>
                        <div class="review-author">
                            <div class="author-details">
                                <span class="author-name">Dr. Ahmed Hossain</span>
                                <span class="author-title">Senior Banker, Mymensingh</span>
                            </div>
                        </div>
                    </div>
                    <!-- Review 2: Premium Families -->
                    <div class="review-slide">
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                        </div>
                        <p class="review-quote">"We chose Avanti for our family birthday celebration. The kids loved both the food and the atmosphere. Cleanliness 10/10 — truly a family-friendly environment."</p>
                        <div class="review-author">
                            <div class="author-details">
                                <span class="author-name">Farhana Akhter</span>
                                <span class="author-title">Homemaker & Expat Family</span>
                            </div>
                        </div>
                    </div>
                    <!-- Review 3: Youth & Creators -->
                    <div class="review-slide">
                        <div class="rating-stars">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-alt"></i>
                        </div>
                        <p class="review-quote">"The Avanti Special Pizza presentation and taste are both incredible! The interior is so aesthetic that every corner is Instagram-worthy. A must-visit for foodies!"</p>
                        <div class="review-author">
                            <div class="author-details">
                                <span class="author-name">Rafi Islam</span>
                                <span class="author-title">Food Blogger @MymensinghFoodie</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control prev"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="carousel-control next"><i class="fa-solid fa-chevron-right"></i></button>
                <div class="carousel-dots">
                    <span class="dot active" data-slide="0"></span>
                    <span class="dot" data-slide="1"></span>
                    <span class="dot" data-slide="2"></span>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery-section">
        <div class="container gallery-container">
            <div class="text-center scroll-reveal">
                <h5 class="section-subtitle">Visual Delights</h5>
                <h2 class="section-title">Moments from Avanti</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">A glimpse into our visual space, dynamic kitchen operations, and gourmet plate presentations.</p>
            </div>

            <div class="moments-carousel-wrapper scroll-reveal">
                <div class="moments-carousel-track" id="momentsTrack">
                    <!-- Slide 1 -->
                    <div class="moments-slide active" data-index="0">
                        <div class="moments-grid">
                            <div class="moments-card lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/special_pizza.png">
                                <img src="<?php echo esc_url( $theme_uri ); ?>/assets/special_pizza.png" alt="Avanti Special Wood-Fired Pizza" class="moments-img">
                                <div class="moments-overlay">
                                    <div class="overlay-content">
                                        <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                                        <span class="overlay-title">Wood-Fired Pizza</span>
                                        <span class="overlay-category">Kitchen Art</span>
                                    </div>
                                </div>
                            </div>
                            <div class="moments-card lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/special_meal.png">
                                <img src="<?php echo esc_url( $theme_uri ); ?>/assets/special_meal.png" alt="Avanti Gourmet Meal Set" class="moments-img">
                                <div class="moments-overlay">
                                    <div class="overlay-content">
                                        <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                                        <span class="overlay-title">Gourmet Meal Set</span>
                                        <span class="overlay-category">Plating</span>
                                    </div>
                                </div>
                            </div>
                            <div class="moments-card lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/bbq_meal.png">
                                <img src="<?php echo esc_url( $theme_uri ); ?>/assets/bbq_meal.png" alt="BBQ Chicken Platter" class="moments-img">
                                <div class="moments-overlay">
                                    <div class="overlay-content">
                                        <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                                        <span class="overlay-title">BBQ Chicken Platter</span>
                                        <span class="overlay-category">Set Menu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Slide 2: 1 card remaining -->
                    <div class="moments-slide" data-index="1">
                        <div class="moments-grid">
                            <div class="moments-card lightbox-trigger" data-src="<?php echo esc_url( $theme_uri ); ?>/assets/chicken_boustead.png">
                                <img src="<?php echo esc_url( $theme_uri ); ?>/assets/chicken_boustead.png" alt="Chicken Boustead Steak Platter" class="moments-img">
                                <div class="moments-overlay">
                                    <div class="overlay-content">
                                        <i class="fa-solid fa-magnifying-glass-plus overlay-icon"></i>
                                        <span class="overlay-title">Chicken Boustead Platter</span>
                                        <span class="overlay-category">Main Course</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="moments-arrow prev" id="momentsPrev" aria-label="Previous">&#10094;</button>
                <button class="moments-arrow next" id="momentsNext" aria-label="Next">&#10095;</button>

                <div class="moments-dots" id="momentsDots"></div>
            </div>
        </div>
    </section>

    <!-- Table Reservation Booking Section -->
    <section id="reserve" class="reserve-section">
        <div class="container reserve-container">
            <div class="reserve-content scroll-reveal">
                <h5 class="section-subtitle">Secure Your Experience</h5>
                <h2 class="section-title">Table Reservation</h2>
                <div class="section-divider"></div>
                <p class="reserve-desc">Established on principles of service quality, we welcome table bookings. Reserving in advance secures your table for birthday bashes, family dinners, or corporate meetings.</p>
                
                <div class="booking-notice">
                    <i class="fa-solid fa-circle-info notice-icon"></i>
                    <div>
                        <h4 class="notice-title">Notice for Reservations:</h4>
                        <p class="notice-text"><?php echo esc_html(get_theme_mod('avanti_booking_notice', 'Reservations are held for 15 minutes past the booking time. For group bookings larger than 12 guests, please contact us directly at 01755-559933.')); ?></p>
                    </div>
                </div>
            </div>
            
            <div class="reserve-form-container scroll-reveal">
                <form id="reservation-form" class="reserve-form" novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <div class="input-wrapper">
                                <i class="fa-regular fa-user input-icon"></i>
                                <input type="text" id="name" name="name" placeholder="John Doe" required>
                            </div>
                            <span class="error-msg" id="name-error">Name is required</span>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <div class="input-wrapper">
                                <i class="fa-solid fa-phone input-icon"></i>
                                <input type="tel" id="phone" name="phone" placeholder="01755-559933" required>
                            </div>
                            <span class="error-msg" id="phone-error">Please enter a valid phone number</span>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <div class="input-wrapper">
                                <i class="fa-regular fa-envelope input-icon"></i>
                                <input type="email" id="email" name="email" placeholder="john@example.com" required>
                            </div>
                            <span class="error-msg" id="email-error">Please enter a valid email</span>
                        </div>
                        <div class="form-group">
                            <label for="guests">Number of Guests</label>
                            <div class="input-wrapper">
                                <i class="fa-solid fa-users input-icon"></i>
                                <select id="guests" name="guests" required>
                                    <option value="" disabled selected>Select Guests</option>
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                    <option value="5">5 Guests</option>
                                    <option value="6">6 Guests</option>
                                    <option value="7">7 Guests</option>
                                    <option value="8">8 Guests</option>
                                    <option value="9">9 Guests</option>
                                    <option value="10">10 Guests</option>
                                    <option value="11">11 Guests</option>
                                    <option value="12">12 Guests</option>
                                </select>
                            </div>
                            <span class="error-msg" id="guests-error">Please select number of guests</span>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="date">Date</label>
                            <div class="input-wrapper">
                                <i class="fa-regular fa-calendar input-icon"></i>
                                <input type="date" id="date" name="date" required>
                            </div>
                            <span class="error-msg" id="date-error">Please select a future date</span>
                        </div>
                        <div class="form-group">
                            <label for="time">Preferred Time</label>
                            <div class="input-wrapper">
                                <i class="fa-regular fa-clock input-icon"></i>
                                <select id="time" name="time" required>
                                    <option value="" disabled selected>Select Time</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                </select>
                            </div>
                            <span class="error-msg" id="time-error">Please select a time slot</span>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="purpose">Purpose of Visit</label>
                            <div class="input-wrapper">
                                <i class="fa-solid fa-tag input-icon"></i>
                                <select id="purpose" name="purpose">
                                    <option value="">Select Purpose (Optional)</option>
                                    <option value="corporate">Corporate Meeting / Board Room</option>
                                    <option value="family">Family Dinner / Celebration</option>
                                    <option value="casual">Casual Hangout / Friends</option>
                                    <option value="birthday">Birthday / Anniversary</option>
                                    <option value="content">Food Content / Blogging</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="requests">Special Requests (Optional)</label>
                            <textarea id="requests" name="requests" rows="3" placeholder="Birthday celebration, high chair, window seat..."></textarea>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block">Confirm Reservation</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Contact & Map Section -->
    <section id="contact" class="contact-section">
        <div class="container contact-container">
            <div class="contact-info-column scroll-reveal">
                <h5 class="section-subtitle">Locate Avanti</h5>
                <h2 class="section-title">Where to Find Us</h2>
                <div class="section-divider"></div>
                
                <div class="info-list">
                    <div class="info-item">
                        <i class="fa-solid fa-location-dot info-icon"></i>
                        <div>
                            <h4>Address</h4>
                            <p><?php echo esc_html(get_theme_mod('avanti_contact_address', '25, TN Roy Road, Amlapara, Mymensingh Sadar - 2200, Bangladesh')); ?></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fa-solid fa-phone info-icon"></i>
                        <div>
                            <h4>Reservation Line</h4>
                            <p><a href="tel:<?php echo esc_attr(get_theme_mod('avanti_contact_phone', '01755-559933')); ?>"><?php echo esc_html(get_theme_mod('avanti_contact_phone', '01755-559933')); ?></a></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fa-solid fa-envelope info-icon"></i>
                        <div>
                            <h4>Email Enquiries</h4>
                            <p><a href="mailto:<?php echo esc_attr(get_theme_mod('avanti_contact_email', 'info@avantibd.com')); ?>"><?php echo esc_html(get_theme_mod('avanti_contact_email', 'info@avantibd.com')); ?></a></p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <i class="fa-regular fa-clock info-icon"></i>
                        <div>
                            <h4>Opening Hours</h4>
                            <p><?php echo esc_html(get_theme_mod('avanti_contact_hours', 'Daily: 11:30 AM - 11:00 PM')); ?></p>
                        </div>
                    </div>
                </div>
                
                <div class="social-links-container">
                    <h4>Connect Online</h4>
                    <div class="social-links">
                        <a href="<?php echo esc_url(get_theme_mod('avanti_facebook_url', 'https://www.facebook.com/AvantiMymensingh/')); ?>" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="<?php echo esc_url(get_theme_mod('avanti_instagram_url', 'https://instagram.com')); ?>" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="<?php echo esc_url(get_theme_mod('avanti_twitter_url', 'https://twitter.com')); ?>" target="_blank" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="contact-map-column scroll-reveal">
                <div class="map-card-wrapper">
                    <div class="map-mockup">
                        <div class="map-pin">
                            <i class="fa-solid fa-location-dot"></i>
                            <div class="pulse"></div>
                        </div>
                        <div class="map-info-popup">
                            <h3>Avanti Restaurant</h3>
                            <p>Amlapara, Mymensingh</p>
                        </div>
                        <div class="map-grid-pattern"></div>
                        <a href="https://maps.google.com/?q=Avanti+Restaurant+TN+Roy+Road+Mymensingh" target="_blank" class="btn btn-secondary map-btn">
                            <i class="fa-solid fa-map-location-dot"></i> Open in Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
