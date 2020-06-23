console.log('%c HI', 'color: firebrick')
    // Challenge 1
document.addEventListener('DOMContentLoaded', function() {
    fetchUrl(imgUrl)
    fetchUrl2();
    makeLiOfThem(dogs)
});

let dogs = []
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

async function fetchUrl(url) {
    const response = await fetch(url)
    const json = await response.json()
    return sendImagesToDom(json)
}

function sendImagesToDom(json) {
    json.message.forEach(dog => {
        document.querySelector("#dog-image-container").innerHTML += `
        <img src=${dog} height="250px">
        `
    })
}

// fetchUrl(imgUrl)

// Challenge 2



function fetchUrl2() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res => res.json())
        .then(result => {
            return dogs = Object.keys(result.message),
                makeLiOfThem(dogs)
        })
}



function makeLiOfThem(dogs) {

    dogs.forEach(el => {
            document.querySelector("#dog-breeds").innerHTML += `
                <li class="breed-li">${el}</li>
            `
        })
        // Challenge 3 
    const breedList = document.querySelectorAll(".breed-li")
    breedList.forEach(breed => {
        breed.addEventListener("click", changeColor)
    })
}

function changeColor(e) {
    e.target.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

// Challenge 4



makeLiOfThem(jsonStuff)