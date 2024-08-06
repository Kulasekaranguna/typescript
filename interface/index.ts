interface users{
    firstName:string,
    lastName:string,
    age:number,
    email:string
}
function add (users:users){
    console.log(` Hello${users.firstName}
         Your details is:
          Name: ${users.firstName} ${users.lastName}, Age: ${users.age}, Email: ${users.email}`);
}
add({firstName:"kulasekaran",lastName:"guna", age:20 , email:"itzkulasekaran.email.com"});