
var friends = [
    'seesha',
    'ali',
    'tati'
]


var newObject = friends.map(function(name,i){


    return {
        name,
        i
    }




})


console.log(newObject);


console.log(newObject[0]);

console.log(newObject.indexOf('zita'))



if(newObject.indexOf('zita') === -1 ) {


  newObject.push({name:'zita', i:newObject[2].i + 1})


}


console.log(newObject,"second run");