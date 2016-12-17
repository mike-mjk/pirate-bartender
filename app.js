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

var Bartender = function () {

};

Bartender.prototype.createDrink = function (preferences) {
	
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
	var categories = ['strong', 'salty', 'bitter', 'sweet', 'fruity'];

	$.each(categories, function(index, value) {
		var checked = $("input[name=" + value +"]:checked").val();
		preferences[value] = checked;

	return preferences;
	});

};
$( document ).ready(function() {
	populateQuestions(questions);
	$('.js-submit').on("click", function(e) {
		e.preventDefault();
		buildPreferences();
	});
});