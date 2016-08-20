var currentVideo = {
  url: "not set",
  title: "not set",
  via: "not set",
  hashtags: 'TheNostalgiaMachine'
}; // currently playing song for sharing button rendering

var aVideoHasBeenPlayed = false;

   // 1. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '270',
          width: '480',
          videoId: 'y6y_4_b6RS8',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
        stopVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player sholid play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          // Song's ended, try get a new one from the queue
          playNextSong();
        }


      }
      function stopVideo() {
        player.stopVideo();
      }

      function isUnstarted(){
        if(player.getPlayerState() == 5){
          return true;
        }else {
          return false;
        }
      }

      function playVideo(){
        player.playVideo();
      }

      function loadVideo(artist, name, id){
        player.loadVideoById(id, 0, "large");
        $('#now-playing').html("<strong>" + name + "</strong> - " + artist);

        currentVideo.url = "https://www.youtube.com/watch?v=" + id;
        currentVideo.title = name + " - " + artist;
        currentVideo.via = "NostalgiaMachin"; // our new twitter handle here

        renderShareButtons();

        if(aVideoHasBeenPlayed == false){
          $('body').addClass('active');
          aVideoHasBeenPlayed = true;
        }

        if(isIphone){
          $('aside').removeClass('closed');
        }else{
          $("#open-now-playing").animateCss('tada');
        }
      }