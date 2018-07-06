const tasks = [
  {
    name: 'Pasear al perro',
    duration: 40
  },
  {
    name: 'Estudiar JS',
    duration: 120
  },
  {
    name: 'Ver un capítulo de Aggretsuko',
    duration: 15
  },
  {
    name: 'Ir a clases',
    duration: 300
  },
  {
    name: 'Cepillar al gato',
    duration: 40
  },
  {
    name: 'Ver fail compilation en Youtube',
    duration: 120
  }
];

//Arreglo de tareas/ FOR
let taskNames = [];

for (let i = 0; i < tasks.length; i++) {
  taskNames.push(tasks[i].name);
}

//For each/ Hace lo mismo que for

let taskNames = [];
tasks.foreach ((tasks) => {
  taskNames.push(tasks.name)
})

//Refactorización de for each /Colocar en menos líneas lo anterior
let taskNames = [];
tasks.foreach (tasks => taskNames.push(tasks.name));

//MAP
//El nombre del parámetro debiese ser el mismo que el valor de retorno (tasks)
//retorna parámetro.propiedad (return tasks.name)
const taskNames = tasks.map((tasks) => {
  return tasks.name;
});

//Refactorizar MAP
const taskNames = tasks.map(tasks => tasks.name);

//Filter
//Con forEach

let difficultTasks = [];

tasks.forEach ((element) => {
  if (element.duration <= 120){
    difficultTasks.push(element);
  }
});

//filter
const difficultTasks = tasks.filter((index) => {
  return index.duration >= 120;
});

//refactorización filter
const difficultTasks = tasks.filter(index => index.duration >= 120);

//Reduce
//Primero usamos map para sacar la duración de las tareas
//[40, 120, 15, 300, 40, 120]
//635
// 40 + 120 = 160
// 160 + 15 = 175
// etc.
const taskDuration = tasks.map((element) => {
  //parámetro.propiedad
  return element.duration;
}).reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
})