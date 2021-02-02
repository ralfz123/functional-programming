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

checkTheNames(allNames); //Invoking the function
// console.log('(2A) Gecorrigeerde namenlijst', checkTheNames(allNames)); // List of ALL names, with 'null' mentioning

function checkTheNames(data) {
  let checkedNames = data.map((name) => {
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
  capitalizeTheNames(checkedNames); // Invoking the function
  // console.log('(3) Namenlijst met hoofdletter', capitalizeTheNames(checkedNames)); // List of ALL names, with uppercased first letter

  return checkedNames;
}

// ------ SECOND STEP (B) | FILTER - Filter 'naamAnderGeslacht' in 1 new filtered Array (without incorrect answers)
// Filters out a list of incorrect answers

filterTheNames(allNames); //Invoking the function
// console.log('(2B) Namenlijst gefilterd (zonder incorrecte antwoorden)', filterTheNames(allNames)); // List of FILTERED names

function filterTheNames(data) {
  let filteredNames = data.filter((name) => {
    return (
      name != '-' &&
      name != '/' &&
      name != '' &&
      name != 'geen' &&
      name != 'nvt' &&
      name.indexOf(' ') < 1 // https://stackoverflow.com/q/17616624 - Checks if there are 1 or more whitespaces
    );
  });
  return filteredNames;
}

// ------ THIRD STEP - Convert first letter of names to Uppercase

function capitalizeTheNames(data) {
  let capitalizedNames = data.map((name) => {
    return name != null ? name.charAt(0).toUpperCase() + name.slice(1) : name;
  });
  return capitalizedNames;
}

// ----------------------------------------------------------------------------------------

// Transform data | Nest 2 data keys in 1 (selfmade) datakey

let nestedData = nestDataKeys(myData);
// console.log('Nested data:', nestedData);

// Combine data keys 'tijdreisJaar' & 'waaromTijdreizenNaarJaar' and nest them in a self-made data key `tijdreis`. It also replaces empty values with `null`
function nestDataKeys(data) {
  const dataObject = data.map((element) => {
    if (
      element.tijdreisJaar === '' ||
      element.waaromTijdreizenNaarJaar === ''
    ) {
      element.tijdreisJaar = null;
      element.waaromTijdreizenNaarJaar = null;
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
