var customerInfoTitle = document.getElementById("customerInfoTitle");
var customerShirtColor = document.getElementById("customerShirtColor");
var customerTextOptions = document.getElementById("customerTextOptions");
var customerFileOptions = document.getElementById("customerFileOptions");
var customerSizeOptions = document.getElementById("customerSizeOptions");
var customerNoteOptions = document.getElementById("customerNoteOptions");
var frontShirtOptions = document.getElementById("frontShirtOptions");
var backShirtOptions = document.getElementById("backShirtOptions");

// Text Styles
var frontTextStyleOptions = document.getElementById('frontTextStyleOptions');
var frontMidTextStyleOptions = document.getElementById('frontMidTextStyleOptions');

// Information arrows
var infoArrow = document.getElementById("infoArrow");
var colorArrow = document.getElementById("colorArrow");
var textArrow = document.getElementById("textArrow");
var uploadArrow = document.getElementById("uploadArrow");
var sizeArrow = document.getElementById("sizeArrow");
var noteArrow = document.getElementById("noteArrow");
// Style Arrows
var frontShirtArrow = document.getElementById("frontShirtArrow");
var frontTopArrow = document.getElementById('frontTopArrow');
var frontMidArrow = document.getElementById('frontMidArrow');

customerInfoTitle.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("customerInfo"), infoArrow);
});

customerShirtColor.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("customerShirtColorOptions"), colorArrow);
});

customerTextOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("textOptions"), textArrow);
});

customerFileOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("fileOptions"), uploadArrow);
});

customerSizeOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("sizeOptions"), sizeArrow);
});

customerNoteOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("noteOptions"), noteArrow);
});

frontShirtOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("frontText"), frontShirtArrow);
});

// backShirtOptions.addEventListener('click', (e) => {
// 	chooseDisplayOption(e, document.getElementById("backText"), frontShirtArrow);
// });

frontTextStyleOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("frontTopTextStyle"), frontTopArrow);
});

frontMidTextStyleOptions.addEventListener('click', (e) => {
	chooseDisplayOption(e, document.getElementById("frontMidTextStyle"), frontMidArrow);
});


// Helper function
function chooseDisplayOption(e, input, arrow){
	//e.preventDefault();
	if (input.style.display == "none") {
		input.style.display = 'block';
		arrow.className = "fa fa-arrow-down";
	} else {
		input.style.display = 'none';
		arrow.className = "fa fa-arrow-right";
	}
}