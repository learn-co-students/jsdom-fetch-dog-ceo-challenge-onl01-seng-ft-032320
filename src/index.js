console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'





function fetchBreeds() {
    return fetch(breedUrl)

    .then(resp => resp.json())

    .then(json => displayBreeds(json));
}


function displayBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')

    Object.keys(breeds.message).forEach(breed => {
        const li = document.createElement('li') 
        let textnode = document.createTextNode(breed);
        li.appendChild(textnode)
        ul.appendChild(li)
    })
}

function fetchDogs() {
    return fetch(imgUrl)

    .then(resp => resp.json())

    .then(json => displayDogs(json));
}


function displayDogs(dogs) {
    const main = document.getElementById('dog-image-container')

    dogs.message.forEach(dog => {
        const img = document.createElement('IMG')
        img.src = dog 
        main.appendChild(img)
      })
}


    


function displayfiltered(filtered) {
    //let ul = document.getElementById('dog-breeds')

    // filtered.forEach(filter => {
    //     const li = document.createElement("li")
    //     let textnode = document.createTextNode(filter.innerText);
    //     li.appendChild(textnode)
    //     ul.appendChild(li)
    // })

      let doggo =  filtered.map( function(dog){
            return `<li>${dog.innerText}</li>`
    })
        return doggo.join("")
}

function filterdogs() {
    let breedz = Array.from(document.getElementById('dog-breeds').children)
    const select = document.getElementById("breed-dropdown")
    select.addEventListener('change', function() {
        let filtered = breedz.filter(breed => breed.innerText.charAt(0) == this.value)
        select.innerHTML = displayfiltered(filtered)
      }, false);
}





document.addEventListener('DOMContentLoaded', function() {

    const breedy = document.getElementById("dog-breeds")

    const select = document.getElementById("breed-dropdown")

    fetchDogs()

    fetchBreeds()

    breedy.addEventListener("click", function(event){
        event.target.style.color = "blue" })

    // filterdogs()

    select.addEventListener("change", function(event){
        let breedz = Array.from(document.getElementById('dog-breeds').children)

        const pick = event.target.value 

        const pickedDogs = breedz.filter(breed => breed.innerHTML.startsWith(pick))

        breedy.innerHTML = displayfiltered(pickedDogs)
    })
    

    
    

   

  
})

 