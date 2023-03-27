const LocationsRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/location?page=2"+ pagina;
    const api = await fetch(url);

    const data = await api.json();
    console.log(data);
    divRes = document.querySelector('#resultado');
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
                <img src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${item.name}</h5>
                    <p class="card-text">
                        <b>Estatus: </b>${item.type}
                    </p>
                    <p class="card-text">
                        <b>Especie: </b>${item.dimension}
                    </p>
            </div>
            </div>
            `
            divRes.appendChild(divItem)
        });
    };

    const filtrarResultados = (terminoBusqueda) => {
        const resultadosFiltrados = data.results.filter((item) => {
            return item.name.toLowerCase().includes(terminoBusqueda)
        });
        mostrarResultados(resultadosFiltrados);
    }

    mostrarResultados(data.results)
}

LocationsRick();