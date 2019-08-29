module.exports = function(grunt) {
  grunt.initConfig({
    htmlmin: {                                     
      dist: {                                      
        options: {                                 
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['dist/**/*.html', '*.html'],
          dest: 'distmin'
        }]
      }
    },
    slim: {                    
      dist: {   
        options: {                   
          pretty: true
        }, 
        files: [{
          expand: true,
          cwd: 'src/views',
          src: ['{,*/}*.slim'],
          dest: 'dist',
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          noCache: true,
          style: 'compressed',
          sourcemap: 'none',
          trace: true,
          debugInfo: true
          //compass: true
        },
        files: {
          'dist/styles/fontawesome-5.css': 'src/styles/fontawesome-5.scss',
          'dist/styles/mn-styles.css': 'src/styles/mn-styles.scss',
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'dist/styles/mn-styles.css':'dist/styles/mn-styles.css'
        }
      }
    },
    jshint: {
      files: 'src/scripts/*.js',
      options: {
        reporterOutput: "",
        force: true,
        globals: {
          jQuery: true
        },
        ignores: 'src/scripts/jquery-3.3.1.js',
      }
    },
    uglify: {
      build: {
        files: [{
            expand: true,
            src: ['*.js'],
            cwd: 'src/scripts',
            dest: 'dist/scripts',
            rename: function (dest, src) {
              return dest + '/' + src.replace('.js', '.min.js');
            }
        }]
      }
    },
    'http-server': {
      'dev': {
        root: './dist/',
        port: 8080,
        host: 'localhost',
        cache: 1,
        showDir: true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true,
        openBrowser: true,
      }
    },
    watch: {
      options: {
        livereload: true,
        host: 'localhost'
      },
      sass: {
        files: ['src/styles/*.scss'],
        tasks: ['sass']
      },
      slim: {
        files: ['src/views/*.slim'],
        tasks: ['slim']
      },
      jshint: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      uglify: {
        files: ['src/scripts/*.js'],
        tasks: ['uglify']
      },
    },
    htmlbuild: {
      src: 'index.html',
      dest: 'dist/',
      options: {
        sections: {
          footer: 'views/footer.html'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-slim');
  grunt.loadNpmTasks('grunt-autoprefixer');  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['slim', 'sass', 'autoprefixer','http-server', 'uglify','watch']);
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};