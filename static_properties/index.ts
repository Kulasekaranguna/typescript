class user {
    name: string;
    static totalusers:number = 0;

    constructor(name: string){
        this.name = name;
        user.totalusers++;
    }
    greet(){
        return `Hello ${this.name}`;
    }

    
}
let user1 = new user("guna");
let user2 = new user("kulasekaran");
console.log(user2.greet());
console.log(user.totalusers);