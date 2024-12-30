// class User {
//     //anything which is not specified is public by default
//     //it is important that the private keyword is the part of typescript world and the # is the part of the javascript world
//     public email:string
//     #name:string
//     private readonly city :string = "Jaipur" //only use in the class only
//     constructor(email:string,name:string){
//         this.email = email;
//         this.#name = name;
        
//     }

// }

class User {
    constructor(public email:string,private name:string){
        this.email = email;
        this.name = name;
        
    }

}


const naimish = new User("nd@email.com","naimish")

// naimish.city = "Mumbai"

