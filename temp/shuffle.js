
let testArray = [

    [1,"1.png"],
    [2,"2.jpg"],
    [3,"3.jpg"],
    [4,"4.png"],
    [5,"5.png"],
    [6,"6.jpg"],
    [7,"7.jpg"],
    [8,"8.jpg"],
    [9,"9.jpg"],
    [10,"10.jpg"],

]

console.log("testArray:");
console.log(testArray);

// https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

var shuffledArray = shuffle(testArray.slice());

console.log("shuffledArray:");
console.log(shuffledArray);

