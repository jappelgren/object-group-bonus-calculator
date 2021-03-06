$(document).ready(readyNow);

function readyNow() {
  $('#viewBonus').on('click', displayBonuses)
}

function displayBonuses() {
  let employeeList = $('#employeeBonusList');
  employeeList.empty();
  calculateAllBonuses(employees);
  for (let emp of employeeBonusInfo) {
    employeeList.append(`<li>${emp.name}  - Bonus Percentage ${emp.bonusPercentage} - Total Bonus: ${emp.totalBonus} - Total Compensation: ${emp.totalCompensation}</li>`)
  }
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function bonusCalculator(worker) {
  let newObject = {
    name: worker.name,
   
  };
  if (worker.reviewRating <= 2) {
    newObject.bonusPercentage = 0;

  } else if (worker.reviewRating === 3) {
    newObject.bonusPercentage = 0.04;

  } else if (worker.reviewRating === 4) {
    newObject.bonusPercentage = 0.06;

  } else {
    newObject.bonusPercentage = 0.10;

  }

  if (worker.employeeNumber.length === 4) {
    newObject.bonusPercentage += 0.05;
  } 

  if (worker.annualSalary > 65000) {
    newObject.bonusPercentage -= .01;
  }
  
  if (newObject.bonusPercentage > .13) {
    newObject.bonusPercentage = .13;
  
  } else if (newObject.bonusPercentage < 0) {
    newObject.bonusPercentage = 0;
  }
  
  newObject.totalBonus = Math.round(newObject.bonusPercentage * worker.annualSalary);
  newObject.totalCompensation = newObject.totalBonus + Number(worker.annualSalary);

  
  return newObject;
}

let employeeBonusInfo = [];

function calculateAllBonuses(array) {
  let employeeList = $('#employeeBonusList');
  for (let i = 0; i < array.length; i++) {
    employeeBonusInfo.push(bonusCalculator(employees[i]))
  }
  console.log(employeeBonusInfo);
}

// calculateAllBonuses(employees);



// console.log(bonusCalculator(employees[2]));

// console.table(calculateAllBonuses(employees));

// Write a declared function that takes in one Employee object (as an argument to
// the function), and returns a new object with the following properties:

// The name property should contain the employee's name.
// The bonusPercentage property should contain the bonus percentage the employee
// to receive. See section below for calculation instructions.
// The totalCompensation property should be the adjusted annual compensation
// (base annual + bonus)
// The totalBonus should be the employee's total bonus rounded to the nearest dollar.

// Individual Bonus calculation
// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base 
// annual income.

// Those who have a rating of a 4 should receive a base bonus of 6% of their base 
// annual income.

// Those who have a rating of a 5 should receive a base bonus of 10% of their base 
// annual income.

// If their employee number is 4 digits long, this means they have been with the 
// company for longer than 15 years, and should receive an additional 5%.

// However, if their annual income is greater than $65,000, they should have their 
// bonus adjusted down 1%.

// No bonus can be above 13% or below 0% total.
// NOTE: You may abstract out this bonus calculation into a second function if you 
// like, but this is not mandatory.



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

