var user = /** @class */ (function () {
    function user(name, email) {
        this.name = name;
        this.email = email;
    }
    user.prototype.getname = function () {
        return this.name;
    };
    user.prototype.getemail = function () {
        return this.email;
    };
    user.prototype.setname = function (name) {
        this.name = name;
    };
    return user;
}());

var user1 = new user("guna", "jhdh@kjhsx.com");
console.log(user1.getname());
user1.setname("kulasekaran");
console.log(user1.getname());
