function logMethod(target:object, propertyName:string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Called ${propertyName} with args: ${args.join(', ')}`);
        return originalMethod.apply(this, args);
    }
}
class myclass {
    @logMethod
    add( a:number, b:number){
        return a+b;
    }
    

    subtract(a:number, b:number){
        return a-b;
    }

}
const myclass1 = new myclass();
console.log(myclass1.add(1, 2));
console.log(myclass1.subtract(8, 2));