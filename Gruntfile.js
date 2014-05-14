module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'css',
					environment: 'production',
					outputStyle: 'compressed',
				}
			},
			dev: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'css',
					environment: 'development',
					debugInfo: true,
					outputStyle: 'nested',
				}
			}
		},

		 watch: {
			css: {
				files: ['assets/sass/*.scss'],
				tasks: ['compass:dev'],
				options: {
					spawn: false,
					livereload: true
				},
			},
			html: {
				files: ['*.html'],
				options: {
					spawn: false,
					livereload: true
				},
			},
		},


	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('build', ['compass:dist']);
	grunt.registerTask('dev', ['compass:dev']);

	grunt.registerTask('default', ['dev','watch']);

};