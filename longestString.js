


function longString (array){

let startString = array[0];


let longArray = []



for(let i = 0 ; i < array.length; i++)


   if(array[i].length >= startString.length) {


      longArray.push(array[i])
      startString = startString.length < array[i].length ? array[i] : startString
   }

   return longArray


}


const word ="word"


let arr = ["aba","aa", "ad","vcd","aba"
]



console.log(longString(arr));



function allLongestStrings(array){


    let longestLength = 0;

    const longestWords = [];


    array.forEach(word =>
        longestLength = longestLength < word.length ? word.length : longestLength)



    array.forEach(array =>{


        if(word.length === longestLength){

            longestWords.push(word)
     
        }

        return longestWords;
    })









}

