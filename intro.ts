let name:string = "Naimish";

console.log(name)


let age:number = 21





function addNum(n:number){
    return n + 5;
}

addNum(5)


let myName = (name:string) => {
    return name.toUpperCase()
}

myName("4")


// function signUp(name:string,password:number){
//     if(name && password){
//         return "Valid user"
//     }
//     return "Enter correct name and password"
// }

function signUp(name:string,password:number){
    // if(name && password)?"valid":"invalid"
    return (name && password) ? "valid" : "invalid";
}


function login(n:number):boolean{
    if(n>18){
        return true
    }
    return "You are not eligible"
}

console.log(signUp("naimish",123));

const heros = ["1","2","3"]

heros.map((hero):string => {
    return hero
})



//if a function is not returning any value, it is recommended to use void to indicate its significance

function logName(name:string):void{
    console.log("Hell Naimish");
    
}

//sometimes a function is supposed that it will never returns any value, then never is used

function showErr (message:string):never {
    throw new Error(message)
}

export {}