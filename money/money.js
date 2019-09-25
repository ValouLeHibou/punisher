let machineRefund = true;
let insertedMoney = 0;
let drinkNumber = 5 // Waiting for de user input from the frontend

class Machine {
    constructor(drinkName, drinkPrice, insertedMoney) {
        if (machineRefund ===  true) {
            this.tenCentQuantity = 30;
            this.twentyCentQuantity = 30;
            this.fiftyCentQuantity = 30;
            this.oneEuroQuantity = 30;
            this.twoEuroQuantity = 30;
            this.drinkName = drinkName;
            this.drinkPrice = drinkPrice;
            this.insertedMoney = insertedMoney;
            machineRefund = false;
        }
    }

    checkMoney() {
        if (this.insertedMoney > this.drinkPrice) {
            let refundMoney = this.insertedMoney - this.drinkPrice;
            console.log(Math.round((refundMoney)*10)/10 + "€ à rembourser")
            if (refundMoney >= 2) {
                while (refundMoney >= 2) {
                    refundMoney = Math.round((refundMoney - 2)*10)/10;
                    console.log("Pièce de 2 rendue, reste à rembourser : " + refundMoney);
                }
            }
            if (refundMoney >= 1) {
                while (refundMoney >= 1) {
                    refundMoney = Math.round((refundMoney - 1)*10)/10;
                    console.log("Pièce de 1 rendue, reste à rembourser : " + refundMoney);
                }
            }
            if (refundMoney >= 0.5) {
                while (refundMoney >= 0.5) {
                    refundMoney = Math.round((refundMoney - 0.5)*10)/10;
                    console.log("Pièce de 0.5 rendue, reste à rembourser : " + refundMoney);
                }
            }
            if (refundMoney >= 0.2) {
                while (refundMoney >= 0.2) {
                    refundMoney = Math.round((refundMoney - 0.2)*10)/10;
                    console.log("Pièce de 0.2 rendue, reste à rembourser : " + refundMoney);
                }
            }
            if (refundMoney >= 0.1) {
                while (refundMoney >= 0.1) {
                    refundMoney = Math.round((refundMoney - 0.1)*10)/10;
                    console.log("Pièce de 0.1 rendue, reste à rembourser : " + refundMoney);
                }
            }
            console.log("Remboursement effectué");
            return "OK";
        }
        else if (insertedMoney === this.drinkPrice)
            return "OK"
        else
            return "Not anought money"
    }
}

class Drink {
    constructor(drinkId) {
        this.drinkId = drinkId;
        this.drinkInfo = [
            {"id":0, "name":"eau chaude", "price":0.5},
            {"id":1, "name":"ristretto", "price":0.9},
            {"id":2, "name":"expresso", "price":1},
            {"id":3, "name":"allongé", "price":1.2},
            {"id":4, "name":"allongé décaféiné", "price":1.2},
            {"id":5, "name":"cappuccino", "price":1.9},
            {"id":6, "name":"macchiato", "price":1.5},
            {"id":7, "name":"café au lait", "price":1.5},
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

    catchDrinkInfo() {
        return this.drinkInfo
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

console.log("\nHi ! Welcome to CoffeeLand !\n\n")

console.log("Choose your drink by typing one of the numbers below :\n");

const drinkInfo = new Drink(null);
const drinkArray = drinkInfo.catchDrinkInfo();
drinkArray.forEach((item) => {
    console.log("N° " + item["id"] + " - " + item["name"] + " => " + item["price"] + "€");
})

if (drinkNumber >= 0 && drinkNumber <= 15) {
    const drinkInfo = new Drink(parseInt(drinkNumber, 10));
    const drinkName = drinkInfo.findDrinkName();
    const drinkPrice = drinkInfo.findDrinkPrice();
    console.log("You choose " + drinkName + "\n");
    console.log("Please insert money, you need " + drinkPrice + "€\n");

    var standard_input = process.stdin;
    standard_input.setEncoding('utf-8');
    standard_input.on('data', function (data) {
        if(data === 'exit\n'){
            process.exit();
        }else
        {
            insertedMoney = insertedMoney + parseInt(data, 10);
            console.log('Total inserted : ' + insertedMoney);
            if (insertedMoney >= drinkPrice) {
                const refund = new Machine(drinkName, drinkPrice, insertedMoney);
                const oneRefund = refund.checkMoney();
                console.log(oneRefund);
                insertedMoney = 0;
            }
        }
    })
}
