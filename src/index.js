console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const dogImageContainer = document.getElementById("dog-image-container");
  fetch(imgUrl)
    .then(res => res.json())
    .then(json => json["message"].forEach(url => {
      let new_img = document.createElement("img");
      new_img.src = url;
      dogImageContainer.appendChild(new_img);
    }));

  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogBreeds = document.getElementById("dog-breeds");
  fetch(breedUrl)
    .then(res => res.json())
    .then(json => {

      let breeds = Object.keys(json["message"]);
      let filteredBreeds = [];
      let breedDropdown = document.getElementById("breed-dropdown");
      renderBreeds(breeds)
      breedDropdown.addEventListener("change", (e) => {
        unrenderBreeds();
        let selectedLetter = e.target.value;
        switch(selectedLetter) {
          case "a":
            filteredBreeds = breeds.filter(breed => breed[0] == selectedLetter)
            renderBreeds(filteredBreeds)
            break;
          case "b":
            filteredBreeds = breeds.filter(breed => breed[0] == selectedLetter)
            renderBreeds(filteredBreeds)
            break;

          case "c":
            filteredBreeds = breeds.filter(breed => breed[0] == selectedLetter)
            renderBreeds(filteredBreeds)

            break;

          case "d":
            filteredBreeds = breeds.filter(breed => breed[0] == selectedLetter)
            renderBreeds(filteredBreeds)
            break;
          case "":
            renderBreeds(breeds);
            break;
        }
      });
      function renderBreeds(breeds) {
        for(i in breeds) {
          let li = document.createElement("li");
          li.innerText = breeds[i];
          li.onclick = () => { li.style.color = "blue" };
          dogBreeds.appendChild(li);
        };
      };

      function unrenderBreeds() {
        while(dogBreeds.firstChild) {
          dogBreeds.removeChild(dogBreeds.lastChild);
        };
      }

    });





});