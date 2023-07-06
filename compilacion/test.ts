// TypeScript funciona en tiempode compilacion 

// inferencia de datos

const a = 1 
const b = 2
const c = a + b

// con un objeto
const obj ={
  name: 'pepe',
  age: 32
}
// obj.name = 10 => error variablde de tipo string

// funciones 
function suma (a: number, b: number){ // tipos de nuemros
  return a+b
} // suma('a', 'b') no se puede enviar strings a numeros

// ---------- read only
type Hero = {
  readonly id: number,
  name: string,
  age: number,
  isActive?: boolean 
}//hero id = 34 => es una propiedad de solo lectura

const hero : Hero = {
  id: 1,
  name: 'MilesMorales',
  age: 22,
  isActive: true
}

// ------------ union types template----------
type Color = `#${string}` 

const hexadecimalColor : Color = '#ff0000' // forza q se escriba # segun la plantilla declarada

// -------------- Arrays-------------------
const lenguajes: string[] = [] // string [] de tipo
lenguajes.push('type')
  //lenguajes.push(2)
  //lenguajes.push(true) // se debe tipar el tipo de array 

//------------- tuplas --------------------
// const board: Array<Array<string>>=[  // otra forma 
const board: string [][]=[ // array de arrays => o matriz de 3 x 3
  ['X','',''],
  ['','X',''],
  ['','','O']
]
  // forma cons restriccion de 3 x 3
type cellValue = 'X' | 'O' | ''

const gameBoard: [
  [cellValue, cellValue, cellValue], // modelo inmutable de la tupla
  [cellValue, cellValue, cellValue],
  [cellValue, cellValue, cellValue]
] = [
  ['X','O','X'],
  ['X','O','X'],
  ['X','O','X']
]

// otro ejemplo con readonly
type RGB = readonly [number, number, number];
const Black: RGB = [0,0,0]
const  White: RGB = [255,255,255]

// Black.push(4) => esto ya no esvalido por readonly 



// diferencia de tipos e interfaces


