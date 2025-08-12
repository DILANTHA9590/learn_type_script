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
  let mixedArrey2: (string|number|boolean|boolean)[] =["dilantha",2,3,false ,true]

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



//how to work unnkown adn any types
// we cann asignn unkownveriables all types values
const myAny1:any = "w"
const myAny2:any = 2
const myAny3:any = [1,2,3,5]  


//working with  unkown
// unknown kiyanne type-safe version ekak any type eka wage.

// any widiyata unknown type eka wenasak — unknown value ekak assign karanna puluwan, habai e value eka use karanna (access karanna, call karanna, assign karanna) kalin type check karanna one.
// unknown type eka TypeScript ekata kiyanne: “Mama danne naha me variable eke type eka mokakda, so eka use karanna ape safety karanna one.”
// e nisa api nithra type check check karala ape logic eka create kranna oni 

let myUnkown:unknown = 4
// value.toUpperCase();  // Error! TS error: Object is of type 'unknown'.

// we want to check type before it using 

if (typeof myUnkown === "string") {
  // now TS knows value is string
  console.log(myUnkown.toUpperCase());
} else if (typeof myUnkown === "number") {
  console.log(myUnkown.toFixed(2));
} else {
  console.log("Unknown type");
}

// apit ameka  tyupe assertions  ekk dennath puluvn 
// ethakota eyae dena type ekata anuva wada karagena yanava 

// (myUnkown as string).toUpperCase()


// deap dive to custom types --------------------------------------------------------->
type Myname = string



type Myname2 = string|number
let name1:Myname = "dilantha";

// now we can assin number or string 
 let name2:Myname2= 2

// Learned how to use 'readonly' and 'optional' in TypeScript to prevent modification of object properties ---------------------------->
 //readonly use karam apita modify karann ba

 type dataTypes ={

    name :string,
  readonly  age : number,
    city? : string, //methana  optional dan dila thiyenne ethakota apita  object eke  e value eka anivarya na
    // me propety  eka use kre na kiyala compile err ekk enne na
 }


 const data1:dataTypes={

    name :"dilantha",
    age  : 12,
 city  :"ampra"


 }


//  data1.age = 12 we cant assin new data now. why now it readonly  readonly obj property we cant change
// optinal

let obje4:dataTypes={
    name:"dilantha",
    age:32,
    

}





// literals types ---------------------------------------->
// mekedi apita kiyanna puluvan me veriables walata me values 
// witharai assign kranna  puluvn kiyala  e vagema apata union type use karala   apita  mutiple values denna pulubvan
let  direction: string ="north";
direction="west"
direction ="kjkl"
// dan   me vage random string ekk nathuve me veraible ekkata assign kranna oni  north ,west east  , south yana value withrak nam
// apita literl type use rkann apuluvn   methandi string assign nokara   kelinma api nordth kiaya value eka denava 
//e avge,ma api union use krala me veriable ekata me value tika withrak  assign kranna hadnana puluvan( north ,west east  , south)

 


// let direction2: "North"|"East"|"West"|"South" = "North" //defalut sounth assig krala thiyenava apita 
// mehama nodi directin apita tupe use krannathpuluvan

type Direction =  "North"|"East"|"West"|"South" 

let direction2:Direction= "North"

direction2="North"
// "North"|"East"|"West"|"South"me value tikath assign kranna puluvan mevagen pita values assign karoth err!



// type narrow  
//mekedi function eke veraible ekata union use krala type narrowing  karanna puluvan 
// ekede tpe of usekrala union  type  eka anuva narow krann ap[uluvan]
//
// i created small function  for type naarowing and union and types using 

type myArreyTypse = number|string|boolean

function myArrey (val:(myArreyTypse)[]): void{
let typeNumber:number[]=[];
let typeString:string[]=[];


    
    for(const item of val){


        console.log(item);

        let data = item

    if(typeof item==="number"){
        typeNumber.push(item)
    }

    else if(typeof item ==="string"){
        typeString.push(item)
    }


    else{
        continue
    }

    }



console.log("myArraynumber",typeNumber)

console.log("myArrayString",typeString)
}

let myArrey1:(myArreyTypse)[]=[1,2,3,4,5,6,7,8,9,0,"dilantha",false];


myArrey(myArrey1);

// Discriminating type-------------------------------------------------------------------------> 

// Discriminated union කියන්නේ,
// එක type union එකක අලුත් types හඳුනාගන්න “tag” වගේ unique property එකක් use කිරීම.

// ඒකෙන් TypeScript (හෝ JavaScript) compiler එකට type narrowing කරන්න ලේසි වෙයි.

// මේකෙන් if/else, switch statement වලින් clear code ලියන්න පුළුවන්.


type circle ={

    type: "circle",
    radius:number

}

type squre ={
    type: "square"
    width:number,
    height:number
}


type shape = circle|squre

function  testOne(val:shape){

if(val.type ==="square"){
console.log(val.height);

}
else{
 console.log(val.radius);
}


}



testOne()