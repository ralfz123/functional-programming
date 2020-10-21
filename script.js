var myData= data; // Data from the survey
console.log(myData); // Check if data can be logged in browser


let kolomNaam = "grootteSlaapkamer" // create a column name that is equal to the question in the survey
let lijstAntwoorden = getAnswersForQuestion(myData, kolomNaam)  // Hoisted invoked function with 2 parameters - myData refers to survey data

// returns all answers for a specific question in an Array
function getAnswersForQuestion(answers, question) { 
    return answers.map(answer => answer[question]) // it takes the first parameter and transfers all answers from that one question (2nd parameters) in one new Array
}
console.log("1-Grootte van de slaapkamer is:", lijstAntwoorden);


// Getting data using map - without function
const uniqueAnswers = myData.map(answer => answer[kolomNaam])
console.log("2-Unique answers are:", uniqueAnswers)