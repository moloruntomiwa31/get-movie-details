const details = {
    apiKey : '9b8d44a4',
    baseUrl : 'http://www.omdbapi.com/?'
}
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("search-bar");
document.getElementById("main").style.display = "none"
const movieTitle = document.getElementById("title");

const movieData = async () => {
    const response = await fetch (`${details.baseUrl}apikey=${details.apiKey}&t=${searchBar.value}`);
    const data = await response.json();
    if (data.Response == "False") {
        document.getElementById("error").innerText = data.Error
        return
    }
    movieDetails(data)
    document.getElementById("main").style.display = "block"
    console.log(data)
}

const movieDetails = (data) => {
    document.getElementById("img-fluid").src = data.Poster
    movieTitle.innerText = data.Title
}

const display = () => {
    if (searchBar.value == '') {
        document.getElementById("error").innerText = 'Cannot be left blank.'
    }
    else {
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
