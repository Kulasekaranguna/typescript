class user{
    private name: string;
    private age: number;


    constructor(name:string, age:number){
        this.name = name;
        this.age = age;

    }

    greet(){
        return this.name + " " +this.age;
    }
}

let user1 = new user("kulasekaran", 20);
 let user2 = new user("guna", 21);