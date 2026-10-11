class Pet { 
    constructor(
    public name: string,
    public age: number
) {}

    getInfo():string {
        return `${this.name}, ${this.age} роки`
    }
}

const cat = new Pet("Мурзик", 2);
const dog = new Pet("Барсик", 4);

console.log(dog, cat)
console.log(cat.getInfo())
console.log(dog.getInfo())

class Hero {
    constructor(
    public name: string,
    private health: number,
    public level: number) {}

    isAlive(): boolean {
        return this.health > 0
    }

    describe(): string{
        const status = this.isAlive() ? "живий" : "мертвий";
        return `герой ${this.name}, його рівень: ${this.level}, цей герой ${status}`
    }
}

const deadHero = new Hero("Артас",0,50)

console.log(deadHero.describe())
console.log(deadHero.isAlive())

const heroes: Hero[] = [
    new Hero("Юлій", 100, 13),
    new Hero("Дон Кіхот", 59, 20),
    new Hero("Альдебаран", 82, 18),
]
 
const names: string[] = heroes.map(heroes => heroes.name);

console.log(names)

class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const philosophersStoneBook = new Book("Гаррі")

class Wallet{
    private balance: number = 0
    
    constructor(balance: number) {
        this.balance = balance
    }

    public deposit(amount:number){
        return this.balance += amount
    }

    public spend(amount: number) : boolean {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log(this.balance)
            return true
        } else {
            console.log("Недостатньо коштів")
            return false
        }
    }
}

const myWallet = new Wallet(0)

console.log(myWallet.deposit(1000))
console.log(myWallet.spend(1001))
console.log(myWallet.deposit(1000))
console.log(myWallet.spend(1001))


Wallet.balance = 1000

class Character {
    protected secretPower: string
    
    constructor(secretPower: string) {
        this.secretPower = secretPower
    }

    public whatIsThisPower(ability: string) {
        return this.secretPower = ability
    }
}

const characterSon = new Character("")

console.log(characterSon.whatIsThisPower("Маніпуляція вогнем"))