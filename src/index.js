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
        let button = document.getElementById('breed-dropdown')
        button.addEventListener('input', event => {
            event.preventDefault();
            magicWord = event.target.value;
            console.log(event.target.value);
            alphaSort(magicWord)

         
        })
            
        
    };

    function alphaSort(magicWord) {
        let ul = document.getElementById('dog-breeds');
        let li = ul.getElementsByTagName('li');
        for (var i = 0; i < li.length; i++) {
            var txt = li[i].textContent || li[i].innerText;
            var include = txt.startsWith(magicWord);
            li[i].style.display = include ? 'list-item':'none';
        }
    };

console.log('%c HI', 'color: firebrick')


   // if (event.target.value === "a"){

            // }
            // else if (event.target.value === "b"){

            // }
            // else if (event.target.value === "c"){
                
            // }
            // else if (event.target.value === "d"){
                
            // }