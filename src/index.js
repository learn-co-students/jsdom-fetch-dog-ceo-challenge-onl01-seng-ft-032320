console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    loadImages();
})

function loadImages() {
    let url = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(url)
    .then(resp => resp.json())
    .then(result => {
        result.message.forEach(image => addImage(image))
    });
}

function addImage(picture) {
    let imageBin = document.getElementById('dog-image-container')
    let imageCase = document.createElement('img')
    imageCase.src = picture
    imageBin.appendChild(imageCase)
}

function loadBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp = resp.json())
        .then(results => {
            breeds = Object.keys(results.message);
            updateBreedList(breeds);
            addBreedSelectListener();
        })
}

let breeds = [];

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}

function addBreed(breed) {
    let breedBin = document.getElementById('dog-breeds')
    let breedCase = document.createElement('li')
    breedCase.innerText = breed
    breedBin.appendChild(breedCase)
} 

function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}


function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
        selectBreedsStartingWith(event.target.value);
    });
}

