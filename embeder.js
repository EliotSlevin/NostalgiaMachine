window.onload = function() {

				$( '.vid' ).each(function( index ) {
					var videoId = this.getAttribute('data-id'); 
					var url = "http://img.youtube.com/vi/" + videoId + "/hqdefault.jpg"
					$(this).css('background-image', 'url(' + url + ')');
  					//alert(url);
				});
 
			}

			function submitForm() {
								alert("SWAG");
								alert(document.navList.subMenu);
 
					var list = document.navList.subMenu; 
					var page = list.options[ list.selectedIndex ].value; 
					if (page != "home") 
					window.location = page; 
				return false; 
				} 

			function loadVideo(element) {
  					element.embedly({
    						key: 'c17c494f2145430db9dbf8688f0259bf',
    						query: {maxwidth:530} 
    					});

  					
  					element.addClass("loading");
  					element.children('div').addClass('hidden');
  		

			}

