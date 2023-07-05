const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});

let num: number;

num = 10;

let str: string;

str = "Hello";

let arr: string[] = [];

arr = ["string"];

let arrNumber: number[] = [];

arrNumber = [1, 2, 3];

let arrAny: any[] = [];

arrAny = [1, 2, 3, {}, "string"];

let arrObj: { name: string }[] = [];

arrObj = [{ name: "string" }, { name: "nikita" }];

let obj: { name: string };

obj = {
  name: "Alex",
};

let db: {
  id: number;
  title: string;
  info?: {
    date: Date;
    isNew?: boolean;
  };
};

db = {
  id: 1,
  title: "string",
  info: {
    date: new Date(),
  },
};

let some: any;

some = "string";

some = 1;

let numNew: number;

numNew = some;

let undef: unknown;

undef = 10;

undef = "string";

let text: string;

if (typeof undef === "string") {
  text = undef;
}

//NOTE - Tuple
let fixed: [string, number];

fixed = ["string", 1];

//NOTE -  Enum
enum toggle {
  ENABLE,
  DISABLE,
}

const service = { status: toggle.ENABLE };

if (service.status === toggle.ENABLE) {
  console.log("it is active");
}

//NOTE - Union
let union: number | string;

function combine(param1: string | number, param2: string | number) {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1.toString() + param2.toString();
  } else {
    return param1 + param2;
  }
}

console.log(combine(1, 1));

//NOTE - Literal Type

let active: "start" | "end";

active = "start";

const fruit: string[] = [];

function workWithArr(arr: string[], value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
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

//NOTE - Return from function

function print(): void {
  console.log("Some log");
}

function combineReturn(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(message: string): never {
  throw new Error(message);
}

function createPerson(name: string) {
  return {
    name,
  };
}

const person = createPerson("nikita");

function createServerPerson(name: string) {
  return eval(`(() => {
    return {
      name : "${name}"
    }
  })()
  `);
}

function createPersonInServer(name: string): { name: string } {
  return createServerPerson(name);
}

const user = createServerPerson("Alex");

console.log(user);

//NOTE - Function types

let foo: (param1: number, param2: string) => void;

foo = (param1: number, param2: string) => {
  console.log("some text foo");
};

function culc(num1: number, num2: number, callback: (arrg1: number, arg2: number) => number): number {
  return callback(num1, num2);
}

function addition(num1: number, num2: number): number {
  return num1 + num2;
}
const result = culc(1, 2, addition);

console.log(result);

//NOTE - Custom types

type PersonType = {
  readonly name: string;
  age?: number;
  showName: () => void;
};

const person1: PersonType = {
  name: "John",
  showName() {
    console.log(this.name);
  },
};

const person2: PersonType = {
  name: "Max",
  showName() {
    console.log(this.name);
  },
};

person1.showName();
person2.showName();

//NOTE - Classes

class House {
  private tenants: string[] = [];

  constructor(public readonly type: string, protected street: string) {
    this.type = type;
    this.street = street;
  }
  public showAddress(this: House, add?: string): void {
    console.log("Address: " + this.street + " " + add);
  }

  public addTenant(name: string) {
    this.tenants.push(name);
  }

  public showType() {
    console.log("House type: " + this.type);
  }
  public showTenants() {
    console.log("Tenants: " + this.tenants);
  }
}

const house = new House("Wood", "Middle-earth");

//NOTE - Methods

house.showAddress("");

const copyHouse = { showAddress: house.showAddress, street: "new address" };

// copyHouse.showAddress("string");

house.addTenant("Nikita");
house.addTenant("Max");

house.showTenants();

console.log(house.type);

// house.type = "";

class StoneHouse extends House {
  private chargeOfTheHouse: string;
  constructor(street: string, general: string) {
    super("stone", street);

    this.chargeOfTheHouse = general;
  }

  public showTenants(): void {
    console.log("General: " + this.chargeOfTheHouse);
    super.showTenants();
  }

  public showAddress(): void {
    console.log("Address: " + this.street);
  }
}

const stoneHouse = new StoneHouse("stone", "Max");

stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Victor");

stoneHouse.showTenants();

//NOTE - Static

class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static isStaticMethod() {
    console.log("Im static method");
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.isStaticMethod();

//NOTE - Abstract classes

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): string;
}

class Maize extends Plane {
  public startEngine(): string {
    return "Engine started ta-ta-ta";
  }
}

class Boeing extends Plane {
  public startEngine(): string {
    return "Engine started voo-oo-oo";
  }
}

const maize = new Maize();
const boeing = new Boeing();

maize.sitInPlane();
boeing.sitInPlane();

console.log(maize.startEngine());
console.log(boeing.startEngine());
