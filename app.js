function generarColorHex() {
  // Generamos un número aleatorio entre 0 y 16777215 (0xFFFFFF en hexadecimal)
  const numeroAleatorio = Math.floor(Math.random() * 16777216);
  // Convertimos el número a formato hexadecimal y aseguramos que tenga 6 dígitos
  const colorHex = `#${numeroAleatorio.toString(16).padStart(6, "0")}`;
  return colorHex;
}

// como busco un elemento por id
const btnGame2 = document.getElementById("btnGame2");
btnGame2.addEventListener("click", generarBloques);

function generarBloques() {
  // Busacando elementos por id con la funcion getElementById
  const title = document.getElementById("title");
  // podemos modificar el texto
  title.textContent = "Hola fui modificado desde JS";
  title.style.fontFamily = "Verdana";
  title.style.color = "green";

  // preguntar la cantidad de cuadrados
  const cantidadDeCuadrados = parseInt(
    prompt("Ingrese la cantidad de cuadrados")
  );

  // definir un contador para usarlo en el while
  let contador = 0;

  // estamos accediendi al body para colocar los cuadrados dentro de el
  const body = document.body;

  // creamos un while para ejecutar la creacion en base a la cantidad de veces
  while (contador < cantidadDeCuadrados) {
    // createElement: Permite crear una etiqueta html
    const cuadrado = document.createElement("div"); // <div></div>
    cuadrado.textContent = contador;
    // cuales son las propiedades de un cuadrado?
    cuadrado.style.width = "100px";
    cuadrado.style.height = "100px";
    cuadrado.style.backgroundColor = generarColorHex();
    cuadrado.style.border = "1px solid";

    // appendChild: sirve para agregar un elemento a un contenedor
    body.appendChild(cuadrado);
    contador++;
  }
}

// title.style.display = "none";
// solo busca a la primera coincidencia y obtiene el elemento

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

// const backgrounColor = prompt(
//   "Ingese un color, este será el color de fondo de la pagina"
// );
// // // vamos a acceder al body
// document.body.style.backgroundColor = backgrounColor;

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
