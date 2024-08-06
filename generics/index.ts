class stack<T>{
    array:T[] = [];

    push(item:T){
        this.array.push(item);
    }
    pop(){
       return this.array.pop();
    }


}

let numStack = new stack<number>();
numStack.push(1);
numStack.push(2);
numStack.push(3);
console.log(numStack.array);
console.log(numStack.pop());
let stringStack = new stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.array);
console.log(stringStack.pop());