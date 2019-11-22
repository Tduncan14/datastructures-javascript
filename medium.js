




const array = [2,4,7,4,2];




console.log(array.length);


console.log(Math.floor(array.length/2))




const index = array[array.length/2];


console.log(index);




function medium (array){



    const isEven = array.length % 2 === 0;


    return isEven ? array[array.length/2-1] : array[Math.floor(array.length/2)];


}


const three = [3,4,5] // 4

const four = [2,6,7,4] // 6

const five = [1,2,3,4,5] // 3


console.log(medium(three));

console.log(medium(four));

console.log(medium(five));