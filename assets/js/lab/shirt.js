var shirtOutput = $('#tshirtOutput');

shirtColor.addEventListener('change', (e) => {
	e.preventDefault();
	var imageUrl = getSelectedImage(getSelectedOption());
	outputSelectedImage(imageUrl);
});

function init(){
	var imageUrl = getSelectedImage(getSelectedOption());
	outputSelectedImage(imageUrl);
}

function getSelectedOption(){
	var output = document.getElementById('shirtColor').value;
	return output;
}

function outputSelectedImage(input) {
	shirtOutput.empty();
	shirtOutput.append(`<img src=${input} class="img-fluid" />`);
}

function getSelectedImage(input) {
	var output = '';
	if (input == "White") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/C7E62221168643D59F245C2D51C5C560/10532564_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Black") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/E6F09D1C8ACB448C8AC3C230D95F63C5/10532473_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Royal Blue") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/795AF79ED6584F9B9526EFBB6CE0D971/10532887_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Light Pink") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/33A9384E8C7C414F8FA1FC88DAC35E6A/10508513.jpg?fit=inside|1024:1024';
	}
	if (input == "Heliconia Pink") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/6FEAE9A28B8F4EDB9F462EE7B974451D/10093625_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Safety Pink") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/B8F43962C9AD4F2AB3D206DF564A6BD6/10267604_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Daisy Yellow") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/D9F203C109D24C049A1BD790854364D8/10239895_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Irish Green") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/89929EBC63DE42EA9701E67C8B731990/10460172.jpg?fit=inside|1024:1024';
	}
	if (input == "Lime Green") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/EC97C2451ABD4066B995424749BB93EF/10388593_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Safety Green") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/C07882E2FC784B3EA4A03F25D7A8F5CB/10186041_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Purple") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/95734D6FBF574903863FDCED83A5689C/10147206_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Safety Orange") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/A7932F2D453C45DF979058DB0DB332C1/10236501_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Sapphire") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/53FB11247AD448EE80E1A1FBC4A4EC53/10093633_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Sport Grey") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/61F41171B1724D94BC647336B3BB03A3/10236559_R.jpg?fit=inside|1024:1024';
	}
	if (input == "Sunset") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/20662A5914AA4510B8707D72F10DA291/10460164_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Berry") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/CF4226B6C50E4C3E8EC611122881926B/10275948_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Cherry Red") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/DFBE2689DAF0451D90987E6413D6DB85/10508502.jpg?fit=inside|1024:1024';
	}
	if (input == "Heather Military Green") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/A57305A142C54EF6BA60DF69062B8C3B/10460157_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Heather Purple") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/E8E9AEFC3F144020AF2832AB72936DF3/10508498.jpg?fit=inside|1024:1024';
	}
	if (input == "Heather Red") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/192DEC54FA2B4AE19247FABD6978C13C/10277943_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Heather Sapphire") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/EB90A09F14974397979B79BDEE33EEEA/10277947_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Navy Blue") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/97FB4212A7814312B1A13D68B4BF99B2/10149290_r.jpg?fit=inside|1024:1024';
	}
	if (input == "Navy Heather") {
		output = 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/33565E2D49E043E1A62FE408CA4B460E/10398649_u.jpg?fit=inside|1024:1024';
	}
	return output;
}

