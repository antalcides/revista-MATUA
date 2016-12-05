/*
 * Custom v1.0
 * DesignOrbital.com
 *
 * Copyright (c) 2013-2014 DesignOrbital.com
 *
 * License: GNU General Public License, GPLv3
 * http://www.gnu.org/licenses/gpl-3.0.html
 *
 */

( function( $ ) {
			
	var axon = {

		// Sitebar
		siteBarInit: function() {

			// Sitebar Viewport Classes
			if( Modernizr.mq( 'only screen and (max-width: 991px)' ) ) {				
				$( '.sitebar' ).addClass( 'sitebar-top sitebar-mobile' ).removeClass( 'sitebar-default sitebar-fixed' );
			} else {
				$( '.sitebar' ).addClass( 'sitebar-default' ).removeClass( 'sitebar-top sitebar-fixed sitebar-mobile' );
			}

			// Sitebar Animation
			if( $( '.sitebar' ).hasClass( 'sitebar-animation' ) ) {
				setTimeout( function() {
					axon.siteBarAnimation();
				}, 1000 );
			}

		},

		// Sitebar Animation
		siteBarAnimation: function() {
			
			// Sitebar Animation
			$( '.sitebar-animation' ).waypoint( function ( direction ) {				
					
				// Elements
		    	var $this   = $(this);

		    	// No need to animate at mobile devices
		    	if( ! $(this).hasClass( 'sitebar-mobile' ) ) {

					if( direction == 'down' ) {
			    		$this.addClass( 'sitebar-top sitebar-fixed' ).removeClass( 'sitebar-default' );
					} else {
						$this.addClass( 'sitebar-default' ).removeClass( 'sitebar-top sitebar-fixed' );
		 			}

	 			}

			}, {		   
			   
			   offset: 70			
			
			} );

		},

		// Media Queries
		mediaQueriesInit: function() {
		}

	}

	/** Document Ready */
	$( document ).ready( function() {

		// Main Navigation
		$( 'ul.sf-menu' ).superfish({
			delay: 			1200,
			animation: 		{ opacity : 'show', height : 'show' },
			speed: 			'fast',
			autoArrows: 	false,
			cssArrows: 		true 
		});

		// Mobile Menu
		$( '.sitebar' ).after( '<div id="primary-menu-toggle"></div>' );
		$( '.primary-menu' ).slicknav({
			prependTo: 		'#primary-menu-toggle'
		});

		// Fitvids - For responsive videos
		$( '.entry-content' ).fitVids();		

	} );

	/** Windows Load */
	$( window ).load( function() {

		// Sitebar
		axon.siteBarInit();

	} );

	/** Windows Smartresize */
	$( window ).on( 'debouncedresize', function( event ) {

		// Sitebar
		axon.siteBarInit();

	} );
	
} )( jQuery );