const details = {
    apiKey : '9b8d44a4',
    baseUrl : 'https://www.omdbapi.com/?'
}
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("search-bar");
document.getElementById("main").style.display = "none"
const movieTitle = document.getElementById("title");

const movieData = async () => {
    const response = await fetch (`${details.baseUrl}apikey=${details.apiKey}&t=${searchBar.value}`);
    const data = await response.json();
    if (data.Response == "False") {
        document.getElementById("error").innerText = 'Movie not Found.'
        document.getElementById("main").style.display = "none"
        return
    }   
    movieDetails(data)
    document.getElementById("main").style.display = "block";
}

const movieDetails = (data) => {
    for (key in data) {
        if (data[key] == "N/A") {
            data[key] = 'Not Available'
        }
    }
    if (data.Type == "series") {
        document.getElementById("seasons").innerText = `Total Seasons: ${data.totalSeasons}`
        document.getElementById("year").innerText = `Year: ${data.Year}`
    }
    document.getElementById("img-fluid").src = data.Poster
    movieTitle.innerText = data.Title
    document.getElementById("released").innerText = `Realsed: ${data.Released}`
    document.getElementById("pg").innerText = `Rated: ${data.Rated}`
    document.getElementById("genre").innerText = `Genre: ${data.Genre}`
    document.getElementById("language").innerText = `Language: ${data.Language}`
    document.getElementById("description").innerText = `Synopsis: ${data.Plot}`
    document.getElementById("director").innerText = `Director: ${data.Director}`
    document.getElementById("runtime").innerText = `Runtime: ${data.Runtime}`
    document.getElementById("main-characters").innerText = `Actors: ${data.Actors}`
    document.getElementById("awards").innerText = `Awards: ${data.Awards}`
    document.getElementById("type").innerText = `Type: ${data.Type}`
    document.getElementById("ratings").innerText = `Rating: ${data.Ratings[0].Value}`
}

const display = () => {
    if (searchBar.value == '') {
        document.getElementById("error").innerText = 'Cannot be left blank.'
    }
    else {
        document.getElementById("error").style.display = "none"
        movieData();
        searchBar.value = '';
    }
}

searchBtn.addEventListener("click", () => {
    display();
})

searchBar.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        display();
    }
}) 
