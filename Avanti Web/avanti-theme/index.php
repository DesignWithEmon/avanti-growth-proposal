<?php
/**
 * The main template file
 *
 * @package Saffron_Mymensingh
 */

get_header();
?>

<main id="primary" class="site-main" style="padding: 120px 20px; max-width: 1200px; margin: 0 auto; min-height: 70vh; color: var(--color-text-main);">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="margin-bottom: 40px; padding: 20px; background: var(--color-bg-surface); border: 1px solid var(--color-primary-light); border-radius: 8px;">
                <h2 style="color: var(--color-primary); font-family: 'Outfit', sans-serif; margin-bottom: 15px;">
                    <a href="<?php the_permalink(); ?>" style="color: inherit; text-decoration: none;"><?php the_title(); ?></a>
                </h2>
                <div class="entry-content" style="line-height: 1.6;">
                    <?php the_excerpt(); ?>
                </div>
            </article>
            <?php
        endwhile;
        the_posts_navigation();
    else :
        ?>
        <p>No content found.</p>
        <?php
    endif;
    ?>
</main>

<?php
get_footer();
