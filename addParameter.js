
function add ( num1, num2){


     return num1 + num2


}

// add first param and second param


function addAll(...num){

    let total = 0;


    num.forEach(digit => total +=  digit
    )

    return total


}


console.log(addAll(1,2,3,4,5))

console.log(addAll(0,0,0,0,2))