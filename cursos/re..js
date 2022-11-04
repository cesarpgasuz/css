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



const producto = 'Monitor 20 Pulgadas';

// => .replace (remplazar textos (strings))
console.log(producto.replace('Pulgadas', '"'));  // Monitor 20 "
console.log(producto.replace('Monitor', 'Monitor Curvo'));  //Monitor Curvo 20 Pulgadas

// => .slice para cortar
console.log(producto.slice(0,10)); 
    // Monitor 20 
    //inicia en 0 y termina en los 10 caracteres
console.log(producto.slice(8));    
    // 20 Pulgadas 
    // si no se pasa el segundo valor corta desde la posicion escrita
console.log(producto.slice(2,1));  
    // 
    // no hace nada si el primer numero es mayor
                              
// => .substring  (alternativa a slice)
console.log(producto.substring(0,10)); 
    // Monitor 20
    // se comporta igual
console.log(producto.substring(2,1));
    // o
    // si el primer numero es mayor substring modifica el orden  .substring(1,2)
    // principal diferencia

// => . chartAt (corta en la posicion que se le pasa)
const usuario = 'Cesar';
console.log(usuario.charAt(0)); // C
console.log(usuario.charAt(1)); // e
console.log(usuario.charAt(4)); // r