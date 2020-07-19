console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDogs() {
    return fetch(imgUrl)
      .then(resp => resp.json())
      .then(json => addImages(json))
  }

  function addImages(dogs) {
    const main = document.querySelector('div');
    console.log(`${dogs=>message}`);
    for(let i = 0; i < dogs.length; i++) {
        const dog = document.createElement('IMG');
        dog.src = dogs[i];
        console.log(`${dogs[i]}`);
        main.appendChild(dog);
    }
  }

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    fetchDogs();
  });


