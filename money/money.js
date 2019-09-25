const selectedDrinkId = 5;

class Machine {
    constructor(tenFund, twentyFund, fiftyFund, oneFund, twoFund, selectedDrink, insertedMoney) {
        this.tenFund = tenFund;
        this.twentyFund = twentyFund;
        this.fiftyFund = fiftyFund;
        this.oneFund = oneFund;
        this.twoFund = twoFund;
        this.insertedMoney = insertedMoney;
        this.selectedDrink = selectedDrink;
    }

    cashFund() {
        const total = this.tenFund + this.twentyFund + this.fiftyFund + this.oneFund + this.twoFund;
        return total;
    }

    checkMoney() {

    }

    display() {
        return `Cette pièce représente ${this.value} euro.
                Le cashfund est de ${this.quantity} pour cette pièce`;
    }
}

class Drink {
    constructor(drinkId) {
        this.drinkId = drinkId;
        this.drinkInfo = [
            {"id":0, "name":"eau chaude", "price":0.50},
            {"id":1, "name":"ristretto", "price":0.90},
            {"id":2, "name":"expresso", "price":1},
            {"id":3, "name":"allongé", "price":1.20},
            {"id":4, "name":"allongé décaféiné", "price":1.20},
            {"id":5, "name":"cappuccino", "price":1.90},
            {"id":6, "name":"macchiato", "price":1.50},
            {"id":7, "name":"café au lait", "price":1.50},
            {"id":8, "name":"thé", "price":1},
            {"id":9, "name":"thé citron", "price":1},
            {"id":10, "name":"thé vert", "price":1},
            {"id":11, "name":"potage tomate", "price":2},
            {"id":12, "name":"soupe à l'oignon", "price":2},
            {"id":13, "name":"soupe de poissons", "price":2},
            {"id":14, "name":"choucroute", "price":3},
            {"id":15, "name":"kebab", "price":5},
        ]
    }

    findDrinkName() {
        const drinkName = this.drinkInfo.find(arr => arr.id === this.drinkId);
        return drinkName["name"];
    }

    findDrinkPrice() {
        const drinkPrice = this.drinkInfo.find(arr => arr.id === this.drinkId);
        return drinkPrice["price"];
    }
}

class Money {
    constructor(value, quantity) {
        this.value = value;
        this.quantity = quantity;
    }

    value() {
        return this.value()
    }

    quantity() {
        return this.quantity()
    }

    total(value, quantity) {
        const total = value*quantity;
        return total;
    }
}

const tenCent = new Money(0.1, 30);
const twentyCent = new Money(0.2, 30);
const fiftyCent = new Money(0.5, 30);
const oneCent = new Money(1, 30);
const twoCent = new Money(2, 30);

const tenFund = tenCent.total(tenCent.value, tenCent.quantity);
const twentyFund = twentyCent.total(twentyCent.value, twentyCent.quantity);
const fiftyFund = fiftyCent.total(fiftyCent.value, fiftyCent.quantity);
const oneFund = oneCent.total(oneCent.value, oneCent.quantity);
const twoFund = twoCent.total(twoCent.value, twoCent.quantity);
const totalCashFund = new Machine(tenFund, twentyFund, fiftyFund, oneFund, twoFund);

/*
console.log(tenFund)
console.log(twentyFund)
console.log(fiftyFund)
console.log(oneFund)
console.log(twoFund)
*/
console.log(totalCashFund.cashFund());

const drinkInfo = new Drink(selectedDrinkId);

const drinkName =  drinkInfo.findDrinkName();
console.log(drinkName);
const drinkPrice =  drinkInfo.findDrinkPrice();
console.log(drinkPrice);
