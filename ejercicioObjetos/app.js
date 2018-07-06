// Crear un objeto constructor llamado rectangle que tenga las propiedades base y height
// El valor de estas propiedades son los parámetros ingresados
// Crea tres instancias y muestra el resultado del área

//Constructor
class Rectangle{
    constructor (base, height){ //propiedades
        this.base = base,
        this.height = height
}
//Método:comportamiento de mi objeto
area(){
    return this.base * this. height;
}
}

//Crear instancias

let rectangulito = new Rectangle(10, 5);
let rectangulote = new Rectangle(20, 10);
let rectangulais = new Rectangle (15,5);

//Ejemplo hecho en la consola, agregando lo de arriba
// let rectangulito = new Rectangle(10, 5);
// undefined
// rectangulito.area()
// 50
// let rectangulote = new Rectangle(20, 10);
// undefined
// rectangulote.area()
// 200
// let rectangulais = new Rectangle (15,5);
// undefined
// rectangulais.area()
// 75