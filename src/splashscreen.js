define(function() {
	var SplashScreen = function(options) {
		options.minTime = 0 || options.minTime;
		
		this.options = options;
		this.isReady = false;
		this.minTimeElapsed = false;
	};
	
	/*
	 * Start the splash screen
	 */
	SplashScreen.prototype.start = function(){
		var self = this;
		setTimeout(function(){
			self.timeElapsed();
		},this.options.minTime);
		
		if(typeof(this.options.onStart) === 'function'){
			this.options.onStart();
		}
		
		console.log('Splash Screen','Started.');
	};
	
	/*
	 * Inform that the splash screen can end
	 */
	SplashScreen.prototype.timeElapsed = function(){
		this.minTimeElapsed = true;
		if(this.isReady){
			// Both the minimum time and loading process have completed.
			// End splash screen.
			this.end();
		}
	};
	
	/*
	 * Inform that the splash screen can end
	 */
	SplashScreen.prototype.ready = function(){
		this.isReady = true;
		if(this.minTimeElapsed){
			// Both the minimum time and loading process have completed.
			// End splash screen.
			this.end();
		}
	};
	
	/*
	 * Force splash screen ending
	 */
	SplashScreen.prototype.end = function(){
		if(typeof(this.options.onEnd) === 'function'){
			this.options.onEnd();
		}
		console.log('End.')
	};
	
	return SplashScreen;
	
});
