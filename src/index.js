console.log('%c HI', 'color: firebrick')


function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addPictures(json));
}


function addPictures(pics) {
    const picLocation = document.querySelector("#dog-image-container");
    pics["message"].forEach(pic => {
        const image = document.createElement("img")
        image.src = pic
        picLocation.appendChild(image)
    })
}

function fetchBreeds() {
    console.log("Fetching Breeds")
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => addBreeds(json["message"]));
}

function addBreeds(breeds) {
    const breedList = document.querySelector("#dog-breeds")

    for(var breed in breeds) {
        const newListItem = document.createElement("li")
        newListItem.innerHTML = breed
        breedList.appendChild(newListItem)
        newListItem.addEventListener('click', function(event) {
            newListItem.style.color = "#42cef5" 
        })
    }
}

function filterBreeds(letter) {
    const breedList = document.querySelector("#dog-breeds")
    let breedArray = Array.from(breedList.children)
    breedArray.forEach(element => {
        if (element.innerText.startsWith(letter)) {
            element.hidden = false
        } else {
            element.hidden = true
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded")
    fetchDog()
    fetchBreeds()
    const dropDown = document.querySelector("#breed-dropdown")
    dropDown.onchange = function() {
        filterBreeds(dropDown.value)
    }
})