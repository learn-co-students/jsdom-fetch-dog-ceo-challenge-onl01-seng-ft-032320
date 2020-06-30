console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let allBreeds = []


function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImgs(json))
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => mkBreedsArr(json))
}

function addImgs(json) {
    const imgsContainer = document.getElementById('dog-image-container');
    json.message.forEach(url => {
        let img = document.createElement('img');
        img.src = url;
        imgsContainer.appendChild(img);
    });
}

function mkBreedsArr(json) {
    allBreeds = Object.keys(json.message)
    addBreeds(allBreeds);
}

function addBreeds(arr) {
    const breedsContElm = document.getElementById('dog-breeds');
    arr.forEach(breed => {
        let breedList = document.createElement('li');
        breedList.textContent = breed
        breedsContElm.appendChild(breedList);
        breedList.addEventListener('click', Color)
    });
}

function Color(event) {
    event.target.style.color = "green";
}

function ddFilter() {
    const ddElem = document.getElementById('breed-dropdown');
    const dogBreedList = document.getElementById("dog-breeds");
    ddElem.addEventListener('change', function (){
      while (dogBreedList.firstChild) dogBreedList.removeChild(dogBreedList.firstChild);
      filterBreeds(this.value);
    })
  }
  
  function filterBreeds(letter) {
    filteredBreeds = allBreeds.filter(breed => breed[0] === letter);
    addBreeds(filteredBreeds);
  }


document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    ddFilter()
  })