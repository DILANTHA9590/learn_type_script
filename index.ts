let name: string ="dilantha"
let age : number = 20
let isTrue : boolean = false
let number1: number = 10
let number2: number = 20
let city : string ="ampara"
let mobilenumber:string="3333"
let undifineOne: undefined = undefined
let mynull : null =null

//create string arrey
let Number1:number[]=[1,2,3,4,5,6,7,8,9];
let string1:string[]=["a","b","c","e","f"];

//create mixed aarrey  with union type
 let mixedArrey1: (string|number)[] =["dilantha",2]
  let mixedArrey2: (string|number|boolean|boolean)[] =["dilantha",2,false ,true]

  //create t2d arrey


  const arrey:number[][] =[

    [1,2,3],[1,2,3]

  ]


  //fixed lenght  arrey 
  let fixedArrey1:[string,string]= ["car","bike"];

  let fixedArrey2:[string,number]= ["car", 23];

  let fixedArrey3:[string,number,number]=["car",32,32];



  //Objects


let user1: {name:string ,age:number, city:string} ={ //set types for alll keys

    name: "dilantha",
    age : 34,
    city :"ampara"

}



// working with object  duplicate type
//we can create for it custom type


type  User ={ //create custom type
    name:string,
    age:number,
    city:string
}
let user2: User ={ //set types for alll keys

    name: "dilantha",
    age : 34,
    city :"ampara"

}


let user3: User ={ //set types for alll keys

    name: "dilantha",
    age : 34,
    city :"ampara"

}
//learned how to  working with  functions  using ts

//want to parametr type  and retun type
function function1(a:number , b:number):number{
    return  a+b 



}

// If nothing is returned, the function should return void.

function function2(a:number , b:number):void{
    console.log(a+b)



}


function function3(a: number[]):void{

    

        console.log("my arrey ",a)

    

}

let array:number[] = [1,2,3,4,5];

function3(array);


//arow function same as



let function4= (a:number , b:number):void=>{

    console.log(a+b);

}



let function5=(a:number, b:number ):number=>{


    return a+b



}


// working with fnction with object 

function function6(userObj:{name:string,age:number}):void{

console.log( "myObject",userObj);

}






let userObj :{name:string ,age:number }={

    name:"dilantha",
    age :30

}

function6(userObj);



// working with function with object custom type 


 type newUser={
    name: string,
    age : 23
 }




function function7(user:newUser):void{

    console.log("mynew Users",user)

}



let userObj2 :newUser={

    name : "dilantha",
    age:23

}


let userObj3 :newUser={

    name : "dilantha nayanajith npx tsc",
    age:23

}

function7(userObj2);


function7(userObj3);