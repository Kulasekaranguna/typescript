function counter() {
    var count = 0;
    return {
        ingrment: function () {
            count++;
        },
        get: function () {
            return count;
        }
    };
}
var counter1 = counter();
counter1.ingrment();
console.log(counter1.get());
