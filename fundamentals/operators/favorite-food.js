/*

Escribe un programa simple en JavaScript que examine las preferencias culinarias
de tres personas: Maria, Pepe y Malvern. El programa analiza tres condiciones:

Comparte Maria la misma comida favorita que tanto Pepe como Malvern?
La comida favorita de Maria concide ya sea con la de Pepe o con la Malvern?


Recuerda pedir los valores al usuario para poder elegir diferentes combinaciones,
ejemplo: Si la comida favorita de Maria es la pizza, la de Pepe es el pollo y 
el de Malvern es el pescado.

Los resultados de estas comparaciones se muestran luego, ofreciendo informacion
sobre las similitudes y diferencias en las preferencias culinarias de los tres individuos.

La salida del programa sera:

Does Maria share the same favorite food as both Pepe and Malvern's? false
Does Marias's favorite food match either Pepe's or Malvern's? false
Does Maria's preference differ from both Pepe's and Malvern's? true
*/

const prompt = require('prompt-sync')()

const mariaFavoriteFood = (prompt('Maria, What is your favorite food: '))
const pepeFavoriteFood = (prompt('Pepe, What is your favorite food:: '))
const malvernFavoriteFood = (prompt('Malvern, What is your favorite food: '))

const mariaAndPepeShareFood = mariaFavoriteFood === pepeFavoriteFood
const mariaAndMalvernShareFood = mariaFavoriteFood === malvernFavoriteFood

const allFoodEqual = mariaAndPepeShareFood && mariaAndMalvernShareFood
const someMatch = mariaAndPepeShareFood || mariaAndMalvernShareFood
const nonMatch = !mariaAndPepeShareFood && !mariaAndMalvernShareFood

console.log(`
    Does Maria share the same favorite food as both Pepe and Malvern's? ${allFoodEqual}
    Does Marias's favorite food match either Pepe's or Malvern's? ${someMatch}
    Does Maria's preference differ from both Pepe's and Malvern's? ${nonMatch}`)