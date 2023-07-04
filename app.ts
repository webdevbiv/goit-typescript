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

let fixed: [string, number];

fixed = ["string", 1];

enum toggle {
  ENABLE,
  DISABLE,
}

const service = { status: toggle.ENABLE };

if (service.status === toggle.ENABLE) {
  console.log("it is active");
}

let union: number | string;

function combine(param1: string | number, param2: string | number) {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1.toString() + param2.toString();
  } else {
    return param1 + param2;
  }
}

console.log(combine(1, 1));

let active: "start" | "end";

const fruit = [];

function workWithArr(arr, value: string, action: "add" | "delete") {
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

console.log(fruit);
