interface users{
    name : string;
    age :number;
}
let json = JSON.parse('{"name":"guna", "age":20}') as users;

console.log(`hello ${json.name}  your age is ${json.age}`);