class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const dongdong = new Human("dongdong", 30, "male");

const sayHi = (person: Human): void => {
  console.log(
    `my name is ${person.name} and ${person.age} years old and my gender ${person.gender}`
  );
};

sayHi(dongdong);

export {};
