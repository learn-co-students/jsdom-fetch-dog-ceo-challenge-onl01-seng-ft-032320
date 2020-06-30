console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', () => {
    fetchAllDogImages()
    fetchAllDogBreeds()
    dropdown()
    alphaSort()
});
    
function fetchAllDogImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => addImages(json));
} 
    
function addImages(json) {
    const dogImage = document.querySelector('#dog-image-container');
    json.message.forEach(image => {
        let newImageElement = document.createElement('img')
        newImageElement.src = image
        dogImage.appendChild(newImageElement)
    });
}

function fetchAllDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => {const breeds = Object.keys(json.message); addBreeds(breeds)});
}    

function addBreeds(breeds) {
    breeds.forEach(breed => {
        let newBreedElement = document.createElement('li')
        newBreedElement.textContent = breed
        let dogBreed = document.querySelector('#dog-breeds');
        dogBreed.appendChild(newBreedElement)
        newBreedElement.addEventListener('click', () => {
            console.log("Hello")
            newBreedElement.style.color = 'blue'
        });
    });
};


function dropdown (){
    let button = document.getElementById('breed-dropdown')
    button.addEventListener('input', event => {
        event.preventDefault();
        magicWord = event.target.value;
        console.log(event.target.value);
        alphaSort(magicWord)
    })
};

function alphaSort(magicWord) {
    let ul = document.getElementById('dog-breeds');
    let li = ul.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        var txt = li[i].textContent || li[i].innerText;
        var include = txt.startsWith(magicWord);
        li[i].style.display = include ? 'list-item':'none';
    }
};