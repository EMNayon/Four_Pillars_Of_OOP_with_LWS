// OOP Concept apply

class Player {
    // privat property diclare
    #name;
    #birthDay;
    #monthlySalary;
    #noOfMonths;
    // property
    constructor(name,birthDay,monthlySalary,noOfMonths){
        this.#name = name;
        this.#birthDay = birthDay;
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths;
    }

    // methods
    calculate_age(){
        const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    getSalary () {
        return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
    }
}

const nayon = new Player("Nayon","1997-07-10", 20000, 12);
console.log(nayon.calculate_age());
console.log(nayon.getSalary());

console.log(nayon.birthDay);