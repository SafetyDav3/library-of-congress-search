const containerEl = document.querySelector('main')
const baseUrl = 'https://www.loc.gov'


function locSearch(query, format="search"){
    fetch(`${baseUrl}/${format}/?q=${query}&fo=json`)
    .then(function(response){
        return response.json()
    })
    .then(function(results){
       renderResults(results)

    })
} 

function errorMsg(error) {
    const alert = document.createElement('div')
    alert.classList.add('alert', 'alert-danger')
    alert.innerText = error
    containerEl.appendChild(alert)
}

function init() {
    const searchParams = new URLSearchParams(location.search)

    const searchQuery = searchParams.get('searchQuery')
    const format = searchParams.get('format')

    if (!searchQuery) {
        errorMsg('no info provided') // make function with for this error if wanted
    }
    
    locSearch(searchQuery, format) //passing search params to api call

}




function renderCard(resultInfo){
    const columnDiv = document.createElement('div')
    const searchResultContainer = document.querySelector('#search-results')

    const imgEl = resultInfo?.image_url && resultInfo.image_url.length > 0 
        ? `<img src="${resultInfo.image_url[0]}" class="img-fluid rounded-start" alt="...">`
        :''

    columnDiv.innerHTML = `
    <div class="col-md-6">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              ${imgEl}
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${resultInfo.title}</h5>
                <p class="card-text">${resultInfo.subject.join(', ')}</p>
                <p class="card-text">${resultInfo?.description?.join(', ')|| ''}</p>
                <p class="card-text"><small class="text-body-secondary">Date: ${resultInfo.date}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    searchResultContainer.appendChild(columnDiv)
}

function renderResults(results){
    //render results from api call

for (const result of results.results){
    console.log(result.description)
    renderCard(result)
    

}
    // const data = {
    //     mainImage: baseUrl + results.image_url,
    //     title:
    // }
    // console.log(results)
}

init()

