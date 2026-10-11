class Pet {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `${this.name}, ${this.age} роки`;
    }
}
const cat = new Pet("Мурзик", 2);
const dog = new Pet("Барсик", 4);
console.log(dog, cat);
console.log(cat.getInfo());
console.log(dog.getInfo());
class Hero {
    name;
    health;
    level;
    constructor(name, health, level) {
        this.name = name;
        this.health = health;
        this.level = level;
    }
    isAlive() {
        return this.health > 0;
    }
    describe() {
        const status = this.isAlive() ? "живий" : "мертвий";
        return `герой ${this.name}, його рівень: ${this.level}, цей герой ${status}`;
    }
}
const deadHero = new Hero("Артас", 0, 50);
console.log(deadHero.describe());
console.log(deadHero.isAlive());
const heroes = [
    new Hero("Юлій", 100, 13),
    new Hero("Дон Кіхот", 59, 20),
    new Hero("Альдебаран", 82, 18),
];
const names = heroes.map(heroes => heroes.name);
console.log(names);
class Book {
    title;
    author;
    pages;
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
const philosophersStoneBook = new Book("Гаррі");
class Wallet {
    balance = 0;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        return this.balance += amount;
    }
    spend(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(this.balance);
            return true;
        }
        else {
            console.log("Недостатньо коштів");
            return false;
        }
    }
}
const myWallet = new Wallet(0);
console.log(myWallet.deposit(1000));
console.log(myWallet.spend(1001));
console.log(myWallet.deposit(1000));
console.log(myWallet.spend(1001));
Wallet.balance = 1000;
class Character {
    secretPower;
    constructor(secretPower) {
        this.secretPower = secretPower;
    }
    whatIsThisPower(ability) {
        return this.secretPower = ability;
    }
}
const characterSon = new Character("");
console.log(characterSon.whatIsThisPower("Маніпуляція вогнем"));
export {};
//# sourceMappingURL=index.js.map