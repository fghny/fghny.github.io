module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    
    cssmin: {
      'dist': {
        'src': ['css/app.css'],
        'dest': 'css/app.min.css'
      }
    },

    min: {
      'dist': {
        'src': ['js/vendor/modernizr.js', 'js/vendor/fastclick.js', 'js/foundation/foundation.js', 'js/foundation/foundation.topbar.js', 'js/footer.js', 'js/app.js'],
        'dest': 'js/fgh.min.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-yui-compressor');

  grunt.registerTask('build', ['sass', 'cssmin', 'min']);
  grunt.registerTask('default', ['build','watch']);
}
