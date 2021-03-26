"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "dongdong", age = 32, gender = "male";
// gender? 처럼 변수에 ? 표시를 해주는 것은 필수요소는 아니라는 의미
// function () => : voide {} , void 의미는 함수의 리턴 값을 아무것도 주지 않겠다는 의미, 함수 리턴값도 유형 선택가능
var sayHi = function (name, age, gender) {
    console.log("my name is " + name + " and " + age + " years old and my gender " + gender);
};
sayHi(name, age, gender);
//# sourceMappingURL=index.js.map