var myData = data; // Data from the survey
// console.log(myData); // Check if data can be logged in browser

let kolomNaam = 'grootteSlaapkamer'; // create a column name that is equal to the question in the survey
let lijstAntwoorden = getAnswersForQuestion(myData, kolomNaam); // Hoisted invoked function with 2 parameters - myData refers to survey data

// returns all answers for a specific question in an Array
function getAnswersForQuestion(answers, question) {
	return answers.map((answer) => answer[question]); // it takes the first parameter and transfers all answers from that one question (2nd parameters) in one new Array
}
// console.log("1-Grootte van de slaapkamer is:", lijstAntwoorden);

// Getting data using map - without function
const uniqueAnswers = myData.map((answer) => answer[kolomNaam]);
// console.log("2-Unique answers are:", uniqueAnswers)

// Filter 'naamAnderGeslacht' in 2 parts-> 'With nane' && 'Wihout name'
let anderGeslachtNaam = 'naamAnderGeslacht';
let welOfGeenNaam = myData.map((name) => name[anderGeslachtNaam]);
// console.log('Alle namen zijn', welOfGeenNaam);

// Er zijn "-", "", "/", "nvt", "Zou het niet weten" etc.
// Checks if all names are real and correct names
for (answer in myData) {
	if (
		myData[answer].naamAnderGeslacht === '' ||
		myData[answer].naamAnderGeslacht === '-' ||
		myData[answer].naamAnderGeslacht === 'nvt' ||
		myData[answer].naamAnderGeslacht === 'Zou het niet weten' ||
		myData[answer].naamAnderGeslacht === '/'
	) {
		console.log('INCORRECT - Geen antwoord');
	} else {
		console.log('CORRECT - Een naam');
	}
}
