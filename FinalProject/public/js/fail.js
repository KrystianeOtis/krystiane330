// async function getEvent(movie) {
// fetch api for studio ghibli films
const requestURL = 'https://ghibliapi.herokuapp.com/films';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing

        const movies = jsonObject['title']; //store the results of the converted response into an array
        let card = document.createElement('movie-card'); // turning each card into a section
        let photo = document.createElement('img'); // adds image elements
        let text = document.createElement('div'); // create a div
        let h3 = document.createElement('h3');
        let rating = document.createElement('h3');
        let overview = document.createElement('p');

        photo.setAttribute(movies[i].image);
        photo.setAttribute('alt', movies[i].title); // sets the alt to movie title
        h3.textContent = movies[i].title;
        rating.textContent = movies[i].rt_score;
        overview.textContent = movies[i].description;


        card.appendChild(text); //append div to section
        card.appendChild(photoDiv)
        photoDiv.appendChild(photo);
        text.appendChild(h3); // appendChild - appends a node as the last child of a node
        text.appendChild(rating);
        text.appendChild(overview);


        document.querySelector('div.movie-card').appendChild(card);


    });
// }

// function cardnav() {

// }

// window.addEventListener('load', (event) => { //registers when page is loaded
//     getMovies();
// })