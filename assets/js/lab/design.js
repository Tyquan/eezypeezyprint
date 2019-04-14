var canvas = document.getElementById('myShirt');
var shirtColor = document.getElementById('shirtColor');
var frontText1 = document.getElementById('designFrontTopText');
var frontText2 = document.getElementById('designFrontMidText');
// back
var backText1 = document.getElementById('designBackTopText');
var backText2 = document.getElementById('designBackBottomText');

var designFrontTopTextBtn = document.getElementById("designFrontTopTextBtn");

var frontTopTextColor = document.getElementById("frontTopTextColor");
var frontTopTextScale = document.getElementById("frontTopTextScale");
var frontTopTextHorizontal = document.getElementById("frontTopTextHorizontal");
var frontTopTextVertical = document.getElementById("frontTopTextVertical");

var frontTopTextBold = document.getElementById('frontTopTextBold');

var ctx = canvas.getContext('2d');
var imgObj = new Image();

var centerX = canvas.width / 2;
var centerY = canvas.height - 30;
var angle = Math.PI * 0.8;
var radius = 150;

imgObj.src = "/images/products/tshirts/blanks/white.png";


// Load A Shirt when the page is loaded
imgObj.onload = function(){
	reloadProduct(600, 600);
};

shirtColor.addEventListener('change', (e) => {
	/* 
		change the shirt color and save it to the local storage
	*/
	e.preventDefault();
	imgObj.src = getSelectedImage(shirtColor.value);
	localStorage.setItem("shirtColor", shirtColor.value);
	reloadText();
});


// Add Text To The Product When a user writes something and clicks the button
designFrontTopTextBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (frontText1.value.length != 0) {
		removeStorageItem("frontTopText");
		localStorage.setItem("frontTopText", frontText1.value);
		reloadProduct(600, 600);
		reloadText();
		document.getElementById('frontTextStyleOptions').style.display = "block";
		document.getElementById('frontTopTextStyle').style.display = "block";
	} else {
		ctx.fillText("", 170, 160);
	}
});

frontTopTextColor.addEventListener('change', (e) => {
	e.preventDefault();
	var textColor = frontTopTextColor.value;
	console.log(`The color is: ${textColor}`);
	ctx.fillStyle = textColor;
	localStorage.setItem("frontTextColor", textColor);
	reloadProduct();
	reloadText();
});

// Update the current slider value (each time you drag the slider handle) SCALE
frontTopTextScale.oninput = function() {
	removeStorageItem("frontTopText");
	removeStorageItem("frontTopTextSize");
	localStorage.setItem("frontTopText", frontText1.value);
	localStorage.setItem("frontTopTextSize", this.value);
	reloadProduct(600, 600);
	ctx.font = `${localStorage.getItem("frontTopTextSize")}px Arial`;
	reloadText();
}

// Update the current slider value (each time you drag the slider handle) HORIZONTAL ALIGNMENT
frontTopTextHorizontal.oninput = function() {
	removeStorageItem("frontTopText");
	removeStorageItem("frontTopTextHorizontal");
	localStorage.setItem("frontTopText", frontText1.value);
	localStorage.setItem("frontTopTextHorizontal", this.value);
	reloadProduct(600, 600);
	reloadText();
}

// Update the current slider value (each time you drag the slider handle) VERICAL ALIGNMENT
frontTopTextVertical.oninput = function() {
	removeStorageItem("frontTopText");
	removeStorageItem("frontTopTextVertical");
	localStorage.setItem("frontTopText", frontText1.value);
	localStorage.setItem("frontTopTextVertical", this.value);
	reloadProduct(600, 600);
	console.log(this.value);
	reloadText();
}

// frontTopTextRotation.oninput = function() {
// 	removeStorageItem("frontTopTextRotation");
// 	localStorage.setItem("frontTopTextRotation", this.value);
// 	reloadProduct(600, 600);
// 	ctx.font = `${localStorage.getItem("frontTopTextSize")}px Arial`;
	
// 	console.log(this.value);
// 	ctx.fillText(localStorage.getItem("frontTopText"), 270, 160);
// }







/* HELPER FUNCTIONS */
function reloadProduct (width, height) {
	ctx.drawImage(imgObj, 0, 0, width, height);
}

function reloadText(){
	ctx.fillText(localStorage.getItem("frontTopText"), localStorage.getItem("frontTopTextHorizontal"), localStorage.getItem("frontTopTextVertical"));
}

function removeStorageItem(input){
	localStorage.removeItem(input);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ARC TEXT
function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
  var len = str.length, s;
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(-1 * angle / 2);
  ctx.rotate(-1 * (angle / len) / 2);
  for(var n = 0; n < len; n++) {
    ctx.rotate(angle / len);
    ctx.save();
    ctx.translate(0, -1 * radius);
    s = str[n];
    ctx.fillText(s, 0, 0);
    ctx.restore();
  }
  ctx.restore();
}

function getSelectedImage(input) {
	var output = '';
	if (input == "White") {
		output = "/images/products/tshirts/blanks/white.png";
	}
	if (input == "Black") {
		output = '/images/products/tshirts/blanks/black.png';
	}
	if (input == "Royal Blue") {
		output = '/images/products/tshirts/blanks/royalblue.png';
	}
	if (input == "Light Pink") {
		output = '/images/products/tshirts/blanks/lightpink.png';
	}
	if (input == "Heliconia Pink") {
		output = '/images/products/tshirts/blanks/heliconiapink.png';
	}
	if (input == "Safety Pink") {
		output = '/images/products/tshirts/blanks/safetypink.png';
	}
	if (input == "Daisy Yellow") {
		output = '/images/products/tshirts/blanks/daisyyellow.png';
	}
	if (input == "Irish Green") {
		output = '/images/products/tshirts/blanks/irishgreen.png';
	}
	if (input == "Lime Green") {
		output = '/images/products/tshirts/blanks/limegreen.png';
	}
	if (input == "Safety Green") {
		output = '/images/products/tshirts/blanks/safetygreen.png';
	}
	if (input == "Purple") {
		output = '/images/products/tshirts/blanks/purple.png';
	}
	if (input == "Safety Orange") {
		output = '/images/products/tshirts/blanks/safetyorange.png';
	}
	if (input == "Sapphire") {
		output = '/images/products/tshirts/blanks/sapphire.png';
	}
	if (input == "Sport Grey") {
		output = '/images/products/tshirts/blanks/sportgrey.png';
	}
	if (input == "Sunset") {
		output = '/images/products/tshirts/blanks/sunset.png';
	}
	if (input == "Berry") {
		output = '/images/products/tshirts/blanks/berry.png';
	}
	if (input == "Cherry Red") {
		output = '/images/products/tshirts/blanks/cherryred.png';
	}
	if (input == "Heather Military Green") {
		output = '/images/products/tshirts/blanks/heathermilitarygreen.png';
	}
	if (input == "Heather Purple") {
		output = '/images/products/tshirts/blanks/heatherpurple.png';
	}
	if (input == "Heather Red") {
		output = '/images/products/tshirts/blanks/heatherred.png';
	}
	if (input == "Heather Sapphire") {
		output = '/images/products/tshirts/blanks/heathersapphire.png';
	}
	if (input == "Navy Blue") {
		output = '/images/products/tshirts/blanks/navyblue.png';
	}
	if (input == "Navy Heather") {
		output = '/images/products/tshirts/blanks/navyheather.png';
	}
	return output;
}