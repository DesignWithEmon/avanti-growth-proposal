<?php
/**
 * The template for displaying single menu items.
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
$pid = get_the_ID();

// Retrieve item metadata
$item_id = get_post_meta($pid, '_menu_item_id', true);
$price = get_post_meta($pid, '_menu_item_price', true);
$quantity = get_post_meta($pid, '_menu_item_quantity', true);
$category = get_post_meta($pid, '_menu_item_category', true);
$subcategory = get_post_meta($pid, '_menu_item_subcategory', true);

// Image selection based on item ID (specific to our 4 signature Chef Specials)
$img_filename = '';
$numeric_id = intval($item_id);
if ($numeric_id === 99 || $numeric_id === 100) {
    $img_filename = 'special_pizza.png';
} elseif ($numeric_id === 110) {
    $img_filename = 'special_meal.png';
} elseif ($numeric_id === 106) {
    $img_filename = 'bbq_meal.png';
} elseif ($numeric_id === 108) {
    $img_filename = 'chicken_boustead.png';
}

$img_url = '';
if ($img_filename) {
    $img_url = $theme_uri . '/assets/' . $img_filename;
}

// Fallback icon selection if there is no image
function get_single_fallback_icon($category, $name) {
    $catLower = strtolower($category);
    $nameLower = strtolower($name);
    
    if (strpos($catLower, 'breakfast') !== false) return 'fa-egg';
    if (strpos($nameLower, 'rice') !== false || strpos($nameLower, 'biryani') !== false || strpos($nameLower, 'platter') !== false) return 'fa-bowl-rice';
    if (strpos($catLower, 'kabab') !== false || strpos($catLower, 'grill') !== false || strpos($nameLower, 'bbq') !== false) return 'fa-fire-burner';
    if (strpos($nameLower, 'fish') !== false || strpos($nameLower, 'prawn') !== false) return 'fa-fish';
    if (strpos($catLower, 'soup') !== false) return 'fa-bowl-food';
    if (strpos($catLower, 'salad') !== false) return 'fa-leaf';
    if (strpos($nameLower, 'burger') !== false || strpos($nameLower, 'sandwich') !== false) return 'fa-burger';
    if (strpos($nameLower, 'pizza') !== false || strpos($nameLower, 'pasta') !== false) return 'fa-pizza-slice';
    if (strpos($catLower, 'coffee') !== false || strpos($nameLower, 'tea') !== false) return 'fa-mug-hot';
    if (strpos($catLower, 'drink') !== false || strpos($catLower, 'juice') !== false || strpos($catLower, 'shake') !== false) return 'fa-glass-water';
    if (strpos($catLower, 'dessert') !== false || strpos($catLower, 'ice-cream') !== false) return 'fa-ice-cream';
    
    return 'fa-utensils';
}

$icon_class = get_single_fallback_icon($category, get_the_title());
?>

    <section class="menu-section" style="padding-top: 12rem; min-height: 85vh; background-image: radial-gradient(circle at 50% 30%, rgba(223, 177, 91, 0.03) 0%, transparent 70%);">
        <div class="container">
            <!-- Back navigation link -->
            <div style="margin-bottom: 3rem; display: flex; align-items: center; gap: 8px;">
                <a href="<?php echo esc_url(home_url('/menu/')); ?>" class="nav-link" style="color: var(--color-primary); font-size: 0.95rem; font-weight: 500; display: inline-flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-arrow-left"></i> Back to Menu
                </a>
            </div>

            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px; align-items: start;">
                    
                    <!-- Dish Image Column -->
                    <div class="scroll-reveal" style="position: relative;">
                        <?php if ($img_url) : ?>
                            <div class="about-image-card" style="border-color: rgba(223, 177, 91, 0.25);">
                                <img src="<?php echo esc_url($img_url); ?>" alt="<?php the_title(); ?>" class="about-img" style="width: 100%; object-fit: cover;">
                                <div class="card-glow" style="opacity: 0.12;"></div>
                            </div>
                        <?php else : ?>
                            <div class="about-image-card placeholder-img" style="height: 380px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.05);">
                                <i class="fa-solid <?php echo esc_attr($icon_class); ?>" style="font-size: 5rem; color: rgba(223,177,91,0.15);"></i>
                                <div class="card-glow" style="opacity: 0.05;"></div>
                            </div>
                        <?php endif; ?>
                    </div>

                    <!-- Dish details description Column -->
                    <div class="scroll-reveal">
                        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 1rem;">
                            <span class="tag" style="background: var(--color-primary-light); color: var(--color-primary); font-size: 0.8rem; font-weight: 600;"><i class="fa-solid fa-tags"></i> <?php echo esc_html($category); ?></span>
                            <?php if ($quantity) : ?>
                                <span class="tag" style="background: rgba(255,255,255,0.04); color: var(--color-text-main); font-size: 0.8rem;"><i class="fa-solid fa-weight-hanging"></i> <?php echo esc_html($quantity); ?></span>
                            <?php endif; ?>
                            <?php if ($subcategory) : ?>
                                <span class="tag" style="background: rgba(255,255,255,0.04); color: var(--color-text-muted); font-size: 0.8rem;"><i class="fa-solid fa-circle-info"></i> <?php echo esc_html($subcategory); ?></span>
                            <?php endif; ?>
                        </div>

                        <h1 class="hero-title" style="font-size: clamp(2rem, 4vw, 3rem); line-height: 1.2; margin-bottom: 1.5rem; letter-spacing: 0.5px;"><?php the_title(); ?></h1>
                        
                        <!-- Price block -->
                        <div style="margin-bottom: 2rem; display: flex; align-items: center; gap: 15px;">
                            <span style="font-size: 1.2rem; color: var(--color-text-muted); font-weight: 300;">Price:</span>
                            <span style="font-size: 2.2rem; font-family: var(--font-heading); color: var(--color-primary); font-weight: 700;">৳<?php echo esc_html($price); ?></span>
                        </div>

                        <!-- Description content -->
                        <div class="about-text" style="line-height: 1.8; margin-bottom: 2.5rem; font-size: 1.05rem;">
                            <?php 
                            $content = get_the_content();
                            if ($content) {
                                echo wp_kses_post(wpautop($content));
                            } else {
                                echo esc_html("Experience the exceptional quality and taste of Avanti's prepared dishes. Made daily with fresh ingredients, local spices, and refined culinary expertise.");
                            }
                            ?>
                        </div>

                        <!-- Ordering interaction -->
                        <?php 
                        $is_mrp = (strtoupper(trim($price)) === 'MRP');
                        $has_price = ($price && trim($price) !== '');
                        $btn_disabled = '';
                        $btn_text = 'Add to Cart';
                        $btn_class = 'btn btn-primary';

                        if ($is_mrp) {
                            $btn_disabled = 'disabled';
                            $btn_text = 'Call to Order';
                            $btn_class = 'btn btn-secondary';
                        } elseif (!$has_price) {
                            $btn_disabled = 'disabled';
                            $btn_text = 'Unavailable';
                            $btn_class = 'btn btn-secondary';
                        }
                        
                        $clean_price = $price;
                        if (strpos($price, '-') !== false) {
                            $price_parts = explode('-', $price);
                            $clean_price = trim($price_parts[0]);
                        }
                        ?>

                        <div style="display: flex; gap: 15px; align-items: center; margin-top: 1rem;">
                            <button type="button" class="btn-add-to-cart <?php echo esc_attr($btn_class); ?>" <?php echo $btn_disabled; ?> data-id="<?php echo esc_attr($item_id); ?>" data-name="<?php echo esc_attr(get_the_title()); ?>" data-price="<?php echo esc_attr($clean_price); ?>" style="padding: 1rem 2.5rem; font-size: 1rem; border-radius: var(--border-radius-sm); cursor: pointer; height: 54px; min-width: 220px; display: inline-flex; align-items: center; justify-content: center; gap: 10px;">
                                <i class="fa-solid fa-cart-plus"></i> <?php echo esc_html($btn_text); ?>
                            </button>
                        </div>
                    </div>
                </div>
            <?php endwhile; endif; ?>

            <!-- Other Specials Recommendations Row -->
            <div style="margin-top: 8rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 5rem;">
                <div class="scroll-reveal" style="margin-bottom: 3.5rem;">
                    <h5 class="section-subtitle">Recommended</h5>
                    <h2 class="section-title" style="font-size: 2rem;">Chef's Signature Specials</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="menu-grid scroll-reveal">
                    <?php
                    $rec_args = array(
                        'post_type'      => 'menu_item',
                        'posts_per_page' => 3,
                        'post_status'    => 'publish',
                        'meta_key'       => '_chef_special_featured',
                        'meta_value'     => '1',
                        'post__not_in'   => array($pid),
                    );
                    $rec_query = new WP_Query($rec_args);

                    if ($rec_query->have_posts()) :
                        while ($rec_query->have_posts()) : $rec_query->the_post();
                            $r_pid = get_the_ID();
                            $r_item_id = get_post_meta($r_pid, '_menu_item_id', true);
                            $r_price = get_post_meta($r_pid, '_menu_item_price', true);
                            $r_quantity = get_post_meta($r_pid, '_menu_item_quantity', true);
                            $r_category = get_post_meta($r_pid, '_menu_item_category', true);
                            
                            $r_img_filename = 'special_pizza.png';
                            if ($r_item_id == 110) $r_img_filename = 'special_meal.png';
                            elseif ($r_item_id == 106) $r_img_filename = 'bbq_meal.png';
                            elseif ($r_item_id == 108) $r_img_filename = 'chicken_boustead.png';
                            
                            $r_img_url = $theme_uri . '/assets/' . $r_img_filename;
                            ?>
                            <div class="menu-item-card">
                                <div class="menu-item-img-container" onclick="location.href='<?php the_permalink(); ?>'">
                                    <img src="<?php echo esc_url($r_img_url); ?>" alt="<?php the_title(); ?>" class="menu-item-img">
                                    <div class="img-overlay">
                                        <span class="overlay-text"><i class="fa-solid fa-eye"></i> View Details</span>
                                    </div>
                                </div>
                                <div class="menu-item-info">
                                    <div class="menu-item-header">
                                        <h3 class="menu-item-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                        <span class="menu-item-price">৳<?php echo esc_html($r_price); ?></span>
                                    </div>
                                    <p class="menu-item-desc"><?php echo wp_trim_words(get_the_content(), 15); ?></p>
                                    <div class="menu-item-meta" style="margin-bottom: 1.5rem;">
                                        <span class="tag"><i class="fa-solid fa-tags"></i> <?php echo esc_html($r_category); ?></span>
                                        <?php if ($r_quantity) : ?><span class="tag"><i class="fa-solid fa-weight-hanging"></i> <?php echo esc_html($r_quantity); ?></span><?php endif; ?>
                                    </div>
                                    <button type="button" class="btn-add-to-cart" data-id="<?php echo esc_attr($r_item_id); ?>" data-name="<?php echo esc_attr(get_the_title()); ?>" data-price="<?php echo esc_attr($r_price); ?>">
                                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                            <?php
                        endwhile;
                        wp_reset_postdata();
                    else :
                        echo '<p style="color: var(--color-text-muted);">No recommendations found.</p>';
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
