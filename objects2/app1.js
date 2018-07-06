class Person {
  constructor(name, lastName){
    this.name = name,
    this.lastName = lastName
  }
  greeting(){

  console.log(`Hola a todas! mi nombre es ${tshis.name} ${this.lastname}`);
  }
}

class Coach extends Person {
  constructor (name, lastname){
    super(name, lastName);
    this.track = 'Front end';
  }
}

let majo = new Person ('Majo', 'Salazar');