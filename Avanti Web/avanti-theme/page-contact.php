<?php
/**
 * Template Name: Contact Page
 * ICP-Optimized: Reservation form with Purpose of Visit dropdown
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- Table Reservation Booking Section — ICP Purpose Added -->
    <section id="reserve" class="reserve-section" style="padding-top: 12rem;">
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
