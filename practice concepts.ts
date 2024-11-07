//Typescript Simple Types

//1.three main Primitives- boolean,string,number
//2.less common primitives are bigint,symbol


//3.Type Assignment:- when creating a variable thaere are two main ways to assign a type
//->explicit
let firstName:string="Dylan"
//->Implicit
let firstName1="Dylan"



//4.any :- TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking
const json=JSON.parse("55");
console.log(typeof json);


//5.TypeScript special types
//-> Type:any :- any is a type to disable type checking and allow types to be used.
let u:any=true;
u="string";
Math.round(u)

//->Type unknown  ;- Unkown is similar, but safer alternative to any. It will prevent unknown types from being used
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}

if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
} 

//Type: never :- never throws an error whenever it is defined
let x:never=true;

//Type:Undefined & null :-  Undefined and null refers to JS primitives undefined and null respectively
let y:undefined=undefined;
let z:null=null


//6.TypeScript Arrays:- TS has specific syntax for typing arrays
const animals:string[]=[]
animals.push("Tiger")
console.log(animals)

//-> ReadOnly :- Readonly keyword can prevent arrays from being changed and make them readonly
const names1: readonly string[] = ["Ken"];
names.push("Jack");
console.log(names1)

//->Type inference :- TypeScript can infer ther type of an array if it has values.
const numbers=[1,2,3];
numbers.push(4)
let head:number=numbers[0]



//7.TypeScript Tuples :- A tuple is a typed array with predefined length and types for each index. To define a tuple,specify the type of each element in the array.
let ourTuple:[number,boolean,string] 
ourTuple=[5,true,"a"]
console.log(ourTuple)

//-> ReadOnly tuple
let ourTuple1:readonly [number,boolean,string]=[4,false,"b"]
console.log(ourTuple1)

//->Named tuples :- Named tuples allows us to provide context for our values at each index
const graph:[x:number,y:number]=[4,6]

//-> Destructuring Tuples :- Tuples are arrays we can also desturcure them
const graph1:[number,number]=[3,7]
const [a, b]=graph1


//8.TypeScript Object types:- Typescript has special syntax for typing objects
const car:{type:string, model:string, year:number}= {
    type:"Toyota",
    model:"Corolla",
    year:2000,
}

//->Type Inference :- TypeScript can infer types of properties based on their values
const car1:{type:string, model:string, year:number}= {
    type:"Toyota",
    model:"Corolla",
    year:2000,
}
car.type="Ford"
car.model="Sport"
car.year=2005

//-> Optional Properties:- Properties that don't have to be defined in the object definition
const car2:{type:string,mileage?:number,model:string, year:number}= {
    type:"Toyota",
    model:"Expo",
    year:2019,
}
car2.mileage=2000;

//->Index Signatures:- Index signatures can be used for objects without a defined list of properties
const nameAgeMap:{[index:string]:number}={}
nameAgeMap.Jack=25;
nameAgeMap.mark=40;



//8.Type Enums:- An enum is a special class that represents group of constants(unchangeable variables)

//->Numeric Enums:- By default,enums will initialize the first value to 0 and add 1 to each additional value
enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirections=CardinalDirections.North;
console.log(currentDirections)

//->Numeric enums initialized:- we can set the first numeric enum and have it auto increment from that
enum CardinalDirections {
    A= 1,
    B,
    C,
    D,
}
console.log(CardinalDirections.A)
console.log(CardinalDirections.D);


//Numeric Fully intitialized:- we can assign unique number values fot each enum value
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);


//String enums:- Enums can also contain strings
enum CardinalDirections {
    A1 = 'North',
    B1 = "East",
    C1 = "South",
    D1 = "West"
  };

console.log(CardinalDirections.A1)
console.log(CardinalDirections.C1);


//9.TypeScript: Type Aliases and interfaces
//TypeScript allows types to be defined seperately from the variables that use them
//Aliases and interfaces allow types to be easily shared between different variables/objects

//->Type Aliases:- allows defining types with a custom name(an alias)
type CarYear=number
type CarType=string
type CarModel= string
type Car= {
    year:CarYear,
    model:CarModel,
    type:CarType,
}
const caryear:CarYear=2001
const cartype: CarType = "Toyota"
const carmodel: CarModel = "Corolla"
const maincar: Car = {
  year: caryear,
  type: cartype,
  model: carmodel
};

//->Interfaces :- Interfaces are similar to type aliases, except they only apply to object types
interface Rectangle {
    height:number,
    width:number
}
const rectangle:Rectangle = {
    height:20,
    width:30
}

//->Extending interfaces :- Interfaces can extend eachother's definition
interface Square {
    height:number,
    width:number,
}
interface ColoredSquare extends Square {
    color:string;
}
const coloredSquare:ColoredSquare= {
    height:30,
    width:50,
    color:"red"
}



//10.Union Types:- Union types are used when a value can be more than a single type
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');


//11.Functions:- TypeScript has a special syntax for typing functions parameters and return values
function getTime():number {
    return new Date().getTime()
}

//->Void Return Type:- Used to indicate a function doesn't return any value
function printHello():void {
    console.log("Hello")
}

//->Parameters
function multiply(a:number,b:number) {
    return a*b
}

//->Optional Parameters
function add(a:number,b:number, c?:number) {
    return a+b+(c ||0 );
}

//->Default parameters
function pow(value:number,exponent:number=10) {
    return value ** exponent
}

//->Named Parameters
function divide({dividend,divisor}:{dividend:number,divisor:number}) {
    return dividend / divisor;
}

//->Rest parameters
function adding(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }

//->Type Alias:- Function types can be specified seperately from functions with type aliases
type Negate=(value:number)=> number;
const negateFunction: Negate = (value) => value * -1;



//12.TypeScript Casting:- Casting is the process of overriding a type

//->Casting with as
let x1:unknown='hello';
console.log((x as string).length)

//->Casting with <>:- it works same as casting with as
let x2:unknown="hello"
console.log((<string>x).length);

//->Force Casting:- To override type errors that ts may throw when caasting, first cast to unknown, then to the target type.
let x3="hello"
console.log(((x as unknown) as string).length)



//14.TS Classes:- TypeScript adds types and visibility modifiers to JS Classes

//->Members:Types
class Person {
    name:string
}
const person=new Person()
person.name="Jane";

//Members:Visibility:- Class members also be given special modifiers which affect visibility
//->3 main visibilities are public(default), private and protected
class Person1 {
    private name:string;
    public constructor(name:string) {
        this.name=name
    }
    public getName():string {
        return this.name
    }
}
const person1=new Person1("Jane")
console.log(person1.getName())

//->Parameter properties:- we can add visibility modifiers to parameter as well

class Person2 {
    public constructor(private name: string) {}
    public getName1(): string {
      return this.name;
    }
  }
const person2 = new Person2("Jane");
console.log(person2.getName1());

//->Readonly:- the readonly keyword can prevent class members from being changed.
class Person4 {
    private readonly name: string;
    public constructor(name: string) {
      this.name = name;
    }
    public getName(): string {
      return this.name;
    }
  }
const person4 = new Person4("Jane");
console.log(person4.getName());

//->Inheritance implements
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width1: number, protected readonly height1: number) {}
  
    public getArea(): number {
      return this.width1 * this.height1;
    }
  }

//->Inheritance extends:- Classes can exten eachother through extends keyword. A class can only extend one other class
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle1 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle1 {
    public constructor(width: number) {
      super(width, width);
    }

}

//->Override
interface Shape {
    getArea: () => number;
  }
  
  class Rectangle2 implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square1 extends Rectangle2 {
    public constructor(width: number) {
      super(width, width);
    }
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }


//->Abstract classes:- Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword
abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  class Rectangles extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }



//15.TS Basic Generics:- Generics allow creating type variables which can be used to create classes,functions & type aliases that don't need to explicitly define the types that they use.

//-> Functions
function createpairs<S,T>(v1:S,v2:T):[S,T] {
    return [v1,v2];
}
console.log(createpairs<string,number>('hello',42));

//->Classes:- Generics can be used to create generalized classes
class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString());

//->Type Aliases
type Wrapped<T> = {value:T};
const wrappedValue:Wrapped<number>={value:10};

//->Default value
class NamedValue<T = string> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value1 = new NamedValue('myNumber');
  value1.setValue('myValue');
  console.log(value.toString())


//->Extends
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }