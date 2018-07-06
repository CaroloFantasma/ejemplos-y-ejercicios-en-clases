// let names = [];
// //Let names = new array;
// names [0]= 'Paula';
// names [1]= 'Majo';

// names.push('Majo', 'Teresita', 20, 'Papelucho', true, false)

// names.pop();

// //SLICE

// const names = ['Ale', 'Aggretsuko', 'Hello Kitty', 'Violeta', 'Tangananica', 'Tanganana'] 


//Arreglo de objetos

const students = [
  {
    name: 'Violeta',
    track: 'common core',
    status: true
  },
  {
    name: 'Alejandra',
    track: 'common core',
    status: true  
  },
  {
    name: 'Vanessa',
    track: 'common core',
    status: true
  },
  {
    name: 'Nataly',
    track: 'common core',
    status: true
  }
]
students [2].status
//true

students [0].name
// 'Violeta'

for (let i = 0; i < students.length; i++) {
  console.log(students[1].name);
 }

 //Sumen los números 10, 20, 30, 40, 50
 //Primera versión
 const addition = (n1, n2, n3, n4, n5) => {
   return n1 + n2 + n3 + n4 + n5;
 }

 //Segunda versión de la suma -> Spread operator
 const addition = (...sumandos) =>{
   console.log(sumandos);
 }

// [10, 20, 30, 40, 50]
const addition = (arr) => {
  let suma = 0;
for (let i = 0; i < arr.length; i++) {
  suma += arr[i];
  //suma = suma + arr[i];
  }
  return suma;
}

//Reduce
const addition = (arr) =>{
  //Los parámetros que puede recibir reduce: previousValue, currentValue, index, array
  const reduceArr = arr.reduce((previousValue, currentValue) => {
    console.log(`El valor previo es: ${previousValue} `)
    console.log(`El valor actual es: ${currentValue} `)

  }), 
}

const arr = ['g', 'a', 'r', 'y']
const myLove = (arr) => {
  const reduceArr = arr.reduce ((previousValue, currentValue) =>{
    return previousValue + currentValue
  }),
}

//For normal

const arr= [1, 2, 3, 4, 5];
let newArr = [];
for (let i = 0; i < arr.length; i++){
  newArr.push(arr[i]*2)
  //newArr = [2, 4, 6, 8, 10]
}

//MAP
const arr = [1, 2, 3, 4, 5];
const multiply = arr.map((indice) => {
  return indice*2
})

//Refactorización
const arr = [1, 2, 3, 4, 5];
const multiply = arr.map(indice => indice*2);

//For normal /Filter

const numbers = [1, 2, 5, 8, 10, 12, 13]
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers [i] % 2 === 0) {
    newNumbers.push (numbers[i]);
  }
  
}
//Refactorizar/Filter
const numbers = [1, 2, 5, 8, 10, 12, 13]
const newNumbers = numbers.filter(elemento => elemento % 2 === 0);

//Sort

const compareNumeric = (a, b) => {
  return a - b;
}



