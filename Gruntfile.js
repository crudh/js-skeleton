module.exports = function(grunt) {
    var config = {
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
                extension: ".jsx",
                ignoreMTime: false
            },
            files: {
                expand: true,
                cwd: "./src/app",
                src: ["**/*.jsx"],
                dest: "./src/app",
                ext: ".js"
            }
        },

        esteWatch: {
            options: {
                livereload: {
                    enabled: false
                },
                dirs: [
                    "./src/app/**/"
                ]
            },
            jsx: function(filepath) {
                return ["react"];
            }
        },

        concurrent: {
            dev: {
                tasks: ["connect", "esteWatch"],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-react");
    grunt.loadNpmTasks('grunt-este-watch');

    grunt.registerTask("default", ["react"]);
    grunt.registerTask("dev", ["concurrent:dev"]);
};
