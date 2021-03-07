<?php

function st_add_roles () {
	$roles = get_option('wp_user_roles');

	if (!isset($roles['investor'])) {
		add_role( 'investor', 'Investor', array('read' => true) );
	}
}

add_action('after_setup_theme', 'st_add_roles');


function add_supports() {
	add_theme_support( 'post-thumbnails' );
}

add_action('after_setup_theme', 'add_supports');

function wpcodex_add_excerpt_support_for_pages() {
	add_post_type_support( 'project', 'page-attributes' );
}


/**
 * Redirect user after successful login.
 *
 * @param string $redirect_to URL to redirect to.
 * @param string $request URL the user is coming from.
 * @param object $user Logged user's data.
 * @return string
 */
function my_login_redirect( $redirect_to, $request, $user ) {
	//is there a user to check?
	global $user;
	if ( isset( $user->roles ) && is_array( $user->roles ) ) {
		//check for admins
		if ( in_array( 'investor', $user->roles ) ) {
			// redirect them to the default place
			return home_url();

		} else {
			return $redirect_to;
		}
	} else {
		return $redirect_to;
	}
}

add_filter( 'login_redirect', 'my_login_redirect', 10, 3 );


define('stheme_includes', get_template_directory_uri() . '/includes/');

register_nav_menus(
		array(
			'Header Nav' => '',
			'Footer Nav' => '',
			'Mobile Nav' => 'Mobile navigation munues'
		));

function reg_post_types() {
	// Work:
	$work_labels = array(
		'name' => 'Work',
		'singular_name' => 'Work',
		'menu_name' => 'Work',
		'name_admin_bar' => 'Work',
		'all_items' => 'All Work',
		'add_new' =>  'Add Work',
		'edit_item' => 'Edit Work',
		'new_item' => 'New Work',
		'view_item' => 'View Work',
		'search_items' => 'Search Work',
		'not_found' => 'No Recent Work Found',
	);

	$work_supports = array(
		'title',
		'editor',
		'custom-fields',
		// 'excerpt'
		'thumbnail'
	);

	$work_tax = array('work_categories');

	$work_args = array(
		'label' => 'Work',
		'labels' => $work_labels,
		'descrition' => 'Work Posts',
		'public' => true,
		'menu_postion' => 1,
		'supports' => $work_supports,
		'taxonomies' => $work_tax,
		'rewrite' => array('slug' => 'work'),
		'show_in_rest' => true
	);


	// Personal Ventures:
	$ventures_labels = array(
		'name' => 'Personal Ventures',
		'singular_name' => 'Personal Veture',
		'menu_name' => 'Personal Ventures',
		'name_admin_bar' => 'Personal Ventures',
		'all_items' => 'All Personal Ventures',
		'add_new' =>  'Add Personal Veture',
		'edit_item' => 'Edit Personal Veture',
		'new_item' => 'New Personal Veture',
		'view_item' => 'View Personal Veture',
		'search_items' => 'Search Personal Ventures',
		'not_found' => 'No Recent Personal Veture Found'
	);

	$ventures_supports = array(
		'title',
		'editor',
		'custom-fields',
		// 'excerpt'
		'thumbnail'
	);

	$ventures_args = array(
		'label' => 'Personal Ventures',
		'labels' => $ventures_labels,
		'descrition' => 'Personal Venture Posts',
		'public' => true,
		'menu_postion' => 1,
		'supports' => $ventures_supports,
		// 'taxonomies' => $careers_tax,
		'rewrite' => array('slug' => 'venture'),
		'show_in_rest' => true
	);

	// Shop:
	$shop_labels = array(
		'name' => 'Shop',
		'singular_name' => 'Shop',
		'menu_name' => 'Shop',
		'name_admin_bar' => 'Shop',
		'all_items' => 'All Shops',
		'add_new' =>  'Add Shop',
		'edit_item' => 'Edit Shop',
		'new_item' => 'New Shop',
		'view_item' => 'View Shop',
		'search_items' => 'Search Shop',
		'not_found' => 'No Recent Shop Found'
	);

	$shop_supports = array(
		'title',
		'editor',
		'custom-fields',
		// 'excerpt'
		'thumbnail'
	);

	// $projects_tax = array('careers_categories');

	$shop_args = array(
		'label' => 'Shop',
		'labels' => $shop_labels,
		'descrition' => 'Shop Posts',
		'public' => true,
		'menu_postion' => 1,
		'supports' => $shop_supports,
		'rewrite' => array('slug' => 'shop'),
		'show_in_rest' => true
	);

	register_post_type('Work', $work_args );
	register_post_type('Ventures', $ventures_args );
	register_post_type('Shop', $shop_args );
}

add_action( 'init' , 'reg_post_types' );


function reg_taxonomies() {
	// $labels = array(
	// 			'name' => 'Menu Types',
	// 			'singuular_name' => 'Menu Type',
	// 			'menu_name' => 'Menu Types',
	// 			'name_admin_bar' => 'Menu Types',
	// 			'all_items' => 'All Menus Types',
	// 			'add_new' =>  'Add New Menu Type',
	// 			'edit_item' => 'Edit Menu Type',
	// 			'new_item' => 'New Menu Type',
	// 			'view_item' => 'View Menu Type',
	// 			'search_items' => 'Search Menus Types',
	// 			'not_found' => 'No Menus Types Found'
	// 		  );
	// $args = array(
	// 			'label' => 'Menus Types',
	// 			'labels' => $labels,
	// 			'public' => true,
	// 			'hierarchical' => true,
	// 			'rewrite' => array('slug' => 'menus-types')
	// 		);


	$work_labels = array(
				'name' => 'Work Categories',
				'singuular_name' => 'Work Category',
				'menu_name' => 'Work Categories',
				'name_admin_bar' => 'Work Categories',
				'all_items' => 'All Work Categories',
				'add_new' =>  'Add Work Category',
				'edit_item' => 'Edit Work Category',
				'new_item' => 'New Work Category',
				'view_item' => 'View Work Category',
				'search_items' => 'Search Work Categories',
				'not_found' => 'No Menus Types Found'
			  );
	$work_args = array(
				'label' => 'Work Categories',
				'labels' => $work_labels,
				'public' => true,
				'hierarchical' => true,
				'rewrite' => array('slug' => 'work-categories')
			);

	// $careers_args = [
	// 	'label' => 'Careers',
	// 	'labeles' => $careers_labels,
	// 	'description' => '',
	// 	'public' => true,
	// 	'supports' => $careers_supports,
	// 	'hierarchical' => true,
	// 	// 'taxonomies' => $careers_tax,
	// ];

	// register_taxonomy('menu_types', 'menus', $args);

	register_taxonomy('work_category', 'work', $work_args);
}

add_action('init', 'reg_taxonomies');




function regenq_sitescripts() {
	//Register BootStrap Grid CSS & Custome Functionality JS
	wp_register_style( 'bootsrap_css', stheme_includes . 'css/bootstrap.min.css', '' , '3.3.1', 'all');
	wp_register_script('site_functionality', stheme_includes . 'js/functionality.js', '', '1.0.0', true);

	// Add CSS & JS to Que
	wp_enqueue_style( 'bootsrap_css', stheme_includes . 'css/bootstrap.min.css');
	wp_enqueue_script('site_functionality', stheme_includes . 'js/functionality.js');
}

add_action('wp_enqueue_scripts','regenq_sitescripts');

function regenq_admin_sitescripts() {
	wp_register_style( 'ss_admin_css', stheme_includes . 'css/ss_admin.css', '' , '1.0', 'all');
	wp_enqueue_style( 'ss_admin_css', stheme_includes .  'css/ss_admin.css');
}

add_action( 'admin_enqueue_scripts', 'regenq_admin_sitescripts' );




?>
