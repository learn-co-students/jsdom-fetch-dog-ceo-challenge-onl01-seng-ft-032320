console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4",
      breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchImages() {
  return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json.message));
}

function fetchBreeds() {
  return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json.message));
}

function renderImages(images) {
  const imageContainer = document.getElementById("dog-image-container")
  images.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    imageContainer.appendChild(img)
  });
}

function renderBreeds(breeds) {
  const breedsContainer = document.getElementById("dog-breeds")

  for (const [breed, subBreeds] of Object.entries(breeds)) {
    const breedName = document.createElement('li')
    breedName.innerText = breed;
    breedName.classList.add("breed");
    breedName.addEventListener('click', function() { this.style.color = "#00ff00" });
    if (subBreeds.length > 0) {
      const subBreed = document.createElement('ul')
      subBreeds.forEach(subBreedName => {
        const li = document.createElement('li')
        li.innerText = subBreedName
        li.classList.add("subBreed")
        li.addEventListener('click', function() { this.style.color = "#00ff00" });
        subBreed.appendChild(li)
      });
      breedName.appendChild(subBreed)
    }
    breedsContainer.appendChild(breedName)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
})

window.addEventListener('load', (event) => {
  const selecter = document.getElementById("breed-dropdown");

  selecter.addEventListener("change", function(e) {
    let breeds = document.querySelectorAll('.breed');
    breeds.forEach(breed => {
      if (breed.innerText.startsWith(selecter.value)){
        breed.style.display = "list-item";
      } else {
        breed.style.display = "none";
      }
    });
  });
});
