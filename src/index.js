console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

// on page load, fetch all the dog breeds using the url above ⬆️
// add the breeds to the page in an <ul> (take a look at the included index.html)

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
    fetchBreeds();
})

function fetchImages(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(data => displayImages(data))
}

function displayImages(images){
    let imageContainer = document.getElementById('dog-image-container');
    images.message.map(image => {
        let imageEl = document.createElement('img');
        imageEl.src = image;
        imageContainer.appendChild(imageEl);
    })
}

function fetchBreeds(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(data => displayBreeds(data))
}

function displayBreeds(breeds){
    let breedKeys = Object.keys(breeds.message)
    let breedContainer = document.getElementById('dog-breeds');
    breedKeys.map(breed => {
        let li = document.createElement('li');
        li.innerHTML = breed;
        breedContainer.appendChild(li);
        li.addEventListener('click', handleClick);
    })
}

function handleClick(e){
    e.preventDefault();
    console.log(e.target)
    e.target.style.color = "blue";
}

// Once all of the breeds are rendered in the <ul>, add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing.
// When the user clicks any of the dog breed list items, the color the text should change.
