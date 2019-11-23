// 29 = 11



function split(number){


     number = number.toString();

     number = number.split("")

 
     return parseInt(number[0]) + parseInt(number[1])



}


console.log(split(29));
console.log(split(99));




