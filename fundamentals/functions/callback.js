
function requestLoanUnderwriting(){

}

function approvingCredit(credit){
  
  console.log('Credit Approved...')

  return true

}




function customerService(credit, contactCustomer){
  // loading...
  console.log('loading...')

  const paper = requestLoanUnderwriting()

  const isValid = approvingCredit(paper,credit)

  if(isValid){
    contactCustomer()
  }
}

function contactCustomer(){
  console.log('Contacting + 1567-767...')
}

customerService (10000, contactCustomer)

/*customerService(10000, function(){
  console.log('Contacting + 1567-767...')
}
)
*/