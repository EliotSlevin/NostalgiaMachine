// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;


var names = [

"Lonely Night (또 하루)",
"Dream",
"I Am You, You Are Me (너는 나 나는 너)",
"Rain",
"Rough (시간을 달려서)",
"Everytime",
"You\'re the Best (넌 is 뭔들)",
"Breathe (한숨)",
"Once Again (다시 너를)",
"Talk Love (말해! 뭐해?)",
"Fallen in Love (Only With You) (사랑에 빠졌죠 (당신만이))",
"What the spring?? (봄이 좋냐??)",
"How Can I Love You",
"Hopefully Sky (하늘바라기)",
"Cheer Up",
"RE-BYE",
"Cheer Up",
"so-so (쏘쏘)",
"I Don\'t Love You (널 사랑하지 않아)",
"Monster",
"GOOD",
"I Like That",
"Comfortable (맘 편히)",
"Why So Lonely",

 ];

 var artist = [

"Gary featuring Gaeko",
"Suzy, Baekhyun",
"Zico",
"Taeyeon",
"GFriend",
"Chen, Punch",
"Mamamoo",
"Lee Hi",
"Mad Clown feat. Kim Na-young",
"K.Will",
"Jang Beom-Jun",
"10cm",
"Junsu",
"Jung Eun-ji featuring Hareem",
"Twice",
"Akdong Musician",
"Twice",
"Baek A-yeon",
"Urban Zakapa",
"Exo",
"Loco, GRAY featuring ELO",
"Sistar",
"Simon Dominic, Gray, One",
"Wonder Girls",

];




// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyDe9ZSCSvexOmI52bDCEMNGU8vg-TtZjpo');

 

 //    var arrayLength = songs.length;
	
	// for (var i = 0; i < arrayLength; i++) {
	// var raw = songs[i];
	// var clean = raw.replace(/\W/g, '');

 //    search(clean);
	// }


 //   search(	"Thrift Shop Macklemore and Ryan Lewis featuring Wanz");
 	  searchNext();
}


function search(query) {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 1
  

    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);

}

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
   var responseString = JSON.stringify(response, '', 2);
   //document.getElementById('response').innerHTML += responseString;
   var data = JSON.parse(responseString);

   // if(!data){
   //  document.getElementById('response').innerHTML += "Data not found?";
   //  return;
   // }
   console.log(data);
   var videoId = (data.items[0].id.videoId);
   var one = "&lt;div class=\"vid\" onclick=\"loadVideo($(this));\" data-id=\"";
   var two = "\"&gt;&lt;a href=\"https://www.youtube.com/watch?v=";
   var three = "\"&gt;&lt;/a&gt;&lt;div&gt;&lt;h3&gt;";
   var four = "&lt;br&gt;"
   var five	= "&lt;span&gt;"
   var six = "&lt;/span&gt;&lt;/h3&gt;&lt;/div&gt;&lt;/div&gt;\n";

  // var linkElement = one + videoId + two + videoId + three  + names[indexPos-1] + four + five + artist[indexPos-1] + six  ;
   var linkElement = '["' + artist[indexPos-1] + '","' + names[indexPos-1] + '","' + videoId + '"],\n';

   document.getElementById('response').innerHTML += linkElement;
   searchNext();
}

function searchNext(){


    if (artist.length != indexPos){
      var name = names[indexPos];
      name = name.replace("\'",""); // remove single quotes
      name = name.replace("\"",""); // remove double quotes

      var artistName = artist[indexPos];
      artistName = artistName.replace("\'","");
      artistName = artistName.replace("\"","");


    	search(artistName + " " + name);
		indexPos++;
    }else{
    	alert("SWAG");
    }

}