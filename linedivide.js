

// function teamDivide (array){


//     let even = []
//     let odd = []
//     let total = []

   


//     for(let i = 0; i < array.length; i++){

//          let change = array.indexOf(array[i + 1])

//         console.log(change);

//        change % 2 == 0 ? even.push[i] : odd.push[i]

     
    
//     }

//     console.log(even,'even' , odd, 'odd')


//     return total

// }


let line = [50,60,60,45,70]

// console.log(teamDivide(line));



function alternatingSums(array){

    let evenSum = 0;
    let oddSum = 0;


    array.forEach((element, index) =>{

        console.log(index,'this the index')

        if(index % 2 === 0){

            evenSum += element
        }
        else{
            oddSum += element
        }



    })

      return [evenSum,oddSum];
    
};




console.log(alternatingSums(line))


