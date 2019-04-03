

var output = $("#designTextOutput");
output[0].draggable = true;

$("#designText").keydown(() => {
 	updateText();
 });


// Update the product with the input given
function updateText(){
	var text = '';
	var text_val = $("#designText");
	document.getElementById('designTextOutput').innerHTML = document.getElementById('designText').value;
	//output.html(text_val.val());
	//console.log(output);
	console.log(document.getElementById('designTextOutput'));
}