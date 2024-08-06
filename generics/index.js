var stack = /** @class */ (function () {
    function stack() {
        this.array = [];
    }
    stack.prototype.push = function (item) {
        this.array.push(item);
    };
    stack.prototype.pop = function () {
        return this.array.pop();
    };
    return stack;
}());
var numStack = new stack();
numStack.push(1);
numStack.push(2);
numStack.push(3);
console.log(numStack.array);
console.log(numStack.pop());
var stringStack = new stack();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.array);
console.log(stringStack.pop());
