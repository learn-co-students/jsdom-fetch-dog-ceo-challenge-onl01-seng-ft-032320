console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getDogs(){
  fetch(imgUrl)
   .then (response => response.json())
   .then (dogs => postImages(dogs))
}

function getBreeds(){
   fetch(breedUrl)
    .then (response => response.json())
    .then (breeds => postBreeds(breeds))
 }

function postImages(dogs){
   let dogImages = document.getElementById("dog-image-container")
   let images = Array.from(dogs.message)
   images.forEach(dog => {
      let img = document.createElement("IMG")
      img.src = dog
      dogImages.appendChild(img)
   });
}


function postBreeds(breeds){
   let dogBreeds = document.getElementById("dog-breeds")
   let listOfBreeds = Object.keys(breeds.message)
   listOfBreeds.forEach(breed => {
      let li = document.createElement("li")
      li.innerText = breed
      li.dataset.breed = breed
      li.dataset.startsWith = breed.charAt(0)
      li.addEventListener("click",() => {li.style.color = "pink"})
      dogBreeds.appendChild(li)
   });
}

function filterBreeds(letter){
   // document.querySelectorAll("[data-breed^=a]")
   // document.querySelectorAll("#dog-breeds li[data-breed^=a]")
   // document.querySelectorAll("#dog-breeds li")[0].innerText
   // document.querySelectorAll("#dog-breeds li")[0].innerText.charAt(0).startsWith("b").style.display = hide

   //create array from objects
   //hide all
   //then quickly show data-starts-with=x

   let dogBreeds = document.querySelectorAll("#dog-breeds li")
   let breeds = Array.from(dogBreeds)
   breeds.forEach(el => {
      el.hidden = true
   });

   let showFiltered = document.querySelectorAll(`[data-starts-with=${letter}]`)
   breeds = Array.from(showFiltered)
   breeds.forEach(el => {
      el.hidden = false
   });
}

document.addEventListener("DOMContentLoaded",function(){
   getDogs()
   getBreeds()
   const dropdown = document.querySelector("select#breed-dropdown")

   dropdown.addEventListener("change", () =>{
      console.log("you made it!")
      filterBreeds(dropdown.value)
   })
})