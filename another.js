var authors = [
    {name:'Spencer H' , sections: ['Business']},
    {name:'John C.', sections:['Movies']},
    {name:"Rob J" , sections: ['Weather','Sports']},
    {name:'Josh', sections:['Sports']},
    {name:'Megan M',sections:['World']}
]


var sportsAuthors = []


for(var i = 0; i < authors.length; i++){

    if(authors[i].sections.indexOf('Sports') >= 0) {

      sportsAuthors.push(authors[i].name)
      console.log('hey');

    }

}

console.log(sportsAuthors,'first array');




const sportsAuthor = authors.filter(author => {

    return author.sections.indexOf('Sports') >= 0
}).map(sports => {

   return  sports.name
})

console.log(sportsAuthor,'secondArray')