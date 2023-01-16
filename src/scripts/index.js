
async function renderPokemons() {
    const ulTag = document.querySelector('.poke-ul')

 
    const pokeList = await pokeAPI()

   
    pokeList.results.forEach(pokemon => {
       
        const numPokedex = pokemon.url.slice(34, -1)


       setTimeout(() => {ulTag.insertAdjacentHTML('beforeend', `
            <li class="poke-card">
                <img class="poke-icone" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numPokedex}.png" alt=${pokemon.name}>
                <strong class="poke-name">${pokemon.name}</strong>
            </li>
        `)},1000)
    })

}
renderPokemons()

const searchButton = document.querySelector('.search-bt');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', async () => {
    const ulTag = document.querySelector('.poke-ul')
    ulTag.innerHTML = ''

    const loading = document.querySelector('#loading')
    loading.classList.remove('hidden');

    const searchItem = searchInput.value
    const itemTreated = searchItem.toLowerCase()


    const pokeGet = {...await fetch(`https://pokeapi.co/api/v2/pokemon/${itemTreated}`,{
        method: 'GET'
    }).then(    
        response =>  response.json()
          
      )
      .catch(
 
        error => console.log(error)
      )}
            console.log(pokeGet);
  
    const numPokedex = pokeGet.id
    console.log(numPokedex)
 
   setTimeout(()=> {ulTag.insertAdjacentHTML('afterbegin', `
            <li class="poke-card">
                <img class="poke-icone" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numPokedex}.png" alt=${pokeGet.name}>
                <strong class="poke-name">${pokeGet.name}</strong>
            </li>
        `)},1000)
        
        setTimeout(()=>{ loading.classList.add('hidden')},1000)
});

