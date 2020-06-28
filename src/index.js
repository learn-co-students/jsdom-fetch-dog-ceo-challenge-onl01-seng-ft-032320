console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
  fetchDog(imgUrl);
  fetchBreeds(breedUrl);
  document.getElementById('breed-dropdown').addEventListener('change', onSelectChange);
});
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let data = {};

function storeData(json) {
  data = json.message;
}

function getList() {
  return document.getElementById('dog-breeds')
};

function createListItem(name) {
  let li = document.createElement('li')
  li.innerText = name
  return li;
};

function createSubList() {
  return document.createElement('ul'); 
};

function changeColor(dogBreed){
  dogBreed.addEventListener('click', function(){
    dogBreed.style.color = 'green';
})
};

function fetchDog(link){
    return fetch(link)
        .then(resp => resp.json())
        .then(json => renderDogs(json));
};

function renderDogs(json) {
    let div = document.querySelector('div#dog-image-container')
    json.message.forEach(image => {
      let img = document.createElement('img')
      img.src = image
      div.appendChild(img)
    })
  }

function fetchBreeds(link){
    return fetch(link)
      .then(resp => resp.json())
      .then(storeData)
      .then(renderBreeds);
};

function renderBreeds(filterValue) {
    const mainList = getList();
    const dogList = data;
    
    mainList.innerHTML = ""

    Object.keys(dogList).forEach(breed => {
      if (filterValue && breed[0] !== filterValue) {
        return;
      }
      const subBreeds =  dogList[breed];
      const listItem = createListItem(breed);


      mainList.appendChild(listItem);
      changeColor(listItem)

      if (subBreeds.length) {
        const subList = createSubList();

        subBreeds.forEach(subBreed => {
          const subListItem = createListItem(subBreed)
          subList.appendChild(subListItem);
          changeColor(subListItem)
        })
        mainList.appendChild(subList);
      }
  })
}

function onSelectChange(event) {
  const result = event.target.value;
  renderBreeds(result)
};


// function renderSelected() {
//   let letter = selectedLetterValue();

// }



// function renderBooks(books) {
//     const main = document.querySelector('main')
//     books.forEach(book => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = book.name
//       main.appendChild(h2)
//     })
//   }

