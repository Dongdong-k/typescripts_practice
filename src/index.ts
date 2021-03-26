// 객체와 인터페이스의 구조는 동일해야함
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "dongdong",
  age: 30,
  gender: "male",
};

const sayHi = (person: Human): void => {
  console.log(
    `my name is ${person.name} and ${person.age} years old and my gender ${person.gender}`
  );
};

sayHi(person);

export {};
