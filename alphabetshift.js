
function alphabetShift(word){


let alphabet = ['a','b','c','d','e', 'f','g']

// another option


alphabet = {
    'a':'b',
    'b':'c',
    'c':'d',
    'e':'f',
    'f':'g'
}


let inputShift = word.split('');

console.log(inputShift,'outside the forloop')

for(let i = 0; i < inputShift.length; i++){

    console.log(inputShift[i])

    inputShift[i] = alphabet[inputShift[i]]
//   let index = 0;

//   if(inputShift[i] !== 'z'){

 
// //   index = alphabet.indexOf(inputShift[i])+ 1

  }

   return inputShift.join('')



}






console.log(alphabetShift('abcde'));