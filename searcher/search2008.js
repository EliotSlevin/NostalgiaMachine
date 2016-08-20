// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

 "Low Flo Rida featuring T-Pain",
"Bleeding Love Leona Lewis",
"No One Alicia Keys",
"Lollipop Lil Wayne featuring Static Major",
"Apologize Timbaland featuring OneRepublic",
"No Air Jordin Sparks and Chris Brown",
"Love Song Sara Bareilles",
"Love in This Club Usher featuring Young Jeezy",
"With You Chris Brown",
"Forever Chris Brown",
"Sexy Can I Ray J featuring Yung Berg",
"Take a Bow Rihanna",
"Viva la Vida Coldplay",
"I Kissed a Girl Katy Perry",
"Whatever You Like T.I.",
"Disturbia Rihanna",
"Dont Stop the Music Rihanna",
"Pocketful of Sunshine Natasha Bedingfield",
"Kiss Kiss Chris Brown featuring T-Pain",
"Closer Ne-Yo",
"Bubbly Colbie Caillat",
"Touch My Body Mariah Carey",
"4 Minutes Madonna featuring Justin Timberlake and Timbaland",
"So What Pink",
"Paralyzer Finger Eleven",
"Clumsy Fergie",
"Im Yours Jason Mraz",
"Leavin Jesse McCartney",
"Dangerous Kardinal Offishall featuring Akon",
"Tattoo Jordin Sparks",
"See You Again Miley Cyrus",
"Shake It Metro Station",
"Stop and Stare OneRepublic",
"Take You There Sean Kingston",
"Paper Planes M.I.A.",
"Hot n Cold Katy Perry",
"Live Your Life T.I. featuring Rihanna",
"Bust It Baby (Part 2) Plies featuring Ne-Yo",
"American Boy Estelle featuring Kanye West",
"Got Money Lil Wayne featuring T-Pain",
"Our Song Taylor Swift",
"Damaged Danity Kane",
"A Milli Lil Wayne",
"Sorry Buckcherry",
"Independent Webbie featuring Lil Boosie and Lil Phat",
"Cant Believe It T-Pain featuring Lil Wayne",
"Like Youll Never See Me Again Alicia Keys",
"Teardrops on My Guitar Taylor Swift",
"When I Grow Up Pussycat Dolls",
"Sexual Eruption Snoop Dogg",
"What You Got Colby ODonis featuring Akon",
"Its Not My Time 3 Doors Down",
"Better in Time Leona Lewis",
"Crank That (Soulja Boy) Soulja Boy Tell Em",
"Shadow of the Day Linkin Park",
"Sweetest Girl (Dollar Bill) Wyclef Jean featuring Akon Lil Wayne and Niia",
"Miss Independent Ne-Yo",
"Fall for You Secondhand Serenade",
"In the Ayer Flo Rida featuring will.i.am",
"Say John Mayer",
"One Step at a Time Jordin Sparks",
"Hate That I Love You Rihanna featuring Ne-Yo",
"Superstar Lupe Fiasco featuring Matthew Santos",
"Suffocate J. Holiday",
"Let It Rock Kevin Rudolf featuring Lil Wayne",
"Get Like Me David Banner featuring Chris Brown",
"Realize Colbie Caillat",
"Put On Young Jeezy featuring Kanye West",
"The Time of My Life David Cook",
"Lolli Lolli (Pop That Body) Three 6 Mafia",
"Cyclone Baby Bash featuring T-Pain",
"Love Like This Natasha Bedingfield featuring Sean Kingston",
"Burnin Up Jonas Brothers featuring Big Rob",
"Love Lockdown Kanye West",
"I Luv Your Girl The-Dream",
"Crush David Archuleta",
"Hypnotized Plies featuring Akon",
"Big Girls Dont Cry Fergie",
"Good Life Kanye West featuring T-Pain",
"Womanizer Britney Spears",
"Love Story Taylor Swift",
"Just Fine Mary J. Blige",
"Piece of Me Britney Spears",
"The Boss Rick Ross featuring T-Pain",
"All Summer Long Kid Rock",
"Cant Help but Wait Trey Songz",
"In Love with a Girl Gavin DeGraw",
"My Life The Game featuring Lil Wayne",
"I Remember Keyshia Cole",
"Flashing Lights Kanye West featuring Dwele",
"Mrs. Officer Lil Wayne featuring Bobby Valentino",
"7 Things Miley Cyrus",
"Youre Gonna Miss This Trace Adkins",
"Love Remains the Same Gavin Rossdale",
"Feels Like Tonight Daughtry",
"The Way I Are Timbaland featuring Keri Hilson",
"Addicted Saving Abel",
"Into the Night Santana featuring Chad Kroeger",
"Heaven Sent Keyshia Cole",
"She Got It 2 Pistols featuring T-Pain and Tay Dizm"
 

    ];

var names = [

"Low",
"Bleeding Love",
"No One",
"Lollipop",
"Apologize",
"No Air",
"Love Song",
"Love in This Club",
"With You",
"Forever",
"Sexy Can I",
"Take a Bow",
"Viva la Vida",
"I Kissed a Girl",
"Whatever You Like",
"Disturbia",
"Don\'t Stop the Music",
"Pocketful of Sunshine",
"Kiss Kiss",
"Closer",
"Bubbly",
"Touch My Body",
"4 Minutes",
"So What",
"Paralyzer",
"Clumsy",
"I\'m Yours",
"Leavin\'",
"Dangerous",
"Tattoo",
"See You Again",
"Shake It",
"Stop and Stare",
"Take You There",
"Paper Planes",
"Hot n Cold",
"Live Your Life",
"Bust It Baby (Part 2)",
"American Boy",
"Got Money",
"Our Song",
"Damaged",
"A Milli",
"Sorry",
"Independent",
"Can\'t Believe It",
"Like You\'ll Never See Me Again",
"Teardrops on My Guitar",
"When I Grow Up",
"Sexual Eruption",
"What You Got",
"It\'s Not My Time",
"Better in Time",
"Crank That (Soulja Boy)",
"Shadow of the Day",
"Sweetest Girl (Dollar Bill)",
"Miss Independent",
"Fall for You",
"In the Ayer",
"Say",
"One Step at a Time",
"Hate That I Love You",
"Superstar",
"Suffocate",
"Let It Rock",
"Get Like Me",
"Realize",
"Put On",
"The Time of My Life",
"Lolli Lolli (Pop That Body)",
"Cyclone",
"Love Like This",
"Burnin\' Up",
"Love Lockdown",
"I Luv Your Girl",
"Crush",
"Hypnotized",
"Big Girls Don\'t Cry",
"Good Life",
"Womanizer",
"Love Story",
"Just Fine",
"Piece of Me",
"The Boss",
"All Summer Long",
"Can\'t Help but Wait",
"In Love with a Girl",
"My Life",
"I Remember",
"Flashing Lights",
"Mrs. Officer",
"7 Things",
"You\'re Gonna Miss This",
"Love Remains the Same",
"Feels Like Tonight",
"The Way I Are",
"Addicted",
"Into the Night",
"Heaven Sent",
"She Got It"


 ];

 var artist = [

"Flo Rida featuring T-Pain",
"Leona Lewis",
"Alicia Keys",
"Lil Wayne featuring Static Major",
"Timbaland featuring OneRepublic",
"Jordin Sparks and Chris Brown",
"Sara Bareilles",
"Usher featuring Young Jeezy",
"Chris Brown",
"Chris Brown",
"Ray J featuring Yung Berg",
"Rihanna",
"Coldplay",
"Katy Perry",
"T.I.",
"Rihanna",
"Rihanna",
"Natasha Bedingfield",
"Chris Brown featuring T-Pain",
"Ne-Yo",
"Colbie Caillat",
"Mariah Carey",
"Madonna featuring Justin Timberlake and Timbaland",
"Pink",
"Finger Eleven",
"Fergie",
"Jason Mraz",
"Jesse McCartney",
"Kardinal Offishall featuring Akon",
"Jordin Sparks",
"Miley Cyrus",
"Metro Station",
"OneRepublic",
"Sean Kingston",
"M.I.A.",
"Katy Perry",
"T.I. featuring Rihanna",
"Plies featuring Ne-Yo",
"Estelle featuring Kanye West",
"Lil Wayne featuring T-Pain",
"Taylor Swift",
"Danity Kane",
"Lil Wayne",
"Buckcherry",
"Webbie featuring Lil Boosie and Lil Phat",
"T-Pain featuring Lil Wayne",
"Alicia Keys",
"Taylor Swift",
"Pussycat Dolls",
"Snoop Dogg",
"Colby O\'Donis featuring Akon",
"3 Doors Down",
"Leona Lewis",
"Soulja Boy Tell \'Em",
"Linkin Park",
"Wyclef Jean featuring Akon\, Lil Wayne and Niia",
"Ne-Yo",
"Secondhand Serenade",
"Flo Rida featuring will.i.am",
"John Mayer",
"Jordin Sparks",
"Rihanna featuring Ne-Yo",
"Lupe Fiasco featuring Matthew Santos",
"J. Holiday",
"Kevin Rudolf featuring Lil Wayne",
"David Banner featuring Chris Brown",
"Colbie Caillat",
"Young Jeezy featuring Kanye West",
"David Cook",
"Three 6 Mafia",
"Baby Bash featuring T-Pain",
"Natasha Bedingfield featuring Sean Kingston",
"Jonas Brothers featuring Big Rob",
"Kanye West",
"The-Dream",
"David Archuleta",
"Plies featuring Akon",
"Fergie",
"Kanye West featuring T-Pain",
"Britney Spears",
"Taylor Swift",
"Mary J. Blige",
"Britney Spears",
"Rick Ross featuring T-Pain",
"Kid Rock",
"Trey Songz",
"Gavin DeGraw",
"The Game featuring Lil Wayne",
"Keyshia Cole",
"Kanye West featuring Dwele",
"Lil Wayne featuring Bobby Valentino",
"Miley Cyrus",
"Trace Adkins",
"Gavin Rossdale",
"Daughtry",
"Timbaland featuring Keri Hilson",
"Saving Abel",
"Santana featuring Chad Kroeger",
"Keyshia Cole",
"2 Pistols featuring T-Pain and Tay Dizm"



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