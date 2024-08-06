class user{
    name:string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    greet(){
        return `Hello ${this.name}, your email is ${this.email} and age is ${this.age}`;
    }
}
class admin extends user{
   constructor(name:string, email:string, age:number, public role:string){
          super(name, email, age);
          this.role = role;
      }
      greet(){
        return `Hello ${this.name}, your email is ${this.email} and age is ${this.age} and your role is ${this.role}`;
      }
}
let user1  = new user("kulasekaran", "itzkulasekaran@gmail.com", 43 );
let admin1 = new admin("guna","admin@in",23,"admin");
console.log(admin1.greet());