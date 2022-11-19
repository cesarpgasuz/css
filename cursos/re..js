///strings
// const producto = 'Monitor 20 Pulgadas';
// const producto2 = String("Monitor 20 Pulgadas");
// const producto3 = new String('Monitor 20 Pulgadas');

// //escapar comillas con diagonal invertida
// const producto4 = "Monitor 20\"";





// ///////// metodos para strings //////////////
// const producto = 'Monitor 20 Pulgadas';

// // => .length  (conocer la cantidad de letras en la cadena de texto)
// console.log(producto.length);  //19

// // => .indexOf
// // conocer la posicion de una cadena de texto.
// console.log(producto.indexOf('Pulgadas'));  // posicion 11

// // => .includes
// //conoces si una palabra se encuentra en una cadena de texto
// // revisa por mayusculas y minusculas
// console.log(producto.includes('Monitor'));  //true
// console.log(producto.includes('Tablet'));   //false
// console.log(producto.includes('monitor'));  //false




// ///// contatenar 
// const producto = 'Monitor ';
// const precio = '30 USD ';

// // => .concat
// //solamente strings
// console.log(producto.concat(precio)); // Monitor 30 USD
// console.log(producto.concat('En descuento')); //Monitor En descuento

// // => +
// console.log(producto + precio);  //Monitor 30 USD
// console.log("El producto " + producto + "tiene un precio de " + precio);
// console.log("El producto " , producto , "tiene un precio de " , precio);
//    //El producto Monitor tiene un precio de 30 USD 

// // template string (backtick) ``
// console.log(`El producto ${producto} tiene un precio de ${precio}`);
//    //El producto Monitor  tiene un precio de 30 USD 




// //eliminar espacio en blanco inicio y final strings
// const producto = '    Monitor 20 Pulgadas     ';

// // => .trimStart
// // eliminar el espacio en blanco del inicio
// console.log(producto.trimStart());

// // => .trimEnd
// // eliminar el espacio en blanco del final
// console.log(producto.trimEnd());

// //eliminar espacio en blanco en ambas direcciones
// console.log(producto.trimStart().trimEnd()); //mas reciente
// console.log(producto.trim()); // ya tiene mas tiempo



// const producto = 'Monitor 20 Pulgadas';

// // => .replace (remplazar textos (strings))
// console.log(producto.replace('Pulgadas', '"'));  // Monitor 20 "
// console.log(producto.replace('Monitor', 'Monitor Curvo'));  //Monitor Curvo 20 Pulgadas

// // => .slice para cortar
// console.log(producto.slice(0,10)); 
//     // Monitor 20 
//     //inicia en 0 y termina en los 10 caracteres
// console.log(producto.slice(8));    
//     // 20 Pulgadas 
//     // si no se pasa el segundo valor corta desde la posicion escrita
// console.log(producto.slice(2,1));  
//     // 
//     // no hace nada si el primer numero es mayor
                              
// // => .substring  (alternativa a slice)
// console.log(producto.substring(0,10)); 
//     // Monitor 20
//     // se comporta igual
// console.log(producto.substring(2,1));
//     // o
//     // si el primer numero es mayor substring modifica el orden  .substring(1,2)
//     // principal diferencia

// // => . chartAt (corta en la posicion que se le pasa)
// const usuario = 'Cesar';
// console.log(usuario.charAt(0)); // C
// console.log(usuario.charAt(1)); // e
// console.log(usuario.charAt(4)); // r




// const producto = 'Monitor 20 Pulgadas';

// // => .repeat (repite una cadena de texto);
// const texto = 'En Promocion '.repeat(3);  
// console.log(texto);   // En Promocion En Promocion En Promocion 
//                       // un numero que no es entero lo redondea

// console.log(`${producto} ${texto} !!!`);
// // Monitor 20 Pulgadas En Promocion En Promocion En Promocion  !!!

// // => .split  (divide un string)
// const actividad = 'Estoy aprendiendo JavaScript Moderno';
// console.log(actividad.split(" "));
// // (4) ['Estoy', 'aprendiendo', 'JavaScript', 'Moderno']
// // 0: "Estoy"
// // 1: "aprendiendo"
// // 2: "JavaScript"
// // 3: "Moderno"
// // length: 4

// const hobbies = 'Leer, caminar, escuchar música, escribir';
// console.log(hobbies.split(", "));
// // (4) ['Leer', 'caminar', 'escuchar música', 'escribir']
// // 0: "Leer"
// // 1: "caminar"
// // 2: "escuchar música"
// // 3: "escribir"
// // length: 4

// const tweet = 'Aprendiendo JavaScript #JSModerno';
// console.log(tweet.split("#"));
// // (2) ['Aprendiendo JavaScript ', 'JSModerno']



// const producto = 'Monitor 20 Pulgadas';

// // => .toUpperCase  (convierte a mayusculas);
// console.log(producto.toUpperCase());
// // MONITOR 20 PULGADAS

// // => .toLowerCase (convierte a minusculas);
// console.log(producto.toLowerCase());
// // monitor 20 pulgadas

// // => .toStrong  (convierte a string)
// const precio = 300;
// console.log(precio.toString());


// // creacion de numeros

// const numero1 = 30;
// console.log(numero1); // 30

// const numero2 = 20;
// console.log(numero2); // 20

// const numero3 = 20.20;
// console.log(numero3); // 20.2

// const numero4 = .10234;
// console.log(numero4); // 0.10234

// const numero5 = -20;
// console.log(numero5); // -20


// //operaciones con numeros

// const numero1 = 30;
// const numero2 = 20;

// let resultado;

// //suma
// resultado = numero1 + numero2;
// console.log(resultado); // 50

// //resta
// resultado = numero1 - numero2;
// console.log(resultado); // 10

// //multiplicacion
// resultado = numero1 * numero2;
// console.log(resultado); // 600

// //division
// resultado = numero1 / numero2;
// console.log(resultado); // 1.5

// //modulo
// resultado = numero1 % numero2;
// console.log(resultado); // 10




// //Math
 
// let resultado;

// //PI
// resultado = Math.PI   //3.14159265358979

// //Redondear
// resultado = Math.round(2.8); //3
// resultado = Math.round(2.2); //2
// resultado = Math.round(2.5); //3

// // Redondear hacia arriba
// resultado = Math.ceil(2.1); //3

// // Redondear hacia abajo
// resultado = Math.floor(2.9); //2

// //Minimo
// resultado = Math.min(3,5,1,12,); // 1
// resultado = Math.min(3,5,12,1,-12); // -12

// //Maximo
// resultado = Math.max(3,5,1,12,); // 12

// console.log(resultado)


// //incrementos y decrementos

// let puntaje = 5;

// puntaje++; //5  lo aumenta depues de llamarlo otra vez
// ++puntaje; //6

// puntaje--; //5  lo disminuye depues de llamarlo otra vez
// --puntaje; //4 


// puntaje += 3; // 8  incrementa 3
// puntaje += 3; // 11

// puntaje -= 3; // 8 decrementa 3
// puntaje -= 3; // 5

// console.log(puntaje);



// //Convertir Strings a numeros

// // => parseInt (convierte a entero)
// const numero1 = "20";
// console.log(parseInt(numero1)); // 20
// console.log(Number.parseInt(numero1)); //20

// const numero2 = "20.8";
// console.log(parseInt(numero2)); // 20

// const numero3 = "Uno";
// console.log(parseInt(numero3)); // NaN  (no es un numero)

// const numero4 = "15etr55";
// console.log(parseInt(numero4)); // 15 
// console.log(Number.parseInt(numero4)); // 15 
// //toma en cuenta todos los numero del inicio e ignora los puntos
// //y cualquier otro caracter

// const numero5 = "etr55";
// console.log(parseInt(numero5)); // NaN  (no es un numero)

// // => parseFloat (es flotante.. toma en cuenta los decimales)
// const numero6 = "20.2";
// console.log(parseFloat(numero6)); // 20.2
// console.log(Number.parseFloat(numero6)); // 20.2

// const numero7 = "25.5ee";
// console.log(parseFloat(numero7)); // 25.5
// console.log(Number.parseFloat(numero7)); // 25.5
// //toma en cuenta todos los numero del inicio y los puntos
// //e ignora cualquier otro caracter


// // => Number
// const numero8 = "65";
// console.log(Number(numero8));  // 65

// const numero9 = "65.5";
// console.log(Number(numero9));  // 65.5

// const numero10 = "65.5ddd";
// console.log(Number(numero10));  //NaN  (no es un numero)

// //la diferencia entre Number y (parseInt y parseFloat)
// //esque number al encontrar otros caracteres mandara como nan
// // y parse los ignora (pero despues del numero)

// // => isInteger (comprueba si es entero o no)
// console.log(Number.isInteger(numero1)) //false

// const numero11 = 50;
// console.log(Number.isInteger(numero11)) //true



// //Operadores

// const numero1 = 20;
// const numero2 = "20";
// const numero3 = 30;

// // operador mayor a...
// console.log(numero1 > numero3); // false
// console.log(numero3 > numero1); // true

// //operador menor a ...
// console.log(numero1 < numero3); // true

// //////revisa si dos numero son iguales 

// // == comparacion (se fija solo en el valor)
// console.log(numero1 == numero3) // false
// console.log(numero1 == numero2) // true

// // === comparador estricto (se fija en el valor y tipo de dato)
// console.log(numero1 === numero2) // false
// console.log(numero1 === parseInt(numero2)) // true (usamos parseInt para convertir)

// // Diferente !=
// const password1 = "admin";
// const password2 = "Admin";

// console.log(password1 != password2); //true (si son diferentes)

// console.log(numero1 != numero2); // false (no son diferentes)

// // diferente estricto !==
// console.log(numero1 !== numero2) // true (si son diferentes)



// //comparar Null y undefined

// let numero;
// console.log(numero) // undefined

// let numero2 = null;
// console.log(numero2); //null

// console.log(numero == numero2); // true
// console.log(numero === numero2); // false

// // siempre hay que usar el comparador estricto



// // comparar boolean

// const boolean1 = true;
// const boolean2 = false;
// const boolean3 = 'true';

// console.log(boolean1 == boolean3); //false
// console.log(boolean1 == boolean2); //false


// // Buenas Practica Boolean

// ////////no hacer
// const autenticado = true;

// if(autenticado === true){
//     console.log('si puedes entrar');
// }else{
//     console.log('no puedes entrar');
// }

// ////// lo correcto
// if(autenticado){
//     console.log('si puedes entrar');
// }else{
//     console.log('no puedes entrar')
// }
// //dentro del if ya se da por implicito el true


// //////Objectos

// const nombre = 'Monitor 20 Pulgadas';
// const precio = 300;
// const disponible = true;

// //un objecto agrupa todo en una sola variable...

// // Object Literal
// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
// }

// console.log(producto);

// /*
// Object
// disponible: true
// nombre: "Monitor 20 Pulgadas"
// precio: 300
// */



// /// Acceder a los valores de un objeto
// // sintaxis de punto

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
// }

// // 1era Forma (más comun)
// console.log(producto.nombre);     // Monitor 20 Pulgadas
// console.log(producto.precio);     // 300
// console.log(producto.disponible); // true

// // 2da Forma (menos comun)
// // en algunos casos es muy util
// console.log(producto['nombre']); // Monitor 20 Pulgadas



// /// Agregar o Eliminar Nuevas Propiedades a un Objeto

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
// }

// //Agregar 
// producto.imagen = 'imagen.jpg'

// //Eliminar
// delete producto.disponible;

// console.log(producto)

// /*
//     nombre: 'Monitor 20 Pulgadas', 
//     precio: 300, 
//     imagen: 'imagen.jpg'
// */



// //// Destructuring

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
// }

// // forma anterior
// const nombre = producto.nombre; // Monitor 20 Pulgadas

// // nueva forma
// const {nombre, precio, disponible} = producto;
 
//     //> Monitor 20 Pulgadas
//     //> 300
//     //> true




// // Objetos dentro de Objetos

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true,
//     informacion: {
//         medidas: {
//             peso: '1kg',
//             medida: '1m'
//         },
//         fabricacion: {
//             pais: 'China'
//         }
//     }
// }

// console.log(producto.informacion.fabricacion.pais); // China



// /////Destructuring de Objectos Anidados

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true,
//     informacion: {
//         medidas: {
//             peso: '1kg',
//             medida: '1m'
//         },
//         fabricacion: {
//             pais: 'China'
//         }
//     }
// }

// const {nombre, informacion} = producto;
// console.log(nombre); // Monitor 20 Pulgadas
// console.log(informacion);
// /*
// fabricacion: 
//     pais: "China"
// medidas: 
//     medida: "1m"
//     peso: "1kg"
// */

// const {nombre, informacion: {fabricacion}} = producto;
// console.log(fabricacion); // pais: "China"

// const {nombre, informacion, informacion: {fabricacion, fabricacion : {pais}}} = producto
// console.log(fabricacion); // pais: "China"
// console.log(pais); // China

// ////Se agrega : { } para acceder al objecto que esta dentro de otro objecto


// //Object Metods

// //se utiliza para seguir buenas practicas y seguir las reglas
// "use strict";

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
//  }
    
//  producto.disponible = false;
//  producto.imagen = "imagen.jpg";

//  console.log(producto);
// /*
// disponible: false
// imagen: "imagen.jpg"
// nombre: "Monitor 20 Pulgadas"
// precio: 300
// */

// /////mala practica____ hay que usar use strict
// x = 20;
// console.log(x)


// //congelar objecto

// //> Object.freeze 
// // No permite modificar el objecto, no te permite hacer nada

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
//  }

//  Object.freeze(producto);

//  producto.disponible = false;
//  producto.imagen = 'imagen.jpg';
// delete producto.precio;

//  console.log(producto)

//  disponible: true
//  nombre: "Monitor 20 Pulgadas"
//  precio: 300

 
//  //saber si un objecto esta congelado
//  console.log(Object.isFrozen(producto)); //true




// //sellar objecto

// //> Object.seal 
// // no se pueden agregar o eliminar propiedades pero
// // si se pueden modificar las existentes

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
//  }

//  Object.seal(producto);

//  producto.disponible = false;
//  producto.imagen = 'imagen.jpg';
//  delete producto.precio;

//  console.log(producto)

//  /*
// disponible: false
// nombre: "Monitor 20 Pulgadas"
// precio: 300
// */
 
//  //saber si un objecto esta sellado
//  console.log(Object.isSealed(producto)); //true


// /// Unir dos objetos

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true
// }

// const medidas = {
//     peso: '1kg',
//     medida: '1m'
// }

// const resultado = Object.assign(producto, medidas);
// console.log(resultado);
// /*
// disponible: true
// medida: "1m"
// nombre: "Monitor 20 Pulgadas"
// peso: "1kg"
// precio: 300
// */

// // Spread Operator (es mas utilizada)
// const resultado2 = {...producto, ...medidas};
// console.log(resultado2);
// /*
// disponible: true
// medida: "1m"
// nombre: "Monitor 20 Pulgadas"
// peso: "1kg"
// precio: 300
// */



// ////// this 
// // (valores que existen en el mismo objeto)

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true,
//     mostrarInfo: function(){
//         console.log(`El producto ${this.nombre} cuesta ${this.precio}`);
//     }
// }

// producto.mostrarInfo();
// // El producto Monitor 20 Pulgadas cuesta 300


// const producto2 = {
//     nombre: 'Tablet',
//     precio: 100,
//     disponible: true,
//     mostrarInfo: function(){
//         console.log(`El producto ${this.nombre} cuesta ${this.precio}`);
//     }
// }

// producto2.mostrarInfo();
// // El producto Tablet cuesta 100




// /// Object Literal
// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true,
// }


// /////// Object Constructor
// function Producto(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.disponible = true;
// }

// const producto2 = new Producto('Monitor 24 Pulgadas', 500);
// console.log(producto2);
// /*
// disponible: true
// nombre: "Monitor 24 Pulgadas"
// precio: 500
// */

// const producto3 = new Producto('Television', 100);
// console.log(producto3);
// /*
// disponible: true
// nombre: "Television"
// precio: 100
// */

// // Aunque object contructor es mas dinamico se utiliza más
// // el object literal


// //// Object .keys, .values y .entries

// const producto = {
//     nombre: 'Monitor 20 Pulgadas',
//     precio: 300,
//     disponible: true,
// }

// console.log(Object.keys(producto));
// // (3) ['nombre', 'precio', 'disponible']

// console.log(Object.values(producto));
// // (3) ['Monitor 20 Pulgadas', 300, true]

// console.log(Object.entries(producto));
// /* (3) [Array(2), Array(2), Array(2)]

// 0: (2) ['nombre', 'Monitor 20 Pulgadas']
// 1: (2) ['precio', 300]
// 2: (2) ['disponible', true]

// */

// // > .keys retorna la parte izquierda
// // > .values retorna la parte derecha
// // > .entries retorna todo en pares





// ///// Arrays (Arreglos)
// ///// variable con multiples elementos

// const numeros = [10, 20, 30];
// console.log(numeros);  // (3) [10, 20, 30]

// //no es muy comun, pero existen casos
// const meses = new Array('Enero', 'Febrero', 'Marzo');
// console.log(meses); // (3) ['Enero', 'Febrero', 'Marzo']

// const deTodo = ['Hola', 10, true, null, {nombre: 'cesar', trabajo: 'programador'}, [1,2,3]];
// console.log(deTodo);
// /*
// (6) ['Hola', 10, true, null, {…}, Array(3)]
//     0: "Hola"
//     1: 10
//     2: true
//     3: null
//     4: {nombre: 'cesar', trabajo: 'programador'}
//     5: (3) [1, 2, 3]
// */



// /// Acceder a los valores de un array

// const numeros = [10, 20, 30, 40, 50];

// console.log(numeros[2]);  // 30
// console.log(numeros[0]);  // 10
// console.log(numeros[20]); // undefined


// const numeros2 = [10, 20, 30, [1, 2, 3]];

// console.log(numeros2[3][2]); // 3

// //console.log
// //console.table





// //// Recorrer un Array

// const meses = ['Enero', 'Febrero', 'Marzo'];


// // > .length cuanto mide el arreglo 
// console.log(meses.length);

// //para recorrer se utiliza un iterador for loop es uno
// for(let i = 0; i < meses.length; i++){
//     console.log(meses[i]);
// }

// // Enero
// // Febrero
// // Marzo



// ///Agregar o Modificar los valores de un array

// const meses = ['Enero', 'Febrero', 'Marzo'];

// meses[0] = 'Nuevo Mes';
// meses[12] = 'Ultimo mes';

// console.table(meses);
// /*

// | (indice) |  Valor      |
// --------------------------
// |  0       | 'Nuevo Mes' |
// |  1       | 'Febrero'   |
// |  2       | 'Marzo'     |
// |  12      | 'Ultimo mes'|
// ---------------------------

// */

// //si ya esta ocupada la posicion lo reescribe
// //   si no el indice es mayor que el arreglo lo
// //   lo manda al final


// //Añadir nuevos elementos al final o inicio de un array

// const meses = ['Enero', 'Febrero', 'Marzo'];

// //agregar al final
// meses.push('Abril');
// meses.push('Mayo');

// console.table(meses);

// // | (indice) |  Valor      |
// // --------------------------
// // |  0       | 'Enero'     | 
// // |  1       | 'Febrero'   |
// // |  2       | 'Marzo'     |
// // |  3       | 'Abril'     |
// // |  4       | 'Mayo       |
// // ---------------------------


// /// otro ejemplo

// const carrito = []

// //definir un producto
// const producto = {
//     nombre: 'Monitor',
//     precio: 400
// }
// const producto2 = {
//     nombre: 'Celular',
//     precio: 800
// }

// //> .push agrega al final del arreglo
// carrito.push(producto);
// carrito.push(producto2);

// //> .unshift agrega al inicio del arreglo
// const producto3 = {
//     nombre: 'Teclado',
//     precio: 50
// }

// carrito.unshift(producto3);

// console.table(carrito);

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  0       | 'Teclado'  | 50     |
// // |  1       | 'Monitor'  | 400    |
// // |  2       | 'Celular'  | 800    |




// // nuevo arreglo con spread operator
// // forma declarativa

// const carrito = []

// const producto = {
//     nombre: 'Monitor',
//     precio: 400
// }
// const producto2 = {
//     nombre: 'Celular',
//     precio: 800
// }
// const producto3 = {
//     nombre: 'Teclado',
//     precio: 50
// }

// let resultado;

// resultado = [...carrito, producto];
// resultado = [...resultado, producto2];
// resultado = [producto3, ...resultado];
//             //influe el orden para la salida

// console.table(resultado);

// //| (indice) |  nombre    | precio |
// // // --------------------------------
// //|  0       | 'Teclado'  | 50     |
// //|  1       | 'Monitor'  | 400    |
// //|  2       | 'Celular'  | 800    |






// ///////// Eliminar elementos de un array

// const carrito = []

// //definir un producto
// const producto = {
//     nombre: 'Monitor',
//     precio: 400
// }
// const producto2 = {
//     nombre: 'Celular',
//     precio: 800
// }
// const producto3 = {
//      nombre: 'Teclado',
//     precio: 50
// }

// carrito.push(producto);
// carrito.push(producto2);
// carrito.push(producto3);
// console.table(carrito);

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  0       | 'Monitor'  | 400    |
// // |  1       | 'Celular'  | 800    |
// // |  2       | 'Teclado'  | 50     |


// //> .pop elimina el ultimo elemento del array
// carrito.pop();
// console.table(carrito);

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  0       | 'Monitor'  | 400    |
// // |  1       | 'Celular'  | 800    |


// //> .shift eliminia el inicio del array
// carrito.shift();
// console.table(carrito);

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  0       | 'Celular'  | 800    |




// ///////// Eliminar elementos de un array con splice

// const carrito = []

// const producto = {nombre: 'Monitor', precio: 400}
// const producto2 = {nombre: 'Celular', precio: 800}
// const producto3 = {nombre: 'Teclado', precio: 50}
// const producto4 = {nombre: 'webCam',precio: 80}

// carrito.push(producto);
// carrito.push(producto2);
// carrito.push(producto3);
// carrito.push(producto4);
// console.table(carrito);

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  0       | 'Monitor'  | 400    |
// // |  1       | 'Celular'  | 800    |
// // |  2       | 'Teclado'  | 50     |
// // |  3       | 'webCam'   | 80     |

// carrito.splice(1, 1);
//     // .slice(posicion inicial, cuantos elementos a eliminar)
// console.table(carrito); //se elimina celular

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  0       | 'Monitor'  | 400    |
// // |  1       | 'Teclado'  | 50     |
// // |  2       | 'webCam'   | 80     |


// carrito.splice(0, 2);
//     // .slice(posicion inicial, cuantos elementos a eliminar)
// console.table(carrito); // se elimina monitor y teclado

// // | (indice) |  nombre    | precio |
// // --------------------------------
// // |  2       | 'webCam'   | 80     |



// ////////////// Destructuring con Arreglos

// const numeros = [10,20,30,40,50];

// // se puede colocar cualquier nombre y se le asigna segun la
// // posicion

// const [primero] = numeros;
// console.log(primero); // 10

// const [primero, segundo] = numeros;
// console.log(segundo);  // 20

// const [primero, segundo, tercero] = numeros;
// console.log(tercero);  // 30

// // si ocupamos solo una variable colocamos comas para dejar
// // ese espacio sin usar
// const [ , , , cuarto] = numeros;
// console.log(cuarto);   // 40

// const [primero, , , cuarto] = numeros;
// console.log(primero);  // 10
// console.log(cuarto);   // 40

// const [primero, ...segundo] = numeros;
// console.log(primero);  // 10
// console.log(segundo);  // (4) [20, 30, 40, 50] toma el restante
//                        // y los agrupa en un nuevo arreglo


// //// iteradores array ** forEach ***

// const carrito = [
//     {nombre: 'Monitor', precio: 100},
//     {nombre: 'Televison', precio: 200},
//     {nombre: 'Tablet', precio: 500},
//     {nombre: 'Teclado', precio: 50},
//     {nombre: 'Celular', precio: 1000}
// ]

// carrito.forEach( function(producto) {
//     console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
// })


// // Monitor -- Precio: 100
// // Televison -- Precio: 200
// // Tablet -- Precio: 500
// // Teclado -- Precio: 50
// // Celular -- Precio: 1000



// //// iteradores array  ** map ***
// //// map crea un arreglo nuevo

// const carrito = [
//     {nombre: 'Monitor', precio: 100},
//     {nombre: 'Televison', precio: 200},
//     {nombre: 'Tablet', precio: 500},
//     {nombre: 'Teclado', precio: 50},
//     {nombre: 'Celular', precio: 1000}
// ]

// const nuevoArreglo = carrito.map( function(producto) {
//     return `${producto.nombre} -- Precio: ${producto.precio}`;
// })

// console.log(nuevoArreglo);
// /*

// (5) ['Monitor -- Precio: 100', 'Televison -- Precio: 200', 
// 'Tablet -- Precio: 500', 'Teclado -- Precio: 50', 
// 'Celular -- Precio: 1000']

// 0: "Monitor -- Precio: 100"
// 1: "Televison -- Precio: 200"
// 2: "Tablet -- Precio: 500"
// 3: "Teclado -- Precio: 50"
// 4: "Celular -- Precio: 1000"

// */



// ////// Funciones 
// //existen dos tipos de funciones//

// //Declaracion de Funcion (Function Declaration)
// function sumar(){
//     console.log( 2 + 2 );
// }
// sumar(); // 4

// //Expresion de Funcion (Functopm Expression)
// const sumar2 = function(){
//     console.log( 3 + 3);
// }

// sumar2();  // 6


// /// Diferencia entre Function Declaration y Expression
// // dos etapas creacion y ejecucion (joystin)
// // se hacen dos vueltas, en la primera se registran las
// // variables y funciones y en la segunda se ejecutan.

// //Declaracion de Funcion (Function Declaration)
// sumar();
// function sumar(){
//     console.log( 2 + 2 );
// }
// // ✅

// //Expresion de Funcion (Functopm Expression)
// sumar2();
// const sumar2 = function(){
//     console.log( 3 + 3);
// }
// // no podemos llamar una funcion si no la hemos creado
// // ❌ Uncaught ReferenceError: Cannot access 'sumar2' before initialization




// ///// Diferencia entre Funcion y Metodo

// const numero1 = 20;
// const numero2 = '20';

// // es una funcion si el parentesis esta junto del nombre
// console.log(parseInt(numero2));

// // si despues del objeto o variable hay un punto es un metodo
// console.log(numero1.toString());



// ////Parametros y Argumentos en Funciones

// function sumar(a, b){  // a y b son parametros
//     console.log( a + b );
// }

// sumar(2 , 3);  // 2 toma el valor de a
//                // 3 toma el valor de b
//                // 2 y 3 son argumentos
//                // son los valores reales

// // 5


// function saludar(nombre, apellido){
//     console.log(`Hola ${nombre} ${apellido}`)
// }

// saludar('cesar', 'garcia'); // Hola cesar garcia
// saludar('cesar'); // Hola cesar undefined
// saludar();  // Hola undefined undefined

// // si no se le pasan argumentos manda undefined





// ////// Paramentros por default

// function saludar(nombre = 'Desconocio', apellido = ''){
//     console.log(`Hola ${nombre} ${apellido}`)
// }

// saludar('cesar'); // Hola cesar
// saludar();  // Hola Desconocido

// // si no se le pasa ningun argumento toma el valor por
// // default para evitar el undefined



// //// Como se comunican las funciones

// iniciarApp();

// function iniciarApp(){
//     console.log('Iniciando app...');

//     segundaFuncion();
// }

// function segundaFuncion(){
//     console.log('Desde la segunda funcion');

//     usuarioAutenticado('cesar');
// }

// function usuarioAutenticado(usuario){
//     console.log('Auntenticando usuario... espere...');
//     console.log(`Usuario autenticado exitosamente: ${usuario}`)
// }

// // Iniciando app...
// // Desde la segunda funcion
// // Auntenticando usuario... espere...
// // Usuario Autenticado exitosamente:cesar



// //// Funciones que retornan Valores

// function sumar(a, b){
//     return a + b;
// }
// const resultado = sumar(2, 3);
// console.log(resultado);  // 5

// // Ejemplo más avanzado
// let total = 0;
// function agregarCarrito(precio){
//     return total += precio;
// }
// function calcularImpuesto(total){
//     return total * 1.15;
// }
// total = agregarCarrito(300);
// total = agregarCarrito(100);
// total = agregarCarrito(600);

// const totalPagar = calcularImpuesto(total);

// console.log(total);  // 1000
// console.log(`El total a pagar es de ${totalPagar}`);
// // El total a pagar es de 1150


// ///// Añadir Funciones en un Objeto

// const reproductor = {
//     reproducir: function(id){
//         console.log(`Reproduciendo cancion con el id ${id}`);
//     },
//     pausar: function(){
//         console.log('pausando...');
//     },
//     borrar: function(id){
//         console.log(`Borrando cancion... ${id}`);
//     },
//     crearPlaylist: function(nombre){
//         console.log(`Creando la playlist de ${nombre}`);
//     },
//     reproducirPlaylist: function(nombre){
//         console.log(`Reproduciendo la playlist ${nombre}`);
//     }
// }

// // se utiliza la sintaxis de punto ya que es un objeto

// reproductor.reproducir(30); // Reproduciendo cancion con el id 30
// reproductor.reproducir(20); // Reproduciendo cancion con el id 20
// reproductor.pausar();       // pausando...
// reproductor.borrar(30);     // Borrando cancion... 30
// reproductor.crearPlaylist('Heavy Metal'); // Creando la playlist de Heavy Metal
// reproductor.crearPlaylist('Rock');        // Creando la playlist de Rock
// reproductor.reproducirPlaylist('Heavy Metal'); // Reproduciendo la playlist Heavy Metal



// ////// Arrow Functions

// const aprendiendo = function(){
//     console.log('Aprendiendo JavaScript');
// }

// // se cambia el function por () =>
// const aprendiendo2 = () => {
//     console.log('Aprendiendo JavaScript 2');
// }
// aprendiendo2(); // Aprendiendo JavaScript 2

// // si se tiene una funcion de una sola linea se pueden omitir
// // los corchetes
// const aprendiendo2 = () => console.log('Aprendiendo JavaScript 2');
// aprendiendo2();  // Aprendiendo JavaScript 2

// // tambien cuando se tiene una linea el return se da por implicito
// const aprendiendo2 = () => 'Aprendiendo JavaScript 2';
// console.log(aprendiendo2()); // Aprendiendo JavaScript 2




// ////Ventajas de los Arrow Functions
// // Pasar parametros

// const aprendiendo = function(tecnologia){
//     console.log(`Aprendiendo ${tecnologia}`)
// }
// aprendiendo('JavaScript');       // Aprendiendo JavaScript

// const aprendiendo = function(tecnologia, tecnologia2){
//     console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`)
// }
// aprendiendo('JavaScript', 'Node.js');  // Aprendiendo JavaScript y Node.js


// //----------------------------------------

// const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
// console.log(aprendiendo2('JavaScript')); // Aprendiendo JavaScript

// // si solo se le pasa un parametro se puede omitir el parentesis

// const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
// console.log(aprendiendo2('JavaScript', 'Node.js')); // Aprendiendo JavaScript y Node.js

// // si se le pasan dos o más parametros si es necesario el parentesis.



// ///// Arrow Functions en un forEach y un map

// const carrito = [
//     {nombre: 'Monitor', precio: 100},
//     {nombre: 'Televison', precio: 200},
//     {nombre: 'Tablet', precio: 500},
//     {nombre: 'Teclado', precio: 50},
//     {nombre: 'Celular', precio: 1000}
// ]

// ///////////  map
// /// con function
// const nuevoArreglo = carrito.map( function(producto) {
//     return `${producto.nombre} -- Precio: ${producto.precio}`;
// })
//  /// con arrow function
// const nuevoArreglo = carrito.map((producto) => {
//     return `${producto.nombre} -- Precio: ${producto.precio}`;
// })

// // si se tiene una linea se pueden omitir los parentesis y el
// // return se da por implicito
// const nuevoArreglo = carrito.map(producto => `${producto.nombre} -- Precio: ${producto.precio}`)

//  console.log(nuevoArreglo);


// /////// forEach
// ////  con function
// carrito.forEach(function(producto){
//     console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
// })
//  ////// con arrow function
// carrito.forEach((producto) => {
//     console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
// })

// // si se tiene una linea se pueden omitir los parentesis y el
// // return se da por implicito
// carrito.forEach(producto => console.log(`${producto.nombre} -- Precio: ${producto.precio}`))





//  ///// ejemplo arrow function reproductor

//  const reproductor = {
//     reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
//     pausar: () => console.log('pausando...'),
//     borrar: id =>console.log(`Borrando cancion... ${id}`),
//     crearPlaylist: nombre =>console.log(`Creando la playlist de ${nombre}`),
//     reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`)  
//  }

//  // se utiliza la sintaxis de punto ya que es un objeto

//  reproductor.reproducir(30); // Reproduciendo cancion con el id 30
//  reproductor.reproducir(20); // Reproduciendo cancion con el id 20
//  reproductor.pausar();       // pausando...
//  reproductor.borrar(30);     // Borrando cancion... 30
//  reproductor.crearPlaylist('Heavy Metal'); // Creando la playlist de Heavy Metal
//  reproductor.crearPlaylist('Rock');        // Creando la playlist de Rock
//  reproductor.reproducirPlaylist('Heavy Metal'); // Reproduciendo la playlist Heavy Metal




///////////// Estructuras de Control

//  ///// if
//  // se revisa la condicion y si se cumple
//  // se ejecuta el primer bloque
//  const puntaje = 1000;

//  if(puntaje == 1000){
//     console.log('si es igual');
//  }else{
//     console.log('no es igual');
//  }

//  // si es igual


//  comparador ==
//  comparador estricto ===
 
//  diferente !=
//  diferente estricto !==



// ////Operador Mayor o igual y else if

// const dinero = 500;
// const totalAPagar = 300;
// const tarjeta = true;
// const cheque = true;

// if(dinero >= totalAPagar){
//     console.log('Si podemos pagar');
// }else if(tarjeta){
//     console.log('si puedo pagar porque tengo la tarjeta')
// }else if(cheque){
//     console.log('Si, tengo un cheque')
// }else{
//     console.log('Fondos Insuficientes');
// }

// // Si podemos pagar


// // solament se va a ejecutar la primera condicion que se
// // cumpla

// // cae en el else cuando no se cumple ninguna condicion.

let arr = [1,2,3];
arr[10] = 'hello';

console.log(arr.length);
console.table(arr)