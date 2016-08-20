// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

 "Boom Boom Pow The Black Eyed Peas",
"Poker Face Lady Gaga",
"Just Dance Lady Gaga featuring Colby ODonis",
"I Gotta Feeling The Black Eyed Peas",
"Love Story Taylor Swift",
"Right Round Flo Rida",
"Im Yours Jason Mraz",
"Single Ladies (Put a Ring on It) Beyoncé",
"Heartless Kanye West",
"Gives You Hell The All-American Rejects",
"You Belong with Me Taylor Swift",
"Dead and Gone T.I. featuring Justin Timberlake",
"You Found Me The Fray",
"Use Somebody Kings of Leon",
"Knock You Down Keri Hilson featuring Kanye West and Ne-Yo",
"Blame It Jamie Foxx featuring T-Pain",
"I Know You Want Me (Calle Ocho) Pitbull",
"Live Your Life T.I. featuring Rihanna",
"Kiss Me thru the Phone Soulja Boy Tell Em featuring Sammie",
"Down Jay Sean featuring Lil Wayne",
"The Climb Miley Cyrus",
"Best I Ever Had Drake",
"My Life Would Suck Without You Kelly Clarkson",
"Halo Beyoncé",
"Hot n Cold Katy Perry",
"Second Chance Shinedown",
"Circus Britney Spears",
"Day n Nite Kid Cudi",
"Party in the U.S.A. Miley Cyrus",
"Dont Trust Me 3OH!3",
"Run This Town Jay-Z featuring Rihanna and Kanye West",
"Let It Rock Kevin Rudolf featuring Lil Wayne",
"Fire Burning Sean Kingston",
"Whatcha Say Jason Derulo",
"LoveGame Lady Gaga",
"Waking Up in Vegas Katy Perry",
"Birthday Sex Jeremih",
"Sober Pink",
"Womanizer Britney Spears",
"Whatever You Like T.I.",
"Obsessed Mariah Carey",
"Mad Ne-Yo",
"Good Girls Go Bad Cobra Starship featuring Leighton Meester",
"Love Lockdown Kanye West",
"So What Pink",
"Hotel Room Service Pitbull",
"Crack a Bottle Eminem Dr. Dre and 50 Cent",
"If I Were a Boy Beyoncé",
"Turnin Me On Keri Hilson featuring Lil Wayne",
"I Hate This Part Pussycat Dolls",
"Gotta Be Somebody Nickelback",
"Please Dont Leave Me Pink",
"Paparazzi Lady Gaga",
"Beautiful Akon featuring Colby ODonis and Kardinal Offishall",
"Viva la Vida Coldplay",
"Right Now (Na Na Na) Akon",
"Battlefield Jordin Sparks",
"Sugar Flo Rida featuring Wynter Gordon",
"Miss Independent Ne-Yo",
"Fireflies Owl City",
"New Divide Linkin Park",
"Empire State of Mind Jay-Z and Alicia Keys",
"No Surprise Daughtry",
"She Wolf Shakira",
"Break Up Mario featuring Gucci Mane and Sean Garrett",
"Sweet Dreams Beyoncé",
"Every Girl Young Money",
"Fallin for You Colbie Caillat",
"Untouched The Veronicas",
"If Today Was Your Last Day Nickelback",
"Throw It in the Bag Fabolous featuring The-Dream",
"Love Drunk Boys Like Girls",
"I Love College Asher Roth",
"If U Seek Amy Britney Spears",
"Big Green Tractor Jason Aldean",
"White Horse Taylor Swift",
"Disturbia Rihanna",
"21 Guns Green Day",
"Turn My Swag On Soulja Boy Tell Em",
"Rockin That Thang The-Dream",
"Chicken Fried Zac Brown Band",
"Diva Beyoncé",
"Replay Iyaz",
"Then Brad Paisley",
"Her Diamonds Rob Thomas",
"How Do You Sleep? Jesse McCartney featuring Ludacris",
"3 Britney Spears",
"Forever Drake featuring Kanye West Lil Wayne and Eminem",
"One Time Justin Bieber",
"I Run to You Lady Antebellum",
"I Do Not Hook Up Kelly Clarkson",
"Green Light John Legend featuring André 3000",
"People Are Crazy Billy Currington",
"Whatever It Is Zac Brown Band",
"Already Gone Kelly Clarkson",
"Goodbye Kristinia DeBarge",
"Say Hey (I Love You) Michael Franti & Spearhead featuring Cherine Anderson",
"Pop Champagne Jim Jones featuring Ron Browz and Juelz Santana",
"Pretty Wings Maxwell",
"Never Say Never The Fray",
 

    ];

var names = [

"Boom Boom Pow",
"Poker Face",
"Just Dance",
"I Gotta Feeling",
"Love Story",
"Right Round",
"I\'m Yours",
"Single Ladies (Put a Ring on It)",
"Heartless",
"Gives You Hell",
"You Belong with Me",
"Dead and Gone",
"You Found Me",
"Use Somebody",
"Knock You Down",
"Blame It",
"I Know You Want Me (Calle Ocho)",
"Live Your Life",
"Kiss Me thru the Phone",
"Down",
"The Climb",
"Best I Ever Had",
"My Life Would Suck Without You",
"Halo",
"Hot n Cold",
"Second Chance",
"Circus",
"Day \'n\' Nite",
"Party in the U.S.A.",
"Don\'t Trust Me",
"Run This Town",
"Let It Rock",
"Fire Burning",
"Whatcha Say",
"LoveGame",
"Waking Up in Vegas",
"Birthday Sex",
"Sober",
"Womanizer",
"Whatever You Like",
"Obsessed",
"Mad",
"Good Girls Go Bad",
"Love Lockdown",
"So What",
"Hotel Room Service",
"Crack a Bottle",
"If I Were a Boy",
"Turnin Me On",
"I Hate This Part",
"Gotta Be Somebody",
"Please Don\'t Leave Me",
"Paparazzi",
"Beautiful",
"Viva la Vida",
"Right Now (Na Na Na)",
"Battlefield",
"Sugar",
"Miss Independent",
"Fireflies",
"New Divide",
"Empire State of Mind",
"No Surprise",
"She Wolf",
"Break Up",
"Sweet Dreams",
"Every Girl",
"Fallin\' for You",
"Untouched",
"If Today Was Your Last Day",
"Throw It in the Bag",
"Love Drunk",
"I Love College",
"If U Seek Amy",
"Big Green Tractor",
"White Horse",
"Disturbia",
"21 Guns",
"Turn My Swag On",
"Rockin\' That Thang",
"Chicken Fried",
"Diva",
"Replay",
"Then",
"Her Diamonds",
"How Do You Sleep?",
"3",
"Forever",
"One Time",
"I Run to You",
"I Do Not Hook Up",
"Green Light",
"People Are Crazy",
"Whatever It Is",
"Already Gone",
"Goodbye",
"Say Hey (I Love You)",
"Pop Champagne",
"Pretty Wings",
"Never Say Never"


 ];

 var artist = [

 "The Black Eyed Peas",
"Lady Gaga",
"Lady Gaga featuring Colby O\'Donis",
"The Black Eyed Peas",
"Taylor Swift",
"Flo Rida",
"Jason Mraz",
"Beyoncé",
"Kanye West",
"The All-American Rejects",
"Taylor Swift",
"T.I. featuring Justin Timberlake",
"The Fray",
"Kings of Leon",
"Keri Hilson featuring Kanye West and Ne-Yo",
"Jamie Foxx featuring T-Pain",
"Pitbull",
"T.I. featuring Rihanna",
"Soulja Boy Tell \'Em featuring Sammie",
"Jay Sean featuring Lil Wayne",
"Miley Cyrus",
"Drake",
"Kelly Clarkson",
"Beyoncé",
"Katy Perry",
"Shinedown",
"Britney Spears",
"Kid Cudi",
"Miley Cyrus",
"3OH!3",
"Jay-Z featuring Rihanna and Kanye West",
"Kevin Rudolf featuring Lil Wayne",
"Sean Kingston",
"Jason Derulo",
"Lady Gaga",
"Katy Perry",
"Jeremih",
"Pink",
"Britney Spears",
"T.I.",
"Mariah Carey",
"Ne-Yo",
"Cobra Starship featuring Leighton Meester",
"Kanye West",
"Pink",
"Pitbull",
"Eminem\, Dr. Dre and 50 Cent",
"Beyoncé",
"Keri Hilson featuring Lil Wayne",
"Pussycat Dolls",
"Nickelback",
"Pink",
"Lady Gaga",
"Akon featuring Colby O\'Donis and Kardinal Offishall",
"Coldplay",
"Akon",
"Jordin Sparks",
"Flo Rida featuring Wynter Gordon",
"Ne-Yo",
"Owl City",
"Linkin Park",
"Jay-Z and Alicia Keys",
"Daughtry",
"Shakira",
"Mario featuring Gucci Mane and Sean Garrett",
"Beyoncé",
"Young Money",
"Colbie Caillat",
"The Veronicas",
"Nickelback",
"Fabolous featuring The-Dream",
"Boys Like Girls",
"Asher Roth",
"Britney Spears",
"Jason Aldean",
"Taylor Swift",
"Rihanna",
"Green Day",
"Soulja Boy Tell \'Em",
"The-Dream",
"Zac Brown Band",
"Beyoncé",
"Iyaz",
"Brad Paisley",
"Rob Thomas",
"Jesse McCartney featuring Ludacris",
"Britney Spears",
"Drake featuring Kanye West\, Lil Wayne and Eminem",
"Justin Bieber",
"Lady Antebellum",
"Kelly Clarkson",
"John Legend featuring André 3000",
"Billy Currington",
"Zac Brown Band",
"Kelly Clarkson",
"Kristinia DeBarge",
"Michael Franti & Spearhead featuring Cherine Anderson",
"Jim Jones featuring Ron Browz and Juelz Santana",
"Maxwell",
"The Fray"



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