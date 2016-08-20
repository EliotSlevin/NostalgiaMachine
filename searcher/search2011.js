// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Rolling in the Deep Adele",
"Party Rock Anthem LMFAO featuring Lauren Bennett and GoonRock",
"Firework Katy Perry",
"E.T. Katy Perry featuring Kanye West",
"Give Me Everything Pitbull featuring Ne-Yo Afrojack and Nayer",
"Grenade Bruno Mars",
"Fuck You Cee Lo Green",
"Super Bass Nicki Minaj",
"Moves like Jagger Maroon 5 featuring Christina Aguilera",
"Just Cant Get Enough The Black Eyed Peas",
"On the Floor Jennifer Lopez featuring Pitbull",
"S&M Rihanna",
"Pumped Up Kicks Foster the People",
"Last Friday Night (T.G.I.F.) Katy Perry",
"Just the Way You Are Bruno Mars",
"Tonight (Im Lovin You) Enrique Iglesias featuring Ludacris and DJ Frank E",
"Raise Your Glass Pink",
"Born This Way Lady Gaga",
"Fuckin Perfect Pink",
"Whats My Name? Rihanna featuring Drake",
"Look at Me Now Chris Brown featuring Lil Wayne and Busta Rhymes",
"Down on Me Jeremih featuring 50 Cent",
"How to Love Lil Wayne",
"Someone Like You Adele",
"Good Life OneRepublic",
"The Lazy Song Bruno Mars",
"Till the World Ends Britney Spears",
"The Show Goes On Lupe Fiasco",
"The Edge of Glory Lady Gaga",
"We R Who We R Ke$ha",
"Black and Yellow Wiz Khalifa",
"Tonight Tonight Hot Chelle Rae",
"Blow Ke$ha",
"Lighters Bad Meets Evil featuring Bruno Mars",
"If I Die Young The Band Perry",
"Stereo Hearts Gym Class Heroes featuring Adam Levine",
"The Time (Dirty Bit) The Black Eyed Peas",
"Coming Home Diddy – Dirty Money featuring Skylar Grey",
"Hey Baby (Drop It to the Floor) Pitbull featuring T-Pain",
"Only Girl (In the World) Rihanna",
"6 Foot 7 Foot Lil Wayne featuring Cory Gunz",
"Just a Kiss Lady Antebellum",
"Dirt Road Anthem Jason Aldean",
"Dynamite Taio Cruz",
"No Hands Waka Flocka Flame featuring Wale and Roscoe Dash",
"I Wanna Go Britney Spears",
"Im on One DJ Khaled featuring Drake Rick Ross and Lil Wayne",
"You Make Me Feel... Cobra Starship featuring Sabi",
"Yeah 3x Chris Brown",
"Moment 4 Life Nicki Minaj featuring Drake",
"I Need a Doctor Dr. Dre featuring Eminem and Skylar Grey",
"Just a Dream Nelly",
"Motivation Kelly Rowland featuring Lil Wayne",
"Stereo Love Edward Maya featuring Vika Jigulina",
"Jar of Hearts Christina Perri",
"Roll Up Wiz Khalifa",
"Sexy and I Know It LMFAO",
"Rocketeer Far East Movement featuring Ryan Tedder",
"All of the Lights Kanye West featuring Rihanna",
"Hold It Against Me Britney Spears",
"More Usher",
"What the Hell Avril Lavigne",
"Written in the Stars Tinie Tempah featuring Eric Turner",
"Bottoms Up Trey Songz featuring Nicki Minaj",
"DJ Got Us Fallin in Love Usher featuring Pitbull",
"For the First Time The Script",
"Honey Bee Blake Shelton",
"Dont You Wanna Stay Jason Aldean featuring Kelly Clarkson",
"We Found Love Rihanna featuring Calvin Harris",
"Pretty Girl Rock Keri Hilson",
"Yoü and I Lady Gaga",
"Like a G6 Far East Movement featuring The Cataracs and Dev",
"Without You David Guetta featuring Usher",
"Back to December Taylor Swift",
"Teenage Dream Katy Perry",
"Crazy Girl Eli Young Band",
"Cheers (Drink to That) Rihanna",
"Who Says Selena Gomez & the Scene",
"Barefoot Blue Jean Night Jake Owen",
"Knee Deep Zac Brown Band featuring Jimmy Buffett",
"Country Girl (Shake It for Me) Luke Bryan",
"Remind Me Brad Paisley and Carrie Underwood",
"In the Dark Dev",
"Backseat New Boyz featuring The Cataracs and Dev",
"Headlines Drake",
"Best Thing I Never Had Beyoncé",
"Dont Wanna Go Home Jason Derulo",
"Where Them Girls At David Guetta featuring Flo Rida and Nicki Minaj",
"She Aint You Chris Brown",
"Take a Back Road Rodney Atkins",
"Please Dont Go Mike Posner",
"Sure Thing Miguel",
"Price Tag Jessie J featuring B.o.B",
"God Gave Me You Blake Shelton",
"She Will Lil Wayne featuring Drake",
"Are You Gonna Kiss Me or Not Thompson Square",
"Animal Neon Trees",
"You and Tequila Kenny Chesney featuring Grace Potter",
"Colder Weather Zac Brown Band",
"My Last Big Sean featuring Chris Brown",

    ];

var names = [
"Rolling in the Deep",
"Party Rock Anthem",
"Firework",
"E.T.",
"Give Me Everything",
"Grenade",
"Fuck You",
"Super Bass",
"Moves like Jagger",
"Just Can\'t Get Enough",
"On the Floor",
"S&M",
"Pumped Up Kicks",
"Last Friday Night (T.G.I.F.)",
"Just the Way You Are",
"Tonight (I\'m Lovin\' You)",
"Raise Your Glass",
"Born This Way",
"Fuckin\' Perfect",
"What\'s My Name?",
"Look at Me Now",
"Down on Me",
"How to Love",
"Someone Like You",
"Good Life",
"The Lazy Song",
"Till the World Ends",
"The Show Goes On",
"The Edge of Glory",
"We R Who We R",
"Black and Yellow",
"Tonight Tonight",
"Blow",
"Lighters",
"If I Die Young",
"Stereo Hearts",
"The Time (Dirty Bit)",
"Coming Home",
"Hey Baby (Drop It to the Floor)",
"Only Girl (In the World)",
"6 Foot 7 Foot",
"Just a Kiss",
"Dirt Road Anthem",
"Dynamite",
"No Hands",
"I Wanna Go",
"I\'m on One",
"You Make Me Feel...",
"Yeah 3x",
"Moment 4 Life",
"I Need a Doctor",
"Just a Dream",
"Motivation",
"Stereo Love",
"Jar of Hearts",
"Roll Up",
"Sexy and I Know It",
"Rocketeer",
"All of the Lights",
"Hold It Against Me",
"More",
"What the Hell",
"Written in the Stars",
"Bottoms Up",
"DJ Got Us Fallin\' in Love",
"For the First Time",
"Honey Bee",
"Don\'t You Wanna Stay",
"We Found Love",
"Pretty Girl Rock",
"Yoü and I",
"Like a G6",
"Without You",
"Back to December",
"Teenage Dream",
"Crazy Girl",
"Cheers (Drink to That)",
"Who Says",
"Barefoot Blue Jean Night",
"Knee Deep",
"Country Girl (Shake It for Me)",
"Remind Me",
"In the Dark",
"Backseat",
"Headlines",
"Best Thing I Never Had",
"Don\'t Wanna Go Home",
"Where Them Girls At",
"She Ain\'t You",
"Take a Back Road",
"Please Don\'t Go",
"Sure Thing",
"Price Tag",
"God Gave Me You",
"She Will",
"Are You Gonna Kiss Me or Not",
"Animal",
"You and Tequila",
"Colder Weather",
"My Last",


 ];

 var artist = [

 "Adele",
"LMFAO featuring Lauren Bennett and GoonRock",
"Katy Perry",
"Katy Perry featuring Kanye West",
"Pitbull featuring Ne-Yo\, Afrojack and Nayer",
"Bruno Mars",
"Cee Lo Green",
"Nicki Minaj",
"Maroon 5 featuring Christina Aguilera",
"The Black Eyed Peas",
"Jennifer Lopez featuring Pitbull",
"Rihanna",
"Foster the People",
"Katy Perry",
"Bruno Mars",
"Enrique Iglesias featuring Ludacris and DJ Frank E",
"Pink",
"Lady Gaga",
"Pink",
"Rihanna featuring Drake",
"Chris Brown featuring Lil Wayne and Busta Rhymes",
"Jeremih featuring 50 Cent",
"Lil Wayne",
"Adele",
"OneRepublic",
"Bruno Mars",
"Britney Spears",
"Lupe Fiasco",
"Lady Gaga",
"Ke$ha",
"Wiz Khalifa",
"Hot Chelle Rae",
"Ke$ha",
"Bad Meets Evil featuring Bruno Mars",
"The Band Perry",
"Gym Class Heroes featuring Adam Levine",
"The Black Eyed Peas",
"Diddy – Dirty Money featuring Skylar Grey",
"Pitbull featuring T-Pain",
"Rihanna",
"Lil Wayne featuring Cory Gunz",
"Lady Antebellum",
"Jason Aldean",
"Taio Cruz",
"Waka Flocka Flame featuring Wale and Roscoe Dash",
"Britney Spears",
"DJ Khaled featuring Drake\, Rick Ross and Lil Wayne",
"Cobra Starship featuring Sabi",
"Chris Brown",
"Nicki Minaj featuring Drake",
"Dr. Dre featuring Eminem and Skylar Grey",
"Nelly",
"Kelly Rowland featuring Lil Wayne",
"Edward Maya featuring Vika Jigulina",
"Christina Perri",
"Wiz Khalifa",
"LMFAO",
"Far East Movement featuring Ryan Tedder",
"Kanye West featuring Rihanna",
"Britney Spears",
"Usher",
"Avril Lavigne",
"Tinie Tempah featuring Eric Turner",
"Trey Songz featuring Nicki Minaj",
"Usher featuring Pitbull",
"The Script",
"Blake Shelton",
"Jason Aldean featuring Kelly Clarkson",
"Rihanna featuring Calvin Harris",
"Keri Hilson",
"Lady Gaga",
"Far East Movement featuring The Cataracs and Dev",
"David Guetta featuring Usher",
"Taylor Swift",
"Katy Perry",
"Eli Young Band",
"Rihanna",
"Selena Gomez & the Scene",
"Jake Owen",
"Zac Brown Band featuring Jimmy Buffett",
"Luke Bryan",
"Brad Paisley and Carrie Underwood",
"Dev",
"New Boyz featuring The Cataracs and Dev",
"Drake",
"Beyoncé",
"Jason Derulo",
"David Guetta featuring Flo Rida and Nicki Minaj",
"Chris Brown",
"Rodney Atkins",
"Mike Posner",
"Miguel",
"Jessie J featuring B.o.B",
"Blake Shelton",
"Lil Wayne featuring Drake",
"Thompson Square",
"Neon Trees",
"Kenny Chesney featuring Grace Potter",
"Zac Brown Band",
"Big Sean featuring Chris Brown"

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