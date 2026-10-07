let tipOutput = document.getElementById("tipAmountOutput");
let totalOutput = document.getElementById("totalBillOutput");
let checkOutput = document.getElementById("paycheckAmountOutput");
let gradeOutput = document.getElementById("percentGradeOutput");
let gasOutput = document.getElementById("gasCostOutput");

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener("click", function() {
// Tip Calculator
let tipAmount;
let subTotal = document.getElementById("subTotalInput").valueAsNumber;
let percentage = document.getElementById("percentageInput").valueAsNumber;
let totalBill;

tipAmount = subTotal * percentage;
totalBill = subTotal + tipAmount;

tipAmount = tipAmount.toFixed(2);
totalBill = totalBill.toFixed(2);

tipOutput.innerHTML = "$" + tipAmount;
totalOutput.innerHTML = "$" + totalBill;
})

let paycheckBtn = document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click', function() {
//paycheck

let hoursWorked = 40;
let hourlyRate = 16;
let totalTax = 0.2;
let paycheckAmount = document.getElementById("paycheckAmountOutput").valueAsNumber;

paycheckAmount = hoursWorked * hourlyRate / (1 + totalTax);
paycheckAmount = paycheckAmount.toFixed(2);
paycheckOutput.innerHTML = "$" + paycheckAmount;
})


// Grade Calculator

let finalGrade = 92;
let pointsEarned = 40;
let totalPoints = 37;

finalGrade = (totalPoints / pointsEarned) * 100;

console.log("Final grade:" + finalGrade.toFixed(2));

//Gas Cost Calculator

let perGallon = 13;
let gasCost;
let gasTank = 15.3;
gasCost = perGallon * gasTank;
console.log("Gas cost: " + gasCost.toFixed(2));