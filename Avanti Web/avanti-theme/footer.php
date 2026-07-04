<?php
/**
 * Theme Footer Template
 *
 * @package Avanti_Classic
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

    <!-- Footer -->
    <footer class="footer-section">
        <div class="container footer-container">
            <div class="footer-brand-col">
                <a href="#home" class="logo">
                    <?php 
                    $logo_img = get_template_directory_uri() . '/assets/logo.png';
                    if ( file_exists( get_template_directory() . '/assets/logo.png' ) ) : ?>
                        <img src="<?php echo esc_url( $logo_img ); ?>" alt="Avanti Logo" style="height: 48px; width: auto; margin-right: 10px;">
                    <?php else : 
                        $logo_text = get_theme_mod( 'avanti_logo_text', 'Avanti' );
                        $first_char = substr($logo_text, 0, 1);
                        $rest_chars = substr($logo_text, 1);
                        ?>
                        <span class="logo-accent"><?php echo esc_html($first_char); ?></span><?php echo esc_html($rest_chars); ?>
                    <?php endif; ?>
                </a>
                <p class="brand-tagline">Serving authentic Italian pizzas, gourmet set meals, and fresh fast food with progressive culinary craft since 2012.</p>
            </div>
            <div class="footer-links-col">
                <h4>Sitemap</h4>
                <ul>
                    <li><a href="<?php echo is_front_page() ? '#home' : esc_url( home_url( '/' ) ); ?>">Home</a></li>
                    <li><a href="<?php echo is_front_page() ? '#about' : esc_url( home_url( '/about/' ) ); ?>">About Philosophy</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/menu/' ) ); ?>">Chef's Menu</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/chef-specials/' ) ); ?>">Chef Specials</a></li>
                    <li><a href="<?php echo is_front_page() ? '#gallery' : esc_url( home_url( '/gallery/' ) ); ?>">Visual Gallery</a></li>
                </ul>
            </div>
            <div class="footer-newsletter-col">
                <h4>Join Our Club</h4>
                <p>Subscribe to receive updates on chef tastings, pizza discounts, and seasonal menus.</p>
                <form class="footer-subscribe-form" id="subscribe-form">
                    <input type="email" placeholder="Your Email Address" required>
                    <button type="submit" aria-label="Subscribe"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container footer-bottom-container">
                <p class="copyright">&copy; Copyright <?php echo date('Y'); ?> Avanti Restaurant. All Rights Reserved.</p>
                <p class="designer">Developed with Passion. Redesigned with Minimal Excellence.</p>
            </div>
        </div>
    </footer>

    <!-- Floating Cart Button -->
    <div id="floating-cart" class="floating-cart">
        <div class="cart-icon-wrapper">
            <i class="fa-solid fa-cart-shopping"></i>
            <span id="cart-badge" class="cart-badge">0</span>
        </div>
    </div>

    <!-- Slide-out Cart Sidebar Drawer -->
    <div id="cart-drawer" class="cart-drawer">
        <div class="cart-drawer-header">
            <h3><i class="fa-solid fa-cart-shopping"></i> Your Cart</h3>
            <button id="close-cart-drawer" class="close-cart-btn" aria-label="Close Cart"><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="cart-drawer-body">
            <!-- Scrollable List of Cart Items -->
            <div id="cart-items-list" class="cart-items-list">
                <div class="empty-cart-message">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <p>Your cart is empty.</p>
                    <a href="<?php echo esc_url( home_url( '/menu/' ) ); ?>" class="btn btn-primary btn-sm close-cart-on-click">Explore Menu</a>
                </div>
            </div>

            <!-- Cart Summary -->
            <div id="cart-summary" class="cart-summary" style="display: none;">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span id="cart-subtotal">৳0</span>
                </div>
                <div class="summary-row">
                    <span id="delivery-label">Delivery Fee:</span>
                    <span id="cart-delivery">৳60</span>
                </div>
                <div class="summary-row grand-total">
                    <span>Grand Total:</span>
                    <span id="cart-total">৳0</span>
                </div>
                <button id="go-to-checkout-btn" class="btn btn-primary btn-block">Proceed to Checkout</button>
            </div>

            <!-- Checkout Form Container -->
            <div id="checkout-form-container" class="checkout-form-container" style="display: none;">
                <div class="checkout-header">
                    <h4><button type="button" id="back-to-cart-btn" class="back-btn"><i class="fa-solid fa-arrow-left"></i></button> Delivery Details</h4>
                </div>
                <form id="checkout-form" class="checkout-form" novalidate>
                    <div class="form-group">
                        <label for="checkout-name">Full Name</label>
                        <input type="text" id="checkout-name" name="name" placeholder="John Doe" required>
                        <span class="error-msg">Name is required (min 2 chars)</span>
                    </div>

                    <div class="form-group">
                        <label for="checkout-phone">Phone Number</label>
                        <input type="tel" id="checkout-phone" name="phone" placeholder="01755-559933" required>
                        <span class="error-msg">Please enter a valid BD phone number</span>
                    </div>

                    <div class="form-group">
                        <label>Order Type</label>
                        <div class="delivery-toggle-container">
                            <button type="button" class="delivery-toggle-btn active" data-value="Delivery">Delivery</button>
                            <button type="button" class="delivery-toggle-btn" data-value="Takeaway">Takeaway</button>
                        </div>
                    </div>

                    <div class="form-group" id="address-group">
                        <label for="checkout-address">Delivery Address</label>
                        <textarea id="checkout-address" name="address" rows="3" placeholder="25, TN Roy Road, Amlapara, Mymensingh" required></textarea>
                        <span class="error-msg">Delivery address is required</span>
                    </div>

                    <div class="form-group">
                        <label for="checkout-notes">Special Instructions (Optional)</label>
                        <textarea id="checkout-notes" name="notes" rows="2" placeholder="e.g. Make it extra spicy, call before delivery..."></textarea>
                    </div>

                    <button type="submit" id="place-order-btn" class="btn btn-primary btn-block">
                        <i class="fa-brands fa-whatsapp"></i> Place Order via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Background backdrop overlay when cart drawer is active -->
    <div id="cart-overlay" class="cart-overlay"></div>

    <!-- Order Success Confirmation Modal -->
    <div id="order-success-modal" class="order-success-modal">
        <div class="success-modal-content">
            <div class="success-icon">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Your order has been recorded in our system. You are being redirected to WhatsApp to send the order details to the kitchen.</p>
            
            <div id="order-summary-details" class="order-summary-details"></div>
            
            <div class="success-actions">
                <a id="whatsapp-manual-btn" href="#" target="_blank" class="btn btn-primary btn-block"><i class="fa-brands fa-whatsapp"></i> Send message manually</a>
                <button type="button" id="close-success-modal" class="btn btn-secondary btn-block">Return to Store</button>
            </div>
        </div>
    </div>

    <!-- Custom Lightbox Modal -->
    <div id="lightbox-modal" class="lightbox-modal">
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightbox-img" alt="Enlarged food item view">
        <div id="lightbox-caption" class="lightbox-caption"></div>
    </div>

    <!-- Booking Confirmation Modal -->
    <div id="booking-modal" class="booking-modal">
        <div class="booking-modal-content">
            <div class="booking-modal-header">
                <i class="fa-regular fa-circle-check success-icon"></i>
                <h2>Reservation Requested</h2>
            </div>
            <div class="booking-modal-body" id="booking-modal-details">
                <!-- Javascript will populate this with booking parameters -->
            </div>
            <div class="booking-modal-footer">
                <button class="btn btn-primary" id="close-booking-modal">Done</button>
            </div>
        </div>
    </div>

    <!-- Output WordPress Menu items as JS variable for script.js dynamic rendering -->
    <?php
    // Load menu data from static CSV-generated file
    include get_template_directory() . '/menu-data.php';
    ?>
    <script type="text/javascript">
        const MENU_DATA = <?php echo json_encode( $menu_items_array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT ); ?>;
    </script>

    <!-- Smoke Background Canvas -->
    <canvas id="smoke-bg-canvas" class="smoke-bg-canvas"></canvas>

    <?php wp_footer(); ?>
</body>
</html>
