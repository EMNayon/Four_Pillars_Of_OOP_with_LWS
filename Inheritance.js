// common class 
// parent class
class Player {
    #name;
    #age;
    
    constructor (name, age) {
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails () {
        return `${this.#name} is ${this.#age} years old`
    }
}

// inheritance player class
class Cricketer extends Player{
    // #name;
    // #age;
    #centuries;

    constructor (name, age, centuries) {
        // this.#name = name;
        // this.#age = age;
        super(name, age);
        this.#centuries = centuries;
    }
}

class Football extends Player{
    // #name;
    // #age;
    #goals;

    constructor (name, age, goals){
        // this.#name = name;
        // this.#age = age;

        super(name,age)
        this.#goals = goals;
    }
}


const nayon = new Cricketer("Emran", 26, 5);

console.log(nayon.getPlayerDetails());