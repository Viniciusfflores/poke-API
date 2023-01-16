async function pokeAPI() {
  
    const loading = document.querySelector('#loading')

 
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(    
        response =>  response.json()
          
      )
      .catch(
 
        error => console.log(error)
      )

    setTimeout(()=>{ loading.classList.add('hidden')},1000)

  
    return pokemonsDaAPI
}
pokeAPI()

