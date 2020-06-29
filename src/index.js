let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res=> res.json())
    .then(results => {
      results.message.forEach(image => displayImage(image))
    });
}

function displayImage(dog) {
  // finds div that is meant to contain dog pictures
  let dogContainer = document.getElementById('dog-image-container');
  // creates an image element
  let dogPicture = document.createElement('img');
  // the url fed into function becomes the image source
  dogPicture.src = dog
  // photo is appended to the div container
  dogContainer.appendChild(dogPicture); 
}

function fetchBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      updateBreeds(breeds);
      breedSelect();
    });
}

function addBreed(breed) {
    let ul = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', changeColor);
}

function updateBreeds(breeds) {
  // finds the dog list ul
  let ul = document.getElementById('dog-breeds');
  // removes all list children
  removeChildren(ul);
  // updates the list of dogs with what is in the breed array
  breeds.forEach(breed => addBreed(breed));
}

function breedSelect() {
  // targets dropdown 
  let dropDown = document.getElementById('breed-dropdown');
  // adds event listener on the drop down
  dropDown.addEventListener('change', function(e) {
    // filters the breed by drop down letter
    filterBreed(e.target.value);
  });
}

function filterBreed(letter) {
  // calls on update breed thru breed select to filter by the letter each breed starts with
  updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function removeChildren(element) {
  // targets last child element
  let child = element.lastElementChild;
  // while there is a child, remove it and let the child become the new last element.
  while (child) {
    element.removeChild(child)
    child = element.lastElementChild;
  }
}

function changeColor(e) {
  // changes text color
  e.target.style.color = 'lime';
}