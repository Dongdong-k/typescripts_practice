"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Human;
}());
var dongdong = new Human("dongdong", 30, "male");
var sayHi = function (person) {
    console.log("my name is " + person.name + " and " + person.age + " years old and my gender " + person.gender);
};
sayHi(dongdong);
//# sourceMappingURL=index.js.map