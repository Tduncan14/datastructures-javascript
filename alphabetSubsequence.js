
function alphabetSubsequence(word){

 const chars = word.split('')

 const charValues = [];



 chars.forEach(char => {


    charValues.push(char.charCodeAt(0))


 })


 if(new Set(charValues).size !== charValues.length){

    return false
 }


 for(let i = 0; i < charValues.length - 1; i++){

    if(charValues[i] >= charValues[i + 1]){

        return false
    }
 }
  
 return true
}