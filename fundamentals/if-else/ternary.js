const grade = 100

/*
if (grade >= 70) {
    message = 'Success'
} else {
    message = 'Fail'
}
*/
// This form is the basic if else form


/*const message2 = grade = 70 
? 'Success' 
: 'Fail'
*/ 
// This form is the Ternary form

// The last one is the Ternary form, but having two options, like else if

const message3 = grade === 100 
? 'Perfect'
: grade >= 70
 ? 'Success' 
 : 'Fail'

console.log(message3)