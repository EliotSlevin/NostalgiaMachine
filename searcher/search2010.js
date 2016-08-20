// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [
"Tik Tok Ke$ha",
"Need You Now Lady Antebellum",
"Hey Soul Sister Train",
"California Gurls Katy Perry featuring Snoop Dogg",
"OMG Usher featuring will.i.am",
"Airplanes B.o.B featuring Hayley Williams",
"Love the Way You Lie Eminem featuring Rihanna",
"Bad Romance Lady Gaga",
"Dynamite Taio Cruz",
"Break Your Heart Taio Cruz featuring Ludacris",
"Nothin on You B.o.B featuring Bruno Mars",
"I Like It Enrique Iglesias featuring Pitbull",
"BedRock Young Money featuring Lloyd",
"In My Head Jason Derülo",
"Rude Boy Rihanna",
"Telephone Lady Gaga featuring Beyoncé",
"Teenage Dream Katy Perry",
"Just the Way You Are Bruno Mars",
"Cooler Than Me Mike Posner",
"Imma Be The Black Eyed Peas",
"Empire State of Mind Jay-Z and Alicia Keys",
"DJ Got Us Fallin in Love Usher featuring Pitbull",
"Billionaire Travie McCoy featuring Bruno Mars",
"Not Afraid Eminem",
"Replay Iyaz",
"Sexy Bitch David Guetta featuring Akon",
"Breakeven The Script",
"Your Love Is My Drug Ke$ha",
"I Gotta Feeling The Black Eyed Peas",
"Fireflies Owl City",
"Say Aah Trey Songz featuring Fabolous",
"Find Your Love Drake",
"Alejandro Lady Gaga",
"Ridin Solo Jason Derülo",
"Just a Dream Nelly",
"How Low Ludacris",
"Like a G6 Far East Movement featuring The Cataracs and Dev",
"Carry Out Timbaland featuring Justin Timberlake",
"Havent Met You Yet Michael Bublé",
"Club Cant Handle Me Flo Rida featuring David Guetta",
"Down Jay Sean featuring Lil Wayne",
"Bulletproof La Roux",
"Whatcha Say Jason Derülo",
"Baby Justin Bieber featuring Ludacris",
"Whataya Want from Me Adam Lambert",
"Mine Taylor Swift",
"Only Girl (In the World) Rihanna",
"Live Like Were Dying Kris Allen",
"Hard Rihanna featuring Jeezy",
"Young Forever Jay-Z featuring Mr Hudson",
"Blah Blah Blah Ke$ha featuring 3OH!3",
"Bottoms Up Trey Songz featuring Nicki Minaj",
"Do You Remember Jay Sean featuring Sean Paul and Lil Jon",
"All the Right Moves OneRepublic",
"According to You Orianthi",
"My Chick Bad Ludacris featuring Nicki Minaj",
"You Belong with Me Taylor Swift",
"Meet Me Halfway The Black Eyed Peas",
"Take It Off Ke$ha",
"Over Drake",
"Animal Neon Trees",
"Misery Maroon 5",
"Magic B.o.B featuring Rivers Cuomo",
"Paparazzi Lady Gaga",
"Tie Me Down New Boyz featuring Ray J",
"Your Love Nicki Minaj",
"Party in the U.S.A. Miley Cyrus",
"Deuces Chris Brown featuring Tyga and Kevin McCall",
"3 Britney Spears",
"Impossible Shontelle",
"Forever Drake featuring Kanye West Lil Wayne and Eminem",
"Two Is Better Than One Boys Like Girls featuring Taylor Swift",
"My First Kiss 3OH!3 featuring Ke$ha",
"Already Gone Kelly Clarkson",
"Rock That Body The Black Eyed Peas",
"Secrets OneRepublic",
"Naturally Selena Gomez & the Scene",
"Un-Thinkable (Im Ready) Alicia Keys",
"All I Do Is Win DJ Khaled featuring T-Pain Ludacris Snoop Dogg and Rick Ross",
"I Made It (Cash Money Heroes) Kevin Rudolf featuring Birdman Jay Sean and Lil Wayne",
"Stuck Like Glue Sugarland",
"Hey Daddy (Daddys Home) Usher featuring Plies",
"There Goes My Baby Usher",
"Today Was a Fairytale Taylor Swift",
"Say Something Timbaland featuring Drake",
"Sweet Dreams Beyoncé",
"Use Somebody Kings of Leon",
"Undo It Carrie Underwood",
"Eenie Meenie Sean Kingston and Justin Bieber",
"Right Above It Lil Wayne featuring Drake",
"The House That Built Me Miranda Lambert",
"If I Die Young The Band Perry",
"The Only Exception Paramore",
"American Honey Lady Antebellum",
"King of Anything Sara Bareilles",
"Life After You Daughtry",
"Smile Uncle Kracker",
"Teach Me How to Dougie Cali Swag District",
"Try Sleeping with a Broken Heart Alicia Keys",
"Lover Lover Jerrod Niemann",
 

    ];

var names = [
"Tik Tok",
"Need You Now",
"Hey\, Soul Sister",
"California Gurls",
"OMG",
"Airplanes",
"Love the Way You Lie",
"Bad Romance",
"Dynamite",
"Break Your Heart",
"Nothin\' on You",
"I Like It",
"BedRock",
"In My Head",
"Rude Boy",
"Telephone",
"Teenage Dream",
"Just the Way You Are",
"Cooler Than Me",
"Imma Be",
"Empire State of Mind",
"DJ Got Us Fallin\' in Love",
"Billionaire",
"Not Afraid",
"Replay",
"Sexy Bitch",
"Breakeven",
"Your Love Is My Drug",
"I Gotta Feeling",
"Fireflies",
"Say Aah",
"Find Your Love",
"Alejandro",
"Ridin\' Solo",
"Just a Dream",
"How Low",
"Like a G6",
"Carry Out",
"Haven\'t Met You Yet",
"Club Can\'t Handle Me",
"Down",
"Bulletproof",
"Whatcha Say",
"Baby",
"Whataya Want from Me",
"Mine",
"Only Girl (In the World)",
"Live Like We\'re Dying",
"Hard",
"Young Forever",
"Blah Blah Blah",
"Bottoms Up",
"Do You Remember",
"All the Right Moves",
"According to You",
"My Chick Bad",
"You Belong with Me",
"Meet Me Halfway",
"Take It Off",
"Over",
"Animal",
"Misery",
"Magic",
"Paparazzi",
"Tie Me Down",
"Your Love",
"Party in the U.S.A.",
"Deuces",
"3",
"Impossible",
"Forever",
"Two Is Better Than One",
"My First Kiss",
"Already Gone",
"Rock That Body",
"Secrets",
"Naturally",
"Un-Thinkable (I\'m Ready)",
"All I Do Is Win",
"I Made It (Cash Money Heroes)",
"Stuck Like Glue",
"Hey Daddy (Daddy\'s Home)",
"There Goes My Baby",
"Today Was a Fairytale",
"Say Something",
"Sweet Dreams",
"Use Somebody",
"Undo It",
"Eenie Meenie",
"Right Above It",
"The House That Built Me",
"If I Die Young",
"The Only Exception",
"American Honey",
"King of Anything",
"Life After You",
"Smile",
"Teach Me How to Dougie",
"Try Sleeping with a Broken Heart",
"Lover\, Lover",



 ];

 var artist = [

 "Ke$ha",
"Lady Antebellum",
"Train",
"Katy Perry featuring Snoop Dogg",
"Usher featuring will.i.am",
"B.o.B featuring Hayley Williams",
"Eminem featuring Rihanna",
"Lady Gaga",
"Taio Cruz",
"Taio Cruz featuring Ludacris",
"B.o.B featuring Bruno Mars",
"Enrique Iglesias featuring Pitbull",
"Young Money featuring Lloyd",
"Jason Derülo",
"Rihanna",
"Lady Gaga featuring Beyoncé",
"Katy Perry",
"Bruno Mars",
"Mike Posner",
"The Black Eyed Peas",
"Jay-Z and Alicia Keys",
"Usher featuring Pitbull",
"Travie McCoy featuring Bruno Mars",
"Eminem",
"Iyaz",
"David Guetta featuring Akon",
"The Script",
"Ke$ha",
"The Black Eyed Peas",
"Owl City",
"Trey Songz featuring Fabolous",
"Drake",
"Lady Gaga",
"Jason Derülo",
"Nelly",
"Ludacris",
"Far East Movement featuring The Cataracs and Dev",
"Timbaland featuring Justin Timberlake",
"Michael Bublé",
"Flo Rida featuring David Guetta",
"Jay Sean featuring Lil Wayne",
"La Roux",
"Jason Derülo",
"Justin Bieber featuring Ludacris",
"Adam Lambert",
"Taylor Swift",
"Rihanna",
"Kris Allen",
"Rihanna featuring Jeezy",
"Jay-Z featuring Mr Hudson",
"Ke$ha featuring 3OH!3",
"Trey Songz featuring Nicki Minaj",
"Jay Sean featuring Sean Paul and Lil Jon",
"OneRepublic",
"Orianthi",
"Ludacris featuring Nicki Minaj",
"Taylor Swift",
"The Black Eyed Peas",
"Ke$ha",
"Drake",
"Neon Trees",
"Maroon 5",
"B.o.B featuring Rivers Cuomo",
"Lady Gaga",
"New Boyz featuring Ray J",
"Nicki Minaj",
"Miley Cyrus",
"Chris Brown featuring Tyga and Kevin McCall",
"Britney Spears",
"Shontelle",
"Drake featuring Kanye West\, Lil Wayne and Eminem",
"Boys Like Girls featuring Taylor Swift",
"3OH!3 featuring Ke$ha",
"Kelly Clarkson",
"The Black Eyed Peas",
"OneRepublic",
"Selena Gomez & the Scene",
"Alicia Keys",
"DJ Khaled featuring T-Pain\, Ludacris\, Snoop Dogg and Rick Ross",
"Kevin Rudolf featuring Birdman\, Jay Sean and Lil Wayne",
"Sugarland",
"Usher featuring Plies",
"Usher",
"Taylor Swift",
"Timbaland featuring Drake",
"Beyoncé",
"Kings of Leon",
"Carrie Underwood",
"Sean Kingston and Justin Bieber",
"Lil Wayne featuring Drake",
"Miranda Lambert",
"The Band Perry",
"Paramore",
"Lady Antebellum",
"Sara Bareilles",
"Daughtry",
"Uncle Kracker",
"Cali Swag District",
"Alicia Keys",
"Jerrod Niemann",


];




// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

 

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

   var videoId = (data.items[0].id.videoId);
   var one = "&lt;div class=\"vid\" onclick=\"loadVideo($(this));\" data-id=\"";
   var two = "\"&gt;&lt;a href=\"https://www.youtube.com/watch?v=";
   var three = "\"&gt;&lt;/a&gt;&lt;div&gt;&lt;h3&gt;";
   var four = "&lt;br&gt;"
   var five	= "&lt;span&gt;"
   var six = "&lt;/span&gt;&lt;/h3&gt;&lt;/div&gt;&lt;/div&gt;\n";

   var linkElement = one + videoId + two + videoId + three  + names[indexPos-1] + four + five + artist[indexPos-1] + six  ;
   //alert(linkElement);
   document.getElementById('response').innerHTML += linkElement;
   searchNext();

}

function searchNext(){


    if (songs.length != indexPos){
    	search(songs[indexPos]);
		indexPos++;
    }else{
    	alert("SWAG");
    }


}