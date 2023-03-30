const apiEpisodios = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/episode?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);

    const totalEpisodios = document.getElementById('totalEpisodios');
    totalEpisodios.textContent = data.info.count;

    const divRes = document.querySelector('#resultado');
    divRes.innerHTML = '';

    const inputBusqueda = document.querySelector('#busqueda');
    inputBusqueda.addEventListener('keyup', () => {
        const terminoBusqueda = inputBusqueda.value.toLowerCase().trim();
        filtrarResultados(terminoBusqueda);
    });

    const mostrarResultados = (resultados) => {
        divRes.innerHTML = "";

        resultados.map(item => {
            divItem = document.createElement('div')
            divItem.innerHTML= `
            <div class="card" style="width: 18rem;">
                <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91MteSqsrJL._AC_UF1000,1000_QL80_.jpg" class="card-img-top" alt="...">
                <div class="card-body" style="background: #3b3b3b; color:white">
                    <h5 class="card-title"> ${item.name}</h5>
                    <p class="card-text">
                        <b>Episodio: </b>${item.episode}
                    </p>
                    <p class="card-text">
                        <b>Air date: </b>${item.air_date}
                    </p>
                </div>
            </div>
            `
            divRes.appendChild(divItem);
        });
    };

    const filtrarResultados = async (terminoBusqueda) => {
        const urlBusqueda = `https://rickandmortyapi.com/api/episode?name=${terminoBusqueda}`;
        const apiBusqueda = await fetch(urlBusqueda);
        const dataBusqueda = await apiBusqueda.json();

        if (dataBusqueda.error) {
            divRes.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    No se encontraron resultados para "${terminoBusqueda}"
                </div>
            `;
            return;
        }

        const resultadosFiltrados = dataBusqueda.results;
        mostrarResultados(resultadosFiltrados);
    };

    mostrarResultados(data.results);
};

apiEpisodios(1);
