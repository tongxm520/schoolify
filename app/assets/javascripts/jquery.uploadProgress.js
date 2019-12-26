/*
* jquery.uploadProgress
*
* Copyright (c) 2008 Piotr Sarnacki (drogomir.com)
*  - Original release.
*  
* Copyright (c) 2011 Mathew Davies (thepixeldeveloper@googlemail.com)
*  - Refactored a lot of code into their own functions 
*
* Licensed under the MIT license:
* http://www.opensource.org/licenses/mit-license.php
*
*/
(function($){
	/**
	 * Generate a UUID used to uniquely identify form uploads.
	 *
	 * @return string
	 */
	function generate_uuid(){
		var uuid = "";
    
		for (i = 0; i < 32; i++){
			uuid += Math.floor(Math.random() * 16).toString(16);
		}
		
		return uuid;
	}
	
	/**
	 * Calls the progress URL to get the latest statistics from
	 * the uploaded form.
	 * 
	 * @return void
	 */
	function update(object, options){
		$.ajax({
			type: 'GET',
			cache: false,
			dataType: options.dataType,
			url: options.progressUrl + '?X-Progress-ID=' + options.uuid,
			success: function(upload){
				if (upload){
					if (upload.state == 'uploading'){
						upload.percents = Math.floor((upload.received / upload.size) * 100);
						options.uploading(upload);
					}
					
					if (upload.state == 'done' || upload.state == 'error'){
						window.clearTimeout(options.timer);
					}
					
					if (upload.state == 'done'){
						upload.percents = 100;
						options.done(upload);
					}
					
					if (upload.state == 'error'){
						upload.percents = 0;
						options.error(upload);
					}
				}
			}
		});
	}
	
	/**
	 * Updates the form action to use the	UUID.
	 */
	function update_form_action(form, uuid){
		if(old_id = /X-Progress-ID=([^&]+)/.exec(form.attr("action"))){
			var action = form.attr("action").replace(old_id[1], uuid);
		}
		else{
			var action = form.attr("action") + "?X-Progress-ID=" + uuid;
		}
		
		form.attr("action", action);
	}
	
  $.fn.uploadProgress = function(options){
		var options = $.extend({
			dataType: "json",
			interval: 2000,
			progressUrl: "/progress",
			start: function() {},
			uploading: function() {},
			done: function() {},
			error: function() {},
			timer: ""
		}, options);
		
  
		return this.each(function(){
			$(this).submit(function(){
				var $this = $(this);
				
				// Generate a new UUID
				options.uuid = generate_uuid();
				
				// Update form action with ID
				update_form_action($this, options.uuid);

				// Start callback
				options.start();

				// Start process
				options.timer = window.setInterval(function(){
					update($this, options)
				},options.interval);
			});
		});
  }; 
})(jQuery);

