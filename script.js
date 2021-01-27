var myData = data; // Data from the survey

let kolomNaam = 'grootteSlaapkamer'; // create a column name that is equal to the question in the survey
let lijstAntwoorden = getAnswersForQuestion(myData, kolomNaam); // Hoisted invoked function with 2 parameters - myData refers to survey data

// Returns all answers for a specific question in an Array - reusable
function getAnswersForQuestion(answers, question) {
  return answers.map((answer) => answer[question]); // it takes the first parameter and transfers all answers from that one question (2nd parameters) in one new Array
}
// console.log("Grootte van de slaapkamer is:", lijstAntwoorden);

// ----------------------------------------------------------------------------------------

// COMPLEX CLEANING PATTERN - NAMES

// ------ FIRST STEP - Filter 'naamAnderGeslacht' in 1 new Array
let anderGeslachtNaam = 'naamAnderGeslacht';
let allNames = myData.map((name) => name[anderGeslachtNaam]); // Makes new Array of all names
// console.log('(1) Namenlijst', allNames); // List of ALL names

// ------ SECOND STEP (A) | NULL - Makes new Array with incorrect answers are replaced with 'null'
let checkedNames = allNames.map((name) => {
  if (
    name == '-' ||
    name == '/' ||
    name == '' ||
    name == 'geen' ||
    name == 'nvt' ||
    name.indexOf(' ') > 0
  ) {
    return null;
  }
  return name;
});
// console.log('(2A) Gecorrigeerde namenlijst', checkedNames); // List of ALL names, with 'null' mentioning

// ------ SECOND STEP (B) | FILTER - Filter 'naamAnderGeslacht' in 1 new filtered Array (without incorrect answers)
// Filters out a list of incorrect answers
let filteredNames = allNames.filter((name) => {
  return (
    name != '-' &&
    name != '/' &&
    name != '' &&
    name != 'geen' &&
    name != 'nvt' &&
    name.indexOf(' ') < 1 // https://stackoverflow.com/q/17616624 - Checks if there are 1 or more whitespaces
  );
});
// console.log('(2B) Namenlijst gefilterd (zonder incorrecte antwoorden)', filteredNames); // List of FILTERED names

// ------ THIRD STEP - Convert first letter of names to Uppercase
let capitalizeNames = checkedNames.map((name) => {
  return name != null ? name.charAt(0).toUpperCase() + name.slice(1) : name;
});

// console.log('(3) Namenlijst met hoofdletter', capitalizeNames); // List of ALL names, with uppercased first letter

// ----------------------------------------------------------------------------------------

// Transform data / Nest in new (selfmade) datakey

// Filter 'tijdreisJaar' in 1 new Array
// let keyOne = 'tijdreisJaar';
// let keyTwo = 'waaromTijdreizenNaarJaar';
// let combinedData = myData.map((value) => {
//   	let answerDay = value[keyOne];
//     let answerWhy = value[keyTwo];
//     return [answerDay , answerWhy];
// });

// console.log('Combined data =', combinedData); // List of ALL dates

// Combine with data key 'waaromTijdreizenNaarJaar' and nest in new self-created data key `tijdreis` and corrects the values
// Only nesting works, replacing from / to - does not work yet.
let nestedData = nestDataKeys(myData);
console.log('Nested data:', nestedData);

function nestDataKeys(data) {
  const dataObject = data.map((element) => {
    if (
      element.tijdreisJaar === '' ||
      element.waaromTijdreizenNaarJaar === ''
    ) {
      element.tijdreisJaar = null;
    }

    if (element.tijdreisJaar === '/') {
      console.log('bevat een /');
      element.tijdreisJaar === '-';
      //   element.tijdreisJaar.replaceAll('/', 'xxx');
    }

    return {
      tijdreis: {
        tijdreisJaar: element.tijdreisJaar,
        waaromTijdreizenNaarJaar: element.waaromTijdreizenNaarJaar,
      },
    };
  });

  return dataObject;
}
