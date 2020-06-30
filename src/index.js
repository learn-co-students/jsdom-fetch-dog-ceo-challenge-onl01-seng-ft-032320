console.log('%c HI', 'color: firebrick')
const imgsUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let breedArr = []

function fetchImages(){
    return fetch(imgsUrl)
    .then(resp => resp.json())
    .then(json => addImages(json))
}

function fetchBreeds(){
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => makeArray(json))
}

function addImages(json){
    const imgList = document.getElementById('dog-image-container')
    json.message.forEach(e => {
        const image = document.createElement('img');
        image.src = e;
        imgList.appendChild(image);
      });   
}

function makeArray(json) {
    breedArr = Object.keys(json.message)
    addBreeds(breedArr)
}

function addBreeds(array){
    const breedList = document.getElementById('dog-breeds')
    array.forEach(breed => {
        const listContainer = document.createElement('li');
        listContainer.textContent = breed;
        listContainer.addEventListener('click', colorize)
        breedList.appendChild(listContainer)
    });
}

function colorize(event) {
    event.target.style.color = "gold";
}

function filter(letter){
    let filterArr = breedArr.filter(breed => breed[0] === letter);
    addBreeds(filterArr);
}

function dropDown(){
    const ddElem = document.getElementById('breed-dropdown');
    const dogBreeds = document.getElementById("dog-breeds");
    ddElem.addEventListener('change', function(){
      while (dogBreeds.firstChild) dogBreeds.removeChild(dogBreeds.firstChild);
      filter(this.value);
    })
}


document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
    dropDown()
});
