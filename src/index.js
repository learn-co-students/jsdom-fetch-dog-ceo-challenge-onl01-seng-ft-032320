function getDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(function(response) {
            return response.json();
      })
      .then(function(json){
      renderDogs(json)
  })
  }
  
  function renderDogs(dogs) {
      
    let div = document.getElementById('dog-image-container')
    dogs['message'].forEach(dog => {
      const img = document.createElement('img')
      img.src = dog
      div.appendChild(img)
    })
  }

  //Challenge 2

  function getBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(function(response) {
            return response.json();
      })
      .then(function(json){
          let data = json['message'];
          let breeds = Object.keys(data)
      renderBreeds(breeds)
  })
  }
  
  function renderBreeds(breeds) {
      
    let ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
      const li = document.createElement('li')
      li.id = breed
      li.innerHTML = breed
      ul.appendChild(li)
    })
  }


  
document.addEventListener('DOMContentLoaded', function() {
    getDogs(); getBreeds(); makeList(); dropdown()
  })
  
//challenge 3
  function makeList(){
    let breedList = document.getElementById('dog-breeds')
    breedList.addEventListener('click', function(event) {
    console.log(`You just clicked on the ${event.target.id}!`);
    let newDog = document.getElementById(event.target.id);
        if (newDog.style['color']=== "blue"){
            newDog.style ="color:red"
        }
        else {
            newDog.style ="color:blue"
        };
        
    });
  };

  //challenge 4 filter by dropdown
  function dropdown (){
  let dropDown = document.getElementById('breed-dropdown')
  dropDown.addEventListener('click', function(event){
    console.log(`testing to see if ${event.target.value} appears`)
  });
  //1. event listener on button
  //2. take button value, use as filter
  //3. 
  };

console.log('%c HI', 'color: firebrick')
