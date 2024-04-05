function locSearch(query, format="search"){
    fetch(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
    .then(function(response){
        return response.json()
    })
    .then(function(results){
        console.log(results)

    })
} 


locSearch('dogs')
locSearch('kittens','photos')
locSearch('baseball','web-archives')