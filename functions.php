<?php

/*
** other functions.php code...
*/

/*
** WP Enqueue Function
*/
function THEMENAME_enqueue() {
    
    // Add Site CSS and JS
    wp_enqueue_style( 'site_main_css', get_template_directory_uri() . '/dist/main.min.css' );
    wp_enqueue_script( 'site_main_js', get_template_directory_uri() . '/dist/main.bundle.js' , null , null , true );

    // anything else (if you didn't include everything in your webpack bundles)...

}
add_action( "wp_enqueue_scripts", "THEMENAME_enqueue" );


/*
** remove Gutenberg styles inclusion so it can be included in scss instead
*/
function wpassist_remove_block_library_css() {
    wp_dequeue_style( 'wp-block-library' );
} 
add_action( 'wp_enqueue_scripts', 'wpassist_remove_block_library_css' );


/*
** other functions.php code...
*/