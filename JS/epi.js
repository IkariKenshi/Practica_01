const apiRickEpisodios = async (pagina) =>{
    
    let url = "https://rickandmortyapi.com/api/episode?page=" + pagina; 
    const api = await fetch(url)
    const episodios = await api.json();
    console.log(episodios)
}


apiRickEpisodios();