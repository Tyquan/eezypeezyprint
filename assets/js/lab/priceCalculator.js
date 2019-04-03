var estimate = $('#estimate');
var getTotalButton = document.getElementById('getEstimate');

var shirtCount = 0;
var textCount = 0;
var total = 0;


// EVENTS
getTotalButton.addEventListener('click', (e) => {
	e.preventDefault();
	getTotal();
});

// HELPER FUNCTIONS
function getTotal(){
	var shirts = getShirtPrice();
	estimate.empty();
	estimate.append(`$ ${shirts}`);
}

function getShirtPrice(){
	var pricePerShirt = 10.00;
	var totals = 0;
	var textTotal = 0
	var newTotal = 0;
	var youthS = document.getElementById('youthS');
	var youthM = document.getElementById('youthM');
	var youthL = document.getElementById('youthL');
	var youthXL = document.getElementById('youthXL');

	var small = document.getElementById('small');
	var medium = document.getElementById('medium');
	var large = document.getElementById('large');
	var xl = document.getElementById('xl');

	shirtCount = Number(youthS.value) + Number(youthM.value) + Number(youthL.value) + Number(youthXL.value) + Number(small.value) + Number(medium.value) + Number(large.value) + Number(xl.value);

	if (shirtCount >= 12) {
		pricePerShirt = 6.00;
	}
	if (shirtCount >= 48) {
		pricePerShirt = 4.00;
	}
	if (shirtCount >= 100) {
		pricePerShirt = 3.00;
	}

	console.log(pricePerShirt);

	totals = shirtCount * pricePerShirt;

	var texts = getTextPrice();
	if (texts >= 1) {
		textTotal = shirtCount * texts;
	} else {
		textTotal = 0;
	}

	newTotal = totals + textTotal;

	console.log(newTotal);

	return newTotal;
}

function getTextPrice(){
	var totals = 0;
	var pricePerText = 4.00;
	// front
	var frontText1 = document.getElementById('designFrontTopText');
	var frontText2 = document.getElementById('designFrontMidText');
	var frontText3 = document.getElementById('designFrontBottomText');
	// back
	var backText1 = document.getElementById('designBackTopText');
	var backText2 = document.getElementById('designBackBottomText');

	console.log(frontText1);

	if (frontText1.value != "") {
		textCount += 1;
	}
	if (frontText2.value != "") {
		textCount += 1;
	} 
	if (frontText3.value != "") {
		textCount += 1;
	}
	if (backText1.value != "") {
		textCount += 1;
	} 
	if (backText2.value != "") {
		textCount += 1;
	}

	totals = textCount * pricePerText;

	return totals;

}