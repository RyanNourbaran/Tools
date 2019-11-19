class User {
  private name: string;
  public email: string;
  protected age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log("user created");
  }

  protected registerMethod() {
    console.log("Registering " + this.name);
  }
}
let arya = new User("arya", "@.com", 23);
//arya.registerMethod(); //method protected and only accesible from class or other inherited classes

// inheritance
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  registerMethod() {
    super.registerMethod();
  }
}

let mike = new Member(10, "mike", "@", 25);
mike.registerMethod();

interface UserInterface {
  name: string;
  email: string;
  age: number;
  registerMethod();
}
