// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
var indexPos = 0;
	   var songs = [

"We Belong Together Mariah Carey",
"Hollaback Girl Gwen Stefani",
"Let Me Love You Mario",
"Since U Been Gone Kelly Clarkson",
"1 2 Step Ciara and Missy Elliott",
"Gold Digger Kanye West featuring Jamie Foxx",
"Boulevard of Broken Dreams Green Day",
"Candy Shop 50 Cent featuring Olivia",
"Dont Cha The Pussycat Dolls featuring Busta Rhymes",
"Behind These Hazel Eyes Kelly Clarkson",
"Disco Inferno 50 Cent",
"You and Me Lifehouse",
"Dont Phunk with My Heart The Black Eyed Peas",
"Lose Control Missy Elliott featuring Ciara and Fatman Scoop",
"Shake It Off Mariah Carey",
"Mr. Brightside The Killers",
"Just a Lil Bit 50 Cent",
"Pon de Replay Rihanna",
"How We Do The Game featuring 50 Cent",
"Beverly Hills Weezer",
"Oh Ciara featuring Ludacris",
"Lonely No More Rob Thomas",
"Drop It Like Its Hot Snoop Dogg featuring Pharrell",
"Hate It or Love It The Game featuring 50 Cent",
"Lovers & Friends Lil Jon featuring Usher and Ludacris",
"Soldier Destinys Child featuring T.I. and Lil Wayne",
"Breakaway Kelly Clarkson",
"Switch Will Smith",
"Let Me Hold You Bow Wow featuring Omarion",
"Like You Bow Wow featuring Ciara",
"Rich Girl Gwen Stefani featuring Eve",
"My Humps The Black Eyed Peas",
"Obsession (No Es Amor) Frankie J featuring Baby Bash",
"Caught Up Usher",
"Listen to Your Heart DHT featuring Edmee",
"Scars Papa Roach",
"Feel Good Inc. Gorillaz",
"Let Me Go 3 Doors Down",
"Holiday Green Day",
"Sugar Were Goin Down Fall Out Boy",
"Grind with Me Pretty Ricky",
"Run It! Chris Brown featuring Juelz Santana",
"Photograph Nickelback",
"Lonely Akon",
"Collide Howie Day",
"Wake Me Up When September Ends Green Day",
"Slow Down Bobby Valentino",
"Over and Over Nelly featuring Tim McGraw",
"Some Cut Trillville featuring Cutty",
"Get It Poppin Fat Joe featuring Nelly",
"Play David Banner",
"Soul Survivor Young Jeezy featuring Akon",
"Pimpin All Over the World Ludacris featuring Bobby Valentino",
"My Boo Usher and Alicia Keys",
"Sugar (Gimme Some) Trick Daddy featuring Ludacris Lil Kim and Cee Lo Green",
"Karma Alicia Keys",
"Speed of Sound Coldplay",
"I Dont Want to Be Gavin DeGraw",
"Mockingbird Eminem",
"La Tortura Shakira featuring Alejandro Sanz",
"She Will Be Loved Maroon 5",
"Baby Im Back Baby Bash featuring Akon",
"Wait (The Whisper Song) Ying Yang Twins",
"Incomplete Backstreet Boys",
"Bring Em Out T.I.",
"Cater 2 U Destinys Child",
"1 Thing Amerie",
"Best of You Foo Fighters",
"Its Like That Mariah Carey",
"Goin Crazy Natalie",
"Inside Your Heaven Carrie Underwood",
"Because of You Kelly Clarkson",
"Truth Is Fantasia",
"Your Body Pretty Ricky",
"Beautiful Soul Jesse McCartney",
"Cool Gwen Stefani",
"Get Back Ludacris",
"Outta Control 50 Cent featuring Mobb Deep",
"U Dont Know Me T.I.",
"These Words Natasha Bedingfield",
"Dont Lie The Black Eyed Peas",
"Get Right Jennifer Lopez",
"Daughters John Mayer",
"As Good as I Once Was Toby Keith",
"Girlfight Brooke Valentine featuring Lil Jon and Big Boi",
"Lose My Breath Destinys Child",
"Ordinary People John Legend",
"We Be Burnin Sean Paul",
"Just the Girl The Click Five",
"True Ryan Cabrera",
"O Omarion",
"Back Then Mike Jones",
"Numb/Encore Jay-Z and Linkin Park",
"Wonderful Ja Rule featuring R. Kelly and Ashanti",
"Im Sprung T-Pain",
"Chariot Gavin DeGraw",
"U Already Know 112 featuring Foxy Brown",
"Mississippi Girl Faith Hill",
"Number One Spot Ludacris",
"Give Me That Webbie featuring Bun B"
 

    ];

var names = [

"We Belong Together",
"Hollaback Girl",
"Let Me Love You",
"Since U Been Gone",
"1\, 2 Step",
"Gold Digger",
"Boulevard of Broken Dreams",
"Candy Shop",
"Don't Cha",
"Behind These Hazel Eyes",
"Disco Inferno",
"You and Me",
"Don't Phunk with My Heart",
"Lose Control",
"Shake It Off",
"Mr. Brightside",
"Just a Lil Bit",
"Pon de Replay",
"How We Do",
"Beverly Hills",
"Oh",
"Lonely No More",
"Drop It Like It's Hot",
"Hate It or Love It",
"Lovers & Friends",
"Soldier",
"Breakaway",
"Switch",
"Let Me Hold You",
"Like You",
"Rich Girl",
"My Humps",
"Obsession (No Es Amor)",
"Caught Up",
"Listen to Your Heart",
"Scars",
"Feel Good Inc.",
"Let Me Go",
"Holiday",
"Sugar\, We're Goin Down",
"Grind with Me",
"Run It!",
"Photograph",
"Lonely",
"Collide",
"Wake Me Up When September Ends",
"Slow Down",
"Over and Over",
"Some Cut",
"Get It Poppin'",
"Play",
"Soul Survivor",
"Pimpin' All Over the World",
"My Boo",
"Sugar (Gimme Some)",
"Karma",
"Speed of Sound",
"I Don't Want to Be",
"Mockingbird",
"La Tortura",
"She Will Be Loved",
"Baby I'm Back",
"Wait (The Whisper Song)",
"Incomplete",
"Bring Em Out",
"Cater 2 U",
"1 Thing",
"Best of You",
"It's Like That",
"Goin' Crazy",
"Inside Your Heaven",
"Because of You",
"Truth Is",
"Your Body",
"Beautiful Soul",
"Cool",
"Get Back",
"Outta Control",
"U Don't Know Me",
"These Words",
"Don't Lie",
"Get Right",
"Daughters",
"As Good as I Once Was",
"Girlfight",
"Lose My Breath",
"Ordinary People",
"We Be Burnin'",
"Just the Girl",
"True",
"O",
"Back Then",
"Numb/Encore",
"Wonderful",
"I'm Sprung",
"Chariot",
"U Already Know",
"Mississippi Girl",
"Number One Spot",
"Give Me That",



 ];

 var artist = [

"Mariah Carey",
"Gwen Stefani",
"Mario",
"Kelly Clarkson",
"Ciara and Missy Elliott",
"Kanye West featuring Jamie Foxx",
"Green Day",
"50 Cent featuring Olivia",
"The Pussycat Dolls featuring Busta Rhymes",
"Kelly Clarkson",
"50 Cent",
"Lifehouse",
"The Black Eyed Peas",
"Missy Elliott featuring Ciara and Fatman Scoop",
"Mariah Carey",
"The Killers",
"50 Cent",
"Rihanna",
"The Game featuring 50 Cent",
"Weezer",
"Ciara featuring Ludacris",
"Rob Thomas",
"Snoop Dogg featuring Pharrell",
"The Game featuring 50 Cent",
"Lil Jon featuring Usher and Ludacris",
"Destiny\'s Child featuring T.I. and Lil Wayne",
"Kelly Clarkson",
"Will Smith",
"Bow Wow featuring Omarion",
"Bow Wow featuring Ciara",
"Gwen Stefani featuring Eve",
"The Black Eyed Peas",
"Frankie J featuring Baby Bash",
"Usher",
"DHT featuring Edmee",
"Papa Roach",
"Gorillaz",
"3 Doors Down",
"Green Day",
"Fall Out Boy",
"Pretty Ricky",
"Chris Brown featuring Juelz Santana",
"Nickelback",
"Akon",
"Howie Day",
"Green Day",
"Bobby Valentino",
"Nelly featuring Tim McGraw",
"Trillville featuring Cutty",
"Fat Joe featuring Nelly",
"David Banner",
"Young Jeezy featuring Akon",
"Ludacris featuring Bobby Valentino",
"Usher and Alicia Keys",
"Trick Daddy featuring Ludacris\, Lil\' Kim and Cee Lo Green",
"Alicia Keys",
"Coldplay",
"Gavin DeGraw",
"Eminem",
"Shakira featuring Alejandro Sanz",
"Maroon 5",
"Baby Bash featuring Akon",
"Ying Yang Twins",
"Backstreet Boys",
"T.I.",
"Destiny\'s Child",
"Amerie",
"Foo Fighters",
"Mariah Carey",
"Natalie",
"Carrie Underwood",
"Kelly Clarkson",
"Fantasia",
"Pretty Ricky",
"Jesse McCartney",
"Gwen Stefani",
"Ludacris",
"50 Cent featuring Mobb Deep",
"T.I.",
"Natasha Bedingfield",
"The Black Eyed Peas",
"Jennifer Lopez",
"John Mayer",
"Toby Keith",
"Brooke Valentine featuring Lil Jon and Big Boi",
"Destiny\'s Child",
"John Legend",
"Sean Paul",
"The Click Five",
"Ryan Cabrera",
"Omarion",
"Mike Jones",
"Jay-Z and Linkin Park",
"Ja Rule featuring R. Kelly and Ashanti",
"T-Pain",
"Gavin DeGraw",
"112 featuring Foxy Brown",
"Faith Hill",
"Ludacris",
"Webbie featuring Bun B"



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