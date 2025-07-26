/*

El proveedor principal de servicios de telefonia movil en la ciudad esta introduciendo una oferta 
promocial basada tanto en el monto de recarga realizado por sus clientes como en la duracion de su suscripcion con la compañia.
Para ser elegible para la promocion, los clientes deben recargar
un minimo de $20 y un maximo de $80 y haber estado suscritos durante al menos un año.

En la promocion de SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga es inferior a $38 y 
han estado afiliados al servicio por tres años o mas.

Por otro lado, la promocion MegaRecharge esta dirigida a los clientes que han estado suscritos por 
mas de tres años, ofreciendoles un monto de recarga triplicado independientemende del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monto 
de la recarga y la duracion de su suscripcion, y determinar si la promocion les aplica y calcule el monto total de recarga incluyendo la promocion.
*/


const prompt = require('prompt-sync')()

const MIN_AMOUNT = 20
const MAX_AMOUNT = 80
const MIN_SUBSCRIPTION_MONTHS = 12

const MEGA_RECHARGE_PROMO = 3
const MEGA_RECHARGE_MONTHS = 36

const SUPER_SAVER_PROMO = 2
const SUPER_RECHARGE_MONTHS = 36
const MIN_SUPER_RECHARGE_AMOUNT = 38

function promo(rechargeAmount,subscriptionLength){

    if (subscriptionLength < MIN_SUBSCRIPTION_MONTHS) return rechargeAmount

    let multiplayer = 1

   if (subscriptionLength >= SUPER_RECHARGE_MONTHS && (rechargeAmount < MIN_SUPER_RECHARGE_AMOUNT && rechargeAmount >= MIN_AMOUNT)){
         multiplayer = SUPER_SAVER_PROMO
    } else if (subscriptionLength > MEGA_RECHARGE_MONTHS && (rechargeAmount <= MAX_AMOUNT && rechargeAmount >= MIN_AMOUNT)){
         multiplayer = MEGA_RECHARGE_PROMO}

    return rechargeAmount * multiplayer
}
  


function main(){

    const clientName = prompt("Client's Name: ")
    const rechargeAmount = prompt('Amount of Recharge: $ ')
    const subscriptionLength = prompt('How long you been subscribe: ')

    const totalPromo = promo(rechargeAmount,subscriptionLength)

    console.log(`
        Client Name: ${clientName}
        Months of subscription: ${subscriptionLength}
        Amount to be recharge: $${rechargeAmount}
       --------------------------------
        Total Amount: $${totalPromo}`)
}


main()