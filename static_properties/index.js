var user = /** @class */ (function () {
    function user(name) {
        this.name = name;
        user.totalusers++;
    }
    user.prototype.greet = function () {
        return "Hello ".concat(this.name);
    };
    user.totalusers = 0;
    return user;
}());
var user1 = new user("guna");
var user2 = new user("kulasekaran");
console.log(user2.greet());
console.log(user.totalusers);
