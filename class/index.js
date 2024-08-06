var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.prototype.greet = function () {
        return this.name + " " + this.age;
    };
    return user;
}());
var user1 = new user("kulasekaran", 20);
var user2 = new user("guna", 21);
console.log(user2.greet())

