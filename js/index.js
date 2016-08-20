var currentYear = _2013;
var isIphone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



$('document').ready(function() {
        
        //Functions to handle what to do when a route is matched
        var renderYear = function(year) { 
          console.log(year); 
          render(year);
        };

        // define the routing table.
        var routes = {
          '/:year': renderYear
        };
        var router = Router(routes);
        router.init();

        // Watch year picker dropdown for a change
        $('#year-picker').change(function(){
          var year = $('#year-picker').val();
          window.location.hash = '#/' + year;
        });

        new Clipboard('#copy-url');

        //Animate css extending jquery
        $.fn.extend({
            animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);
                });
            }
        });
});


/* Click handlers */

function videoClick(data){
  loadVideo(data[0], data[1], data[2]);
}

function queueClick(data){
  addToQueue(data[0], data[1], data[2]);
  $("#open-now-playing").animateCss('bounce');
}

function inQueueClick(index){
  var song = queue[index];
  loadVideo(song.artist, song.name, song.id);
  queue.splice(index, 1);
  localStorage.setObject('queue', queue);
  renderQueue();
}

function skipClick(){
  playNextSong()
}

function copyUrlClick(el){
  $(el).animateCss('bounce');
}

function closeNowPlaying(el){
  $('aside').addClass('closed');
}

function openNowPlaying(){
  $('aside').removeClass('closed');
}

function shareFbClick(data){
  console.log('clicked');
  console.log(data);

  FB.ui({
    method: 'feed',
    link: data.url,
    name: data.name,
    caption: 'Found via TheNostalgiaMachine.com',
    description: data.name,
  }, function(response){});
}

/* Rendering */

function renderQueue(){
  if(isIphone){
    $('.g-bar').remove();
    $("#queue").html("<p>Tap video to play. No queue for iPhone sorry :c</p>"); 
    return;
  }

  var queueTemplate = Handlebars.compile($("#queue-template").html());
  var wrapper  = {videos: queue};
  html  = queueTemplate(queue);
  $("#queue").html(html);
}

function renderShareButtons(){
  var buttonsTemplate = Handlebars.compile($("#share-buttons-template").html());
  html  = buttonsTemplate(currentVideo);
  $("#share-buttons").html(html);
}


Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context).replace(/"/g, '&quot;');
});

function render(year){
  //updateYear
  currentYear = window['_' + year];

  // Update url picker and title
  $('#year-picker').val(year);

  //Render videos
  var template = Handlebars.compile($("#video-template").html());
  var html;
  html  = template(currentYear);
  console.log('rendered');

  if(isIphone){
    $('body').addClass('isIphone');
  }

  $("#videos").html(html);

  window.scrollTo(0,0); // jump to top of page

  renderQueue(); // just to be sure
}



/* Queue */
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var browserQueue = localStorage.getObject('queue');
var queue = [];

if(browserQueue != null){
  queue = browserQueue;
}else{
  localStorage.setObject('queue', queue);
}

function addToQueue(artist, name, id){
  var song = {artist, name, id};
  queue.push(song);
  localStorage.setObject('queue', queue);

  if((player.getPlayerState()==5) || (player.getPlayerState()==0)){
    // if nothings playing, play the just queued song
    playNextSong();
  }

  renderQueue();
}

function playNextSong(){
  var song = queue.shift();
  localStorage.setObject('queue', queue);
  loadVideo(song.artist, song.name, song.id);
  renderQueue();
}