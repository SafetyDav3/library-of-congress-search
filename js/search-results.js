const contaierEL = document.querySelector('main')

function locSearch(query, format="search"){
    fetch(`https://www.loc.gov/${format}/?q=${query}&fo=json`)
    .then(function(response){
        return response.json()
    })
    .then(function(results){
        console.log(results)

    })
} 

function errorMsg(error) {
    const alert = document.createElement('div')
    alert.classList.add('alert', 'alert-danger')
    alert.innerText = error
    contaierEL.appendChild(alert)
}

function init() {
    const searchParams = new URLSearchParams(location.search)

    const searchQuery = searchParams.get('searchQuery')
    const format = searchParams.get('format')

    if (!searchQuery) {
        errorMsg('no info provided') // make function with for this error if wanted
    }
    
}

init()

