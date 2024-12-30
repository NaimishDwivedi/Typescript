const user = {
    name:"naimish",
    email:"nd1372003@gmail.com",
    isActive :true
}


//objects are mainly used with the functions

function createUser({name:string,isPaid:boolean}){

}

createUser({name:"Naimish",isPaid:true})

function createCourse():{name:string,price:number}{
    return {name:"Tsc",price:99}
}
// createUser({name:"Naimish",isPaid:true,email:"nd@gmail.com"}) this will  give error because our function is designed to accept the two parameters but if make it in a variable then it works

const newUser = {name:"Naimish",isPaid:true,email:"nd@gmail.com"}

createUser(newUser)
export {}