/*
07/08 Notes:
1. How do I generate a new string everytime user clicks the button? 
(Instead of the current version that the list just got longer and longer?)
2. Make a button that everytime user clicks it either expand the lyrics or HIDE the lyrics.
3. Add a space between each beers of bottle
*/


document.getElementById("create").onclick = bottleLyrics;


var lyricsString = ""; //lyricsString as a global item;
var theRestLyrics = "1 bottle of beer on the wall, 1 bottle of beer. " + "<br />" +
"Take one down and pass it around, no more bottles of beer on the wall." + "<br />" +
"No more bottles of beer on the wall, no more bottles of beer." + "<br />" + 
"Go to the store and buy some more, 99 bottles of beer on the wall.";


function bottleLyrics() {
	document.getElementById("lyrics").innerHTML = "";
	for (var i = 99; i > 1; i-- ) {
		lyricsString = lyricsString + i + " bottles of beer on the wall, " + i + " bottles of beer." + "<br />"  
		+ "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall."+ "<br />"; //appending lyricsString
	}
	
	document.getElementById("lyrics").innerHTML = lyricsString + theRestLyrics;

}

