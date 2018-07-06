//Objeto literal
//Forma 1
const obj = {
    key: 'value'
}
//Forma 2
const obj = {
    'key': 'value'
}

//Dos formas de acceder a un objet

key.value // dot notation

ke['value'] //corchetes

//Agregar nuevas keys

objeto.nuevapropiedad = nuevoValor

objeto ['nuevapropiedad'] = nuevoValor

//Ejemplo de objeto literal con método

const laboratorian ={
gender: 'female',
techSkills: ['JS', 'Git', 'Github', 'UX', 'HTML5', 'CSS3'],
//Método
study: (condition, skills) => {
//     console.log('Hola, mi género es ' + laboratorian.gender + ' y me especializo en ' + laboratorian.techSkills[0]);
    
//Template string
console.log(`Hola mi género es ${laboratorian.gender} y me especializo en ${laboratorian.techSkills[0]}`);

}
}

let bambi = new Person ('Loreto', 'Female', 28);
let teresita = new Person ('Loreto', 'Female', 36);
bambi.enjoy('Leer');


//Acceso al método
laboratorian.study()

//
const bambi = {}
bambi.nombre = 'Loreto';

//Constructor
//El nombre del objeto debe empezar con mayúscula al ser constructor
class Person {
  constructor (name, gender, age){ //propiedades
      this.name = name,
      this.gender = gender,
      this.age = age,
      this.hobbies = []

    }
//Se agrega el método/ Método: comportamiento del objeto
    enjoy (pasatiempos){
      this.hobbies.push(pasatiempos)
      return this.hobbies
    }
}

