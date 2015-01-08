/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var num_tracks = 8;

function getRandomExcept(blacklist) {
    while (true) {
	var num = getRandomInt(0, num_tracks - 1);
	if (blacklist.indexOf(num) < 0) {
	    return num;
	}
    }
}
