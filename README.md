# Instant Places UI Library #

Instant Places UI (or IP.UI) is a javascript library that provides several UI components and widgets that can be helpful in public display application development.

# Getting Started #

The usage is very simple. 

1. Download the built javascript file from the `build/` directory.
2. Include it in your HTML page (or whatever javascript dependency manager you're using).
3. The `IP.UI` namespace is created for you, and you can start using it. See examples below.

# Component Overview #

## SplashScreen ##


### API ###

- **method** `object.method(arg)`

Example description

----------

# Downloading or Building IP.UI #

IP.UI was developed using [RequireJS](http://requirejs.org/) and consequently using a modular technique called [AMD](http://requirejs.org/docs/whyamd.html). You can just download the built file (minified or not). If you prefer you can build the library using [r.js](http://requirejs.org/docs/optimization.html). The build files are already included in the repository (one for the minified version and another for the debug non-minified version).

After you [install r.js](http://requirejs.org/docs/optimization.html#download), you can run the following command:

    $ r.js -o <buildfile>

The built javascript file should appear in the `build/` directory.

# Future Work #

- Add more components.