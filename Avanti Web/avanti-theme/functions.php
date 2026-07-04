<?php
/**
 * Avanti Classic Mymensingh functions and definitions
 *
 * @package Avanti_Classic
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/* ==========================================================================
   1. Theme Setup and Script Enqueues
   ========================================================================== */
function avanti_setup() {
	// Enable support for Post Thumbnails / Featured Images
	add_theme_support( 'post-thumbnails' );
	
	// Add support for title tag
	add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'avanti_setup' );

function avanti_enqueue_scripts() {
    // Enqueue Google Fonts (Playfair Display SC + Karla — UI/UX Pro Max Recommended)
    wp_enqueue_style( 'avanti-fonts', 'https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap', array(), null );

	// Enqueue FontAwesome for icons
	wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0' );

	// Enqueue main stylesheet
	wp_enqueue_style( 'avanti-style', get_stylesheet_uri(), array(), '1.0.0' );

	// Enqueue main script.js (placed in footer)
	wp_enqueue_script( 'avanti-script', get_template_directory_uri() . '/script.js', array(), '1.0.0', true );
    
    // Enqueue WebGL2 Smoke Background (defer, no deps)
    wp_enqueue_script( 'avanti-smoke-bg', get_template_directory_uri() . '/assets/js/smoke-bg.js', array(), '1.0.0', true );

	// Localize script to pass PHP data to JavaScript
	wp_localize_script( 'avanti-script', 'AVANTI_APP', array(
		'ajax_url'          => admin_url( 'admin-ajax.php' ),
		'theme_uri'         => get_template_directory_uri(),
		'order_nonce'       => wp_create_nonce( 'avanti_order_nonce' ),
		'reservation_nonce' => wp_create_nonce( 'avanti_reservation_nonce' ),
		'delivery_charge'   => floatval( get_theme_mod( 'avanti_delivery_charge', '60' ) ),
	) );
}
add_action( 'wp_enqueue_scripts', 'avanti_enqueue_scripts' );


/* ==========================================================================
   2. Register Custom Post Type: Menu Item (Dish Details Page Enabled)
   ========================================================================== */
function avanti_register_menu_item_cpt() {
	$labels = array(
		'name'               => 'Menu Items',
		'singular_name'      => 'Menu Item',
		'menu_name'          => 'Menu Items',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Menu Item',
		'edit_item'          => 'Edit Menu Item',
		'new_item'           => 'New Menu Item',
		'view_item'          => 'View Menu Item',
		'search_items'       => 'Search Menu Items',
		'not_found'          => 'No Menu Items found',
		'not_found_in_trash' => 'No Menu Items found in Trash',
	);

	$args = array(
		'labels'              => $labels,
		'public'              => true,
		'has_archive'         => true,
		'menu_icon'           => 'dashicons-food', // WordPress dashicon for food
		'supports'            => array( 'title', 'editor', 'thumbnail' ),
		'publicly_queryable'  => true, 
		'exclude_from_search' => false,
		'show_in_nav_menus'   => true,
		'rewrite'             => array( 'slug' => 'dish' ),
		'query_var'           => true,
	);

	register_post_type( 'menu_item', $args );
}
add_action( 'init', 'avanti_register_menu_item_cpt' );

/* ==========================================================================
   3. Custom Metaboxes for Menu Item Data (Price, Size, Category, etc.)
   ========================================================================== */
function avanti_add_menu_item_metaboxes() {
	add_meta_box(
		'avanti_menu_item_details',
		'Menu Item Specifications',
		'avanti_render_menu_item_metabox',
		'menu_item',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'avanti_add_menu_item_metaboxes' );

function avanti_render_menu_item_metabox( $post ) {
	$menu_id       = get_post_meta( $post->ID, '_menu_item_id', true );
	$category      = get_post_meta( $post->ID, '_menu_item_category', true );
	$subcategory   = get_post_meta( $post->ID, '_menu_item_subcategory', true );
	$quantity_size = get_post_meta( $post->ID, '_menu_item_quantity', true );
	$price         = get_post_meta( $post->ID, '_menu_item_price', true );

	wp_nonce_field( 'avanti_save_menu_item_meta', 'avanti_menu_item_meta_nonce' );
	?>
	<style>
		.avanti-meta-row { display: flex; margin-bottom: 15px; align-items: center; }
		.avanti-meta-label { width: 150px; font-weight: bold; }
		.avanti-meta-input { flex-grow: 1; padding: 6px; }
	</style>

	<div class="avanti-meta-row">
		<label class="avanti-meta-label" for="avanti_menu_item_id">Item ID (SKU):</label>
		<input class="avanti-meta-input" type="text" id="avanti_menu_item_id" name="avanti_menu_item_id" value="<?php echo esc_attr( $menu_id ); ?>" />
	</div>

	<div class="avanti-meta-row">
		<label class="avanti-meta-label" for="avanti_menu_item_category">Menu Category:</label>
		<select class="avanti-meta-input" id="avanti_menu_item_category" name="avanti_menu_item_category">
			<?php
			$categories = array(
				'Starter',
				'Fast Food & Sandwith',
				'Keto Meal',
				'Salad',
				'Soup',
				'Noodles & Chow Mein',
				'Rice',
				'Chicken',
				'Beef & Mutton',
				'Sea Food',
				'Vegetable',
				'Pasta',
				'Premium Burger',
				'Pizza',
				'Kids & Snacks',
				'Platters',
				'Hot Coffee',
				'Over Iced Latte',
				'Smoothies',
				'Lemonade',
				'Cold Coffee Freppe',
				'Moctail',
				'Juice',
				'Lassi',
				'Milk Shake',
				'Ice-Cream',
				'Dessert'
			);
			foreach ( $categories as $cat ) {
				$selected = ( $category === $cat ) ? 'selected' : '';
				echo '<option value="' . esc_attr( $cat ) . '" ' . $selected . '>' . esc_html( $cat ) . '</option>';
			}
			?>
		</select>
	</div>

	<div class="avanti-meta-row">
		<label class="avanti-meta-label" for="avanti_menu_item_subcategory">Sub Category / Tag (e.g. Chicken, Mutton):</label>
		<input class="avanti-meta-input" type="text" id="avanti_menu_item_subcategory" name="avanti_menu_item_subcategory" value="<?php echo esc_attr( $subcategory ); ?>" />
	</div>

	<div class="avanti-meta-row">
		<label class="avanti-meta-label" for="avanti_menu_item_quantity">Size / Serving (e.g. 1:1, 1:3, 8 Pcs):</label>
		<input class="avanti-meta-input" type="text" id="avanti_menu_item_quantity" name="avanti_menu_item_quantity" value="<?php echo esc_attr( $quantity_size ); ?>" />
	</div>

	<div class="avanti-meta-row">
		<label class="avanti-meta-label" for="avanti_menu_item_price">Price (e.g. 280, MRP, 600-900):</label>
		<input class="avanti-meta-input" type="text" id="avanti_menu_item_price" name="avanti_menu_item_price" value="<?php echo esc_attr( $price ); ?>" />
	</div>
	<?php
}

function avanti_save_menu_item_metadata( $post_id ) {
	if ( ! isset( $_POST['avanti_menu_item_meta_nonce'] ) || ! wp_verify_nonce( $_POST['avanti_menu_item_meta_nonce'], 'avanti_save_menu_item_meta' ) ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$fields = array(
		'avanti_menu_item_id'          => '_menu_item_id',
		'avanti_menu_item_category'     => '_menu_item_category',
		'avanti_menu_item_subcategory'  => '_menu_item_subcategory',
		'avanti_menu_item_quantity'     => '_menu_item_quantity',
		'avanti_menu_item_price'        => '_menu_item_price',
	);

	foreach ( $fields as $post_key => $meta_key ) {
		if ( isset( $_POST[ $post_key ] ) ) {
			update_post_meta( $post_id, $meta_key, sanitize_text_field( $_POST[ $post_key ] ) );
		}
	}
}
add_action( 'save_post', 'avanti_save_menu_item_metadata' );

/* ==========================================================================
   4. Live Customizer Configuration API
   ========================================================================== */
function avanti_customize_register( $wp_customize ) {
	// 4.1. Branding / Logo Customization
	$wp_customize->add_section( 'avanti_branding', array(
		'title'    => 'Avanti Brand Customization',
		'priority' => 30,
	));
	
	$wp_customize->add_setting( 'avanti_logo_text', array(
		'default'   => 'Avanti',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_logo_text', array(
		'label'    => 'Header Logo Text',
		'section'  => 'avanti_branding',
		'type'     => 'text',
	));

	// 4.2. Hero Section Customization
	$wp_customize->add_section( 'avanti_hero', array(
		'title'    => 'Hero Section Content',
		'priority' => 40,
	));

	$wp_customize->add_setting( 'avanti_hero_subtitle', array(
		'default'   => 'Classic Italian & Fast Food',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_hero_subtitle', array(
		'label'    => 'Subtitle',
		'section'  => 'avanti_hero',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_hero_title', array(
		'default'   => 'A Legacy of Fresh Culinary Craft',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_hero_title', array(
		'label'    => 'Headline',
		'section'  => 'avanti_hero',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_hero_desc', array(
		'default'   => 'Established in 2012, Avanti Mymensingh serves authentic Italian pizzas, gourmet platters, and fine fast food, made with fresh local ingredients and timeless passion.',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_hero_desc', array(
		'label'    => 'Description Paragraph',
		'section'  => 'avanti_hero',
		'type'     => 'textarea',
	));

	// 4.3. About Us Philosophy Section
	$wp_customize->add_section( 'avanti_about', array(
		'title'    => 'About Us Philosophy',
		'priority' => 50,
	));

	$wp_customize->add_setting( 'avanti_about_subtitle', array(
		'default'   => 'Our Journey',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_about_subtitle', array(
		'label'    => 'Subtitle',
		'section'  => 'avanti_about',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_about_title', array(
		'default'   => 'Moving Forward with Flavor Since 2012',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_about_title', array(
		'label'    => 'Section Title',
		'section'  => 'avanti_about',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_about_text1', array(
		'default'   => "Founded in 2012 by partners with a shared vision of culinary excellence, Avanti Restaurant has become a benchmark for high-quality dining in Mymensingh Sadar. The name Avanti, meaning 'let's move forward' in Italian, guides our commitment to fresh ingredients and progressive recipes.",
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_about_text1', array(
		'label'    => 'Paragraph 1',
		'section'  => 'avanti_about',
		'type'     => 'textarea',
	));

	$wp_customize->add_setting( 'avanti_about_text2', array(
		'default'   => 'We serve a wide variety of cuisines ranging from artisanal pizzas and creamy pasta to set platters and refreshing custom beverages. Every dish is cooked to order by our dedicated kitchen crew, ensuring a memorable dining experience for you and your family.',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_about_text2', array(
		'label'    => 'Paragraph 2',
		'section'  => 'avanti_about',
		'type'     => 'textarea',
	));

	// 4.4. Contact & Reservation Info
	$wp_customize->add_section( 'avanti_contact', array(
		'title'    => 'Contact & Booking Information',
		'priority' => 60,
	));

	$wp_customize->add_setting( 'avanti_contact_address', array(
		'default'   => '25, TN Roy Road, Amlapara, Mymensingh Sadar - 2200, Bangladesh',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_contact_address', array(
		'label'    => 'Physical Address',
		'section'  => 'avanti_contact',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_contact_phone', array(
		'default'   => '01755-559933',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_contact_phone', array(
		'label'    => 'Reservation Phone Number',
		'section'  => 'avanti_contact',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_contact_email', array(
		'default'   => 'info@avantibd.com',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_contact_email', array(
		'label'    => 'Contact Email Address',
		'section'  => 'avanti_contact',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_contact_hours', array(
		'default'   => 'Daily: 11:30 AM - 11:00 PM',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_contact_hours', array(
		'label'    => 'Opening Hours Text',
		'section'  => 'avanti_contact',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_delivery_charge', array(
		'default'   => '60',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_delivery_charge', array(
		'label'    => 'Delivery Charge (BDT)',
		'section'  => 'avanti_contact',
		'type'     => 'number',
	));

	$wp_customize->add_setting( 'avanti_whatsapp_number', array(
		'default'   => '01755-559933',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_whatsapp_number', array(
		'label'    => 'WhatsApp Order Number',
		'section'  => 'avanti_contact',
		'type'     => 'text',
	));

	$wp_customize->add_setting( 'avanti_booking_notice', array(
		'default'   => 'Reservations are held for 15 minutes past the booking time. For group bookings larger than 12 guests, please contact us directly at 01755-559933.',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_booking_notice', array(
		'label'    => 'Booking Reservation Notice',
		'section'  => 'avanti_contact',
		'type'     => 'textarea',
	));

	// 4.5. Social Links
	$wp_customize->add_section( 'avanti_socials', array(
		'title'    => 'Social Network URLs',
		'priority' => 70,
	));

	$wp_customize->add_setting( 'avanti_facebook_url', array(
		'default'   => 'https://www.facebook.com/AvantiMymensingh/',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_facebook_url', array(
		'label'    => 'Facebook Page Link',
		'section'  => 'avanti_socials',
		'type'     => 'url',
	));

	$wp_customize->add_setting( 'avanti_instagram_url', array(
		'default'   => 'https://instagram.com',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_instagram_url', array(
		'label'    => 'Instagram Link',
		'section'  => 'avanti_socials',
		'type'     => 'url',
	));

	$wp_customize->add_setting( 'avanti_twitter_url', array(
		'default'   => 'https://twitter.com',
		'transport' => 'refresh',
	));
	$wp_customize->add_control( 'avanti_twitter_url', array(
		'label'    => 'Twitter Link',
		'section'  => 'avanti_socials',
		'type'     => 'url',
	));
}
add_action( 'customize_register', 'avanti_customize_register' );

/* ==========================================================================
   5. One-time Automatic Menu Database Preloader
   ========================================================================== */
function avanti_import_initial_menu_items() {
	$count = wp_count_posts( 'menu_item' );
	if ( isset( $count->publish ) && $count->publish > 0 ) {
		return; // Database already populated
	}

	$json_file = get_template_directory() . '/avanti-menu-data.json';
	if ( ! file_exists( $json_file ) ) {
		return;
	}

	$json_data = file_get_contents( $json_file );
	$items     = json_decode( $json_data, true );

	if ( ! is_array( $items ) ) {
		return;
	}

	foreach ( $items as $item ) {
		$post_arr = array(
			'post_title'   => $item['name'],
			'post_content' => $item['description'],
			'post_type'    => 'menu_item',
			'post_status'  => 'publish',
		);

		$post_id = wp_insert_post( $post_arr );

		if ( $post_id && ! is_wp_error( $post_id ) ) {
			update_post_meta( $post_id, '_menu_item_id', $item['id'] );
			update_post_meta( $post_id, '_menu_item_category', $item['category'] );
			update_post_meta( $post_id, '_menu_item_subcategory', $item['subCategory'] );
			update_post_meta( $post_id, '_menu_item_quantity', $item['quantity'] );
			update_post_meta( $post_id, '_menu_item_price', $item['price'] );
			
			// Associate custom food photography images to the 4 signature items
			$numeric_id = intval($item['id']);
			if ($numeric_id === 99 || $numeric_id === 100) {
				update_post_meta( $post_id, '_chef_special_featured', '1' );
			} elseif ($numeric_id === 110) {
				update_post_meta( $post_id, '_chef_special_featured', '1' );
			} elseif ($numeric_id === 106) {
				update_post_meta( $post_id, '_chef_special_featured', '1' );
			} elseif ($numeric_id === 108) {
				update_post_meta( $post_id, '_chef_special_featured', '1' );
			}
		}
	}
}
add_action( 'init', 'avanti_import_initial_menu_items', 20 );

/* ==========================================================================
   6. Custom Post Type: Food Order and Metaboxes
   ========================================================================== */
function avanti_register_food_order_cpt() {
	$labels = array(
		'name'               => 'Food Orders',
		'singular_name'      => 'Food Order',
		'menu_name'          => 'Food Orders',
		'add_new'            => 'Add New Order',
		'add_new_item'       => 'Add New Food Order',
		'edit_item'          => 'Edit Food Order',
		'new_item'           => 'New Food Order',
		'view_item'          => 'View Food Order',
		'search_items'       => 'Search Food Orders',
		'not_found'          => 'No Food Orders found',
		'not_found_in_trash' => 'No Food Orders found in Trash',
	);

	$args = array(
		'labels'              => $labels,
		'public'              => false, // private to admin
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-cart',
		'supports'            => array( 'title' ),
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'show_in_nav_menus'   => false,
	);

	register_post_type( 'food_order', $args );
}
add_action( 'init', 'avanti_register_food_order_cpt' );

function avanti_add_food_order_metaboxes() {
	add_meta_box(
		'avanti_food_order_details',
		'Order Details',
		'avanti_render_food_order_metabox',
		'food_order',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'avanti_add_food_order_metaboxes' );

function avanti_render_food_order_metabox( $post ) {
	$name          = get_post_meta( $post->ID, '_order_customer_name', true );
	$phone         = get_post_meta( $post->ID, '_order_customer_phone', true );
	$address       = get_post_meta( $post->ID, '_order_customer_address', true );
	$delivery_type = get_post_meta( $post->ID, '_order_delivery_type', true );
	$instructions  = get_post_meta( $post->ID, '_order_instructions', true );
	$items_json    = get_post_meta( $post->ID, '_order_items', true );
	$delivery_fee  = get_post_meta( $post->ID, '_order_delivery_fee', true );
	$total_price   = get_post_meta( $post->ID, '_order_total_price', true );
	$status        = get_post_meta( $post->ID, '_order_status', true );

	if ( ! $status ) {
		$status = 'Pending';
	}

	$items = json_decode( $items_json, true );
	if ( ! is_array( $items ) ) {
		$items = array();
	}

	wp_nonce_field( 'avanti_save_food_order_meta', 'avanti_food_order_meta_nonce' );
	?>
	<style>
		.order-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
		.order-meta-group { margin-bottom: 15px; }
		.order-meta-group label { display: block; font-weight: bold; margin-bottom: 5px; }
		.order-meta-group input, .order-meta-group select, .order-meta-group textarea { width: 100%; padding: 8px; box-sizing: border-box; }
		.order-items-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
		.order-items-table th, .order-items-table td { border: 1px solid #ddd; padding: 10px; text-align: left; }
		.order-items-table th { background-color: #f5f5f5; }
		.order-summary-box { float: right; width: 300px; margin-top: 15px; background: #fafafa; border: 1px solid #ddd; padding: 15px; border-radius: 4px; }
		.order-summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
		.order-summary-row.grand-total { font-weight: bold; border-top: 1px solid #ccc; padding-top: 8px; font-size: 1.1em; color: #dfb15b; }
		.clearfix::after { content: ""; clear: both; display: table; }
	</style>

	<div class="order-meta-grid">
		<div>
			<h3>Customer Info</h3>
			<div class="order-meta-group">
				<label for="order_status">Order Status:</label>
				<select id="order_status" name="order_status">
					<option value="Pending" <?php selected( $status, 'Pending' ); ?>>Pending</option>
					<option value="Confirmed" <?php selected( $status, 'Confirmed' ); ?>>Confirmed</option>
					<option value="Completed" <?php selected( $status, 'Completed' ); ?>>Completed</option>
					<option value="Cancelled" <?php selected( $status, 'Cancelled' ); ?>>Cancelled</option>
				</select>
			</div>
			<div class="order-meta-group">
				<label for="order_customer_name">Customer Name:</label>
				<input type="text" id="order_customer_name" name="order_customer_name" value="<?php echo esc_attr( $name ); ?>" />
			</div>
			<div class="order-meta-group">
				<label for="order_customer_phone">Phone Number:</label>
				<input type="text" id="order_customer_phone" name="order_customer_phone" value="<?php echo esc_attr( $phone ); ?>" />
			</div>
		</div>

		<div>
			<h3>Delivery Info</h3>
			<div class="order-meta-group">
				<label for="order_delivery_type">Delivery Type:</label>
				<select id="order_delivery_type" name="order_delivery_type">
					<option value="Delivery" <?php selected( $delivery_type, 'Delivery' ); ?>>Home Delivery</option>
					<option value="Takeaway" <?php selected( $delivery_type, 'Takeaway' ); ?>>Takeaway</option>
				</select>
			</div>
			<div class="order-meta-group">
				<label for="order_customer_address">Delivery Address:</label>
				<textarea id="order_customer_address" name="order_customer_address" rows="3"><?php echo esc_textarea( $address ); ?></textarea>
			</div>
		</div>
	</div>

	<div class="order-meta-group">
		<label for="order_instructions">Special Instructions:</label>
		<textarea id="order_instructions" name="order_instructions" rows="2"><?php echo esc_textarea( $instructions ); ?></textarea>
	</div>

	<h3>Ordered Items</h3>
	<table class="order-items-table">
		<thead>
			<tr>
				<th>Item Name</th>
				<th>Price</th>
				<th>Quantity</th>
				<th>Subtotal</th>
			</tr>
		</thead>
		<tbody>
			<?php
			$subtotal_accumulated = 0;
			if ( count( $items ) > 0 ) {
				foreach ( $items as $item ) {
					$item_price = floatval( $item['price'] );
					$item_qty   = intval( $item['quantity'] );
					$item_sub   = $item_price * $item_qty;
					$subtotal_accumulated += $item_sub;
					?>
					<tr>
						<td><?php echo esc_html( $item['name'] ); ?></td>
						<td>৳<?php echo esc_html( $item['price'] ); ?></td>
						<td><?php echo esc_html( $item['quantity'] ); ?></td>
						<td>৳<?php echo esc_html( $item_sub ); ?></td>
					</tr>
					<?php
				}
			} else {
				echo '<tr><td colspan="4">No items in this order.</td></tr>';
			}
			?>
		</tbody>
	</table>

	<div class="clearfix">
		<div class="order-summary-box">
			<div class="order-summary-row">
				<span>Items Subtotal:</span>
				<span>৳<?php echo esc_html( $subtotal_accumulated ); ?></span>
			</div>
			<div class="order-summary-row">
				<span>Delivery Charge:</span>
				<span>৳<?php echo esc_html( $delivery_fee ); ?></span>
			</div>
			<div class="order-summary-row grand-total">
				<span>Total Amount:</span>
				<span>৳<?php echo esc_html( $total_price ); ?></span>
			</div>
		</div>
	</div>
	<?php
}

function avanti_save_food_order_metadata( $post_id ) {
	if ( ! isset( $_POST['avanti_food_order_meta_nonce'] ) || ! wp_verify_nonce( $_POST['avanti_food_order_meta_nonce'], 'avanti_save_food_order_meta' ) ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$fields = array(
		'order_status'           => '_order_status',
		'order_customer_name'    => '_order_customer_name',
		'order_customer_phone'   => '_order_customer_phone',
		'order_delivery_type'    => '_order_delivery_type',
		'order_customer_address' => '_order_customer_address',
		'order_instructions'     => '_order_instructions',
	);

	foreach ( $fields as $post_key => $meta_key ) {
		if ( isset( $_POST[ $post_key ] ) ) {
			update_post_meta( $post_id, $meta_key, sanitize_text_field( $_POST[ $post_key ] ) );
		}
	}
}
add_action( 'save_post', 'avanti_save_food_order_metadata' );

function avanti_set_food_order_columns($columns) {
	$new_columns = array(
		'cb'            => '<input type="checkbox" />',
		'title'         => 'Order ID',
		'customer_name' => 'Customer Name',
		'phone'         => 'Phone',
		'delivery_type' => 'Delivery Type',
		'total'         => 'Total Price',
		'order_status'  => 'Status',
		'date'          => 'Date',
	);
	return $new_columns;
}
add_filter('manage_food_order_posts_columns', 'avanti_set_food_order_columns');

function avanti_fill_food_order_columns( $column, $post_id ) {
	switch ( $column ) {
		case 'customer_name':
			echo esc_html( get_post_meta( $post_id, '_order_customer_name', true ) );
			break;
		case 'phone':
			echo esc_html( get_post_meta( $post_id, '_order_customer_phone', true ) );
			break;
		case 'delivery_type':
			$type = get_post_meta( $post_id, '_order_delivery_type', true );
			echo ($type === 'Takeaway') ? 'Takeaway' : 'Delivery';
			break;
		case 'total':
			echo '৳' . esc_html( get_post_meta( $post_id, '_order_total_price', true ) );
			break;
		case 'order_status':
			$status = get_post_meta( $post_id, '_order_status', true );
			if (!$status) $status = 'Pending';
			
			$badge_style = 'padding: 4px 8px; border-radius: 4px; font-weight: bold; text-transform: uppercase; font-size: 0.85em;';
			if ($status === 'Pending') {
				$badge_style .= ' background: #fef3c7; color: #d97706;';
			} elseif ($status === 'Confirmed') {
				$badge_style .= ' background: #dbeafe; color: #2563eb;';
			} elseif ($status === 'Completed') {
				$badge_style .= ' background: #d1fae5; color: #059669;';
			} else {
				$badge_style .= ' background: #fee2e2; color: #dc2626;';
			}
			echo '<span style="' . $badge_style . '">' . esc_html( $status ) . '</span>';
			break;
	}
}
add_action( 'manage_food_order_posts_custom_column', 'avanti_fill_food_order_columns', 10, 2 );

/* ==========================================================================
   7. AJAX Order Submission Endpoint
   ========================================================================== */
function avanti_submit_order_handler() {
	if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'avanti_order_nonce' ) ) {
		wp_send_json_error( array( 'message' => 'Security check failed.' ), 403 );
	}

	$name          = sanitize_text_field( $_POST['name'] );
	$phone         = sanitize_text_field( $_POST['phone'] );
	$address       = sanitize_textarea_field( $_POST['address'] );
	$delivery_type = sanitize_text_field( $_POST['delivery_type'] );
	$instructions  = sanitize_textarea_field( $_POST['instructions'] );
	$cart_json     = wp_unslash( $_POST['cart'] );

	$cart = json_decode( $cart_json, true );
	if ( ! is_array( $cart ) || count( $cart ) === 0 ) {
		wp_send_json_error( array( 'message' => 'Empty cart.' ), 400 );
	}

	$delivery_charge_setting = floatval( get_theme_mod( 'avanti_delivery_charge', '60' ) );
	$delivery_fee            = ( $delivery_type === 'Takeaway' ) ? 0 : $delivery_charge_setting;
	
	$items_subtotal = 0;
	foreach ( $cart as $item ) {
		$price = floatval( $item['price'] );
		$qty   = intval( $item['quantity'] );
		$items_subtotal += ( $price * $qty );
	}
	$total_price = $items_subtotal + $delivery_fee;

	$order_title = 'Order - ' . $name . ' - ' . current_time( 'Y-m-d H:i:s' );
	$order_data = array(
		'post_title'   => $order_title,
		'post_type'    => 'food_order',
		'post_status'  => 'publish',
	);

	$post_id = wp_insert_post( $order_data );

	if ( is_wp_error( $post_id ) ) {
		wp_send_json_error( array( 'message' => 'Failed to create order in database.' ), 500 );
	}

	update_post_meta( $post_id, '_order_customer_name', $name );
	update_post_meta( $post_id, '_order_customer_phone', $phone );
	update_post_meta( $post_id, '_order_customer_address', $address );
	update_post_meta( $post_id, '_order_delivery_type', $delivery_type );
	update_post_meta( $post_id, '_order_instructions', $instructions );
	update_post_meta( $post_id, '_order_items', json_encode( $cart, JSON_UNESCAPED_UNICODE ) );
	update_post_meta( $post_id, '_order_delivery_fee', $delivery_fee );
	update_post_meta( $post_id, '_order_total_price', $total_price );
	update_post_meta( $post_id, '_order_status', 'Pending' );

	$whatsapp_num = get_theme_mod( 'avanti_whatsapp_number', '01755-559933' );
	$clean_wa_num = preg_replace( '/\D/', '', $whatsapp_num );
	if ( strlen( $clean_wa_num ) === 11 && substr( $clean_wa_num, 0, 2 ) === '01' ) {
		$clean_wa_num = '88' . $clean_wa_num;
	}

	$msg = "*New Order received from Avanti website!*\n";
	$msg .= "*Order ID:* #" . $post_id . "\n";
	$msg .= "*Customer:* " . $name . "\n";
	$msg .= "*Phone:* " . $phone . "\n";
	$msg .= "*Method:* " . ( $delivery_type === 'Takeaway' ? "Takeaway 🏃‍♂️" : "Home Delivery 🛵" ) . "\n";
	if ( $delivery_type !== 'Takeaway' ) {
		$msg .= "*Address:* " . $address . "\n";
	}
	if ( ! empty( $instructions ) ) {
		$msg .= "*Special Notes:* \"" . $instructions . "\"\n";
	}
	$msg .= "\n*--- Items Ordered ---*\n";
	foreach ( $cart as $item ) {
		$msg .= "• " . $item['name'] . " x " . $item['quantity'] . " (৳" . $item['price'] . ")\n";
	}
	$msg .= "\n*Items Subtotal:* ৳" . $items_subtotal . "\n";
	$msg .= "*Delivery Charge:* ৳" . $delivery_fee . "\n";
	$msg .= "*Grand Total:* ৳" . $total_price . "\n";
	$msg .= "\nThank you for choosing Avanti!";

	$wa_url = "https://api.whatsapp.com/send?phone=" . $clean_wa_num . "&text=" . rawurlencode( $msg );

	wp_send_json_success( array(
		'order_id'     => $post_id,
		'whatsapp_url' => $wa_url,
		'total'        => $total_price,
	) );
}
add_action( 'wp_ajax_avanti_submit_order', 'avanti_submit_order_handler' );
add_action( 'wp_ajax_nopriv_avanti_submit_order', 'avanti_submit_order_handler' );


/* ==========================================================================
   8. Register Custom Post Type: Table Reservation
   ========================================================================== */
function avanti_register_table_reservation_cpt() {
	$labels = array(
		'name'               => 'Table Reservations',
		'singular_name'      => 'Table Reservation',
		'menu_name'          => 'Reservations',
		'add_new'            => 'Add New',
		'add_new_item'       => 'Add New Reservation',
		'edit_item'          => 'Edit Reservation',
		'new_item'           => 'New Reservation',
		'view_item'          => 'View Reservation',
		'search_items'       => 'Search Reservations',
		'not_found'          => 'No reservations found',
		'not_found_in_trash' => 'No reservations found in Trash',
	);

	$args = array(
		'labels'              => $labels,
		'public'              => false, // private to admin
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-calendar-alt',
		'supports'            => array( 'title' ),
		'exclude_from_search' => true,
		'publicly_queryable'  => false,
		'show_in_nav_menus'   => false,
	);

	register_post_type( 'table_reservation', $args );
}
add_action( 'init', 'avanti_register_table_reservation_cpt' );

/* ==========================================================================
   9. Metaboxes for Table Reservation details
   ========================================================================== */
function avanti_add_table_reservation_metaboxes() {
	add_meta_box(
		'avanti_table_reservation_details',
		'Reservation Details',
		'avanti_render_table_reservation_metabox',
		'table_reservation',
		'normal',
		'high'
	);
}
add_action( 'add_meta_boxes', 'avanti_add_table_reservation_metaboxes' );

function avanti_render_table_reservation_metabox( $post ) {
	$name     = get_post_meta( $post->ID, '_res_name', true );
	$phone    = get_post_meta( $post->ID, '_res_phone', true );
	$email    = get_post_meta( $post->ID, '_res_email', true );
	$guests   = get_post_meta( $post->ID, '_res_guests', true );
	$date     = get_post_meta( $post->ID, '_res_date', true );
	$time     = get_post_meta( $post->ID, '_res_time', true );
	$requests = get_post_meta( $post->ID, '_res_requests', true );
	$status   = get_post_meta( $post->ID, '_res_status', true );

	if ( ! $status ) {
		$status = 'Pending';
	}

	wp_nonce_field( 'avanti_save_table_reservation_meta', 'avanti_table_reservation_meta_nonce' );
	?>
	<style>
		.res-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
		.res-meta-group { margin-bottom: 15px; }
		.res-meta-group label { display: block; font-weight: bold; margin-bottom: 5px; }
		.res-meta-group input, .res-meta-group select, .res-meta-group textarea { width: 100%; padding: 8px; box-sizing: border-box; }
	</style>

	<div class="res-meta-grid">
		<div>
			<h3>Guest Info</h3>
			<div class="res-meta-group">
				<label for="res_status">Reservation Status:</label>
				<select id="res_status" name="res_status">
					<option value="Pending" <?php selected( $status, 'Pending' ); ?>>Pending</option>
					<option value="Confirmed" <?php selected( $status, 'Confirmed' ); ?>>Confirmed</option>
					<option value="Completed" <?php selected( $status, 'Completed' ); ?>>Completed</option>
					<option value="Cancelled" <?php selected( $status, 'Cancelled' ); ?>>Cancelled</option>
				</select>
			</div>
			<div class="res-meta-group">
				<label for="res_name">Guest Name:</label>
				<input type="text" id="res_name" name="res_name" value="<?php echo esc_attr( $name ); ?>" />
			</div>
			<div class="res-meta-group">
				<label for="res_phone">Phone Number:</label>
				<input type="text" id="res_phone" name="res_phone" value="<?php echo esc_attr( $phone ); ?>" />
			</div>
			<div class="res-meta-group">
				<label for="res_email">Email Address:</label>
				<input type="email" id="res_email" name="res_email" value="<?php echo esc_attr( $email ); ?>" />
			</div>
		</div>

		<div>
			<h3>Booking Info</h3>
			<div class="res-meta-group">
				<label for="res_guests">Number of Guests:</label>
				<input type="number" id="res_guests" name="res_guests" value="<?php echo esc_attr( $guests ); ?>" />
			</div>
			<div class="res-meta-group">
				<label for="res_date">Date:</label>
				<input type="date" id="res_date" name="res_date" value="<?php echo esc_attr( $date ); ?>" />
			</div>
			<div class="res-meta-group">
				<label for="res_time">Preferred Time:</label>
				<input type="text" id="res_time" name="res_time" value="<?php echo esc_attr( $time ); ?>" />
			</div>
		</div>
	</div>

	<div class="res-meta-group">
		<label for="res_requests">Special Requests:</label>
		<textarea id="res_requests" name="res_requests" rows="3"><?php echo esc_textarea( $requests ); ?></textarea>
	</div>
	<?php
}

function avanti_save_table_reservation_metadata( $post_id ) {
	if ( ! isset( $_POST['avanti_table_reservation_meta_nonce'] ) || ! wp_verify_nonce( $_POST['avanti_table_reservation_meta_nonce'], 'avanti_save_table_reservation_meta' ) ) {
		return;
	}

	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$fields = array(
		'res_status'   => '_res_status',
		'res_name'     => '_res_name',
		'res_phone'    => '_res_phone',
		'res_email'    => '_res_email',
		'res_guests'   => '_res_guests',
		'res_date'     => '_res_date',
		'res_time'     => '_res_time',
		'res_requests' => '_res_requests',
	);

	foreach ( $fields as $post_key => $meta_key ) {
		if ( isset( $_POST[ $post_key ] ) ) {
			update_post_meta( $post_id, $meta_key, sanitize_text_field( $_POST[ $post_key ] ) );
		}
	}
}
add_action( 'save_post', 'avanti_save_table_reservation_metadata' );

/* ==========================================================================
   10. Admin columns customization for Table Reservations
   ========================================================================== */
function avanti_set_table_reservation_columns($columns) {
	$new_columns = array(
		'cb'         => '<input type="checkbox" />',
		'title'      => 'Booking Title',
		'guest_name' => 'Guest Name',
		'phone'      => 'Phone',
		'guests'     => 'Guests',
		'booking_dt' => 'Date & Time',
		'res_status' => 'Status',
		'date'       => 'Date Created',
	);
	return $new_columns;
}
add_filter('manage_table_reservation_posts_columns', 'avanti_set_table_reservation_columns');

function avanti_fill_table_reservation_columns( $column, $post_id ) {
	switch ( $column ) {
		case 'guest_name':
			echo esc_html( get_post_meta( $post_id, '_res_name', true ) );
			break;
		case 'phone':
			echo esc_html( get_post_meta( $post_id, '_res_phone', true ) );
			break;
		case 'guests':
			echo esc_html( get_post_meta( $post_id, '_res_guests', true ) ) . ' Guest(s)';
			break;
		case 'booking_dt':
			$date = get_post_meta( $post_id, '_res_date', true );
			$time = get_post_meta( $post_id, '_res_time', true );
			echo esc_html( $date . ' @ ' . $time );
			break;
		case 'res_status':
			$status = get_post_meta( $post_id, '_res_status', true );
			if (!$status) $status = 'Pending';
			
			$badge_style = 'padding: 4px 8px; border-radius: 4px; font-weight: bold; text-transform: uppercase; font-size: 0.85em;';
			if ($status === 'Pending') {
				$badge_style .= ' background: #fef3c7; color: #d97706;';
			} elseif ($status === 'Confirmed') {
				$badge_style .= ' background: #dbeafe; color: #2563eb;';
			} elseif ($status === 'Completed') {
				$badge_style .= ' background: #d1fae5; color: #059669;';
			} else {
				$badge_style .= ' background: #fee2e2; color: #dc2626;';
			}
			echo '<span style="' . $badge_style . '">' . esc_html( $status ) . '</span>';
			break;
	}
}
add_action( 'manage_table_reservation_posts_custom_column', 'avanti_fill_table_reservation_columns', 10, 2 );

/* ==========================================================================
   11. AJAX Table Reservation Submission Endpoint
   ========================================================================== */
function avanti_submit_reservation_handler() {
	if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'avanti_reservation_nonce' ) ) {
		wp_send_json_error( array( 'message' => 'Security check failed.' ), 403 );
	}

	$name     = sanitize_text_field( $_POST['name'] );
	$phone    = sanitize_text_field( $_POST['phone'] );
	$email    = sanitize_email( $_POST['email'] );
	$guests   = sanitize_text_field( $_POST['guests'] );
	$date     = sanitize_text_field( $_POST['date'] );
	$time     = sanitize_text_field( $_POST['time'] );
	$requests = sanitize_textarea_field( $_POST['requests'] );

	if ( empty( $name ) || empty( $phone ) || empty( $date ) || empty( $time ) ) {
		wp_send_json_error( array( 'message' => 'Required fields are missing.' ), 400 );
	}

	$reservation_title = 'Reservation - ' . $name . ' - ' . $date . ' ' . $time;
	$post_id = wp_insert_post( array(
		'post_title'   => $reservation_title,
		'post_type'    => 'table_reservation',
		'post_status'  => 'publish',
	) );

	if ( is_wp_error( $post_id ) ) {
		wp_send_json_error( array( 'message' => 'Failed to save reservation in database.' ), 500 );
	}

	update_post_meta( $post_id, '_res_name', $name );
	update_post_meta( $post_id, '_res_phone', $phone );
	update_post_meta( $post_id, '_res_email', $email );
	update_post_meta( $post_id, '_res_guests', $guests );
	update_post_meta( $post_id, '_res_date', $date );
	update_post_meta( $post_id, '_res_time', $time );
	update_post_meta( $post_id, '_res_requests', $requests );
	update_post_meta( $post_id, '_res_status', 'Pending' );

	// Send email notification to admin
	$to = get_option( 'admin_email' );
	$subject = 'New Table Reservation at Avanti - ' . $name;
	
	$message = "You have received a new table reservation request from your website.\n\n";
	$message .= "--- Reservation Details ---\n";
	$message .= "Name: " . $name . "\n";
	$message .= "Phone: " . $phone . "\n";
	$message .= "Email: " . $email . "\n";
	$message .= "Number of Guests: " . $guests . " Guest(s)\n";
	$message .= "Date: " . $date . "\n";
	$message .= "Time: " . $time . "\n";
	$message .= "Special Requests: " . ( empty( $requests ) ? 'None' : $requests ) . "\n\n";
	$message .= "You can manage this reservation directly from the WordPress Admin Dashboard.\n";

	$headers = array('Content-Type: text/plain; charset=UTF-8');

	$mail_sent = wp_mail( $to, $subject, $message, $headers );

	wp_send_json_success( array(
		'message'   => 'Reservation confirmed successfully.',
		'mail_sent' => $mail_sent,
		'res_id'    => $post_id
	) );
}
add_action( 'wp_ajax_avanti_submit_reservation', 'avanti_submit_reservation_handler' );
add_action( 'wp_ajax_nopriv_avanti_submit_reservation', 'avanti_submit_reservation_handler' );

/* ==========================================================================
   12. Self-Installing Theme Setup (Automatic Page Creation)
   ========================================================================== */
function avanti_create_default_pages_automator() {
	$pages = array(
		'about'         => array( 'title' => 'About Us', 'template' => 'page-about.php' ),
		'menu'          => array( 'title' => 'Our Menu', 'template' => 'page-menu.php' ),
		'chef-specials' => array( 'title' => 'Chef Specials', 'template' => 'page-chef-specials.php' ),
		'gallery'       => array( 'title' => 'Gallery', 'template' => 'page-gallery.php' ),
		'reviews'       => array( 'title' => 'Guest Reviews', 'template' => 'page-reviews.php' ),
		'contact'       => array( 'title' => 'Contact Us', 'template' => 'page-contact.php' ),
		'home'          => array( 'title' => 'Home', 'template' => 'default' ),
	);

	foreach ( $pages as $slug => $page_info ) {
		$page_check = get_page_by_path( $slug );
		if ( ! isset( $page_check->ID ) ) {
			$page_id = wp_insert_post( array(
				'post_title'   => $page_info['title'],
				'post_name'    => $slug,
				'post_type'    => 'page',
				'post_status'  => 'publish',
			) );
			if ( $page_id && ! is_wp_error( $page_id ) ) {
				if ( $page_info['template'] !== 'default' ) {
					update_post_meta( $page_id, '_wp_page_template', $page_info['template'] );
				}
			}
		}
	}

	// Set static frontpage
	$home_page = get_page_by_path( 'home' );
	if ( isset( $home_page->ID ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home_page->ID );
	}

	// Set permalink structure to Post Name
	global $wp_rewrite;
	$wp_rewrite->set_permalink_structure( '/%postname%/' );
	$wp_rewrite->flush_rules();
}
add_action( 'after_switch_theme', 'avanti_create_default_pages_automator' );
