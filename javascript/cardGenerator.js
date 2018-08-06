/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Card Structure

// <div class="element-item">
// 	<img src="images/cardBackgrounds/arrayValue1.png" alt="arrayValue2">
//
// 	<a href="/pages/arrayValue1.html">
// 		<div class="titles animationrandomNumber1" style='background: transparent url("/images/cardShapes/shapeRandomNumeber2.svg') no-repeat 50% 50%/190px auto;"><span>
// 			<h2>arrayValue3</h2>
// 			<h3>arrayValue4</h3>
// 		</span></div>
// 	</a>
// </div>


var randomNumber1; // The number for deciding the background shape
var randomNumber2; // The number for deciding the animation selcetion

// [imageName/pageURL, imgAltTag, cardTitle, cardSubTitle]
var contentArray = [
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"],
	["PrintAndMail", "uofl print and main homepage", "Print and Mail", "Canon Partnership Homepage"]
];


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Generation Function
function generateCards(){
	html = "";

	for(i = 0; i < contentArray.length; i++){
		randomNumber1 = Math.floor(Math.random() * 4) + 1;
		randomNumber2 = Math.floor(Math.random() * 4) + 1;

		currentString = `<div class="element-item"><img src="images/cardBackgrounds/` + contentArray[i][0] + `.png" alt="` + contentArray[i][1] + `" /><a href="/pages/` + contentArray[i][0] + `.html">`
		+ `<div class="titles animation` + randomNumber1 + `" style='background: url("/images/cardShapes/shape` + randomNumber2 + `.svg") no-repeat 50% 50%/190px auto;'><span>`
		+ `<h2>` + contentArray[i][2] + `</h2><h3>` + contentArray[i][3] + `</h3></span></div></a></div>` ;
		html += currentString;
	}

	$("#cardHolder").html(html);
}
