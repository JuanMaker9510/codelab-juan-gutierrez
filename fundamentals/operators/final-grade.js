/* Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
en una escuela. Como parte de este desafio, primero configura el entorno para recibir
entradas del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presenatas el resultado formateado con maximo dos decimales, para asegurar una 
lectura clara.

Finalmente, presentas el resultado formateado con maximo dos decimales, para asegurar una 
lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida sera:80
*/

const prompt = require('prompt-sync')()

const note1 = parseFloat(prompt('Introduce your Note: '))
const note2 = parseFloat(prompt('Introduce your Note: '))
const note3 = parseFloat(prompt('Introduce your Note: '))

const DIVIDER = 3
const averageNote = (note1 + note2 + note3) / DIVIDER

console.log(averageNote)