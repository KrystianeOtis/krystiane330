

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
    const app = document.getElementById('movie-app')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    app.appendChild(container)
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    console.log(data)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            const card = document.createElement('div')
            card.setAttribute('class', 'movie-card')

            const img = document.createElement('img')
            img.src = movie.image
            img.alt = movie.title
            img.setAttribute('class', 'movie-poster')
            img.setAttribute('id', movie.id)
            img.onclick = getID

            const h1 = document.createElement('h1')
            h1.textContent = movie.title
            h1.setAttribute('class', 'movie-info')

            const h2 = document.createElement('h2')
            h2.textContent = movie.original_title
            h2.setAttribute('class', 'movie-info')

            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300)
            p.textContent = `${movie.description}...`
            h2.setAttribute('class', 'overview')

            container.appendChild(card)
            card.appendChild(img)
            // card.appendChild(h1)
            // card.appendChild(h2)
            // card.appendChild(p)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `oh no...our table...it's broken!`
        app.appendChild(errorMessage)
    }
}

request.send()

let targetDiv = document.querySelector('.movie-card')
// targetDiv.addEventListener("click", function (e) {
//     let x = e.target.getAttribute("id");
//     console.log(x);
// })

function getID(e) {
    let x = e.target.getAttribute("id");
    console.log(x);
    var request = new XMLHttpRequest()
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)
        if (request.status >= 200 && request.status < 400) {

        }
    }
}



