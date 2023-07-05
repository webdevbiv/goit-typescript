"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});
let num;
num = 10;
let str;
str = "Hello";
let arr = [];
arr = ["string"];
let arrNumber = [];
arrNumber = [1, 2, 3];
let arrAny = [];
arrAny = [1, 2, 3, {}, "string"];
let arrObj = [];
arrObj = [{ name: "string" }, { name: "nikita" }];
let obj;
obj = {
    name: "Alex",
};
let db;
db = {
    id: 1,
    title: "string",
    info: {
        date: new Date(),
    },
};
let some;
some = "string";
some = 1;
let numNew;
numNew = some;
let undef;
undef = 10;
undef = "string";
let text;
if (typeof undef === "string") {
    text = undef;
}
let fixed;
fixed = ["string", 1];
var toggle;
(function (toggle) {
    toggle[toggle["ENABLE"] = 0] = "ENABLE";
    toggle[toggle["DISABLE"] = 1] = "DISABLE";
})(toggle || (toggle = {}));
const service = { status: toggle.ENABLE };
if (service.status === toggle.ENABLE) {
    console.log("it is active");
}
let union;
function combine(param1, param2) {
    if (typeof param1 === "string" || typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
    else {
        return param1 + param2;
    }
}
console.log(combine(1, 1));
let active;
active = "start";
const fruit = [];
function workWithArr(arr, value, action) {
    if (action === "add") {
        arr.push(value);
    }
    else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
workWithArr(fruit, "apple", "add");
workWithArr(fruit, "banana", "add");
workWithArr(fruit, "watermelon", "add");
workWithArr(fruit, "banana", "delete");
console.log(fruit);
function print() {
    console.log("Some log");
}
function combineReturn(num1, num2) {
    return num1 + num2;
}
function customError(message) {
    throw new Error(message);
}
function createPerson(name) {
    return {
        name,
    };
}
const person = createPerson("nikita");
function createServerPerson(name) {
    return eval(`(() => {
    return {
      name : "${name}"
    }
  })()
  `);
}
function createPersonInServer(name) {
    return createServerPerson(name);
}
const user = createServerPerson("Alex");
console.log(user);
let foo;
foo = (param1, param2) => {
    console.log("some text foo");
};
function culc(num1, num2, callback) {
    return callback(num1, num2);
}
function addition(num1, num2) {
    return num1 + num2;
}
const result = culc(1, 2, addition);
console.log(result);
const person1 = {
    name: "John",
    showName() {
        console.log(this.name);
    },
};
const person2 = {
    name: "Max",
    showName() {
        console.log(this.name);
    },
};
person1.showName();
person2.showName();
class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
        this.type = type;
        this.street = street;
    }
    showAddress(add) {
        console.log("Address: " + this.street + " " + add);
    }
    addTenant(name) {
        this.tenants.push(name);
    }
    showType() {
        console.log("House type: " + this.type);
    }
    showTenants() {
        console.log("Tenants: " + this.tenants);
    }
}
const house = new House("Wood", "Middle-earth");
house.showAddress("");
const copyHouse = { showAddress: house.showAddress, street: "new address" };
house.addTenant("Nikita");
house.addTenant("Max");
house.showTenants();
console.log(house.type);
class StoneHouse extends House {
    constructor(street, general) {
        super("stone", street);
        this.chargeOfTheHouse = general;
    }
    showTenants() {
        console.log("General: " + this.chargeOfTheHouse);
        super.showTenants();
    }
    showAddress() {
        console.log("Address: " + this.street);
    }
}
const stoneHouse = new StoneHouse("stone", "Max");
stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Victor");
stoneHouse.showTenants();
class UseStatic {
    constructor() {
        UseStatic.count += 1;
    }
    static isStaticMethod() {
        console.log("Im static method");
    }
    showCount() {
        console.log(UseStatic.count);
    }
}
UseStatic.count = 0;
const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();
obj1.showCount();
obj2.showCount();
obj3.showCount();
UseStatic.isStaticMethod();
class Plane {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() {
        this.pilotInCabin = true;
    }
}
class Maize extends Plane {
    startEngine() {
        return "Engine started ta-ta-ta";
    }
}
class Boeing extends Plane {
    startEngine() {
        return "Engine started voo-oo-oo";
    }
}
const maize = new Maize();
const boeing = new Boeing();
maize.sitInPlane();
boeing.sitInPlane();
console.log(maize.startEngine());
console.log(boeing.startEngine());
//# sourceMappingURL=app.js.map