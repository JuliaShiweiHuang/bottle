
var lyricsString = ""; //lyricsString as a global item;
var theRestLyrics = "1 bottle of beer on the wall, 1 bottle of beer. " + "\n" +
"Take one down and pass it around, no more bottles of beer on the wall." + "\n" +
"No more bottles of beer on the wall, no more bottles of beer." + "\n" + 
"Go to the store and buy some more, 99 bottles of beer on the wall.";
function bottleLyrics() {
	for (var i = 99; i > 1; i-- ) {
		lyricsString = lyricsString + i + " bottles of beer on the wall, " + i + " bottles of beer." + "\n" 
		+ "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall."+ "\n"; //appending lyricsString
	}

	
	// document.getElementById("lyrics").innerHTML = lyricsString;
}

bottleLyrics();
console.log(lyricsString  + theRestLyrics);






// var lyricsString2 = 1 + "bo t" + "\n"
// + "another";
// console.log(lyricsString2);

// var testString = "";
// function easyForLoopTest() {
// 	for (var i = 1; i < 4; i++ ) {
// 		// testString = i + "test" + "\n";
// 		testString = testString + "test" + "\n";

// 	}
// }
// easyForLoopTest();
// console.log("line 30:", testString);