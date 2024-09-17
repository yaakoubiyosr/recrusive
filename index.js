

////////////////////////////   LeapYear    /////////////////////////////////////////////////////////////////
function LeapYear(ann) {
    if (ann % 400 === 0) {
        return `${ann} is a leap year.`;
    } else if (ann % 100 === 0) {
        return `${ann} is not a leap year.`;
    } else if (ann % 4 === 0) {
        return `${ann} is a leap year.`;
    } else {
        return `${ann} is not a leap year.`;
    }
}

console.log(LeapYear(2002)); 


////////////////////////////////// Ticket ////////////////////////////////////////////////////////////////////////


function getTicketPrice(age) {
    if (age <= 12) {

        return "Ticket price: $10"

    } else if (age >= 13 && age <= 17) {

        return "Ticket price: $15"

    } else{
        return "Ticket price: $20"

    } 
}

console.log(getTicketPrice(20));  



///////////////////////////////  fibonaci //////////////////////////////

function fibonacci(n) {
    
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

   
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(5));  
