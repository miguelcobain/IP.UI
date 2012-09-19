/**
 * Creates namespaces based on a string and returns it
 * 
 * @param {Object} namespaceString string that represents the namespace to create
 * @see http://elegantcode.com/2011/01/26/basic-javascript-part-8-namespaces/
 */

function namespace(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';    
        
    for(var i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
    
    return parent;
}

String.prototype.camelize = function() {
    return this
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}

require.config({
	paths : {
		jquery : '../lib/jquery.min'
	}
});

define('main',['splashscreen'], function(SplashScreen) {

	//Declare namespace    
    var ui = namespace('IP.UI');
    
	//Add classes to namespace
	ui.SplashScreen = SplashScreen;

});