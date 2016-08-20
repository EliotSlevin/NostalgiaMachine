// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"Bad Day Daniel Powter",
"Temperature Sean Paul",
"Promiscuous Nelly Furtado featuring Timbaland",
"Youre Beautiful James Blunt",
"Hips Dont Lie Shakira featuring Wyclef Jean",
"Unwritten Natasha Bedingfield",
"Crazy Gnarls Barkley",
"Ridin Chamillionaire featuring Krayzie Bone",
"SexyBack Justin Timberlake",
"Check on It Beyoncé featuring Slim Thug",
"Be Without You Mary J. Blige",
"Grillz Nelly Paul Wall and Ali & Gipp",
"Over My Head (Cable Car) The Fray",
"Me & U Cassie",
"Buttons Pussycat Dolls featuring Snoop Dogg",
"Run It! Chris Brown featuring Juelz Santana",
"So Sick Ne-Yo",
"Its Goin Down Yung Joc featuring Nitti",
"SOS Rihanna",
"I Write Sins Not Tragedies Panic! at the Disco",
"Move Along The All-American Rejects",
"London Bridge Fergie",
"Dani California Red Hot Chili Peppers",
"Snap Yo Fingers Lil Jon featuring E-40 and Sean Paul",
"Lean wit It Rock wit It Dem Franchize Boyz",
"What Hurts the Most Rascal Flatts",
"How to Save a Life The Fray",
"Unfaithful Rihanna",
"Chasing Cars Snow Patrol",
"Lips of an Angel Hinder",
"Everytime We Touch Cascada",
"Aint No Other Man Christina Aguilera",
"Dance Dance Fall Out Boy",
"Gold Digger Kanye West featuring Jamie Foxx",
"Money Maker Ludacris featuring Pharrell",
"Ms. New Booty Bubba Sparxxx featuring Ying Yang Twins",
"(When You Gonna) Give It Up to Me Sean Paul featuring Keyshia Cole",
"Photograph Nickelback",
"Because of You Kelly Clarkson",
"Stickwitu Pussycat Dolls",
"Im n Luv (Wit a Stripper) T-Pain featuring Mike Jones",
"My Humps The Black Eyed Peas",
"Whered You Go Fort Minor featuring Holly Brook and Jonah Matranga",
"Yo (Excuse Me Miss) Chris Brown",
"Walk Away Kelly Clarkson",
"Laffy Taffy D4L",
"What You Know T.I.",
"Dirty Little Secret The All-American Rejects",
"Savin Me Nickelback",
"Dont Forget About Us Mariah Carey",
"Sexy Love Ne-Yo",
"U and Dat E-40 featuring T-Pain and Kandi Girl",
"Far Away Nickelback",
"Whats Left of Me Nick Lachey",
"So What Field Mob featuring Ciara",
"Do It to It Cherish featuring Sean P",
"Black Horse and the Cherry Tree KT Tunstall",
"There It Go (The Whistle Song) Juelz Santana",
"Shoulder Lean Young Dro featuring T.I.",
"Unpredictable Jamie Foxx featuring Ludacris",
"My Love Justin Timberlake featuring T.I.",
"Shake That Eminem featuring Nate Dogg",
"Pullin Me Back Chingy featuring Tyrese",
"Bossy Kelis featuring Too Short",
"Chain Hang Low Jibbs",
"Smack That Akon featuring Eminem",
"One Wish Ray J",
"Sugar Were Goin Down Fall Out Boy",
"Gimme That Chris Brown featuring Lil Wayne",
"I Know You See It Yung Joc",
"Who Says You Cant Go Home Bon Jovi featuring Jennifer Nettles",
"Too Little Too Late JoJo",
"Touch It Busta Rhymes",
"Rompe Daddy Yankee",
"Déjà Vu Beyoncé featuring Jay-Z",
"Life Is a Highway Rascal Flatts",
"Call Me When Youre Sober Evanescence",
"Jesus Take the Wheel Carrie Underwood",
"Show Stopper Danity Kane featuring Yung Joc",
"Get Up Ciara featuring Chamillionaire",
"We Be Burnin Sean Paul",
"Hate Me Blue October",
"You and Me Lifehouse",
"Beep Pussycat Dolls featuring will.i.am",
"I Think They Like Me Dem Franchize Boyz featuring Jermaine Dupri Da Brat and Bow Wow",
"Say Goodbye Chris Brown",
"Waiting on the World to Change John Mayer",
"Soul Survivor Young Jeezy featuring Akon",
"Pump It The Black Eyed Peas",
"When Im Gone Eminem",
"Hung Up Madonna",
"Stay Fly Three 6 Mafia featuring Young Buck and 8Ball & MJG",
"Love Keyshia Cole",
"When Youre Mad Ne-Yo",
"Why You Wanna T.I.",
"Stupid Girls Pink",
"Feel Good Inc. Gorillaz",
"Im Sprung T-Pain",
"Do I Make You Proud Taylor Hicks",
"For You I Will (Confidence) Teddy Geiger"
 

    ];

var names = [

"Bad Day",
"Temperature",
"Promiscuous",
"You\'re Beautiful",
"Hips Don\'t Lie",
"Unwritten",
"Crazy",
"Ridin\'",
"SexyBack",
"Check on It",
"Be Without You",
"Grillz",
"Over My Head (Cable Car)",
"Me & U",
"Buttons",
"Run It!",
"So Sick",
"It\' s Goin\' Down",
"SOS",
"I Write Sins Not Tragedies",
"Move Along",
"London Bridge",
"Dani California",
"Snap Yo Fingers",
"Lean wit It\, Rock wit It",
"What Hurts the Most",
"How to Save a Life",
"Unfaithful",
"Chasing Cars",
"Lips of an Angel",
"Everytime We Touch",
"Ain\'t No Other Man",
"Dance\, Dance",
"Gold Digger",
"Money Maker",
"Ms. New Booty",
"(When You Gonna) Give It Up to Me",
"Photograph",
"Because of You",
"Stickwitu",
"I\'m \'n Luv (Wit a Stripper)",
"My Humps",
"Where\'d You Go",
"Yo (Excuse Me Miss)",
"Walk Away",
"Laffy Taffy",
"What You Know",
"Dirty Little Secret",
"Savin\' Me",
"Don\'t Forget About Us",
"Sexy Love",
"U and Dat",
"Far Away",
"What\'s Left of Me",
"So What",
"Do It to It",
"Black Horse and the Cherry Tree",
"There It Go (The Whistle Song)",
"Shoulder Lean",
"Unpredictable",
"My Love",
"Shake That",
"Pullin\' Me Back",
"Bossy",
"Chain Hang Low",
"Smack That",
"One Wish",
"Sugar\, We\'re Goin Down",
"Gimme That",
"I Know You See It",
"Who Says You Can\'t Go Home",
"Too Little Too Late",
"Touch It",
"Rompe",
"Déjà Vu",
"Life Is a Highway",
"Call Me When You\'re Sober",
"Jesus\, Take the Wheel",
"Show Stopper",
"Get Up",
"We Be Burnin\'",
"Hate Me",
"You and Me",
"Beep",
"I Think They Like Me",
"Say Goodbye",
"Waiting on the World to Change",
"Soul Survivor",
"Pump It",
"When I\'m Gone",
"Hung Up",
"Stay Fly",
"Love",
"When You\'re Mad",
"Why You Wanna",
"Stupid Girls",
"Feel Good Inc.",
"I\'m Sprung",
"Do I Make You Proud",
"For You I Will (Confidence)",



 ];

 var artist = [

"Daniel Powter",
"Sean Paul",
"Nelly Furtado featuring Timbaland",
"James Blunt",
"Shakira featuring Wyclef Jean",
"Natasha Bedingfield",
"Gnarls Barkley",
"Chamillionaire featuring Krayzie Bone",
"Justin Timberlake",
"Beyoncé featuring Slim Thug",
"Mary J. Blige",
"Nelly\, Paul Wall and Ali & Gipp",
"The Fray",
"Cassie",
"Pussycat Dolls featuring Snoop Dogg",
"Chris Brown featuring Juelz Santana",
"Ne-Yo",
"Yung Joc featuring Nitti",
"Rihanna",
"Panic! at the Disco",
"The All-American Rejects",
"Fergie",
"Red Hot Chili Peppers",
"Lil Jon featuring E-40 and Sean Paul",
"Dem Franchize Boyz",
"Rascal Flatts",
"The Fray",
"Rihanna",
"Snow Patrol",
"Hinder",
"Cascada",
"Christina Aguilera",
"Fall Out Boy",
"Kanye West featuring Jamie Foxx",
"Ludacris featuring Pharrell",
"Bubba Sparxxx featuring Ying Yang Twins",
"Sean Paul featuring Keyshia Cole",
"Nickelback",
"Kelly Clarkson",
"Pussycat Dolls",
"T-Pain featuring Mike Jones",
"The Black Eyed Peas",
"Fort Minor featuring Holly Brook and Jonah Matranga",
"Chris Brown",
"Kelly Clarkson",
"D4L",
"T.I.",
"The All-American Rejects",
"Nickelback",
"Mariah Carey",
"Ne-Yo",
"E-40 featuring T-Pain and Kandi Girl",
"Nickelback",
"Nick Lachey",
"Field Mob featuring Ciara",
"Cherish featuring Sean P",
"KT Tunstall",
"Juelz Santana",
"Young Dro featuring T.I.",
"Jamie Foxx featuring Ludacris",
"Justin Timberlake featuring T.I.",
"Eminem featuring Nate Dogg",
"Chingy featuring Tyrese",
"Kelis featuring Too Short",
"Jibbs",
"Akon featuring Eminem",
"Ray J",
"Fall Out Boy",
"Chris Brown featuring Lil Wayne",
"Yung Joc",
"Bon Jovi featuring Jennifer Nettles",
"JoJo",
"Busta Rhymes",
"Daddy Yankee",
"Beyoncé featuring Jay-Z",
"Rascal Flatts",
"Evanescence",
"Carrie Underwood",
"Danity Kane featuring Yung Joc",
"Ciara featuring Chamillionaire",
"Sean Paul",
"Blue October",
"Lifehouse",
"Pussycat Dolls featuring will.i.am",
"Dem Franchize Boyz featuring Jermaine Dupri\, Da Brat and Bow Wow",
"Chris Brown",
"John Mayer",
"Young Jeezy featuring Akon",
"The Black Eyed Peas",
"Eminem",
"Madonna",
"Three 6 Mafia featuring Young Buck and 8Ball & MJG",
"Keyshia Cole",
"Ne-Yo",
"T.I.",
"Pink",
"Gorillaz",
"T-Pain",
"Taylor Hicks",
"Teddy Geiger"



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