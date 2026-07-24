const movieContainer = document.getElementById("movies");

function scrollLeftMovie(){
    movieContainer.scrollBy({
        left: -600,
        behavior: "smooth"
    });
}

function scrollRightMovie(){
    movieContainer.scrollBy({
        left: 600,
        behavior: "smooth"
    });
}