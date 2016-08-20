// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Somebody That I Used to Know Gotye featuring Kimbra",
"Call Me Maybe Carly Rae Jepsen",
"We Are Young fun. featuring Janelle Monáe",
"Payphone Maroon 5 featuring Wiz Khalifa",
"Lights Ellie Goulding",
"Glad You Came The Wanted",
"Stronger (What Doesn't Kill You) Kelly Clarkson",
"We Found Love Rihanna featuring Calvin Harris",
"Starships Nicki Minaj",
"What Makes You Beautiful One Direction",
"Wild Ones Flo Rida featuring Sia",
"Set Fire to the Rain Adele",
"Sexy and I Know It LMFAO",
"Some Nights fun.",
"Wide Awake Katy Perry",
"Good Feeling Flo Rida",
"Whistle Flo Rida",
"One More Night Maroon 5",
"Drive By Train",
"The Motto Drake featuring Lil Wayne",
"Where Have You Been Rihanna",
"Everybody Talks Neon Trees",
"Take Care Drake featuring Rihanna",
"Titanium David Guetta featuring Sia",
"I Won't Give Up Jason Mraz",
"It Will Rain Bruno Mars",
"Mercy Kanye West Big Sean Pusha T and 2 Chainz",
"Boyfriend Justin Bieber",
"Party Rock Anthem LMFAO featuring Lauren Bennett and GoonRock",
"Too Close Alex Clare",
"Part of Me Katy Perry",
"Young Wild & Free Snoop Dogg and Wiz Khalifa featuring Bruno Mars",
"We Are Never Ever Getting Back Together Taylor Swift",
"As Long as You Love Me Justin Bieber featuring Big Sean",
"Turn Me On David Guetta featuring Nicki Minaj",
"Moves like Jagger Maroon 5 featuring Christina Aguilera",
"Blow Me (One Last Kiss) Pink",
"Good Time Owl City and Carly Rae Jepsen",
"Give Your Heart a Break Demi Lovato",
"Niggas in Paris Jay-Z and Kanye West",
"The One That Got Away Katy Perry",
"Feel So Close Calvin Harris",
"Someone like You Adele",
"Scream Usher",
"Rack City Tyga",
"Domino Jessie J",
"Gangnam Style PSY",
"International Love Pitbull featuring Chris Brown",
"Home Phillip Phillips",
"Without You David Guetta featuring Usher",
"Ass Back Home Gym Class Heroes featuring Neon Hitch",
"Wanted Hunter Hayes",
"Drunk on You Luke Bryan",
"No Lie 2 Chainz featuring Drake",
"Want U Back Cher Lloyd",
"Don't Wake Me Up Chris Brown",
"Dance (A$$) Big Sean",
"Springsteen Eric Church",
"Brokenhearted Karmin",
"Not Over You Gavin DeGraw",
"Stereo Hearts Gym Class Heroes featuring Adam Levine",
"Back in Time Pitbull",
"Work Out J. Cole",
"Rumour Has It Adele",
"Let's Go Calvin Harris featuring Ne-Yo",
"Good Girl Carrie Underwood",
"Pontoon Little Big Town",
"Ho Hey The Lumineers",
"Paradise Coldplay",
"Blown Away Carrie Underwood",
"Rolling in the Deep Adele",
"Climax Usher",
"Work Hard Play Hard Wiz Khalifa",
"Let Me Love You (Until You Learn to Love Yourself) Ne-Yo",
"Pound the Alarm Nicki Minaj",
"Come Over Kenny Chesney",
"Heart Attack Trey Songz",
"Drank in My Cup Kirko Bangz",
"Birthday Cake Rihanna featuring Chris Brown",
"So Good B.o.B",
"50 Ways to Say Goodbye Train",
"Red Solo Cup Toby Keith",
"Love You like a Love Song Selena Gomez & the Scene",
"Turn Up the Music Chris Brown",
"Die Young Ke$ha",
"5 O'Clock T-Pain featuring Wiz Khalifa and Lily Allen",
"A Thousand Years Christina Perri",
"Take a Little Ride Jason Aldean",
"You da One Rihanna",
"We Run the Night Havana Brown featuring Pitbull",
"It's Time Imagine Dragons",
"Cashin' Out Ca$h Out",
"I Don't Want This Night to End Luke Bryan",
"Diamonds Rihanna",
"Hard to Love Lee Brice",
"Somethin' 'Bout a Truck Kip Moore",
"Adorn Miguel",
"Fly Over States Jason Aldean",
"Even If It Breaks Your Heart Eli Young Band",
"Burn It Down Linkin Park"

    ];

var names = [

"Somebody That I Used to Know",
"Call Me Maybe",
"We Are Young",
"Payphone",
"Lights",
"Glad You Came",
"Stronger (What Doesn\'t Kill You)",
"We Found Love",
"Starships",
"What Makes You Beautiful",
"Wild Ones",
"Set Fire to the Rain",
"Sexy and I Know It",
"Some Nights",
"Wide Awake",
"Good Feeling",
"Whistle",
"One More Night",
"Drive By",
"The Motto",
"Where Have You Been",
"Everybody Talks",
"Take Care",
"Titanium",
"I Won\'t Give Up",
"It Will Rain",
"Mercy",
"Boyfriend",
"Party Rock Anthem",
"Too Close",
"Part of Me",
"Young\, Wild & Free",
"We Are Never Ever Getting Back Together",
"As Long as You Love Me",
"Turn Me On",
"Moves like Jagger",
"Blow Me (One Last Kiss)",
"Good Time",
"Give Your Heart a Break",
"Niggas in Paris",
"The One That Got Away",
"Feel So Close",
"Someone like You",
"Scream",
"Rack City",
"Domino",
"Gangnam Style",
"International Love",
"Home",
"Without You",
"Ass Back Home",
"Wanted",
"Drunk on You",
"No Lie",
"Want U Back",
"Don\'t Wake Me Up",
"Dance (A$$)",
"Springsteen",
"Brokenhearted",
"Not Over You",
"Stereo Hearts",
"Back in Time",
"Work Out",
"Rumour Has It",
"Let\'s Go",
"Good Girl",
"Pontoon",
"Ho Hey",
"Paradise",
"Blown Away",
"Rolling in the Deep",
"Climax",
"Work Hard\, Play Hard",
"Let Me Love You (Until You Learn to Love Yourself)",
"Pound the Alarm",
"Come Over",
"Heart Attack",
"Drank in My Cup",
"Birthday Cake",
"So Good",
"50 Ways to Say Goodbye",
"Red Solo Cup",
"Love You like a Love Song",
"Turn Up the Music",
"Die Young",
"5 O\'Clock",
"A Thousand Years",
"Take a Little Ride",
"You da One",
"We Run the Night",
"It\'s Time",
"Cashin\' Out",
"I Don\'t Want This Night to End",
"Diamonds",
"Hard to Love",
"Somethin\' \'Bout a Truck",
"Adorn",
"Fly Over States",
"Even If It Breaks Your Heart",
"Burn It Down",


 ];

 var artist = [

 
"Gotye featuring Kimbra",
"Carly Rae Jepsen",
"fun. featuring Janelle Monáe",
"Maroon 5 featuring Wiz Khalifa",
"Ellie Goulding",
"The Wanted",
"Kelly Clarkson",
"Rihanna featuring Calvin Harris",
"Nicki Minaj",
"One Direction",
"Flo Rida featuring Sia",
"Adele",
"LMFAO",
"fun.",
"Katy Perry",
"Flo Rida",
"Flo Rida",
"Maroon 5",
"Train",
"Drake featuring Lil Wayne",
"Rihanna",
"Neon Trees",
"Drake featuring Rihanna",
"David Guetta featuring Sia",
"Jason Mraz",
"Bruno Mars",
"Kanye West\, Big Sean\, Pusha T and 2 Chainz",
"Justin Bieber",
"LMFAO featuring Lauren Bennett and GoonRock",
"Alex Clare",
"Katy Perry",
"Snoop Dogg and Wiz Khalifa featuring Bruno Mars",
"Taylor Swift",
"Justin Bieber featuring Big Sean",
"David Guetta featuring Nicki Minaj",
"Maroon 5 featuring Christina Aguilera",
"Pink",
"Owl City and Carly Rae Jepsen",
"Demi Lovato",
"Jay-Z and Kanye West",
"Katy Perry",
"Calvin Harris",
"Adele",
"Usher",
"Tyga",
"Jessie J",
"PSY",
"Pitbull featuring Chris Brown",
"Phillip Phillips",
"David Guetta featuring Usher",
"Gym Class Heroes featuring Neon Hitch",
"Hunter Hayes",
"Luke Bryan",
"2 Chainz featuring Drake",
"Cher Lloyd",
"Chris Brown",
"Big Sean",
"Eric Church",
"Karmin",
"Gavin DeGraw",
"Gym Class Heroes featuring Adam Levine",
"Pitbull",
"J. Cole",
"Adele",
"Calvin Harris featuring Ne-Yo",
"Carrie Underwood",
"Little Big Town",
"The Lumineers",
"Coldplay",
"Carrie Underwood",
"Adele",
"Usher",
"Wiz Khalifa",
"Ne-Yo",
"Nicki Minaj",
"Kenny Chesney",
"Trey Songz",
"Kirko Bangz",
"Rihanna featuring Chris Brown",
"B.o.B",
"Train",
"Toby Keith",
"Selena Gomez & the Scene",
"Chris Brown",
"Ke$ha",
"T-Pain featuring Wiz Khalifa and Lily Allen",
"Christina Perri",
"Jason Aldean",
"Rihanna",
"Havana Brown featuring Pitbull",
"Imagine Dragons",
"Ca$h Out",
"Luke Bryan",
"Rihanna",
"Lee Brice",
"Kip Moore",
"Miguel",
"Jason Aldean",
"Eli Young Band",
"Linkin Park"

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