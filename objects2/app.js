//Objeto literal
  const dog = {
  //key: value
  raza: 'quiltro',
  peso: 15,
  nombre: 'Suave lomito',
  color: 'negro'
  
  //Dot notation => dog['peso] = 15
  //dog.nombre = 'Suave Lomito'
}

//OBJETO CONSTRUCTOR

class Person {
  constructor(name, lastName){
    this.name = name,
    this.lastName = lastName
  }
  greeting(){
   //console.log(`Hola a todas! mi nombre es ${this.name} ${this.lastname}`);
   //let miranda = new Person ('Miranda', 'Naranjo')
   //lastName: 'Naranjo'
   //name: 'Miranda'
   //miranda.greeting() => Hola a todas! mi nombre es Miranda Naranjo 
  }
}

let miranda = new Person ('Miranda', 'Naranjo');
miranda.greeting(); //ejecuta método

miranda.__proto__; // padre de la instancia (class Person)
miranda.__proto__.__proto__; // Padre del objeto constructor Person

miranda.age= 28 //agrega una nueva propiedad a miranda

//hasOwnproperty() - evalua si la propiedad existe o no, solo utiliza booleans
miranda.hasOwnProperty ('age') //true
miranda.hasOwnProperty ('gender') //false
miranda.hasOwnProperty ('gretting') //false
miranda.__proto__.hasOwnProperty ('greeting') //true

let fabian = new Person ('Fabián', 'Bravo');
//Comprobar si comparten el mismo prototipo (padre) /Miranda y Fabián
// miranda.__proto__ === fabian.__proto__ //true

//fabian.greeting() = Hola a todas! Mi nombre es Fabián

//Agregando un método al prototipo, pero indicándoselo a la instancia del objeto
fabian.__proto__.goodbye = function () { return 'Chao pescao'}
fabian.goodbye() = "Chao pescao" //en la consola Chrome

class Coach extends Person {
  constructor (name, lastname){
    super(name, lastName)
  }
}