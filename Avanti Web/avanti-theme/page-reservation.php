<?php
/**
 * Template Name: Reservation Page
 * ICP-Optimized: Reservation form with Purpose of Visit dropdown
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- Table Reservation Booking Section — ICP Purpose Added -->
    <section id="reserve" class="reserve-section" style="padding-top: 12rem; min-height: 85vh;">
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

<?php get_footer(); ?>
