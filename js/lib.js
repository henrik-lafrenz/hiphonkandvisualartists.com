/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// deprecated
var num_tracks = 8;

// deprecated
function getRandomExcept(blacklist) {
    while (true) {
	var num = getRandomInt(0, num_tracks - 1);
	if (blacklist.indexOf(num) < 0) {
	    return num;
	}
    }
}

function getRandomPageId() {
    var randomInt = getRandomInt(0, page_ids.length - 1);
    return page_ids[randomInt];
}

var page_ids = [
    "b2e4200", // Braucht Kein Mensch Revisited
    "c0bc194", // Gang Jump
    "ea2060c", // De Boo, See?
    "f4a2e2e", // Jazz On A Wednesday
    "546d8f8", // I'll Remember Funky
    "a947c66", // Boogie Bonk
    "dfad4d5", // Circus 2013/14
    "bbc33b2", // Bottom Bump
    "7e8e4d4", // Cheo Leo
    "51b8c51", // Beau Ti Fool
    "357515c", // Nite And Day
    "6b115fc", // National Changes
]
