


const episodiosRick = async  (pagina)=> {
    let url = "https://rickandmortyapi.com/api/episode?page=" + pagina;
    const api = await fetch(url);

    const data = await api.json();
    console.log(data)
    divRes= document.querySelector('#resultado');
    divRes.innerHTML = '';

    const inputBusqueda = document.querySelector('#busqueda');
    inputBusqueda.addEventListener('keyup', () => {
        const terminoBusqueda = inputBusqueda.value.toLowerCase().trim();
        filtrarResultados(terminoBusqueda);
    });

    const mostrarResultados = (resultados) => {
        divRes.innerHTML = '';
        
        resultados.map(item => {
            divItem = document.createElement('div');
            divItem.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="https://pics.filmaffinity.com/Rick_y_Morty_Serie_de_TV-157026175-large.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${item.name}</h5>
                <p class="card-text">
                    <b>Estatus: </b>${item.episode}
                </p>
                <p class="card-text">
                    <b>Especie: </b>${item.air_date}
                </p>
            </div>
            </div>
            `
            divRes.appendChild(divItem);
        });
    };
    
    const filtrarResultados = (terminoBusqueda) => {
        const resultadosFiltrados = data.results.filter((item) => {
            return item.episode.toLowerCase().includes(terminoBusqueda) || item.name.toLowerCase().includes(terminoBusqueda)

        });
        mostrarResultados(resultadosFiltrados);
    };
mostrarResultados(data.results)

}

episodiosRick();


/*const episodiosRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/episode?page="+ pagina;
    const api = await fetch(url);

    const data = await api.json();
    console.log(data)
    divRes= document.querySelector('#resultado');
    divRes.innerHTML = ''


    data.results.map(item => {
        divItem = document.createElement('div')
        divItem.innerHTML= `
        <div class="card" style="width: 18rem;">
        
        <div class="card-body">
            <h5 class="card-title"> ${item.name}</h5>
            <p class="card-text">
                <b>Estatus: </b>${item.episode}
            </p>
            <p class="card-text">
                <b>Especie: </b>${item.air_date}
            </p>
        </div>
        </div>
        `
        divRes.appendChild(divItem);
        
    })
}*/