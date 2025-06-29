/* Crea un programa en JavaScript que calcule la factura total de una persona en un hotel,
donde cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional
que incluye un descuento del 5%.

El programa debe de solicitar al huesped el numero de noches que paso en el hotel para calcular
la facura final.

Si el usuario ingresa que se quedo 5 noches, la salida sera: $475.00
*/

const hotelName = 'Hotel Sunset'

const prompt = require('prompt-sync')()

const days = parseInt(prompt('Number of days you will stay: '))

const PRICE_PER_NIGHT = 100
const PROMO = 5

const totalAmount = days * PRICE_PER_NIGHT
const discount = totalAmount * (PROMO / 100)
const priceWhiteDiscount = totalAmount - discount


console.log(`
        ${hotelName}\n
      ------------------

     Days of you staying: ${days}\n
     Amount per Night: $${PRICE_PER_NIGHT}\n
     Total Amount: $${totalAmount}\n
     Discount: $${PROMO}\n
     Total Fee: $${priceWhiteDiscount}

    `)