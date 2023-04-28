
// Dejo estas variables inicializadas para que se pueda apreciar el resultado del Ejercicio 2.
const firstArray = [0, 8, 5, "pepe", "luis", 3, 7];
const secondArray = [5, 7, 5, "pepe", "luis", 2, 7];

// 1er Ejercicio Ejemplo
console.log('Ejer 1')
console.log("Si desea crear una piramide de numeros ejecute el comando: dibujarPiramide(numeroQueDeseé)")
console.log(dibujarPiramide(8));
// 2do Ejercicio Ejemplo
console.log("Ejer 2")
console.log("Si desea probar la funcion conciden(parametro1, parametro2) Primero debe declarar dos arreglos.")
console.log("Un Ejemplo: ")
console.log(' const arreglo1 = [0, 8, 5, "pepe", "luis", 3, 7] ')
console.log(' const arreglo2 = [5, 7, 5, "pepe", "luis", 2, 7] ')
console.log("Luego llamo a la funcion coinciden(arreglo1, arreglo2)")
console.log("En los 2 arreglos ya inicializados se repiten los valores: " + coinciden(firstArray, secondArray));
// 3er Ejercicio Ejemplo
console.log("Ejer 3")
console.log("Para probar la resolucion del ejercicio 3 debe ejecutar miInventario.agregarProducto(nombreProducto, precioINT, unidadesINT)")
console.log('Hay ya declarado 3 objetos como ejemplo: ')
console.log('miInventario.agregarProducto("Leche", 10, 2)')
console.log('miInventario.agregarProducto("Ketchup", 5, 2)');
console.log('miInventario.agregarProducto("Leche", 25, 2); // Lanzará un error porque ya existe el producto Leche')

// Ejer 1:
// Esta funcion toma el numero ingresado por el usuario como parametro.
// Con ese numero se ejecuta un ciclo for donde imprime el numero.
// Dentro del ciclo for hay otro ciclo for (for anidados) que genera un espacio en blanco,
// esto genera un espaciado y evita que esten todos los valores juntos.
// El \n genera una nueva linea de codigo.

function dibujarPiramide(num) {
  let espacio = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      espacio += j;
    }
    espacio += "\n";
  }
  console.log(espacio);
}

// Ejer 2:
// Esta funcion recibe 2 arreglos y luego compara cada valor con el 2do arreglo.
// Si el valor coincide se agrega a un nuevo arreglo y se lo imprime al usuario.

function coinciden(firstArray, secondArray) {
  const concidencia = [];
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        concidencia.push(firstArray[i]);
        break;
      }
    }
  }
  return concidencia;
}

// Ejer 3:
// Con la clase ya definida lo que hice fue crear una variable montoTotal inicializada en 0
// En el metododo agregarProducto, si su nombre es igual a un producto ya definido en el array productos
// Va a lanzar un mensaje de error, y si su nombre no coincide va a crear y agregarlo al array productos
// Tambien va a actualizar el precio multiplicando su valor por las unidades del producto definido
// 
// Para crear nuevos productos hay que ejecutar miInventario.agregarProducto("nombre", precioINT, unidadesINT)
// Si abren la consola ya hay un ejemplo de la resolucion.

class Inventario {
  constructor() {
    this.productos = [];
    this.montoTotal = 0;
  }

  agregarProducto(nombre, precio, unidades) {
    let productoExistente = this.productos.find(
      (producto) => producto.nombre === nombre
    );

    if (productoExistente) {
      // Si existe, lanza un console.log() con el mensaje de error.
      console.log(
        `El producto "${nombre}" ya existe con ${productoExistente.unidades} unidades`
      );
    } else {
      // Si no existe, crea un nuevo producto y lo agrega al array de productos
      let nuevoProducto = { nombre, precio, unidades };
      this.productos.push(nuevoProducto);

      // Actualiza el monto total
      this.montoTotal += precio * unidades;

      console.log(
        `Se ha agregado el producto "${nombre}" con un precio de $${precio} y ${unidades} unidades El Monto total es de ${this.montoTotal}`
      );
    }
  }
}

let miInventario = new Inventario();

miInventario.agregarProducto("Leche", 10, 2);
miInventario.agregarProducto("Ketchup", 5, 2);
miInventario.agregarProducto("Leche", 25, 2);