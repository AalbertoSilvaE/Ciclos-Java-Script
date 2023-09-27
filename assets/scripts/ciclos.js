alert("Aprendamos sobre ciclos!")

/*
Condiciones : alterar el orden natural del codigo
Estrucuta de control: controlar la ejecucion del codigo

Ciclos o bucles (loops)

Tambien conocidos como bucles, son estrucutras de control que nos van a permitir ejecutar un bloque de codigo forma repetida, hasta que se cumple una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas.

En JS existen los siguientes ciclos:

   - while
   - do while
   - for

Iterar: proceso de repetir una secuencia de instrucciones.
Estructura de control: herramienta expecial para crear algoritmos dinamicos y flexibles.

*/

/* While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre y cuando la condicion se mantenga. La condicion se evalua antes de cada interacion.

while (condicion){
    //codigo que se ejecuta
}

*/

/* while (miCurshMeQuiere){
    console.log("Sere feliz")
}
*/ 

/*
Analogia: Seguir una receta para preparar sopa

 lista de infredientes:
  - Zanahoria
  - Papas
  - chayote
  - Limon
  - Agua
  - Espinaca
Vamos a agregar los ingredientes a la olla mientras tengamos ingreidentes disponibles.

Paramos cuando ya no tengamos ingredientes.

*/

// Ejemplo de un consultorio dental

let capacidadPacientes = 50;
let pacientesEnCnsultorio = 15;

//mientras 15 sea menor que 50..
while(pacientesEnCnsultorio < capacidadPacientes){
    //seguire dando servicio
    console.log ("Seguimos dando servicio");
    //aumenta en uno mis pacientes
    pacientesEnCnsultorio++;
}

// mientras sea verdadero, se ejecuta la instruccion (pedor permiso para ir una fiesta)

/*
Do While (hacer mientras)

// Se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir  a la fiesta)

El bucle do while se diferencia del while ya que aqui se ejecuta la instruccion al menos una vez, y luego se pregunta para saber si se sigue ejecutando o no.

d{
    // codigo a ejecutar
} while (condicion);



*/

// ejemplo de un consultorio dental

var contadorPacientes = 0;

do{
    var nombre = prompt ( "Ingrese el nombre del paciente");
    if (nombre) {
        contadorPacientes ++;
    }

} while (contadorPacientes < 5);

console.log("Numero total de pacientes:" , contadorPacientes);

/*
For (para)

Se utiliza cuando conocemos el numero exacto der iteraciones que vamos realizar.   
Consiste  de 3 partes y fundamentales:

-inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)

-condicion: es el detonante que verificamos antes de cada interaccion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadero)

-expresion de iteracion (contador):tiene la finalidad de m,odificar la variable de inicio y poder tener un punto de cierre.

for (inicializacion; condicion; expresion de iteracion){
    //bloque de codigo a ejecutar
}

*/

// crea un codigo que imprima los numeros del 0 al 4

for (var valorInicial = 0; valorInicial<5; valorInicial++){
    console.log(valorInicial)
}

// Version mas "comercial"
for (var i = 0; i<5; i+=5){

}


// consultorio dental registro de citas con un for

let cantidadDeCitasDiarias = 5;

for(let i=1; i <= cantidadDeCitasDiarias; i++) {
 var nombre = prompt ("Ingrese el nombre del paciente" + i);
console.log("Paciente con cita:" + nombre + i);
}

//----------------------------------------------------------------





// Ejemplo ciclo Consultorio Dental

let cantidadVecesUtilizadoInstrumento = 20;

function usoInstrumento(usos) {
    for (let i = 1; i <= usos; i++) {
        if ( i < 20 ) {
            console.log("Se ha utilizado " + i + " veces");
        } else {
            console.log("YA TOCA SERVICIO");
        }
    }
}

usoInstrumento(cantidadVecesUtilizadoInstrumento);


// Ejemplo ciclo LinkGameIn

let cantidadMaximaJuegosFavoritos = 10;
let contadorJuego = 0;

function juegosFavoritos(contador, juegosMaximos) {
    do {
        let juego = prompt("Ingresa tu juego favorito");
        console.log("Juego favorito: " + contador + ": "+ juego);
        contador++;
    } while (contador <= juegosMaximos);
    console.log("Ya no puedes agregar más juegos");
}

juegosFavoritos(contadorJuego, cantidadMaximaJuegosFavoritos);






