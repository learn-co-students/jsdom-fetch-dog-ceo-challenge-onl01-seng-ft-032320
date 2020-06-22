const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds = [];
let filteredBreeds = [];


function getDogImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogImages(json));
}

function renderDogImages(imgs) {
    const main = document.querySelector('#dog-image-container');

    imgs.message.forEach(image => {
        const img = document.createElement('img');
        img.setAttribute('src', image);
        main.appendChild(img);
    })
}

function getDogBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => createBreedsArray(json));
}


function createBreedsArray(json) {
    allBreeds = Object.keys(json.message);
    listBreeds(allBreeds);
}

function listBreeds(breeds) {
    let dogBreedList = document.querySelector('#dog-breeds');

    breeds.forEach(breed => {
        let newLi = document.createElement('li');
        newLi.textContent = breed;
        newLi.addEventListener('click', changeColor);
        dogBreedList.appendChild(newLi);
    })
}

function changeColor(event) {
    event.target.style.color = "blue";
}

function dropdownFiltering() {
    const dropdownElem = document.querySelector('#breed-dropdown');
    const dogBreedList = document.querySelector('#dog-breeds');
    dropdownElem.addEventListener('change', function() {
        while (dogBreedList.firstChild) {
            dogBreedList.removeChild(dogBreedList.firstChild);
            filterBreeds(this.value);
        }
    })
}

function filterBreeds(letter) {
    filteredBreeds = [];
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    listBreeds(filteredBreeds);
}





document.addEventListener('DOMContentLoaded', function() {
    getDogImages();
    getDogBreeds();
    dropdownFiltering();
})
