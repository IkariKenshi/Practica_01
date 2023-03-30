
const LocationsRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/location?page="+ pagina;
    const api = await fetch(url);
  
    const data = await api.json();
    console.log(data);
  
    const totalPlanetas = document.getElementById('totalPlanetas')
    totalPlanetas.textContent = data.info.count;
  
    divRes = document.querySelector('#resultado');
    divRes.innerHTML = '';
  
    let todasLasLocalizaciones = [];
    let todasLasPaginas = data.info.pages;
  
    for (let i = 1; i <= todasLasPaginas; i++) {
      let url = "https://rickandmortyapi.com/api/location?page="+ i;
      const api = await fetch(url);
  
      const data = await api.json();
      todasLasLocalizaciones.push(...data.results);
    }
  
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
            <div class="card-body" style="background: #3b3b3b; color:white">
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
      const resultadosFiltrados = todasLasLocalizaciones.filter((item) => {
        return item.name.toLowerCase().includes(terminoBusqueda)
      });
      mostrarResultados(resultadosFiltrados);
    }
  
    mostrarResultados(todasLasLocalizaciones)
  }
  
  LocationsRick();