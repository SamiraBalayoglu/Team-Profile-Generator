const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Create a empty array to store the team members after they are created

// Create a empty array to store the member IDs after they are created

// Function to create the manager. Should be the initial function called when creating the team.
    // Ask for a name, id, email and office number for the manager

    // Then store the answers into a new Manager object

    //push the manager into the team members array



// Function to create an engineer.
    // Asks for a name, id, email, and github

    //then store the answers into a new Engineer object

    //push the engineer into the team members array


// Function to create an intern
    // Asks for a name, id, email, and school

    // Then store the answers into the team members arry

    // push the intern into the team members array


// Function to ask the user what team member they would like to create next, either a Engineer or Intern. Also ask if they don't want to add any more team members. SHOULD BE CALLED AT THE END OF EACH MEMBER FUNCTION SO THEY CAN CREATE ANOTHER MEMBER AFTER ALREADY CREATING ONE.

    // Then create a conditional to check which member the user picked and run the appropriate function based off of that input ex:`if(userChoice === 'Engineer'){createEngineer()}`
    // Have a else condition so that if they choose to not make any more members, the file gets written.(Can create a function for this and then call the function)

// Function to hold all of the other functions.
    // Call the function to initialize the app.
