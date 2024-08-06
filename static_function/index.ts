class user {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    static isage(age:number){
      return  age >= 18;
    }
}
console.log(user.isage(20)); 