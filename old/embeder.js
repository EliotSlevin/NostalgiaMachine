window.onload = function() {

				$( '.vid' ).each(function( index ) {
					var videoId = this.getAttribute('data-id'); 
					var url = "http://img.youtube.com/vi/" + videoId + "/hqdefault.jpg"
					$(this).css('background-image', 'url(' + url + ')');
  					//alert(url);
				});
 
			}

			function loadVideo(element) {
  					element.embedly({
    						key: 'c17c494f2145430db9dbf8688f0259bf',
    						query: {maxwidth:530} 
    					});

  					
  					element.addClass("loading");
  					element.children('div').addClass('hidden');
  		

			}

