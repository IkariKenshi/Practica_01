
const apiRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/character/?page="+ pagina;
    const api = await fetch(url);

    const data = await api.json();
    console.log(data);
    const totalPersonajes = document.getElementById('totalPersonajes');
    totalPersonajes.textContent = data.info.count;

    divRes= document.querySelector('#resultado');
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
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body" style="background: #3b3b3b; color:white">
                    <h5 class="card-title"> ${item.name}</h5>
                    <p class="card-text">
                        <b>Estatus: </b>${item.status}
                    </p>
                    <p class="card-text">
                        <b>Especie: </b>${item.species}
                    </p>
                    <p class="card-text">
                        <b>Genero: </b>${item.gender}
                    </p>
                </div>
            </div>
            `
            divRes.appendChild(divItem);
        });
    };

    const filtrarResultados = async (terminoBusqueda) => {
        const urlBusqueda = `https://rickandmortyapi.com/api/character/?name=${terminoBusqueda}`;
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

apiRick(1);