
function alphabetShift(word){


const alphabet = ['a','b','c','d','e', 'f','g']


let inputShift = word.split('');

for(let i = 0; i < inputShift.length; i++){

  let index = 0;

  if(inputShift[i] !== 'z'){

  index = alphabet.indexOf(inputShift[i])+ 1

  }

  inputShift[i] = alphabet[index]




}


   
 return inputShift.join('');

}



console.log(alphabetShift('abcde'));