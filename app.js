/**
 * Genera un color hexadecimal aleatorio
 * @returns {string} Color en formato hexadecimal (#RRGGBB)
 */
function generarColorHex() {
  // Convierte un número decimal (0-16777215) a hexadecimal (000000-FFFFFF)
  const numeroAleatorio = Math.floor(Math.random() * 16777216);
  // Asegura que el color tenga 6 dígitos agregando ceros a la izquierda si es necesario
  const colorHex = `#${numeroAleatorio.toString(16).padStart(6, "0")}`;
  return colorHex;
}

// Obtiene referencia al botón del juego 2
const btnGame2 = document.getElementById("btnGame2");

// Agrega el event listener para generar bloques cuando se haga click
btnGame2.addEventListener("click", generarBloques);

/**
 * Función principal para generar bloques de colores
 * Modifica el título y crea cuadrados con colores aleatorios
 */
function generarBloques() {
  // Modifica el título de la página
  const title = document.getElementById("title");
  title.textContent = "Hola fui modificado desde JS";
  title.style.fontFamily = "Verdana";
  title.style.color = "green";

  // Solicita al usuario la cantidad de cuadrados a generar
  const cantidadDeCuadrados = parseInt(
    prompt("Ingrese la cantidad de cuadrados")
  );

  // Inicializa contador para el bucle de generación
  let contador = 0;

  // Obtiene referencia al body para agregar los cuadrados
  const body = document.body;

  // Genera los cuadrados según la cantidad especificada
  while (contador < cantidadDeCuadrados) {
    // Crea un nuevo elemento div para el cuadrado
    const cuadrado = document.createElement("div");
    cuadrado.textContent = contador;

    // Establece las propiedades de estilo del cuadrado
    cuadrado.style.width = "100px";
    cuadrado.style.height = "100px";
    cuadrado.style.backgroundColor = generarColorHex();
    cuadrado.style.border = "1px solid";

    // Agrega el cuadrado al body
    body.appendChild(cuadrado);
    contador++;
  }
}

/* COMPONENTE DE VERIFICACIÓN DE EDAD
 * Funcionalidad comentada que verifica la edad del usuario
 * y muestra un banner si es menor de edad
 *
 * Ejemplo de uso:
 * const edad = prompt("Ingrese su edad");
 * const edadNumber = parseInt(edad);
 *
 * if (edadNumber < 18) {
 *   document.write(
 *     "<div class='banner'>Recuerda visitar los lugares con un adulto</div>"
 *   );
 * }
 */

/* CAMBIO DE COLOR DE FONDO
 * Funcionalidad comentada que permite al usuario
 * cambiar el color de fondo de la página
 *
 * Ejemplo de uso:
 * const backgrounColor = prompt("Ingese un color");
 * document.body.style.backgroundColor = backgrounColor;
 */

// Obtiene referencia al contenedor del área de juego
const resultContainer = document.getElementById("game-area");

/**
 * Función para registrar y mostrar una lista de hermanos
 * Solicita la cantidad de hermanos y sus nombres
 * Crea una lista no ordenada (ul) con los nombres
 */
function registrarHermanos() {
  // Solicita la cantidad de hermanos
  const cantidadDeHermanos = parseInt(
    prompt("Ingrese la cantidad de hermanos")
  );

  // Array para almacenar los nombres de los hermanos
  const nombresDeHermanos = [];

  // Recopila los nombres de los hermanos
  let contador = 0;
  while (contador < cantidadDeHermanos) {
    const hermano = prompt("Ingresa el nombre del hermano " + contador);
    nombresDeHermanos.push(hermano);
    contador++;
  }

  // Limpia el contenedor antes de agregar la nueva lista
  resultContainer.innerHTML = "";

  // Crea y puebla la lista no ordenada con los nombres
  const listaNoOrdenada = document.createElement("ul");
  for (let nombreDeHermano of nombresDeHermanos) {
    const listItem = document.createElement("li");
    listItem.textContent = nombreDeHermano;
    listaNoOrdenada.appendChild(listItem);
  }

  // Agrega la lista al contenedor
  resultContainer.appendChild(listaNoOrdenada);
}
