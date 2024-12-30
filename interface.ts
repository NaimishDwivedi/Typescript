interface User {
    readonly dbId:number,
    email:string,
    userId : number,
    googleId?:string,
    // startTrial : () => string,
    startTrial():string,
    getCoupon(couponName:string,value:number): number//while passing the couponName, its not mandatory to use the couponName variable, we can use any variable name
}

//interfaces can be reopened i.e extra properties can be added

interface User {
  githubToken : string
}

interface Admin extends User{
  role:"admin" | "learner"
}








//using the interfaces with the functions

interface Greet {
  (name: string): string;
}

const sayName: Greet = (name: string) => {
  return `My name is ${name}`;
};

console.log(sayName('Naimish'));
