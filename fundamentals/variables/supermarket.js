/*
Voy al supermercado GreenCenter para hacer mis compras habituales y
planeo comprar manzanas y naranjas.
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarketName = 'Green Center'

const itemToBuy1 = 'apples'
const itemToBuy2 = 'oranges'

const areBananasAvailable = false
const areGrapesAvailable = false

const amountOfCashier = 3

const totalCashToPurchase = 100
const totalCashInWallet = 150
const change = totalCashInWallet - totalCashToPurchase

console.log(`

  Supermarket = ${supermarketName}\n
  Buying List = ${itemToBuy1} and ${itemToBuy2}\n
  Supermarket Fruits Available = ${areBananasAvailable}, ${areGrapesAvailable}\n
  Cashiers Available = ${amountOfCashier} are available\n
  Payment = $${totalCashInWallet}\n
  Total = $${totalCashToPurchase}\n
  Change = $${change}
  `
)