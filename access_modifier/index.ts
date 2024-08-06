class user{
    private name: string;
     private email: string;
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
    public getname(){
        return this.name;
    }
    public getemail(){
        return this.email;
    }
    public setname(name: string){
        
        this.name = name;
    }
    
}
let user1 = new user ("guna","jhdh@kjhsx.com");
console.log(user1.getname());
user1.setname("kulasekaran");
console.log(user1.getname());