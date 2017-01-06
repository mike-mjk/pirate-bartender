// classes 
/* 
question - question
ingredient - name, category
pantry - 
*/

var Question = function (question) {
	this.question = question;
};

var Ingredient = function (name, category) {
	this.name = name;
	this.category = category;
};

var Bartender = function (preferences) {
	this.preferences = preferences;
};

Bartender.prototype.createDrink = function () {
	var drinkIngs = [];
	$.each(this.preferences, function (ingType, preferred) {
		if (preferred == "yes")
			drinkIngs.push(getRandomIngredient(ingType));
	});
	alert("Ye buddy, you've got this drink with " + drinkIngs.map(function (v) {
		return v.name.toLowerCase();
	}).join(", ") + "...");
}

function getRandomIngredient(type) {
	var ings = [];
	for (var i = 0; i < ingredients.length; i++) {
		if (ingredients[i].category == type) {
			ings.push(ingredients[i]);
		}
	}
	return ings[Math.floor(Math.random() * ings.length)];
}

var questions = [];
var ingredients = [];

questions.push(new Question('Do ye like yer drinks strong?'));
questions.push(new Question("Do ye like it with a salty tang?"));
questions.push(new Question("Are ye a lubber who likes it bitter?"));
questions.push(new Question("Would ye like a bit of sweetness with yer poison?"));
questions.push(new Question("Are ye one for a fruity finish?"));

ingredients.push(new Ingredient("Glug of rum", "Strong"));
ingredients.push(new Ingredient("slug of whisky", "Strong"));
ingredients.push(new Ingredient("splash of gin", "Strong"));
ingredients.push(new Ingredient("Olive on a stick", "Salty"));
ingredients.push(new Ingredient("salt-dusted rim", "Salty"));
ingredients.push(new Ingredient("rasher of bacon", "Salty"));
ingredients.push(new Ingredient("Shake of bitters", "Bitter"));
ingredients.push(new Ingredient("splash of tonic", "Bitter"));
ingredients.push(new Ingredient("twist of lemon peel", "Bitter"));
ingredients.push(new Ingredient("Sugar cube", "Sweet"));
ingredients.push(new Ingredient("spoonful of honey", "Sweet"));
ingredients.push(new Ingredient("splash of cola", "Sweet"));
ingredients.push(new Ingredient("Slice of orange", "Fruity"));
ingredients.push(new Ingredient("dash of cassis", "Fruity"));
ingredients.push(new Ingredient("cherry on top", "Fruity"));


function populateQuestions(questions) {
	$('#strong').text(questions[0].question);
	$('#salty').text(questions[1].question);
	$('#bitter').text(questions[2].question);
	$('#sweet').text(questions[3].question);
	$('#fruity').text(questions[4].question);
};

function buildPreferences() {
	var preferences = {};
	var categories = ['Strong', 'Salty', 'Bitter', 'Sweet', 'Fruity'];

	$.each(categories, function(index, value) {
		var checked = $("input[name=" + value +"]:checked").val();
		preferences[value] = checked;
		// console.log(preferences);
	});
	return preferences;
};
$( document ).ready(function() {
	populateQuestions(questions);
	$('.js-submit').on("click", function(e) {
		e.preventDefault();
		preferences = buildPreferences();
		bartender = new Bartender(preferences);
		bartender.createDrink();
	});
});