module.exports = function(grunt) {

    grunt.initConfig({
        surge: {
            'aequalis': {
              options: {
                project: 'app/',
                domain: 'aequalis-v2.surge.sh'
              }
            }
          },
      jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    });
  
    grunt.loadNpmTasks('grunt-surge');

    grunt.loadNpmTasks('grunt-contrib-jshint');
  
    grunt.registerTask('deploy', ['surge']);
  
  };
