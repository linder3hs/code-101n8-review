/* Componente 1
      Al entrar a mi pagina web quiero que al usuario se le pregunta
      la edad, si el usuario es menor entonces vamos a mostrar
      un banner indicando que para visitar los lugares debe
      estar acompañado, en caso sea mayor de edad no es necesario
      mostrar nada
      */

// 3 tipos
// string = "textos"
//  number = 10.4, 10, -10
// boolean = true, false

// existe la funcion prompt, permite que el usuario puede escribir
// const edad = prompt("Ingrese su edad"); // string
// // ahora vamos a convertir edad a un numero
// const edadNumber = parseInt(edad); // number

// if (edadNumber < 18) {
//   // creamos el banner
//   // document.write
//   document.write(
//     "<div class='banner'>Recuerda visitar los lugares con un adulto</div>"
//   );
// }

const backgrounColor = prompt(
  "Ingese un color, este será el color de fondo de la pagina"
);
// // vamos a acceder al body
document.body.style.backgroundColor = backgrounColor;

function registrarHermanos() {
  // Me pregunta la cantidad de hermanos
  const cantidadDeHermanos = parseInt(
    prompt("Ingrese la cantidad de hermanos")
  );
  // Va a pregunta de forma dinamica el nombre de cada hermano

  // arreglo de hermanos
  const nombresDeHermanos = [];

  // dentro de los parentesis va a una condicion
  let contador = 0;
  while (contador < cantidadDeHermanos) {
    const hermano = prompt("Ingresa el nombre del hermano " + contador);
    nombresDeHermanos.push(hermano);
    // vital: sumarle 1 al contador
    contador++; // +1
  }

  console.log(nombresDeHermanos);
}
