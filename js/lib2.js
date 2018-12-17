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
    "8d83", // Braucht Kein Mensch Revisited
    "06ff", // Gang Jump
    "4109", // De Boo, See?
    "4f34", // Jazz On A Wednesday
    "3032", // I'll Remember Funky
    "81ed", // Boogie Bonk
    "a79f", // Circus 2013/14
    "8409", // Bottom Bump
    "af55", // Cheo Leo
    "1ef9", // Beau Ti Fool
    "1057", // Nite And Day
    "16ce", // National Changes
    "3bdf", // Ducktor
    "912a", // U Go 2 My Head
    "da25", // My Dubby Valentine
    "932b", // Yknaps
]
