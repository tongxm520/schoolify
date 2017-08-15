/*
The improvement I’m referring to is returning the video to show the poster frame when it’s finished playing all the way through. By default the video plays through but just stops on a blank screen at the end. The code provided below does a number of things:

– Shows the poster frame
– Reverts the position of the video to zero seconds
– Hide the controls
– Shows the play button
– Cancels out of full screen

The only other thing we need to do then is to allow the user to play the video successfully again for a second time. To do this we need to add some actions for when the user plays the video. 
*/


$(document).ready(function() {   
  videojs("default-player",{}, function(){  
    _player = this; 
    _player.addClass('vjs-matrix'); 
    //_player.play();

		var subtitles = $(".subtitles .subtitles-menu li");
		for(var i=0;i<subtitles.length;i++){
			jQuery(subtitles[i]).click(function(){
				var sub=jQuery(this);
        var start=sub.attr("data-start");
        _player.currentTime(parseInt(start, 10)/1000);
			 });
		 }

    _player.on('ended', function(){
      var videoposter = "assets/bigfish.png";
      $('.vjs-poster').css({
        'background-image': 'url('+videoposter+')',
        'display': 'block'
      });
      _player.posterImage.show()
      _player.controlBar.hide();

      $('.vjs-big-play-button').css({
        'display': 'block'
      }); 
      _player.bigPlayButton.show();

      _player.currentTime(0);  
      exitFullscreen(); 
    });  
      
    _player.on('play', function(){  
      _player.posterImage.hide();  
      _player.controlBar.show();  
      _player.bigPlayButton.hide(); 

			let text_tracks = _player.textTracks();
			let cues_track;
      
      for(let i = 0; i < text_tracks.length; i++) {
				//alert(text_tracks.length);
			  if(text_tracks[i].label === 'Chinese') {
			    cues_track = text_tracks[i];
			  }
			}
      
			cues_track.addEventListener('cuechange', function() {
        //activeCues take effect after video play
				let active_cues = cues_track.activeCues;
				let len=active_cues.length;
				        
        /*$("#tracks-length").html(len);
				$("#track-id").html(active_cues[0].id);
				$("#track-start").html(active_cues[0].startTime);
				$("#track-end").html(active_cues[0].endTime);
				$("#track-text").html(active_cues[0].text);*/

        let active_cue;

        for(i=0;i<len;i++){
          active_cue = active_cues[i];
		      $(".subtitles .subtitles-menu li").each(function () {
						if($(this).attr("data-index")===active_cue.id){
		          $(".subtitles .subtitles-menu li.current").removeClass("current");
		          $(this).addClass("current");
		          var el=$(".subtitles").find(".current:first");
							$(".subtitles").scrollTo(el, {
								offset: -1 * calculateOffset(el)             
							});
		        } 
					});
        }   			  
			}); 
    });   
  });  
  jQuery(".vjs-time-control.vjs-time-divider").removeClass("vjs-time-control").show();
  //jQuery(".vjs-default-skin .vjs-volume-menu-button").addClass("clearfix").attr('style','float:right');
  //jQuery(".vjs-default-skin .vjs-fullscreen-control").addClass("clearfix").attr('style','float:right');
});  

// Whack fullscreen
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function calculateOffset(element){
	return  $("#default-player").height()/2 - element.height()/2;
}


