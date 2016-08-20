// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [
"Thrift Shop Macklemore and Ryan Lewis featuring Wanz",
"Blurred Lines Robin Thicke featuring T.I. and Pharrell Williams",
"Radioactive Imagine Dragons",
"Harlem Shake Baauer",
"Cant Hold Us Macklemore and Ryan Lewis featuring Ray Dalton",
"Mirrors Justin Timberlake",
"Just Give Me a Reason Pink featuring Nate Ruess",
"When I Was Your Man Bruno Mars",
"Cruise Florida Georgia Line featuring Nelly",
"Roar Katy Perry",
"Locked Out of Heaven Bruno Mars",
"Ho Hey The Lumineers",
"Stay Rihanna featuring Mikky Ekko",
"Get Lucky Daft Punk featuring Pharrell Williams",
"Royals Lorde",
"I Knew You Were Trouble Taylor Swift",
"We Cant Stop Miley Cyrus",
"Wrecking Ball Miley Cyrus",
"Wake Me Up! Avicii",
"Suit & Tie Justin Timberlake featuring Jay-Z",
"Cups Anna Kendrick",
"Holy Grail Jay-Z featuring Justin Timberlake",
"Scream & Shout will.i.am featuring Britney Spears",
"Clarity Zedd featuring Foxes",
"Sail AWOLNATION",
"Dont You Worry Child Swedish House Mafia featuring John Martin",
"Diamonds Rihanna",
"I Love It Icona Pop featuring Charli XCX",
"Safe and Sound Capital Cities",
"Treasure Bruno Mars",
"The Way Ariana Grande featuring Mac Miller",
"Started from the Bottom Drake",
"Come & Get It Selena Gomez",
"Hold On  Were Going Home Drake featuring Majid Jordan",
"Daylight Maroon 5",
"Feel This Moment Pitbull featuring Christina Aguilera",
"Applause Lady Gaga",
"One More Night Maroon 5",
"Love Me Lil Wayne featuring Drake and Future",
"My Songs Know What You Did in the Dark (Light Em Up) Fall Out Boy",
"Fuckin Problems ASAP Rocky featuring Drake  2 Chainz and Kendrick Lamar",
"Beauty and a Beat Justin Bieber featuring Nicki Minaj",
"Same Love Macklemore and Ryan Lewis featuring Mary Lambert",
"Sweet Nothing Calvin Harris featuring Florence Welch",
"Summertime Sadness Lana Del Rey",
"Home Phillip Phillips",
"Its Time Imagine Dragons",
"Power Trip J. Cole featuring Miguel",
"Girl on Fire Alicia Keys",
"Heart Attack Demi Lovato",
"Love Somebody Maroon 5",
"I Will Wait Mumford & Sons",
"Try Pink",
"Wagon Wheel Darius Rucker",
"Gangnam Style PSY",
"I Need Your Love Calvin Harris featuring Ellie Goulding",
"Die Young Ke$ha",
"Some Nights fun.",
"Bad Wale featuring Tiara Thomas",
"Boys Round Here Blake Shelton featuring Pistol Annies and Friends",
"Gone  Gone  Gone Phillip Phillips",
"Demons Imagine Dragons",
"Counting Stars OneRepublic",
"I Cry Flo Rida",
"Little Talks Of Monsters and Men",
"The Other Side Jason Derulo",
"Berzerk Eminem",
"Catch My Breath Kelly Clarkson",
"Crash My Party Luke Bryan",
"Pour It Up Rihanna",
"22 Taylor Swift",
"I Want Crazy Hunter Hayes",
"The Fox (What Does the Fox Say?) Ylvis",
"Best Song Ever One Direction",
"The A Team Ed Sheeran",
"Carry On fun.",
"Highway Dont Care Tim McGraw featuring Taylor Swift and Keith Urban",
"Thats My Kind of Night Luke Bryan",
"Swimming Pools (Drank) Kendrick Lamar",
"Sure Be Cool If You Did Blake Shelton",
"#Beautiful Mariah Carey featuring Miguel",
"Troublemaker Olly Murs featuring Flo Rida",
"Body Party Ciara",
"Adorn Miguel",
"Hall of Fame The Script featuring will.i.am",
"Let Me Love You (Until You Learn to Love Yourself) Ne-Yo",
"U.O.E.N.O. Rocko featuring Future and Rick Ross",
"Next to Me Emeli Sandz",
"Mamas Broken Heart Miranda Lambert",
"It Goes Like This Thomas Rhett",
"Bugatti Ace Hood featuring Future and Rick Ross",
"Wanted Hunter Hayes",
"Downtown Lady Antebellum",
"Get Your Shine On Florida Georgia Line",
"#thatPower will.i.am featuring Justin Bieber",
"Brave Sara Bareilles",
"Let Her Go Passenger",
"Runnin Outta Moonlight Randy Houser",
"Im Different 2 Chainz",
"Still Into You Paramore"
    ];

var names = [
"Thrift Shop",
"Blurred Lines",
"Radioactive",
"Harlem Shake",
"Cant Hold Us",
"Mirrors",
"Just Give Me a Reason",
"When I Was Your Man",
"Cruise",
"Roar",
"Locked Out of Heaven",
"Ho Hey",
"Stay",
"Get Lucky",
"Royals",
"I Knew You Were Trouble",
"We Cant Stop",
"Wrecking Ball",
"Wake Me Up!",
"Suit & Tie",
"Cups",
"Holy Grail",
"Scream & Shout",
"Clarity",
"Sail",
"Dont You Worry Child",
"Diamonds",
"I Love It",
"Safe and Sound",
"Treasure",
"The Way",
"Started from the Bottom",
"Come & Get It",
"Hold On, Were Going Home",
"Daylight",
"Feel This Moment",
"Applause",
"One More Night",
"Love Me",
"My Songs Know What You Did in the Dark (Light Em Up)",
"Fuckin Problems",
"Beauty and a Beat",
"Same Love",
"Sweet Nothing",
"Summertime Sadness",
"Home",
"Its Time",
"Power Trip",
"Girl on Fire",
"Heart Attack",
"Love Somebody",
"I Will Wait",
"Try",
"Wagon Wheel",
"Gangnam Style",
"I Need Your Love",
"Die Young",
"Some Nights",
"Bad",
"Boys Round Here",
"Gone, Gone, Gone",
"Demons",
"Counting Stars",
"I Cry",
"Little Talks",
"The Other Side",
"Berzerk",
"Catch My Breath",
"Crash My Party",
"Pour It Up",
"22",
"I Want Crazy",
"The Fox (What Does the Fox Say?)",
"Best Song Ever",
"The A Team",
"Carry On",
"Highway Dont Care",
"Thats My Kind of Night",
"Swimming Pools (Drank)",
"Sure Be Cool If You Did",
"#Beautiful",
"Troublemaker",
"Body Party",
"Adorn",
"Hall of Fame",
"Let Me Love You (Until You Learn to Love Yourself)",
"U.O.E.N.O.",
"Next to Me",
"Mamas Broken Heart",
"It Goes Like This",
"Bugatti",
"Wanted",
"Downtown",
"Get Your Shine On",
"#thatPower",
"Brave",
"Let Her Go",
"Runnin Outta Moonlight",
"Im Different",
"Still Into You"

 ];

 var artist = [
 "Macklemore and Ryan Lewis featuring Wanz",
"Robin Thicke featuring T.I. and Pharrell Williams",
"Imagine Dragons",
"Baauer",
"Macklemore and Ryan Lewis featuring Ray Dalton",
"Justin Timberlake",
"Pink featuring Nate Ruess",
"Bruno Mars",
"Florida Georgia Line featuring Nelly",
"Katy Perry",
"Bruno Mars",
"The Lumineers",
"Rihanna featuring Mikky Ekko",
"Daft Punk featuring Pharrell Williams",
"Lorde",
"Taylor Swift",
"Miley Cyrus",
"Miley Cyrus",
"Avicii",
"Justin Timberlake featuring Jay-Z",
"Anna Kendrick",
"Jay-Z featuring Justin Timberlake",
"will.i.am featuring Britney Spears",
"Zedd featuring Foxes",
"AWOLNATION",
"Swedish House Mafia featuring John Martin",
"Rihanna",
"Icona Pop featuring Charli XCX",
"Capital Cities",
"Bruno Mars",
"Ariana Grande featuring Mac Miller",
"Drake",
"Selena Gomez",
"Drake featuring Majid Jordan",
"Maroon 5",
"Pitbull featuring Christina Aguilera",
"Lady Gaga",
"Maroon 5",
"Lil Wayne featuring Drake and Future",
"Fall Out Boy",
"ASAP Rocky featuring Drake, 2 Chainz and Kendrick Lamar",
"Justin Bieber featuring Nicki Minaj",
"Macklemore and Ryan Lewis featuring Mary Lambert",
"Calvin Harris featuring Florence Welch",
"Lana Del Rey and Cédric Gervais",
"Phillip Phillips",
"Imagine Dragons",
"J. Cole featuring Miguel",
"Alicia Keys",
"Demi Lovato",
"Maroon 5",
"Mumford & Sons",
"Pink",
"Darius Rucker",
"PSY",
"Calvin Harris featuring Ellie Goulding",
"Ke$ha",
"fun.",
"Wale featuring Tiara Thomas",
"Blake Shelton featuring Pistol Annies and Friends",
"Phillip Phillips",
"Imagine Dragons",
"OneRepublic",
"Flo Rida",
"Of Monsters and Men",
"Jason Derulo",
"Eminem",
"Kelly Clarkson",
"Luke Bryan",
"Rihanna",
"Taylor Swift",
"Hunter Hayes",
"Ylvis",
"One Direction",
"Ed Sheeran",
"fun.",
"Tim McGraw featuring Taylor Swift and Keith Urban",
"Luke Bryan",
"Kendrick Lamar",
"Blake Shelton",
"Mariah Carey featuring Miguel",
"Olly Murs featuring Flo Rida",
"Ciara",
"Miguel",
"The Script featuring will.i.am",
"Ne-Yo",
"Rocko featuring Future and Rick Ross",
"Emeli Sandé",
"Miranda Lambert",
"Thomas Rhett",
"Ace Hood featuring Future and Rick Ross",
"Hunter Hayes",
"Lady Antebellum",
"Florida Georgia Line",
"will.i.am featuring Justin Bieber",
"Sara Bareilles",
"Passenger",
"Randy Houser",
"2 Chainz",
"Paramore"
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
   var three = "\"&gt;&lt;/a&gt;&lt;h3&gt;";
   var four = "&lt;/h3&gt;"
   var five	= "&lt;span&gt;"
   var six = "&lt;/span&gt;&lt;/div&gt;\n";

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