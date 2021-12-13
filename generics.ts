//BEFORE
class ArrayOfNums {
  constructor(public collection: number[]){}

  get(index: number): number {
    return this.collection[index];
  }
}


class ArrayOfStrings {
  constructor(public collection: string){}

  get(index:number): string{
    return this.collection[index];
  }
}

//AFTER
class ArrayOfAnything<T> {
  constructor(public collection: T[]){}

  get(index: number): T {
    return this.collection[index];
  }
}

//if i dont put the <string> type inferance takes over and assumes the type
//of the collection
new ArrayOfAnything<string>(['a','b','c']);



//Example of genericts with functions

function printStrings(arr:string[]): void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void{
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}


function printAnything<T>(arr: T[]):void {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

printAnything<string>(['a','b','c'])
//no square brackets cause it would be a nested array
//typescript inspects the element and figures out the type
//No need for annotation for return type cause typescript works it out for 
//us BUT it is good practice to include it for error checks


//Generic Constraint

class Car {
  print(){
    console.log('I am a car');
  }
}

class House {
  print(){
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

//This is the Generic Constraint with the interface and extends
function printHousesOrCar<T extends Printable>(arr: T[]): void {
  for(let i = 0; i < arr.length; i++){
    //right now no guerantee that type T is gonna have a print function attached to it
    arr[i].print();
  }
}

printHousesOrCar<House>([new House(), new House()]);
printHousesOrCar<Car>([new Car(), new Car()]);

//A generic constraint will make a promise to TypeScript that there will be a
//print function avaliable to it