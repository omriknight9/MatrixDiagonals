build();

// getCellValues();

var upperBtn = $('.upperBtn');
var diagBtn = $('.diagBtn');
var downBtn = $('.downBtn');
var borderBtn = $('.borderBtn');
var container = $('.container');
// var squaresRowOne = $('.squaresRowOne');
// var squaresRowTwo = $('.squaresRowTwo');
// var squaresRowThree = $('.squaresRowThree');
var noneMiddle = $('.noneMiddle');
var middleSquare = $('#middleSquare');
var diag = $('.diag');
var upper = $('.upper');
var down = $('.down');
var square9 = $('#square9');
var square1 = $('#square1');

borderBtn.click(function(event) {
	addClasses();
	noneMiddle.removeClass('white');
});

diagBtn.click(function(event) {
	addClasses();
	middleSquare.removeClass('white');
	middleSquare.addClass('squareBackground');
	diag.addClass('white');
	square9.removeClass('white');
});

upperBtn.click(function(event) {
	addClasses();
	middleSquare.removeClass('white');
	diag.removeClass('white');
	upper.addClass('white');
	square1.removeClass('white');
});

downBtn.click(function(event) {
	addClasses();
	middleSquare.removeClass('white');
	diag.removeClass('white');
	down.addClass('white');
	square9.removeClass('white');
	// upper.addClass('white');
});

function addClasses() {
	upperBtn.addClass('borders');
	diagBtn.addClass('borders');
	downBtn.addClass('borders');
	borderBtn.addClass('borders');
	noneMiddle.addClass('squareBackground');
	middleSquare.addClass('squareBackground');
	noneMiddle.addClass('squareBackground');
	container.addClass('containerBorder');
	middleSquare.addClass('white');
}


function build () {
	var square = $('<div>', {
		class: 'square noneMiddle down',
		id: 'square1'
	}).appendTo($('.squaresRowOne'));
	var square2 = $('<div>', {
		class: 'square noneMiddle diag down',
	}).appendTo($('.squaresRowOne'));
	var square3 = $('<div>', {
		class: 'square noneMiddle',
	}).appendTo($('.squaresRowOne'));
	var square4 = $('<div>', {
		class: 'square noneMiddle diag down',
	}).appendTo($('.squaresRowTwo'));
	var square5 = $('<div>', {
		class: 'square',
		id: 'middleSquare'
	}).appendTo($('.squaresRowTwo'));
	var square6 = $('<div>', {
		class: 'square noneMiddle diag upper',
	}).appendTo($('.squaresRowTwo'));
	var square7 = $('<div>', {
		class: 'square noneMiddle',
	}).appendTo($('.squaresRowThree'));
	var square8 = $('<div>', {
		class: 'square noneMiddle diag upper',
	}).appendTo($('.squaresRowThree'));
	var square9 = $('<div>', {
		class: 'square noneMiddle upper',
		id: 'square9',
	}).appendTo($('.squaresRowThree'));
}

// function getCellValues() {
//     var table = $('#table');
//     console.log(document.getElementById("table").rows[0].cells[0]);
// }


