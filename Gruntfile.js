// jshint node:true

module.exports = function( grunt ) {
    'use strict';

    var loader = require( 'load-project-config' ),
        config = require( 'grunt-theme-fleet' );
    config = config();
    config.files.php.push( '!class-tgm-plugin-activation.php' );
    config.files.js.push( '!js/skip-link-focus-fix.js' );
    config.files.js.push( '!js/parallax.js' );
    config.files.js.push( '!js/parallax.min.js' );
    config.files.js.push( '!js/navigation.js' );
    config.files.js.push( '!js/jquery.slicknav.min.js' );
    config.files.js.push( '!js/jquery.slicknav.js' );
    config.files.js.push( '!js/jquery.fitvids.min.js' );
    config.files.js.push( '!js/jquery.fitvids.js' );
    config.files.js.push( '!js/html5shiv.js' );
    loader( grunt, config ).init();
};