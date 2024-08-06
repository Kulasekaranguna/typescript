function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Called ${propertyKey} with args: ${args}`);
      return originalMethod.apply(this, args);
    };
  }
  
  class MyClass {
    @logMethod
    myMethod(arg: string) {
      console.log(`Hello, ${arg}`);
    }
  }
  
  const myInstance = new MyClass();
  myInstance.myMethod("World");
  