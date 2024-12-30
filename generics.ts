const score : Array<number> = []
const names : Array<string> = []


function identity1(val:number | string): number | string{
    return val
}


function identity2(val:any):any{
    return val
}


function identity3<Type>(val:Type):Type{ //it is similar to any but when we give some input, the value is logged, it will return that value itself

    return val
}


//another short way to write the generics, the benefit of the generics that we can define our own types and pass it as types in generics
function identity4<T>(val:T):T{ //it is similar to any but when we give some input, the value is logged, it will return that value itself

    return val
}



interface Bottle{
    brand:string,
    type:number
}

identity4<Bottle>({})

identity2(1);


identity3("Naimish");
identity3(2);
identity3(true);



//generics in array and arrow functions

function getSearchProduct<T>(product:T[]):T{
    // if we return 3, it will give error as in generics the value is locked, so you have to return the product itself, if  you want to return 3 or any value, you have to specify it in return type instead of T, T is a value from the T[]
    const myIndex = 3;

    return product[myIndex];
}

//generics in arrow function
const getMoreSearchProduct = <T> (products:T[]):T => {

    return products["n"]
}


//in react and etc. we have following syntax also, it is just to indicate that <T> is not a jsx or html tag

const getMoreSearchProduct2 = <T,> (products:T[]):T => {

    return products["n"]
}





//generic classes

interface Quiz {
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}


class Sellable <T> {
    public cart : T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}