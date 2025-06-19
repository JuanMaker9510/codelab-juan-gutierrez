/*
El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
En un partido celebrando el 22/11/23 a las 20:30, el equipo local Argentina
se enfrento al equipo visitante Brasil. El resultado final fue 1-0,
indicando a Argentina como el equipo ganador.
*/

const nameOfTheEvent = 'South America Playoff to World Cup'

const day = 22
const month = 11
const year = 2023

const dateOfEvent = `${day}/${month}/${year}`

const hour = 20
const minutes = 30

const formatHour = hour - 12
const hourOfEvent = `${formatHour}:${minutes}pm`

const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const matchOfTheDay = `${localTeam} v ${awayTeam}`

const localScore = 1
const awayScore = 0
const result = `${localScore} - ${awayScore}`

const finalResult = `${localTeam} won the game ${result} against ${awayTeam}`

console.log(`
  Tournament: ${nameOfTheEvent}\n
  Match Day: ${matchOfTheDay}\n
  Date & Hour: ${dateOfEvent} - ${hourOfEvent}\n 
  Result: ${finalResult}\n
 `)