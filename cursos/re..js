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


// Buenas Practica Boolean

////////no hacer
const autenticado = true;

if(autenticado === true){
    console.log('si puedes entrar');
}else{
    console.log('no puedes entrar');
}

////// lo correcto
if(autenticado){
    console.log('si puedes entrar');
}else{
    console.log('no puedes entrar')
}
//dentro del if ya se da por implicito el true