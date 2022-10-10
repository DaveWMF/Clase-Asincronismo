/**
 * 
 * Veamos que:
 * - 'let' es una palabra reservada para definir el nombre de una variable una única vez
 *      - Estructuras:
 *          let <nombre>;
 *          let <nombre> = <valor>;
 *          let <nombre> = <función>(<datos>);
 *      - Ejemplo:
 *          let numerito;
 *          let numerote = 5;
 *          let numerin = Math.random();
 * - 'for' es una balabra reservada para indicar un bloque de control que se debe repetir 
 *      según las variables, condiciones y acciones dentro de los parentesis.
 *      - Estructuras:
 *          for(<variables>; <condiciones>; <acciones sobre variables>){
 *              <código a repetir hasta que la condición sea falsa>
 *          }
 *      - Ejemplo (Repetir 10 veces una alerta):
 *          for(let indice = 0; indice < 10; indice++)
 *          {
 *              alert("Mi número va en: " + indice);
 *          }
 * 
 * Funciones JS a utilizar
 * - Math.random() - Nos devuelve un numero aleatorio entre 0 y 1
 * - Math.trunc(<numero>) - Nos devuelve el numero proporcionado truncando todo valor 
 *      después del punto decimal.
 * - document.getElementById("nombre") - Devuelve un objeto con el que podemos manipular 
 *      información del componente que tenga como 'id' el nombre proporcionado.
 * 
 * Objetos JS a utilizar
 * - Promise: es un objeto con funciones asíncronas que nos permite trabajar con muchas 
 *      actividades a la vez.
 *      - Estructura:
 *          let <nombre> = new Promise(<función>)
 *          let <nombre> = new Promise(<función lambda>)
 *          let <nombre> = new Promise(<función anónima>)
 *          function <nombre>(){
 *              return new Promise
 *          }
 */

/** Asincronismo - Uso de promesas */
function ejemplo1()
{
    return new Promise(function(){
        setTimeout(agregarComponente, 2000, "bg-oxford");
    });
}

/** Asincronismo - Uso de palabra reservada async */
async function ejemplo2()
{
    setTimeout(agregarComponente, 5000, "bg-green");
}

/** Espera de Asincronismo - Uso de palabra reservada await */
async function ejemplo3()
{
    await ejemplo3_ayudante1();
    await ejemplo3_ayudante2();
}

async function ejemplo3_ayudante1()
{
    await dormir(2000);
    agregarComponente("bg-green");
}

async function ejemplo3_ayudante2()
{
    await dormir(2000);
    agregarComponente("bg-blue");
}

/** Espera de Asincronismo - Uso de funcion then */
async function ejemplo4()
{
    ejemplo3_ayudante1().then(function(){
        ejemplo3_ayudante2();
    });
}

/** Funcion síncrona en JS 
 * 
 *  Cambia los ciclos por la función asíncrona dormir y has que espere a que
 *  termine el tiempo de la función antes de ejecutar las funciones 'cambiarAVerde'
 *  o 'cambiarAGris'
*/
function ejecutarSincrono()
{
    //Cambiamos el color de los componentes bar1, bar2, bar3, bar4, bar5
    //a verde, esperamos y cambiamos el color a gris nuevamente
    for (let index = 1; index <= 5; index++) {
        for(let ayudante=0; ayudante < 1000000000; ayudante++){}
        cambiarAVerde("bar"+index);
        for(let ayudante=0; ayudante < 1000000000; ayudante++){}
        cambiarAGris("bar"+index);
    }
}

/**
 *  Funcion asíncrona en JS 
 *  Crea una función asíncrona que cambie el color a verde de los componentes 
 *  con nombre bar6, bar7, bar8, bar9, bar10, esperando tiempos diferentes antes
 *  de que se realice el cambio. 
 *  Y cuando termine de cambiar a verde, espere otro tiempo aleatorio y cambia
 *  el color a gris nuevamente.
 *  Recuerda que para cambiar el color en este proyecto utilizamos:
 *      cambiarAVerde("bar1")
 *      cambiarAGris("bar2")
 * */

// Coloca tu código aquí

/** Funciones de ayuda */
function dormir(tiempoEspera){
    return new Promise((manejador)=> setTimeout(manejador, tiempoEspera));
}

function cambiarAGris(id)
{
    document.getElementById(id).classList.add("bg-oxford");
    document.getElementById(id).classList.remove("bg-green");
}

function cambiarAVerde(id)
{
    document.getElementById(id).classList.remove("bg-oxford");
    document.getElementById(id).classList.add("bg-green");
}

function agregarComponente(color){
    document.getElementById("contenedor").innerHTML += 
    `
    <div class="col-s-12 col-6 inline">
        <div class="card borde-redondo ${color}">
            <h2>Nuevo Componente</h2>
        </div>
    </div>
        `;
}