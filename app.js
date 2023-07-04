var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var num;
num = 10;
var str;
str = "Hello";
var arr = [];
arr = ["string"];
var arrNumber = [];
arrNumber = [1, 2, 3];
var arrAny = [];
arrAny = [1, 2, 3, {}, "string"];
var arrObj = [];
arrObj = [{ name: "string" }, { name: "nikita" }];
var obj;
obj = {
    name: "Alex",
};
var db;
db = {
    id: 1,
    title: "string",
    info: {
        date: new Date(),
    },
};
var some;
some = "string";
some = 1;
var numNew;
numNew = some;
var undef;
undef = 10;
undef = "string";
var text;
if (typeof undef === "string") {
    text = undef;
}
var fixed;
fixed = ["string", 1];
var toggle;
(function (toggle) {
    toggle[toggle["ENABLE"] = 0] = "ENABLE";
    toggle[toggle["DISABLE"] = 1] = "DISABLE";
})(toggle || (toggle = {}));
var service = { status: toggle.ENABLE };
if (service.status === toggle.ENABLE) {
    console.log("it is active");
}
var union;
function combine(param1, param2) {
    if (typeof param1 === "string" || typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
    else {
        return param1 + param2;
    }
}
console.log(combine(1, 1));
var active;
var fruit = [];
function workWithArr(arr, value, action) {
    if (action === "add") {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
workWithArr(fruit, "apple", "add");
workWithArr(fruit, "banana", "add");
workWithArr(fruit, "watermelon", "add");
console.log(fruit);
