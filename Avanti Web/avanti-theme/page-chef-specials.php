<?php
/**
 * Template Name: Chef Specials Page
 *
 * @package Avanti_Classic
 */

get_header();
$theme_uri = get_template_directory_uri();
?>

    <!-- Specials Section -->
    <section id="chef-specials-page" class="menu-section" style="padding-top: 12rem;">
        <div class="container">
            <div class="text-center scroll-reveal">
                <h5 class="section-subtitle">Curated Creations</h5>
                <h2 class="section-title">Chef Specials</h2>
                <div class="section-divider center"></div>
                <p class="section-desc max-w-600">A curated collection of Avanti's most iconic signature dishes, handpicked by our head chef. Each plate is crafted with progressive culinary skill and premium local seasoning.</p>
            </div>
            
            <div class="menu-grid scroll-reveal" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; margin-top: 2rem;">
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
                        ?>
                        <div class="menu-item-card" style="background: var(--color-bg-surface-solid); border-color: rgba(223, 177, 91, 0.15);">
                            <div class="menu-item-img-container" onclick="location.href='<?php the_permalink(); ?>'">
                                <img src="<?php echo esc_url($img_url); ?>" alt="<?php the_title(); ?>" class="menu-item-img">
                                <div class="img-overlay">
                                    <span class="overlay-text"><i class="fa-solid fa-eye"></i> View Details</span>
                                </div>
                            </div>
                            <div class="menu-item-info">
                                <div class="menu-item-header">
                                    <h3 class="menu-item-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                    <span class="menu-item-price">৳<?php echo esc_html($price); ?></span>
                                </div>
                                <p class="menu-item-desc" style="margin-bottom: 2rem; line-height: 1.7;"><?php echo get_the_content(); ?></p>
                                <div class="menu-item-meta" style="margin-bottom: 2rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.2rem;">
                                    <span class="tag"><i class="fa-solid fa-tags"></i> <?php echo esc_html($category); ?></span>
                                    <?php if ($quantity) : ?><span class="tag"><i class="fa-solid fa-weight-hanging"></i> <?php echo esc_html($quantity); ?></span><?php endif; ?>
                                </div>
                                <div style="display: flex; gap: 12px; width: 100%;">
                                    <a href="<?php the_permalink(); ?>" class="btn btn-secondary" style="flex-grow: 1; padding: 0.75rem 1rem; border-radius: var(--border-radius-sm); font-size: 0.85rem; height: 48px; display: inline-flex; align-items: center; justify-content: center;">
                                        View Details
                                    </a>
                                    <button type="button" class="btn-add-to-cart" data-id="<?php echo esc_attr($item_id); ?>" data-name="<?php echo esc_attr(get_the_title()); ?>" data-price="<?php echo esc_attr($price); ?>" style="flex-grow: 1; border-radius: var(--border-radius-sm); height: 48px;">
                                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else :
                    echo '<p class="text-center" style="grid-column: 1/-1;">No specials found. Please make sure the preloader ran.</p>';
                endif;
                ?>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
