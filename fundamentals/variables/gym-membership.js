/* El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California,
que ofrece membresias por $150 al mes.
Opera de 6AM a 10PM, emplea a 10 entrenadores certificados
y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const centerName = 'Elite Fitness Center'

const city = 'Palo Alto'
const state = 'California'
const location = `${city}, ${state}`

const membership = 150

const openHour = 6
const leavingHour = 10
const schedule = `${openHour}:00 am to ${leavingHour}:00 pm`

const numberOfEmployees = 10 

const amenities1 = 'Sauna'
const amenities2 = 'Pool'
const amenities3 = 'Group Classes'

console.log(`

  Center Name: ${centerName}\n
  Location: ${location}\n
  Membership: $${membership}\n
  Schedule: ${schedule}\n
  Personal: ${numberOfEmployees} Certificated Personal\n
  Amenities: ${amenities1},${amenities2},${amenities3}
`)
