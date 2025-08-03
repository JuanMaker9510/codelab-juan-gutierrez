/*

La Universidad de Harvard se ha dado cuenta de que manejar manualmente los criterios
de becas no es eficientes. Ahora buscan una forma mejor de evaluar las numerosas solicitudes
de estudiantes que reciben.

El nuevo sistema que planean implementar decidira eficientemente quien califica para las becas.
Normalmente, los estudiantes deben ayudar en clases de laboratorio y aprobar cuatro materias,
con sus calificaciones promediadas para verificar la elegibilidad.

Las reglas de elegibilidad son estrictas:

- Los estudiantes necesitan tener un promedio de calificaciones de 9 0 mas en todas las materias, sin
ninguna calificacion individual menor a 8, independientemente de como les fue como asistentes de laboratorio.

-Alternativamente, si tienen un promedio de 8.5 o mas, aun pueden calificar si obtuvieron una calificacion
de "A" o "B" como asistentes de laboratorio.

-Sin embargo, si obtuvieron una calificacion de "C" como asistentes de laboratorio, no calificaran para
la beca, incluso si sus calificaciones generales son buenas.

*/

const prompt = require('prompt-sync')()

const REJECT_ASSISTANT_GRADE = 'C'
const MIN_GRADE = 8
const DIVIDER = 4

function validateScholarship(grade1,grade2,grade3,grade4,assistantGrade){
    if (assistantGrade === 'C') return false

    if (grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE || grade4 < MIN_GRADE ) return false

    const averageGrade = (grade1 + grade2 + grade3 + grade4) / DIVIDER

    if (averageGrade < 8.5){
        return false
    } else 
        if(averageGrade < 9 && !(assistantGrade ==='A' || assistantGrade === 'B')){
        return false
    }

    return true
}

function main(){
    const grade1 = parseFloat(prompt('Introduce your grade #1: '))
    const grade2 = parseFloat(prompt('Introduce your grade #2: '))
    const grade3 = parseFloat(prompt('Introduce your grade #3: '))
    const grade4 = parseFloat(prompt('Introduce your grade #4: '))

    const assistantGrade = prompt('Which is your Laboratory Grade? A,B o C: ')

    const isEligible = validateScholarship(grade1,grade2,grade3,grade4,assistantGrade)

    if (isEligible){
        console.log('Congrats! You are eligible')
    } else {
        console.log('You are not eligible')
    }

}

main()