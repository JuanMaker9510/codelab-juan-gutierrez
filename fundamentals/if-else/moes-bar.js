/*

Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYY/MM/DD.

Calculo de la Edad:

Se crea un objeto Date para la fecha de nacimento y se calcula la edad restando el año de 
nacimiento del año actual. Tambien se verifica si ya ha pasado el cumpleaños del año actual,
para ajustar la edad si es necesario.

Verificacion de Edad:

Se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18 años o mas)
Este programa permite que el proceso de verificacion de edad sea automatico y preciso, asegurando que solo los mayores de edad entren al bar.

Puedes guiarte con esto.

const prompt = require('prompt-sync')()

const birthdate = prompt('What is your birthday in format (YYY/MM/DD)?')

const birthday = new Date(birthdate)
const today = new Date()

const age = today.getFullYear() - birthday.getFullYear( ) // takes the age of the person
*/

const prompt = require ('prompt-sync')()

const birthdate = prompt('What is your birthday (YYY/MM/DD)? ')

const birthday =  new Date (birthdate)
const today = new Date()

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = today.getMonth() > birthday.getMonth() || (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()

)
if (!birthdayPassed){
    age--
}


if (age >= 18){
    console.log('Your are allow to get into the bar')
} else {
    console.log('You are not allow to get into the bar ')
}

console.log(age)