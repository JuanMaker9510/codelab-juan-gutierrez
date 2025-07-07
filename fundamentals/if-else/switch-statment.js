const prompt = require('prompt-sync')()

console.log(`Devlive Bank:

    1. Deposit Money
    2. Review Pending Accounts
    3. Cards to Pay
    `)

const option = parseInt(prompt(`Enter an Option: `)) 

switch(option){
    case 1:
        console.log ('Depositing..')
        break;
    case 2:
        console.log ('Showing Pending Accounts..')
        break;
    case 3: 
    console.log ('Paying Cards..')
        break;

    default:
        console.error('Invalid Option')
        break;

}