var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
    }
    user.isage = function (age) {
        return age >= 18;
    };
    return user;
}());
console.log(user.isage(20));
