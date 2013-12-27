module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    connect: {
      server: {
        options: {
          port: 8080,
          base: "./src",
          keepalive: true
        }
      }
    },

    react: {
      options: {
        extension: ".jsx"
      },

      all: {
        files: [{
          expand: true,
          cwd: "./src/app",
          src: ["**/*.jsx"],
          dest: "./src/app",
          ext: ".js"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-react');

  grunt.registerTask("default", ["react"]);
};
