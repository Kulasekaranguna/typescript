var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    user.prototype.greet = function () {
        return "Hello ".concat(this.name, ", your email is ").concat(this.email, " and age is ").concat(this.age);
    };
    return user;
}());
var admin = /** @class */ (function (_super) {
    __extends(admin, _super);
    function admin(name, email, age, role) {
        var _this = _super.call(this, name, email, age) || this;
        _this.role = role;
        _this.role = role;
        return _this;
    }
    admin.prototype.greet = function () {
        return "Hello ".concat(this.name, ", your email is ").concat(this.email, " and age is ").concat(this.age, " and your role is ").concat(this.role);
    };
    return admin;
}(user));
var user1 = new user("kulasekaran", "itzkulasekaran@gmail.com", 43);
var admin1 = new admin("guna", "admin@in", 23, "admin");
console.log(admin1.greet());
