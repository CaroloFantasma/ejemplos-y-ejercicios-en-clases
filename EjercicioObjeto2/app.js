// Escribir un objeto llamado Person que reciba como parámetro las propiedades name, day, month, year (año de nacimiento)
// Agregar un método del objeto que calcule su edad en base a la fecha de nacimiento ingresada, retornar la edad como en el siguiente ejemploEjemplo:
// Ejemplo: *La edad de Alexandra es 19*

class Person{
 constructor (name, day, month, year){
    this.name = name,
    this.day = day,
    this.month = month,
    this.year = year
}
//método
age() {
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let result;
//El mes comienza en 0
    if (this.month > month) {
      result = year - this.year - 1
    } else if(this.month < month){
      result = year - this.year;
    }
    console.log(`La edad de ${this.name} es + ${result}`);
    
}
}

