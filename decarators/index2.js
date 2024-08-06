var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(target, propertyName, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Called ".concat(propertyName, " with args: ").concat(args.join(', ')));
        return originalMethod.apply(this, args);
    };
}
var myclass = /** @class */ (function () {
    function myclass() {
    }
    myclass.prototype.add = function (a, b) {
        return a + b;
    };
    myclass.prototype.subtract = function (a, b) {
        return a - b;
    };
    __decorate([
        logMethod
    ], myclass.prototype, "add", null);
    return myclass;
}());
var myclass1 = new myclass();
console.log(myclass1.add(1, 2));
console.log(myclass1.subtract(8, 2));
