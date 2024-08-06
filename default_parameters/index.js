function add(a, b, c) {
    if (c === void 0) { c = "cat"; }
    return a + b + c;
}
console.log(add("a", "b", "c"));
console.log(add("a", "b"));
