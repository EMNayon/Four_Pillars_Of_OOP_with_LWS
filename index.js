// procedural or functional programming 

let name = "EM Nayon";
let birthDay = "1997-07-10";
let monthlySalary = "20000";
let noOfMonths = 12;

// function or method
function calculate_age(bod){
    const diff_ms = Date.now() - new Date(bod).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function getSalary (monthlySalary, noOfMonths) {
    return (monthlySalary * noOfMonths).toLocaleString();
}


console.log(calculate_age(birthDay));
console.log(getSalary(monthlySalary, noOfMonths));