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



// /////// Switch Case

// const metodoPago = 'efectivo';

// switch(metodoPago){
//     case 'efectivo':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'cheque':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'tarjeta':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     default:
//         console.log('Metodo de pago no soportado');
//         break;
// }

// /// Pagaste con efectivo


// ///// tambien se pueden agregar otros elementos, como
// ///// funciones
// const metodoPago = 'tarjeta';

// switch(metodoPago){
//     case 'efectivo':
//         pagar();
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'cheque':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     case 'tarjeta':
//         console.log(`Pagaste con ${metodoPago}`);
//         break;
//     default:
//         console.log('Metodo de pago no soportado');
//         break;
// }

// function pagar(){
//     console.log('Pagando....')
// }

// // Pagando....
// // Pagaste con efectivo



// ///// Operador &&  (revisa que 2 o mas condiciones se cumplan)

// const usuario = true;
// const puedePagar = true;

// if(usuario && puedePagar){
//     console.log('si puedes comprar');
// }else if(!puedePagar && !usuario){
//     console.log('no puedes comprar');
// }else if(!usuario){
//     console.log('Inicia sesion o saca una cuenta');
// }else if(!puedePagar){
//     console.log('Fondos Insuficientes');
// }

// //si puedes comprar


// ////// Operador OR || (revisa que al menos una condicion se cumpla)

// const efectivo = 300;
// const credito = 1000;
// const disponible = efectivo + credito;
// const totalPagar = 600;

// if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
//     console.log('Si podemos pagar');
// }else{
//     console.log('Fondos Insuficientes');
// }

// // Si podemos pagar


// //// Detener la ejecucion de un if con una funcion
// //// (buenas practicas)

// const autenticado = true;

// if(autenticado === true){
//     console.log('El usuario esta autenticado');
// }


// /// dentro del if ya se da por implicito el true por lo
// /// que ya no es necesario hacer la comparacion
// if(autenticado){
//     console.log('El usuario esta autenticado');
// }


// const puntaje = 450;


// /// se puede utilizar else if
// if(puntaje > 400){
//     console.log('Excelente');
// }else if(puntaje > 300){
//     console.log('Buen puntaje... felicidades');
// }

// // se puede serapar los if para revisar la condicion.
// // se agrega return para terminar la ejecucion del if
// // los return solo funciona dentro de las funciones
// function revisarPuntaje(){
//     if(puntaje > 400){
//         console.log('Excelente');
//         return;
//     }
//     if(puntaje > 300){
//         console.log('Buen puntaje... felicidades');
//         return;
//     }
// }

// revisarPuntaje();



// // //// Operador Ternario

// const autenticado = true;

// //  ? = if
// //  : = else
//  console.log(autenticado ? 'si esta autenticado' : 'no esta autenticado');

// // si esta autenticado

// // revisar dos condiciones en un ternario
// // se puede usar && o ||
// const autenticado = false;
// const puedePagar = true;

// console.log(autenticado && puedePagar ? 'si puede pagar' : 'no esta autenticado');

// // no esta autenticado


// // ternario anidado
// console.log(autenticado ? puedePagar ? 'si autenticado,puede pagar' : 'si autenticado, no puede pagar' : 'No esta autenticado');

// // No esta autenticado


/////////// Iteradores


// // for loop

// // se compone de tres partes 
// // 1.- Inicializador, 2.- La condicion a revisar, 3.- incremento
// for(let i = 0; i < 10; i++){
//     console.log(`Numero: ${i}`);
// }

// // Numero: 0
// // Numero: 1
// // Numero: 2
// // Numero: 3
// // Numero: 4
// // Numero: 5
// // Numero: 6
// // Numero: 7
// // Numero: 8
// // Numero: 9

// for(let i = 1; i <= 20; i++){
//     if( i % 2 === 0){
//         console.log(`El numero ${i} es PAR`);
//     }else{
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

// // El numero 1 es IMPAR
// // El numero 2 es PAR
// // El numero 3 es IMPAR
// // El numero 4 es PAR
// // El numero 5 es IMPAR
// // El numero 6 es PAR
// // El numero 7 es IMPAR
// // El numero 8 es PAR
// // El numero 9 es IMPAR
// // El numero 10 es PAR
// // El numero 11 es IMPAR
// // El numero 12 es PAR
// // El numero 13 es IMPAR
// // El numero 14 es PAR
// // El numero 15 es IMPAR
// // El numero 16 es PAR
// // El numero 17 es IMPAR
// // El numero 18 es PAR
// // El numero 19 es IMPAR
// // El numero 20 es PAR


// const carrito = [
//     {nombre: 'Monitor', precio: 200},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Celular', precio: 300},
//     {nombre: 'Teclado', precio: 50}
// ]

// console.log(carrito.length);
// // 4

// for(let i = 0; i < carrito.length; i++){
//     console.log(carrito[i]);
// }

// // {nombre: 'Monitor', precio: 200}
// // {nombre: 'Television', precio: 400}
// // {nombre: 'Celular', precio: 300}
// // {nombre: 'Teclado', precio: 50}

// for(let i = 0; i < carrito.length; i++){
//     console.log(carrito[i].nombre);
// }

// // Monitor
// // Television
// // Celular
// // Teclado




// ///// Break y continue en un for loop

// // Break rompe el for loop y deja de ejecutar

// for(let i = 0; i <=10; i++){

//     if( i === 5){
//         console.log('Este es el 5');
//         break;
//     }
//     console.log(`Numero ${i}`);
// }

// // Numero 0
// // Numero 1
// // Numero 2
// // Numero 3
// // Numero 4
// // Este es el 5


// // Continue rompe el ciclo donde esta actualmente
// // pero sigue ejecutandose el for loop
// for(let i = 0; i <=10; i++){

//     if( i === 5){
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero ${i}`);
// }

// Numero 0
// Numero 1
// Numero 2
// Numero 3
// Numero 4
// CINCO
// Numero 6
// Numero 7
// Numero 8
// Numero 9
// Numero 10




// const carrito = [
//     {nombre: 'Monitor', precio: 200, descuento: true},
//     {nombre: 'Television', precio: 400},
//     {nombre: 'Celular', precio: 300},
//     {nombre: 'Teclado', precio: 50, descuento: true}
// ]

// for(let i = 0; i < carrito.length; i++){

//     if(carrito[i].descuento){
//         console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
//         continue;
//     }

//     console.log(carrito[i].nombre);

// }

// // El articulo Monitor tiene descuento
// // Television
// // Celular
// // El articulo Teclado tiene descuento



// //////// Fizz Buzz 

// // 4 6 9 12 ... fiz
// // 5 10 15 20 .... buzz
// // 15 30 45 FIZZBUZZ

// for(let i = 1; i < 100; i ++){
//     if(i % 15 === 0){
//         console.log(`${i} FIZZ BUZZ`);
//     }else if( i % 3 === 0){
//         console.log(`${i} fizz`);
//     }else if(i % 5 === 0){
//         console.log(`${i} buzz`);
//     }
// }

// // 3 fizz
// // 5 buzz
// // 6 fizz
// // 9 fizz
// // 10 buzz
// // 12 fizz
// // 15 FIZZ BUZZ
// // 18 fizz
// // 20 buzz
// // 21 fizz
// // 24 fizz
// // 25 buzz
// // 27 fizz
// // 30 FIZZ BUZZ
// // 33 fizz
// // 35 buzz
// // 36 fizz
// // 39 fizz
// // 40 buzz
// // 42 fizz
// // 45 FIZZ BUZZ
// // 48 fizz
// // 50 buzz


// ////// while

// // el while se ejecuta mientras una condicion
// // sea verdadera.


// let i = 0;  // inicializar while


// while(i < 10){// condicion

//     console.log(`numero ${i}`);

//     i++ // incremento
// }

// // numero 0
// // numero 1
// // numero 2
// // numero 3
// // numero 4
// // numero 5
// // numero 6
// // numero 7
// // numero 8
// // numero 9



// ///// do while

// // se ejecuta al menos una vez y despues verifica
// // la condicion. ya sea que se cumpla o no.

// let i = 0;  // inicializador

// do{
//     console.log(`numero ${i}`);

//     i++; // incremento

// }while(i < 10); // condicion

// // numero 0
// // numero 1
// // numero 2
// // numero 3
// // numero 4
// // numero 5
// // numero 6
// // numero 7
// // numero 8
// // numero 9




// let i = 100;  // inicializador

// do{
//     console.log(`numero ${i}`);

//     i++; // incremento

// }while(i < 10); // condicion

// // numero 100



// //// forEach
// //el forEach es un arrow function

// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

// pendientes.forEach((pendiente, indice) => {
//     console.log(`${indice} : ${pendiente}`);
// })

// // 0 : Tarea
// // 1 : Comer
// // 2 : Proyecto
// // 3 : Estudia

// const carrito = [
//     {nombre: 'monitor', precio: 100},
//     {nombre: 'television', precio: 200},
//     {nombre: 'celular', precio: 300}
// ]

// carrito.forEach((producto) => {
//     console.log(producto)
// });

// //al pasarse solo un parametro se puede omitr los parentesis
// carrito.forEach(producto => console.log(producto));

// // {nombre: 'monitor', precio: 100}
// // {nombre: 'television', precio: 200}
// // {nombre: 'celular', precio: 300}


// // al iterar sobre un arreglo podemos entrar a las propiedades de
// // cada objeto con la sintaxis de punto
// carrito.forEach(producto => console.log(producto.nombre));

// // monitor
// // television
// // celular


// ///// .map (crea un nuevo arreglo)

// const carrito = [
//     {nombre: 'monitor', precio: 100},
//     {nombre: 'television', precio: 200},
//     {nombre: 'celular', precio: 300}
// ]


// const nuevoArreglo = carrito.forEach(producto => producto.nombre);
// console.log(nuevoArreglo);
// // undefined

// const nuevoArreglo2 = carrito.map(producto => producto.nombre);
// console.log(nuevoArreglo2);
// // crea un nuevo arreglo
// // (3) ['monitor', 'television', 'celular']


// ///// for of

// /// for of itera sobre arreglos

// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

// const carrito = [
//     {nombre: 'monitor', precio: 100},
//     {nombre: 'television', precio: 200},
//     {nombre: 'celular', precio: 300}
// ]

// for(let pendiente of pendientes){
//     console.log(pendiente);
// }

// // Tarea
// // Comer
// // Proyecto
// // Estudiar


// for(let producto of carrito){
//     console.log(producto);
// }

// // {nombre: 'monitor', precio: 100}
// // {nombre: 'television', precio: 200}
// // {nombre: 'celular', precio: 300}

// for(let producto of carrito){
//     console.log(producto.nombre);
// }

// // monitor
// // television
// // celular




// ///// for in

// /// for in itera sobre objetos

// const automovil = {
//     modelo: 'camaro',
//     year: 1960,
//     motor: '6.0'
// }

// for(let propiedad in automovil){
//     console.log(propiedad);
// }

// // modelo
// // year
// // motor

// for(let propiedad in automovil){
//     console.log(`${automovil[propiedad]}`);
// }

// // camaro
// // 1960
// // 6.0



// //////// emac7
// for(let [llave, valor] of Object.entries(automovil)){
//     console.log(valor);
//     console.log(llave);
// }

// // camaro
// // modelo
// // 1960


// // year
// // 6.0
// // motor



// ///// ARRAY METTHODS

// // .some (comprueba si un valor existe en un arreglo)

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

// const carrito = [
//     {nombre: 'monitor', precio: 100},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'celular', precio: 300},
//     {nombre: 'teclado', precio: 50}
// ]

// /// comprobamos si un valor existe en un arreglo

// // 1. Forma
// meses.forEach(mes => {
//     if(mes === 'Enero'){
//         console.log('Enero si existe'); // Enero si existe
//     }
// });

// // 2. Forma (solo funciona con los arreglos de un solo indice)
// const resultado = meses.includes('Enero');
// console.log(resultado); // true

// const resultado2 = meses.includes('Diciembre');
// console.log(resultado2); // false


// ////////////// En un arreglo de objectos se utiliza .some 

// const existe = carrito.some(producto => {
//     return producto.nombre === 'celular'
// })

// // cuando es solo una linea el return se da por implicito
// const existe = carrito.some(producto => producto.nombre === 'celular')

// console.log(existe); // true


// /// en un arreglo tradicional (indices)
// const existe2 = meses.some(mes => mes === 'Febrero');
// console.log(existe2); // true




// ///// findIndex  (para encontra la posicion de un elemento dentro de un arreglo)

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

// const carrito = [
//     {nombre: 'monitor', precio: 200},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'celular', precio: 100},
//     {nombre: 'teclado', precio: 100}
// ]


// // forma tradicional
// meses.forEach((mes, i) => {
//     if(mes === 'Abril'){
//         console.log(`Encontrado en el indice ${i}`);
//     }
// })

// // Encontrado en el indice 3


// ///// metodo findIndex
// const indice = meses.findIndex(mes => mes === 'Abril');
// console.log(indice);    // 3

// const indice2 = meses.findIndex(mes => mes === 'Diciembre');
// console.log(indice2);  // -1

// // encontrar un indice de un arreglo de objetos...
// const indice3 = carrito.findIndex(producto => producto.precio === 100);
// console.log(indice3);  //  2

// // findIndex solo retorna el primer indice que encuentra




// ///// .reduce

// // toma una gran cantidad de datos para entregarlo en un solo resultado

// const carrito = [
//     {nombre: 'monitor', precio: 200},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'celular', precio: 100},
//     {nombre: 'teclado', precio: 100}
// ]

// // forma tradicional con forEach
// let total = 0;
// carrito.forEach(producto => total += producto.precio);
// console.log(total); // 600        


// //// con reduce
// let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
// console.log(resultado);  // 600

// // total = valor anterior
// // ya no se coloca += porque se declaro un valor anterior donde se ira acumulando
// // 0 valor inicial, se le asigna al valor anterior



// /////  .filter

// // crea un nuevo arreglo basado por el parametro evaluado (condicion)
// // se trae todos los elementos que cumplen dicha condicion

// const carrito = [
//     {nombre: 'monitor', precio: 300},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'celular', precio: 500},
//     {nombre: 'teclado', precio: 400},
//     {nombre: 'mouse', precio: 600}
// ]

// let resultado;

// resultado = carrito.filter(producto => producto.precio > 400);
// console.log(resultado);
// // (2) [{…}, {…}]
// // 0: {nombre: 'celuar', precio: 500}
// // 1: {nombre: 'mouse', precio: 600}

// resultado = carrito.filter(producto => producto.precio < 600);
// console.log(resultado);
// // (4) [{…}, {…}, {…}, {…}]

// // !== traeme todos excepto el que dice mouse
// resultado = carrito.filter(producto => producto.nombre !== 'mouse');
// console.log(resultado);
// // (4) [{…}, {…}, {…}, {…}]

// // === traeme el que dice mouse
// resultado = carrito.filter(producto => producto.nombre === 'mouse');
// console.log(resultado);
// // [{…}]



// ///// .find

// // va a buscar el primer elemento que cumpla la condicion

// const carrito = [
//     {nombre: 'monitor', precio: 300},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'celular', precio: 500},
//     {nombre: 'teclado', precio: 200},
//     {nombre: 'mouse', precio: 600}
// ]

// /// con forEach
// let resultado = '';
// carrito.forEach((producto, index) => {
//     if(producto.nombre === 'monitor'){
//         resultado = carrito[index];
//     }
// })
// console.log(resultado);
// // {nombre: 'monitor', precio: 300}


// // con .find
// const resultado2 = carrito.find(producto => producto.precio === 200);
// console.log(resultado2);
// // {nombre: 'telefono', precio: 200}


// //// every
// // todos los elementos de un arreglo deben cumplir una condicion para que
// // devuelva true

// const carrito = [
//     {nombre: 'monitor', precio: 300},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'celular', precio: 500},
//     {nombre: 'teclado', precio: 200},
//     {nombre: 'mouse', precio: 600}
// ]

// const resultado = carrito.every(producto => producto.precio < 1000);
// console.log(resultado);   // true

// const resultado2 = carrito.every(producto => producto.precio < 500);
// console.log(resultado2);  // false



// //// .concat (concatena elementos de un arreglo)   / el orden es importante /

// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
// const meses2 = ['Mayo', 'Junio', 'Julio'];
// const meses3 = ['Agosto', 'Septiembre']

// const resultado = meses.concat(meses2, meses3);
// console.log(resultado);

// // (9) ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre']

// /// spread operator
// const resultado2 = [...meses, ...meses2, ...meses3];
// console.log(resultado2);
// // (9) ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre']



// ///// Spread Operator
// // no se modifica el arreglo original

// const meses = ['Enero', 'Febrero', 'Marzo'];

// const carrito = [
//     {nombre: 'monitor', precio: 100},
//     {nombre: 'television', precio: 200},
//     {nombre: 'teclado', precio: 300}
// ]

// // spread con arreglo de indices

// const meses2 = [...meses, 'Abril'];
// console.log(meses2);
// // (4) ['Enero', 'Febrero', 'Marzo', 'Abril']

// const meses2 = [ 'Abril', ...meses];
// console.log(meses2);
// // (4) ['Abril', 'Enero', 'Febrero', 'Marzo']

// // spread con arreglo de objetos

// const producto = {nombre: 'disco duro', precio: 300};
// const carrito2 = [...carrito, producto];
// console.log(carrito2);
// // (4) [{…}, {…}, {…}, {…}]

// const producto = {nombre: 'disco duro', precio: 300};
// const carrito2 = [...carrito, ...producto];
// console.log(carrito2);
// // Uncaught TypeError: producto is not iterable



// ////// DOM

// // seleccionar elementos por su clase
// // forma antigua

// const header = document.getElementsByClassName('header');
// console.log(header);   
// // HTMLCollection [div.header]


// // si las clases existen mas de 1 vez
// const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);  
// // HTMLCollection(2) [div.contenedor, div.contenedor]

// // si una clase no existe
// const noExiste = document.getElementsByClassName('no-existe');
// console.log(noExiste);
// // HTMLCollection []


// // seleccionar elementos por su Id
// // forma antigua
// // selecciona el primer id que encuentre en caso de que hubiera mas de uno
// const formulario = document.getElementById('formulario');
// console.log(formulario);
// // <form action="/buscador" method="post" class="formulario" id="formulario"></form>

// // lo ideal y recomendado esque solo exista un id por documento


// ///// DOM

// /// querySelector (selecciona classes y id) 
// // retorna el primero que encuentre

// const card = document.querySelector('.card');
// console.log(card);
// // <div class="card"></div>

// // podemos tener selectores especificos como en css
// const info = document.querySelector('.premium .info');
// console.log(info);
// // <div class="info"></div>

// const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

// // seleccionar id
// const formulario = document.querySelector('#formulario');

// // seleccionar elementos HTML
// const navegacion = document.querySelector('nav');



// /// DOM

// //// querySelectorAll
// /// selecciona todos los elementos que cumplan la condicion del selector

// const cards = document.querySelectorAll('.card');
// console.log(cards);
// // NodeList(2) [div.card, div.card]

// // si un elemento no existe
// const noExiste = document.querySelectorAll('.no-existe');
// console.log(noExiste);
// // NodeList []



// //// Modificar textos o imagenes

// const encabezado = document.querySelector('.contenido-hero h1');

// console.log(encabezado.innerText);     // hola mundo
// console.log(encabezado.textContent);   // hola mundo
// console.log(encabezado.innerHTML);     // hora <span>mundo</span>

// // innerText  ->si esta oculto con css no se va a encontrar el texto
// // textContent -> si esta oculto con css si lo va a encontrar
// // se trae el html tambien


// // chaning o encadenamiento
// const encabezado = document.querySelector('.contenido-hero h1').textContent;
// console.log(encabezado);   // hola mundo

// // Modificar
// document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

// // Tambien se pude crear una nueva constante
// const nuevoTitulo = 'Nuevo Titulo';
// document.querySelector('.contenido-hero h1').textContent = nuevoTitulo;


// /// Modificar una imagen
// const imagen = document.querySelector('.card img');
// imagen.src = 'img/foto2.jpg';




// /// Modificar el css con JavaScript

// const encabezado = document.querySelector('h1');
// console.log(encabezado.style);

// // no existen los guiones en los estilos css dentro de JS
// // la segunda palabra va en mayuscula
// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';

// // lo mas recomendable es agregar o quitar classes
// const card = document.querySelector('.card');
// card.classList.add('nueva-clase');
// // agregar mas de una clase
// card.classList.add('nueva-clase', 'segunda-clase');
// // remover una clase
// card.classList.remove('nueva-clase');


// // classList se trae los estilos como un arreglo
// // clasName se trae los estilos como un string



// ///  Traversing the DOM

// // .children -> recorre los hijos
// // .parentElement -> recorre los padres

// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
// // <nav class="navegacion">...</nav>
// console.log(navegacion.childNodes); 
// // NodeList(7) [text, a, text, a, text, a, text]
// //los espacion es blanco con considerados elementos

// console.log(navegacion.children);
// // HTMLCollection(3) [a, a, a]
// // los espacios en blanco no son considerados elementos

// console.log(navegacion.children[0]); //  <a href="#">Inicio</a> nos muestra la posicion
// console.log(navegacion.children[1].nodeName);  // A   nos devuelve el nombre
// console.log(navegacion.children[1].nodeType);  // 1   nos devuevle el tipo

// const card = document.querySelector('.card');
// console.log(card.children); // HTMLCollection [div.body]
// console.log(card.children[0]); // <div class="info">...</div>
// console.log(card.children[0].children[0]); // <h2>tarjeta uno</h2>

// //se puede modificar el texto
// card.children[0].children[0].textContent = 'nuevo titulo tarjeta';
// // <h2>nuevo titulo tarjeta</h2>


// ///// parentElement
// console.log(card.parentElement);  // <div class="contenedor-cards">...</div>
// console.log(card.parentElement.parentElement); // <div class="seccion-cards">...</div>


// /// nextElementSibling  (selecciona el siguiente elemento de los hijos dentro del padre).
// console.log(card.nextElementSibling);
// /*
//     <div class="card">
//         <div class="info">
//             <h2>tarjeta dos</h2>
//         </div>
//     </div>
// */
// console.log(card.nextElementSibling.nextElementSibling);
// /*
//     <div class="card">
//         <div class="info">
//             <h2>tarjeta tres</h2>
//         </div>
//     </div>
// */

// //// previousElementSibling (se regresa un elemento antes)
// const ultimoCard = document.querySelector('.card:nth-child(3)');
// console.log(ultimoCard);

// console.log(ultimoCard.previousElementSibling);
// /*
//     <div class="card">
//         <div class="info">
//             <h2>tarjeta dos</h2>
//         </div>
//     </div>
// */

// ////
// console.log(navegacion.firstElementChild); // selecciona el primer elemento
// // <a href="#">Inicio</a>
// console.log(navegacion.lastElementChild);  // selecciona el ultimo elemento
// // <a href="#">Contacto</a>



// /// Eliminar elementos del DOM

// // existen dos formas
// // 1. eliminar un elemento por si mismo
// // 2. eliminar desde el padre

// /// Inicio Ayuda Contacto

// const primerEnlace = document.querySelector('a');
// console.log(primerEnlace); // <a href="#">Inicio</a>
// primerEnlace.remove();     // Ayuda Contacto

// // eliminar desde el padre
// const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children); // para ver las posiciones

// // con removeChild tenemos que pasarle la referencia del elemento a eliminar
// navegacion.removeChild(navegacion.children[1]);  // Inicio Contacto



// /// Generar HTML con JavaScript

// // .appendChild -> agrega un nuevo hijo (lo agrega al final de los otros hijos)
// // .insertBefore -> (elemento a agregar, donde lo queremos agregar)
// const enlace = document.createElement('a');

// //agreagar texto
// enlace.textContent = 'Nuevo Enlace';
// // añadiendo href
// enlace.href = '/nuevo-enlace';
// // añadiendo target
// enlace.target = '_blank';
// // agregar atributos
// enlace.setAttribute('data-enlace', 'nuevo-enlace');
// // agregar una clase
// enlace.classList.add('alguna-clase');
// // tambien podemos agregar funciones
// enlace.onclick = miFuncion;

// // seleccionamos la navegacion y despues con appendChild lo agregamos
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); // Inicio Ayuda Contacto Nuevo Enlace

// // con insert before podemos utilizar children para saber la posicion
// console.log(navegacion.children);  // HTMLCollection(3) [a, a, a]
// navegacion.insertBefore(enlace, navegacion.children[1]); 
// // Inicio Nuevo EnlaceAyuda Contacto

// function miFuncion(){
//     alert('diste click');
// }


// //// Crear un card

// const parrafo1 = document.createElement('p');
// parrafo1.textContent = 'Concierto';
// parrafo1.classList.add('categoria', 'concierto');

// const parrafo2 = document.createElement('p');
// parrafo2.textContent = 'Concierto de Rock';
// parrafo2.classList.add('titulo');

// const parrafo3 = document.createElement('p');
// parrafo3.textContent = '$800 por persona';
// parrafo3.classList.add('precio');

// //crear div con la clase de info
// const info = document.createElement('div');
// info.classList.add('info');
// info.appendChild(parrafo1);
// info.appendChild(parrafo2);
// info.appendChild(parrafo3);

// //crear la imagen
// const imagen = document.createElement('img');
// imagen.src = 'img/imagen.jpg';
// imagen.alt = 'Texto alternativo';

// // crear el card
// const card = document.createElement('div');
// card.classList.add('card');

// //asignar la imagen
// card.appendChild(imagen);
// //asignar la info
// card.appendChild(info);


// /// insertar en el HTML
// const contenedor = document.querySelector('.contenedor-cards');
// contenedor.appendChild(card);




// const btnFlotante = document.querySelector('.btn-flotante');
// const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', mostrarOcultarFooter);

// function mostrarOcultarFooter(){
//     if(footer.classList.contains('activo')){
//         footer.classList.remove('activo');
//         this.classList.remove('activo');
//         this.textContent = 'Idioma y Moneda';
//     }else{
//         footer.classList.add('activo');
//         this.classList.add('activo');
//         this.textContent = 'X Cerrar';
//     }
// }

// /// this -> accede a las mismas propiedades de un objeto
// ///      -> en una funcion hace referencia a lo que mando llamar esa funcion

// /// .contains (verifica si un elemento tiene una clase css)




// ////// Eventos

// //detectar cuando el HTML esta listo

// document.addEventListener('DOMContentLoaded', () => {
//     console.log('documento listo');
// })


// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
// });

// window.onload = (event) => {
//     console.log("page is fully loaded");
// };




// // Eventos

// // eventos con el mouse

// const nav = document.querySelector('.navegacion');

// // click (se dispara el evento cuando damos click sobre el elemento)
// nav.addEventListener('click', () => {
//     console.log('diste click en la navegacion');
// })

// // mouseenter (se dispara cuando entramos sobre el elemento)
// nav.addEventListener('mouseenter', () => {
//     console.log('entrando a la navegacion');
// })

// // mouseenter (se dispara cuando aslimos sobre el elemento)
// nav.addEventListener('mouseout', () => {
//     console.log('saliendo de la navegacion');
// })

// // dblclick (se dispara cuando hacemos doble click sobre un elemento)
// nav.addEventListener('dblclick', () => {
//     console.log('diste doble click de la navegacion');
// })

// //hay mas eventos del mouse


// //// Eventos

// /// eventos sobre los inputs

// const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input', (e) =>{
//     console.log(e.target.value);
// })


// // e --> es el evento que esta sucediendo
// // puede ser e, evt, event, evento

// // e.type -> sobre que elemento estamos trabajando
// // e.target -> en que tipo estamos trabajando
// // e.target.value -> muestra lo que el usuario esta escribiendo


// // keydown -> se ejecuta cuando presionamos una tecla
// // keyup -> se ejecuta cuando presionamos y soltamos una tecla
// // blur  -> se ejecuta cuando damos click fuera del input

// // copy --> se ejecuta cuando copiamos
// // paste --> se ejecuta cuando pegamos
// // cut --> se ejecuta cuando cortamos

// // input --> ejecuta las demas acciones (escribir, cortar, pegar, copiar, ...)
// // input no cubre el blur


// //ejemplo de validacion
// busqueda.addEventListener('input', (e) =>{
//    if(e.target.value === ''){
//     console.log('fallo la validacion')
//    }
// })


// /// Eventos que succeden en un formulario (submit)

// const formulario = document.querySelector('#formulario');

// // se puede utilizar un arrow function
// formulario.addEventListener('submit', (e) => {
//     e.preventDefault(); // previene la accion por defecto
//     console.log(e);
// })


// // o con una funcion.
// formulario.addEventListener('submit', validarFormulario);
// function validarFormulario(e){
//     e.preventDefault();
//     console.log('validando');
//     console.log(e);
// }



// /////// Event Bubbling

// const cardDiv = document.querySelector('.card');
// const infoDiv = document.querySelector('.info');
// const titulo = document.querySelector('.titulo');

// cardDiv.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('click en card');
// });
// infoDiv.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('click en info');
// });
// titulo.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('click en titulo');
// })

// // e.stopPropagation(); se utiliza para evitar la propagacion
// // de un evento.


// //// prevenir Event Bubbling con delegation

// const cardDiv = document.querySelector('.card');

// cardDiv.addEventListener('click', (e) => {
//     if(e.target.classList.contains('card')){
//         console.log('diste click en card');
//     }
//     if(e.target.classList.contains('info')){
//         console.log('diste click en info');
//     }
//     if(e.target.classList.contains('titulo')){
//         console.log('diste click en titulo');
//     }
// });



// /// Prevenir Event Bubbling con un Metodo
// // es ideal cuando vamos generando el html

// const parrafo = document.createElement('p');
// parrafo.textContent = '$800 por persona';
// parrafo.classList.add('precio');
// parrafo.onclick = nuevaFuncion;
// function nuevaFuncion(){
//     console.log('desde nueva funcion');
// }


// //si queremos pasar parametros
// parrafo.onclick = function(){
//     nuevaFuncion(1) // si quieremos pasar parametros
// }
// function nuevaFuncion(id){
//     console.log('desde nueva funcion', id);
// }

// // tambien se puede utilizar en un arrow function
// parrafo.onclick = () => {
//     nuevaFuncion(1)
// }
// function nuevaFuncion(id){
//     console.log('desde nueva funcion', id);
// }


// /////////// Local Storage 
// /// solo almacena strings
// // .setItem (almacena)

// ///                   llave     valor
// localStorage.setItem('nombre', 'cesar');
// localStorage.setItem('nombre2', 1) 
// // se conservan los datos aunque se cierre el navegador

// sessionStorage.setItem('nombre', 'pablo');
// // los datos permanecen solamente en la sesion actual
// // si se cierra el navegador se borra la informacion

// /// almacenar un objecto en local storage
// const producto = {
//     nombre: 'Monitor 24 Pulgadas',
//     precio: 300
// }

// const productoString = JSON.stringify(producto);
// localStorage.setItem('producto', productoString);

// // almacenar un arreglo
// const meses = ['Enero', 'Febrero', 'Marzo'];
// const mesesString = JSON.stringify(meses);
// localStorage.setItem('meses', mesesString);

// // se puede aplicar directamente
// localStorage.setItem('meses', JSON.stringify(meses));



// /////// Local Storage
// /// .getItem (para obtener los datos)

// const nombre = localStorage.getItem('nombre');
// console.log(nombre) // cesar

// /// convertir un string a un objeto o arreglo (aplica solamente
// // si el string tiene la forma de objeto o arreglo )
// // JSON.parse
// const productoJSON = localStorage.getItem('producto');
// console.log(JSON.parse(productoJSON));
// // {nombre: 'Monitor 24 Pulgadas', precio: 300}
// //   nombre: "Monitor 24 Pulgadas"
// //   precio: 300

// const meses = localStorage.getItem('meses');
// console.log(JSON.parse(meses));
// // (3) ['Enero', 'Febrero', 'Marzo']

// // 2da opcion
// const meses = localStorage.getItem('meses');
// const mesesArray = JSON.parse('meses');
// console.log(mesesArray);

// //// Local Storage
// /// .removeItem (para eliminar)

// localStorage.removeItem('nombre');

// // actualizar un registro
// const mesesArray = JSON.parse(localStorage.getItem('meses'));
// console.log(mesesArray);
// mesesArray.push('Nuevo Mes');
// console.log(mesesArray);
// localStorage.setItem('meses', JSON.stringify(mesesArray));

// // para limpiar todo el local storage
// localStorage.clear();



// ///// Fechas

// const diaHoy = new Date();

// let valor;
// valor = diaHoy;

// console.log(valor); 
// // Mon Jan 02 2023 16:47:18 GMT-0600 (hora estándar central)

// valor = diaHoy.getFullYear();
// console.log(valor);  // 2023 (nos muestra el año en el que estamos)

// valor = diaHoy.getMonth();
// console.log(valor);  // 0  (los meses comienzan en cero)

// valor = diaHoy.getMinutes();
// console.log(valor);  // 54  (en que minuto estamos)

// valor = diaHoy.getHours();
// console.log(valor);  // 16 (en que hora estamos)

// valor = diaHoy.getTime();
// console.log(valor); 
// // 1672700424176 (milisegundos que han trascurrido del 1 de enero de
// // 1970 asta la fecha, van cambiando)

// // get sirve para extraer

// // set sirve para modificar 
// valor = diaHoy.setFullYear(2010);
// console.log(diaHoy); // Sat Jan 02 2010 17:04:30 GMT-0600 (hora estándar central)

// Date.now()  // no necesita instanciarse
// new Date(); // si necesita instanciarse

// ////// Moment

// const diaHoy = new Date();

// moment.locale('es-mx')
// console.log( moment().format('MMMM Do YYYY, h:mm:ss a') );
// // enero 2º 2023, 5:28:55 pm

// console.log(moment().format('LLLL', diaHoy));
// // lunes, 2 de enero de 2023 17:29


// ///////// Classes en JavaScript
// // se utiliza mas declaration


// //>> class declaration
// class Cliente{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
// }

// // instanciamos
// const cesar = new Cliente('Cesar', 400);
// console.log(cesar);
// // Cliente {nombre: 'Cesar', saldo: 400}



// //>> class expression
// const Cliente2 = class{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
// }

// // instanciamos
// const cesar2 = new Cliente2('Cesar', 400);
// console.log(cesar2);
// // Cliente2 {nombre: 'Cesar', saldo: 400}



// ///////// Metodos y Metodos estaticos en las Classes
// // (funciones)

// //>> class declaration
// class Cliente{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
//     }
//     static bienvenida(){
//         return `Bienvenido al cajero`;
//     }
// }

// // instanciamos
// const cesar = new Cliente('Cesar', 400);
// console.log(cesar.mostrarInformacion()); // Cliente: Cesar, tu saldo es de 400
// console.log(cesar);  // Cliente {nombre: 'Cesar', saldo: 400}

// // static no requiere instancia
// console.log(Cliente.bienvenida()); // Bienvenido al cajero
// console.log(cesar.bienvenida()); // Uncaught TypeError: cesar.bienvenida is not a function


// //>> class expression
// const Cliente2 = class{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
//     }
// }

// // instanciamos
// const cesar2 = new Cliente2('Cesar', 400);
// console.log(cesar2.mostrarInformacion()); // Cliente: Cesar, tu saldo es de 400
// console.log(cesar2);  // Cliente2 {nombre: 'Cesar', saldo: 400}


// //////// Heredar una clase

// class Cliente{
//     constructor(nombre, saldo){
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
//     }
//     static bienvenida(){
//         return `Bienvenido al cajero`;
//     }
// }

// // Herencia
// class Empresa extends Cliente{
    
// }

// const cesar = new Cliente('Cesar', 400);
// const empresa = new Empresa('Dyxer Team', 500);
// console.log(empresa.mostrarInformacion()); // Cliente: Dyxer Team, tu saldo es de 500


// class Empresa2 extends Cliente{
//     constructor(nombre, saldo, telefono, categoria){
//         super(nombre, saldo); // utilizamos super para buscar en el constructor padre
//         this.telefono = telefono;
//         this.categoria = categoria;
//     }
//     static bienvenida(){ // reescribe el metodo
//         return `Bienvenido al cajero de empresa`;
//     }
// }


// const empresa2 = new Empresa2('LALA', 600, 41910012525, 'Aprendizaje en Línea');
// console.log(empresa2.mostrarInformacion()); // Cliente: LALA, tu saldo es de 600

// console.log(Empresa2.bienvenida()); // Bienvenido al cajero de empresa




/////// Propiedades Privadas en JavaScript
// // (no funciona en todos los navegadores)
// class Cliente{

//     #nombre;

//     constructor(nombre, saldo){
//         this.#nombre = nombre;
//         this.saldo = saldo;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
//     }
//     static bienvenida(){
//         return `Bienvenido al cajero`;
//     }
// }

// const cesar = new Cliente('cesar', 200);
// console.log(cesar.mostrarInformacion()); // Cliente: cesar, tu saldo es de 200
// console.log(cesar.#nombre); 
// // Uncaught SyntaxError: Private field '#nombre' 
//  must be declared in an enclosing class

// /////// sets
// // permite crear una lista de valores sin duplicados
// // solo son valores, (no son llave y valor)

// const carrito = new Set();

// //agregar elementos .add
// carrito.add('Camisa');
// carrito.add('Disco #1');
// carrito.add('Disco #2');
// carrito.add('Camisa');
// carrito.add('camisa'); // Set(4) {'Camisa', 'Disco #1', 'Disco #2', 'camisa'}

// console.log(carrito); // Set(3) {'Camisa', 'Disco #1', 'Disco #2'}

// // los valores duplicados no se agregan, minusculas y mayusculas los toman
// // como diferente

// //para ver cuantos elementos hay en un arreglo se utiliza .size en vez de length
// console.log(carrito.size);  // 4

// // si un elemento existe .has
// console.log(carrito.has('Camisa')); // true

// // eliminar un elemento
// carrito.delete('Disco #2');
// //eliminar todos los elementos del set
// carrito.clear();

// //los sets son iterables
// carrito.forEach(producto => {
//     console.log(producto);
// })

// carrito.forEach((producto, index, pertenece) => {
//     console.log(producto);  // Camisa Disco #1 Disco #2 camisa
//     console.log(index);     // Camisa Disco #1 Disco #2 camisa
//     console.log(pertenece); // Set(4) {'Camisa', 'Disco #1', 'Disco #2', 'camisa'}
//                             // Set(4) {'Camisa', 'Disco #1', 'Disco #2', 'camisa'}
//                             // Set(4) {'Camisa', 'Disco #1', 'Disco #2', 'camisa'}
//                             // Set(4) {'Camisa', 'Disco #1', 'Disco #2', 'camisa'}
// });

// /// uso (eliminar duplicados del siguiente arreglo)
// const numeros = [10,20,30,40,50,10,20];

// const noDuplicados = new Set(numeros);
// console.log(noDuplicados); // Set(5) {10, 20, 30, 40, 50}

// ///// WeakSet
// // en el set le podemos pasar cualquier valor (objetos, numeros, booleans, etc..)
// // en el weakset solamente le podemos pasar objetos
// const weakset = new WeakSet();

// const cliente = {
//     nombre: 'cesar',
//     saldo: 100
// }

// // para agregar .add
// weakset.add(cliente);

// //para verificiar si existe .has
// console.log(weakset.has(cliente)); // true
// console.log(weakset.has(cliente2)); // Uncaught ReferenceError: cliente2 is not defined

// // para eliminar
// weakset.delete(cliente); // WeakSet {}
// console.log(weakset);

// // .size no existe en un weakset
// // los wekset no son iterables


/// Maps
// son listas ordenadas en llave y valor 
// (llave y valor pueden ser cualquier tipo de dato)

// const cliente = new Map();

// // para agregar .set
// cliente.set('nombre', 'cesar');
// cliente.set('tipo', 'Premium');
// cliente.set('saldo', 1000);

// console.log(cliente); 
// // Map(3) {'nombre' => 'cesar', 'tipo' => 'Premium', 'saldo' => 1000}

// // tamaño .size
// console.log(cliente.size); // 3
// // para saber si un valor existe
// console.log(cliente.has('nombre'));  // true
// console.log(cliente.has('nombre2')); // false
// //para obtener un valor
// console.log(cliente.get('nombre'));  // cesar
// // para eliminar
// cliente.delete('saldo');
// // para limpiar, elimina todo el map
// cliente.clear();

// // tambien se puede iniciar un map con valores
// const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'disponible']])

// paciente.set('dr', 'Dr. Asignado');
// paciente.set('nombre', 'Antonio');  // si escribimos la misma llave sobrescribe
//                                     // el valor

// console.log(paciente);

// // los map son iterables
// paciente.forEach(datos => {
//     console.log(datos); //Antonio disponible Dr. Asignado
// })

// // index nos reporta la llave
// paciente.forEach((datos, index) => {
//     console.log(index); //nombre cuarto dr
// })


// //// WeakMaps
// // sirven para mantener una serie de datos privados
// // llevan llave y valor

// const producto = {
//     idProducto: 10
// }

// const weakmap = new WeakMap();
// // para agregar se utiliza .set
// weakmap.set(producto, 'Monitor');
// // para comprobar si exite un valor
// console.log(weakmap.has(producto)); // true
// // para extraer
// console.log(weakmap.get(producto)); // Monitor

// // no se pueden iterar
// // no se puede conocer la extension

// // para eliminar
// weakmap.delete(producto);

// // solo acepta objetos


// /// Symbols
// // sirven para crear una propiedad unica
// // ningun symbol es igual

// const sym = Symbol();
// const sym2 = Symbol();

// if(sym === sym2){
//     console.log('son iguales');
// }else{
//     console.log('son diferentes')
// }

// // son diferentes

// //////
// const nombre = Symbol();
// const apellido = Symbol();

// const persona = {}

// //agregar nombre y apellido como llabes del objeto
// persona[nombre] = 'cesar';
// persona[apellido] = 'garcia';
// persona.tipoCliente = 'premium';
// persona.saldo = 500;

// console.log(persona);
// // {tipoCliente: 'premium', saldo: 500, Symbol(): 'cesar', Symbol(): 'garcia'}
// // saldo: 500
// // tipoCliente: "premium"
// // Symbol(): "cesar"
// // Symbol(): "garcia"

// console.log(persona[nombre]);  // cesar

// // las propiedades que utilizan un symbol no son iterables
// for(let i in persona){
//     console.log(i); // tipoCliente saldo
// }

// // definir una descripcion del symbol
// const nombreCliente = Symbol('Nombre del cliente');
// const cliente = {};

// cliente[nombreCliente] = 'pablo';

// console.log(cliente);  // {Symbol(Nombre del cliente): 'pablo'}
// console.log(cliente[nombreCliente]); // pablo


// //// ITERADORES

// // crear un iterador

// function creatIterador(carrito){

//     let i = 0;

//     return{
//         siguiente: () => {
//             const fin = (i >= carrito.length);
//             const valor = !fin ? carrito[i++] : undefined;

//             return {
//                 fin,
//                 valor
//             }
//         }
//     }

// }

// const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// const recorrerCarrito = creatIterador(carrito);

// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());

/// GENERADORES

// // un generador es una funcion que retorna un iterador
// // un generador lleva un asterisco al inicio
// // yield son los valores que se pueden iterar

// function *crearGenerador(){
//     yield 1;
//     yield 'cesar';
//     yield 3+3;
//     yield true;
// }

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

// // generador para carrito de compras

// function *generadorCarrito(carrito){
//     for(let i = 0; i < carrito.length; i++){
//         yield carrito[i];
//     }
// }

// const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// const iterador = generadorCarrito(carrito);

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());


// /// iteradorees en JavaScript

// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
// const ordenes = new Set([123, 231, 131, 102]);
// const datos = new Map();

// datos.set('nombre', 'cesar');
// datos.set('profesion', 'desarrollador web');

// /// entries iterator (retorna llave y valor)
// for(let entry of ciudades.entries()){
//     console.log(entry);
// }

// for(let entry of ordenes.entries()){
//     console.log(entry);
// }

// for(let entry of datos.entries()){
//     console.log(entry);
// }

// // values iterator (retorna valor)
// for(let value of ciudades.values()){
//     console.log(value);
// }

// for(let value of ordenes.values()){
//     console.log(value);
// }

// for(let value of datos.values()){
//     console.log(value);
// }

// // keys iterator (retorna llaves)
// for(let keys of ciudades.keys()){
//     console.log(keys);
// }

// for(let keys of ordenes.keys()){
//     console.log(keys);
// }

// for(let keys of datos.keys()){
//     console.log(keys);
// }

// //Default
// for(let ciudad of ciudades){
//     console.log(ciudad);
// }

// for(let orden of ordenes){
//     console.log(orden);
// }

// for(let dato of datos){
//     console.log(dato);
// }



///// Modulos

// (function(){

// //     console.log('desde un iffe');

// // })();

// <script src="app.js" type="module"></script>

// //// app.js
// export const nombreCliente = 'cesar';
// export const ahorro = 200;
// //// exportar una funcion
// export function mostrarInformacion(nombre, ahorro){
//     return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
// }
// export function tieneSaldo(ahorro){
//     if(ahorro > 0){
//         console.log('si tiene saldo');
//     }else{
//         console.log('no tiene saldo');
//     }
// }
// // exportar una clase
// export class Cliente{
//     constructor(nombre, ahorro){
//         this.nombre = nombre;
//         this.ahorro = ahorro;
//     }
//     mostrarInformacion(){
//         return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
//     }
// }

// export default function nuevaFuncion(){
//     console.log('este es el export default');
// }


// //// cliente.js
// import nuevaFuncion, {nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js';
// import {Empresa} from './empresa.js';

// console.log(nombreCliente);
// console.log(ahorro);
// console.log(mostrarInformacion(nombreCliente, ahorro));

// tieneSaldo(ahorro);

// const cliente = new Cliente(nombreCliente, ahorro);

// console.log(cliente);
// confirm.log(cliente.mostrarInformacion());

// // importar empresa
// const empresa = new Empresa('Dyx', 100, 'Online');
// console.log(empresa);

// // export default (solamente puede haber un export default por archivo)
// nuevaFuncion();



// // empresa.js
// import {Cliente} from './cliente.js';

// export class Empresa extends Cliente{
//     constructor(nombre, ahorro, categoria){
//         super(nombre, ahorro);
//         this.categoria = categoria;
//     }
// }



// ///// IndexedDB

// //
// document.addEventListener('DOMContentLoaded', () => {
//     crmDB();

//     setTimeout(() => {
//         crearCliente();
//     }, 5000);


// });

// function crmDB(){
//     //crear base de datos version 1.0
//     // crm es el nombre de la base de datos (colocarlo como string)
//     let crmDB = window.indexedDB.open('crm', 1); 

//     // si hay un error
//     crmDB.onerror = function(){
//         console.log('hubo un error a la hora de crear la DB');
//     }

//     //si se creo bien
//     crmDB.onsuccess = function(){
//         console.log('base de datos creada');
//         DB = crmDB.result;
//     }

//     //configuracion de la base de datos
//     crmDB.onupgradeneeded = function(e){
//         console.log('este metodo solo se ejecuta una vez');
//         console.log(e.target.result); // resultado del evento onupgradeneeded
//         const db = e.target.result;

//         // object store permite crear las columnas de la base de datos
//         const objectStore = db.createObjectStore('crm', {
//             keyPath: 'crm',
//             autoIncrement: true
//         });

//         //definir las columnas
//         objectStore.createIndex('nombre', 'nombre', {unique: false});
//         objectStore.createIndex('email', 'email', {unique: true});
//         objectStore.createIndex('telefono', 'telefono', {unique: false});

//         console.log('columnas creadas');
//     }
// }

// let DB;
// function crearCliente(){

//     let transaction = DB.transaction(['crm'], 'readwrite');

//     transaction.oncomplete = function(){
//         console.log('transaccion completada');
//     }
//     transaction.onerror = function(){
//         console.log('hubo un error en la transaccion');
//     }

//     const objecStore = transaction.objectStore('crm');

//     const nuevoCliente = {
//         telefono: 45454,
//         nombre: 'cesar',
//         email: 'correo@correo.com'
//     }

//     const peticion = objecStore.add(nuevoCliente);
//     console.log(peticion);

// }


// /// Ejemplo de Callbacks

// const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

// function nuevoPais(pais, callback){
//     setTimeout(() => {
//             paises.push(pais);
//             callback(); // Francia España Portugal Australia Inglaterra Alemania
//     }, 2000);
// }


// function mostrarPaises(){
//     setTimeout(() => {
//         paises.forEach(pais => {
//             console.log(pais); // Francia España Portugal Australia Inglaterra
//         });
//     }, 1000);
// }

// mostrarPaises();

// nuevoPais('Alemania', mostrarPaises); 


//// Promises
//palabras reservadas (resolve, )
// >  resolve se ejecuta cuando se cumple el promise
// >  reject cuando hay un error

// const aplicarDescuento = new Promise((resolve, reject) => {

//     const descuento = true;

//     if(descuento){
//         resolve('Descuento Aplicado');
//     }else{
//         reject('NO se pudo aplicar el descuento');
//     }


// });

// // then (y entonces)
// aplicarDescuento
//     .then(resultado => {
//         console.log(resultado); // Descuento Aplicado
//         //tambien se pueden ejecutar funciones
//         descuento(resultado);
//     })
//     .catch(error => {
//         console.log(error);  // NO se pudo aplicar el descuento
//     })


// // console.log(aplicarDescuento);

// // hay 3 valores posibles
// // fulfilled - El promise se cumplio
// // rejected - El promise no se cumplio
// // pending - No se ha cumplido y tampoco fue rechazado

// function descuento(mensaje){
//     console.log(mensaje); // Descuento Aplicado
// }


// const paises = [];

// // const nuevoPais = () => {
// //     new Promise
// // }

// const nuevoPais = pais => new Promise(resolve => {
//     setTimeout(() => {
//         paises.push(pais);
//         resolve(`Agregado: ${pais}`); 
//     }, 3000);
// })

// nuevoPais('Alemania')
//     .then(resultado => {  //resultado es lo que se pasa de resolve
//         console.log(resultado); // Agregado: Alemania
//         console.log(paises);    // ['Alemania']
//         return nuevoPais('Francia'); // return para volver a llamar 
//                                         // el promise
//     })
//     .then(resultado => {
//         console.log(resultado); // Agregado: Francia
//         console.log(paises);    // (2) ['Alemania', 'Francia']
//         return nuevoPais('Inglaterra');
//     })
//     .then(resultado => {
//         console.log(resultado); // Agregado: Inglaterra
//         console.log(paises);    // (3) ['Alemania', 'Francia', 'Inglaterra']
//     })


//// APIS NATIVAS

// //notificaciones
// const notificacionBtn = document.querySelector('#notificar');

// notificacionBtn.addEventListener('click', () => {
//     Notification
//         .requestPermission()
//         .then(resultado => {
//             console.log(`El resultado es`, resultado);
//         })
// });

// const verNotificacion = document.querySelector('#verNotificacion');

// verNotificacion.addEventListener('click', () => {
//     if(Notification.permission === 'granted'){
//         // new Notification('Esta es la Notificacion', {
//         //     icon: 'image.jpg',
//         //     body: 'Aprendiendo APIS'
//         // });

//         //abrir una url al dar click en la notifiacion
//         const notifiacion = new Notification('Esta es la Notificacion', {
//             icon: 'image.jpg',
//             body: 'Aprendiendo APIS'
//         });

//         notifiacion.onclick = function(){
//             window.open('https://cesarpgasuz.xyz'); 
//             // open es para abrir una url
//         }
//     }
// });

//// APIS NATIVAS

// // Intersection Observer

// document.addEventListener('DOMContentLoaded', () => {

//     const observer = new IntersectionObserver(entries => {
//         console.log(entries[0]);
//         if(entries[0].isIntersecting){
//             console.log('ya esta visible');
//         }

//     });

//     observer.observe(document.querySelector('.premium'));
//     // observe se encarga de todo
// });

// //// APIS NATIVAS

// // detectar si hay internet

// window.addEventListener('online', actualizarEstado);
// window.addEventListener('offline', actualizarEstado);

// function actualizarEstado(){
//     if(navigator.onLine){
//         console.log('estas conectado');
//     }else{
//         console.log('no estas conectado');
//     }
// }


// // //// APIS NATIVAS

// // ejecutar pantalla completa

// const abrirBtn = document.querySelector('#abrir-pantalla-completa');
// const salirBtn = document.querySelector('#salir-pantalla-completa');

// abrirBtn.addEventListener('click', pantallaCompleta);
// salirBtn.addEventListener('click', cerrarPantallaCompleta);

// function pantallaCompleta(){
//     document.documentElement.requestFullscreen();
// }

// function cerrarPantallaCompleta(){
//     document.exitFullscreen();
// }

// // // //// APIS NATIVAS

// // visibilityState (detectar cuando estamos viendo una pagina)

// document.addEventListener('visibilitychange', () => {
//     console.log(document.visibilityState);
//     if(document.visibilityState === 'visible'){
//         console.log('Ejecutar la funcion para reproducir el video..')
//     }else{
//         console.log('pausando el video...')
//     }
// })


//// F


// ////// try catch

// console.log(1 + 1);  //  2

// autenticarUsuario(); // ReferenceError: autenticarUsuario is not defined

// console.log(2 + 2);  // no se ejecuta el console log


// // el try catch ayuda a que la aplicacion se ejecute aunque
// // una parte del codigo tengo un error

// console.log(1 + 1);  //  2

// try{
//     autenticarUsuario();
// }catch (error){
//     console.log(error) // ReferenceError: autenticarUsuario is not defined
// }

// console.log(2 + 2);  // 4


// // ejemplo async await y que es lo que hace (function declaration)

// function descargarClientes(){

//     return new Promise((resolve, reject) => {
//         const error = false;

//         setTimeout(() => {
//             if(!error){
//                 resolve('El listado de clientes se descargo');
//             }else{
//                 reject('Error en la conexion');
//             }
//         }, 3000);
//     })
// }

// // async tiene que ir en la funcion padre
// // await donde queramos bloquear el codigo
// async function ejecutar(){
//     try{
//         console.log(1 + 1); // 2
//         const respuesta = await descargarClientes();
//         // await detiene la ejecucion del codigo asta que se
//         // resuelva el promise
//         // respuesta es el resolve

//         console.log(2 + 2); // 4
//         console.log(respuesta); // El listado de clientes se descargo
//     }catch(error){
//         // el reject se lee en el catch
//         console.log(error);
//     }
// }

// ejecutar();



// // ejemplo async await y que es lo que hace (function expression)

// function descargarClientes(){

//     return new Promise((resolve, reject) => {
//         const error = false;

//         setTimeout(() => {
//             if(!error){
//                 resolve('El listado de clientes se descargo');
//             }else{
//                 reject('Error en la conexion');
//             }
//         }, 3000);
//     })
// }

// // async tiene que ir en la funcion padre
// // await donde queramos bloquear el codigo
// const ejecutar = async () =>{
//     try{
//         console.log(1 + 1); // 2
//         const respuesta = await descargarClientes();
//         // await detiene la ejecucion del codigo asta que se
//         // resuelva el promise
//         // respuesta es el resolve

//         console.log(2 + 2); // 4
//         console.log(respuesta); // El listado de clientes se descargo
//     }catch(error){
//         // el reject se lee en el catch
//         console.log(error);
//     }
// }

// ejecutar();

// // multiples awaits

// function descargarNuevosClientes(){
//     return new Promise(resolve => {
//         console.log('Descargando clientes...');

//         setTimeout(() => {
//             resolve('Los clientes fueron descargados');
//         }, 5000);
//     })
// }

// function descargarNuevosPedidos(){
//     return new Promise(resolve => {
//         console.log('Descargando pedidos...');

//         setTimeout(() => {
//             resolve('Los pedidos fueron descargados');
//         }, 3000);
//     })
// }

// const app = async () =>{
//     try{
//         // 1 forma -> se puede utilizar si queremos unos
//         // resultados primero y luego hacer la consulta 
//         // en otros (si una consulta depende de la otra)
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);
//         const pedidos = await descargarNuevosPedidos();
//         console.log(pedidos);

//         // 2 forma las dos funciones se ejecutan en paralelo
//         // se utiliza cuando las funciones son independientes
//         // se gana el performance
//         const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
//         console.log(respuesta[0]);
//         console.log(respuesta[1]);

//     }catch(error){
//         console.log(error);
//     }
// }

// app();

// /// async await hacia una api con fetch

// const url = 'https://picsum.photos/list';

// document.addEventListener('DOMContentLoaded', obtenerDatos);

// // con promises
// function obtenerDatos(){
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error));
// }

// // con async await
// async function obtenerDatos(){
//     try{
//         const respuesta = await fetch(url);
//         const resultado = await respuesta.json();
//         console.log(resultado);  
//     }catch(error){
//         console.log(error);
//     }
    
// }

// // Progrmacion Funcional
// // 1.- inmutabilidad: no se deber reasignar los valores
// // hay que usar const
// // 2.- separar datos de funciones
// // 3.- first class function

// // First-class Function

// //poder crar funciones que parezcan cualquier
// //variable como lo es function expression

// const suma = function(a, b){
//     return a + b;
// }
// const resultado = suma;

// console.log(resultado(10,20)); // 30


// // funciones como argumentos

// const suma = (a, b) =>  a + b; 
// const multiplicar = (a, b) =>  a * b; 

// const sumarOMultiplicar = fn => fn(10,20);

// console.log(sumarOMultiplicar(suma));        // 30
// console.log(sumarOMultiplicar(multiplicar)); // 200



// higher order function

// (separar los datos de las funciones)
// casi todos los array methods son higher order function
// const carrito = [
//     {nombre: 'monitor', precio: 300},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'teclado', precio: 100}
// ];

// /// 1.-
// const resultado = carrito.filter(producto => {
//     return producto.precio > 200;
// });
// console.log(resultado);

// // 2.-
// const mayor200 = producto => {
//     return producto.precio > 200;
// }
// const resultado = carrito.filter(mayor200);
// console.log(resultado);

//// .map
// const carrito = [
//     {nombre: 'monitor', precio: 300},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'teclado', precio: 100}
// ];

// const obtenerNombres = producto => {
//     return producto.nombre;
// }

// const resultado = carrito.map(obtenerNombres);
// console.log(resultado)  // (3) ['monitor', 'telefono', 'teclado']


// /// menos cantidad de codigo en las funciones

// const carrito = [
//     {nombre: 'monitor', precio: 300},
//     {nombre: 'telefono', precio: 200},
//     {nombre: 'teclado', precio: 100}
// ];

// const obtenerNombres = producto =>  producto.nombre;

// const resultado = carrito.map(obtenerNombres);
// console.log(resultado)  // (3) ['monitor', 'telefono', 'teclado']


/// Pure Functions (funciones puras)
// funciones que retornan un dato pero no modifican los
// valores de las variables

// const duplicar = numero => numero * 2;

// const numero1 = 20;

// const resueltado = duplicar(numero1);
// console.log(resueltado); // 40


// // funciones que retornan funciones

// const obtenerCliente = () => () => console.log('Cesar');

// const fn = obtenerCliente();

// fn();


// // cesar

// closures
// los closures son creados cada vez que se crea una funcion
// un closure es la forma de acceder a una funcion o valor desde
// el exterior

// const cliente =  'cesar';

// function mostrarCliente(){ 
//     const cliente = 'pablo';
//     console.log(cliente);
// }
// mostrarCliente();

// // pablo


// // ejmplo de closure
// const obtenerCliente = () => {
//     const nombre = 'cesar';
//     function muestraNombre(){
//         console.log(nombre);
//     }
//     return muestraNombre;
// }

// const cliente = obtenerCliente();

// cliente();

// // cesar


// /// Partials y Currying
// // divir funciones en pequeñas partes

// const suma = (a,b,c) => a + b + c;


// // divir en dos parciales
// const parcial = a => (b, c) => suma(a,b,c);

// const primerNumero = parcial(5);
// const resultado = primerNumero(4,3);
// console.log(resultado); // 12

// // dividir en 3 parciales
// const parcial = a => b => c => suma(a,b,c);

// const primerNumero = parcial(5);
// const segundoNumero = primerNumero(4);
// const resultado = segundoNumero(3);

// console.log(resultado); // 12


// const parcial = a => b => c => suma(a,b,c);

// const resultadoParcial = parcial(5)(4)(3);

// console.log(resultadoParcial)  // 12


// // composition
// // alternativa a las classes
// // assing toma funcion y la copia dentro de un objeto
// const obtenerNombres = info => ({
//     mostrarNombre(){
//         console.log(`Nombre: ${info.nombre}`);
//     }
// })

// const guardarEmail = info => ({
//     agregarEmail(email){
//         console.log(`Guardando email en: ${info.nombre}`);
//         info.email = email;
//     }
// });

// const obtenerEmail = info => ({
//     mostrarEmail(){
//         console.log(`Correo: ${info.email}`);
//     }
// });

// const obtnerEmpresa = info => ({
//     mostrarEmpresa(){
//         console.log(`Empresa: ${info.empresa}`);
//     }
// });

// const obtnerPuesto = info => ({
//     mostrarPuesto(){
//         console.log(`Puesto: ${info.puesto}`);
//     }
// });


// function Cliente(nombre, email, empresa){
//     let info = {
//         nombre,
//         email,
//         empresa
//     }
//     return Object.assign(
//         info,
//         obtenerNombres(info),
//         guardarEmail(info),
//         obtenerEmail(info),
//         obtnerEmpresa(info)
//     )
// }

// function Empleado(nombre, email, puesto){
//     let info = {
//         nombre,
//         email,
//         puesto
//     }
//     return Object.assign(
//         info,
//         obtenerNombres(info),
//         guardarEmail(info),
//         obtenerEmail(info),
//         obtnerPuesto(info)
//     )
// }

// const cliente = Cliente('cesar', null, 'dyxerteam');
// cliente.mostrarNombre();
// cliente.agregarEmail('cliente@cliente.com');
// cliente.mostrarEmail();
// cliente.mostrarEmpresa();

// // Nombre: cesar
// // Guardando email en: cesar
// // Correo: cliente@cliente.com
// // Empresa: dyxerteam

// const empleado = Empleado('pablo', null, 'programador');
// empleado.mostrarNombre(); // Nombre: pablo
// empleado.agregarEmail('empleado@empleado.com');
// empleado.mostrarEmail();
// empleado.mostrarPuesto();

// // Nombre: pablo
// // Guardando email en: pablo
// // Correo: empleado@empleado.com
// // Puesto: programador


// // scope (alcance)
// const cliente = 'cesar';

// function mostrarCliente(){
//     const cliente = 'pablo';
//     console.log(cliente);
// }

// mostrarCliente();
// // pablo

// Hoisting
// javascript se ejecuta en dos vueltas
// // 1.- se registran las funciones
// // 2.- se mandar llamar

// obtenerCliente('cesar');

// function obtenerCliente(nombre){
//     console.log(`Nombre: ${nombre}`);
// }

// // cuando se utiliza function declaration se puede llamar antes
// // o despues y no hay problema
// function obtenerCliente(nombre){
//     console.log(`Nombre: ${nombre}`);
// }

// obtenerCliente('cesar');


// ///////////// function expression (si se manda llamar despues no hay
// // problema )
// const obtenerCliente2 = function(nombre){
//     console.log(`Nombre: ${nombre}`);
// }
// obtenerCliente2('pablo');

// //// si se manda llamar antes si marca un error
// obtenerCliente2('pablo');

// const obtenerCliente2 = function(nombre){
//     console.log(`Nombre: ${nombre}`);
// }



/// coercion
// conversion automatica, implicita o explicita de valores 
// de un tipo a otro

// coercion implicita lo forza

// const numero1 = 20;
// const numero2 = '40';
// console.log(numero1 + numero2); // 2040

// // coercion explicita
// console.log(Number(numero2)); // 40



// // implicit binding (this busca en el mismo objeto)

// const usuario =  {
//     nombre: 'cesar',
//     edad: 20,
//     infomarcion(){
//         console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
//     },
//     mascota: {
//         nombre: 'hook',
//         edad: 1,
//         infomarcion(){
//             console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
//         }
//     }
// }

// usuario.infomarcion(); // Nombre: cesar, edad: 20
// usuario.mascota.infomarcion(); // Nombre: hook, edad: 1


// explicit binding 

// function persona(el1, el2){
//     console.log(`Nombre: ${this.nombre} y escucho ${el1} y ${el2}`);
// }
// const informacion = {
//     nombre: 'cesar'
// }
// const musica = ['Rock', 'Pop'];

// // en call se tiene que pasar cada elemento de forma individual
// persona.call(informacion, musica[0], musica[1]);
// // Nombre: cesar y escucho Rock y Pop

// // en apply se puede pasar el arreglo completo
// persona.apply(informacion, musica);
// // Nombre: cesar y escucho Rock y Pop

// // bind crea un nueva funcion y se le pasa cada elemento de forma individual
// const nuevaFuncion = persona.bind(informacion, musica[0], musica[1]);
// nuevaFuncion();
// // Nombre: cesar y escucho Rock y Pop


// /// New Binding

// function Auto(modelo, color){
//     this.modelo = modelo;
//     this.color = color;
// }

// const auto = new Auto('Camaro', 'Negro');
// console.log(auto);


// // window binding
// window.color = 'negro';

// function hola(){
//     console.log(color);
// }
// hola();


// event loop o loop de eventos

// console.log('Primero');

// setTimeout(() => {
//     console.log('segundo')
// }, 0);

// console.log('tercero');

// setTimeout(() => {
//     console.log('cuarto')
// }, 0);

// new Promise(function(resolve){
//     resolve('Desconocido')
// }).then(console.log)

// console.log('ultimo')

// function hola(){
//     console.log('hola');
// }
// hola();

// // Primero
// // tercero
// // ultimo
// // hola
// // Desconocido
// // segundo
// // cuarto



// self

// se refiere a la ventana global es similar a window
// se utiliza en los service workers

self.onload = () => {
    console.log('ventana lista')
}
// ventana lista

window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        return `Producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo());
// Producto: Monitor 20 Pulgadas