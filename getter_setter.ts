class User {

    private _courseCount = 1
    constructor(public email:string,private name:string){
        this.email = email;
        this.name = name;
        
    }

    // getting started with getter and setter

    get courseCount():number{
        return this._courseCount
    }


    // set courseCount(courseNumber):void{

    // }

    set courseCount(courseNumber){
        this._courseCount = courseNumber
    }

}

export {}