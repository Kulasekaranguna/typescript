function add(users) {
    console.log(" Hello".concat(users.firstName, "\n         Your details is:\n          Name: ").concat(users.firstName, " ").concat(users.lastName, ", Age: ").concat(users.age, ", Email: ").concat(users.email));
}
add({ firstName: "kulasekaran", lastName: "guna", age: 20, email: "itzkulasekaran.email.com" });
