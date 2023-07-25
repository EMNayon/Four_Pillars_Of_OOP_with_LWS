



// object
const nayon = {
    // property

    name: "EM Nayon",
    birthDay: "1997-07-10",
    monthlySalary: 20000,
    noOfMonths: 12,

    // method
    calculate_age(){
        const diff_ms = Date.now() - new Date(this.birthDay).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    },
    getSalary () {
        return (this.monthlySalary * this.noOfMonths).toLocaleString();
    }
}

console.log(nayon.calculate_age());
console.log(nayon.getSalary());