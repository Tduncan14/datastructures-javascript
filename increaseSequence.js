



function isIncreasing(array){

    console.log('hey');

 let counter = 0;
 let prev
 let current


 for( let i = 0 ; i < array.length; i++){


 
    prev = array[i] 
    current = array[i + 1] 


    console.log('prev',prev);

    console.log('current',current);

    if(prev > current){

        counter = counter + 1

        console.log(counter)

        if(counter >= 2) {

            console.log('false')
            return false
        }

      else{
      
           return true 
      }

       

    }





 }




}


const arr = [1,3,4,5,2] // true 

const arr2 = [2,3,2,4,1] // false 





// console.log(isIncreasing(arr));



// right solution



function almostIncreasingSequence(array){

   let count = 0;



   for(let i = 0; i < array.length; i++){

    if(array[i] <= array[i - 1]){

        count++;

        if(array[i] <= array[i - 2] && array[i + 1] <= array[i - 1]){


            return false
        }


    }


   }

   return count <= 1 ;
  


}

console.log(almostIncreasingSequence(arr2),'array suppose to be false');

console.log(almostIncreasingSequence(arr));