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



            container.appendChild(card)
            card.appendChild(img)


        })


        document.querySelectorAll('.movie-poster').forEach(item => {
            item.addEventListener('click', e => {
                let x = e.target.getAttribute("id");
                console.log(x)


                async function getMovie() {
                    let movieUrl = `https://ghibliapi.herokuapp.com/films/${x}`;

                    let movie = [];

                    const response = await fetch(movieUrl);

                    const responseData = await response.json();

                    movie = responseData;

                    console.log(movie.title)

                    let modul = document.getElementById("modul");
                    modul.style.display = 'block';
                    modul.style.background = 'rgba(250, 126, 126, 0.87)';

                    let modulmain = document.getElementById("modulmain");

                    const img = document.createElement('img')
                    img.src = movie.image
                    img.alt = movie.title
                    img.setAttribute('class', 'movie-info')

                    const h1 = document.createElement('h1')
                    h1.innerHTML = movie.title
                    h1.setAttribute('class', 'movie-info')

                    const h2 = document.createElement('h2')
                    h2.innerHTML = movie.original_title
                    h2.setAttribute('class', 'movie-info')

                    const p = document.createElement('p')
                    movie.description = movie.description
                    p.innerHTML = `${movie.description}`
                    p.setAttribute('class', 'movie-info')

                    const span = document.createElement('span')
                    span.innerHTML = "X"
                    span.setAttribute('id', 'exit')

                    modulmain.appendChild(span);
                    modulmain.appendChild(img);
                    modulmain.appendChild(h1);
                    modulmain.appendChild(h2);
                    modulmain.appendChild(p);

                    exitButton = document.getElementById("exit").addEventListener('click', e => {

                        async function exitOverlay() {

                            let modul = document.getElementById("modul");
                            modul.style.display = 'none';
                            modul.style.background = 'none';

                            let modulmain = document.getElementById("modulmain");

                            for (let x = 1; x < 5; x++)
                                modulmain.innerHTML = ""

                            // list.removeChild(img);
                            // modulmain.removeChild(h1);
                            // modulmain.removeChild(h2);
                            // modulmain.removeChild(p);

                        }

                        exitOverlay();
                    })
                }
                getMovie();


            })


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


    var request = new XMLHttpRequest()
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(data)

        // document.getElementById("movie-app").innerHTML = ""
        // const app = document.getElementById('movie-app')
        // const container = document.createElement('div')
        // container.setAttribute('class', 'container')
        // app.appendChild(container)


    }

}

// let modul = document.getElementById("modul");
// modul.style.display = 'block';




// exitButton = document.getElementById("exit").addEventListener('click', e => {

//     async function exitOverlay() {

//         let modul = document.getElementById("modul");
//         modul.style.display = 'hidden';

//         let modulmain = document.getElementById("modulmain");

//         for (let x = 1; x < 5; x++)
//             modulmain.innerHTML = ""

//         // list.removeChild(img);
//         // modulmain.removeChild(h1);
//         // modulmain.removeChild(h2);
//         // modulmain.removeChild(p);

//     }

//     exitOverlay();
// })