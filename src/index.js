console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector("#breed-dropdown");
  select.addEventListener("change", filterBreed);

  fetchImages();
  renderBreeds();
});

function fetchImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((dogs) => renderImages(dogs));
}

function renderImages(dogs) {
  const container = document.querySelector("#dog-image-container");
  dogs.message.forEach((dog) => {
    const img = document.createElement("img");
    img.src = dog;
    container.appendChild(img);
  });
}

function renderBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breeds) => {
      const breedslist = Object.keys(breeds.message);
      renderLis(breedslist);
    });
}

function filterBreed() {
  let selection = event.target.value;
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breeds) => {
      const breedlist = Object.keys(breeds.message).filter(
        (breed) => breed[0] === selection
      );
      renderLis(breedlist);
    });
}

function renderLis(array) {
  const ul = document.getElementById("dog-breeds");
  ul.innerHTML = "";
  array.forEach((breed) => {
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", () => (li.style = "color: pink;"));
  });
}
