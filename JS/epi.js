

const episodiosRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/episode?page=" + pagina;
    const api = await fetch(url);
  
    const data = await api.json();
    console.log(data);
  
    const totalEpisodios = document.getElementById("totalEpisodios");
    totalEpisodios.textContent = data.info.count;
  
    divRes = document.querySelector("#resultado");
    divRes.innerHTML = "";
  
    const inputBusqueda = document.querySelector("#busqueda");
    inputBusqueda.addEventListener("keyup", () => {
      const terminoBusqueda = inputBusqueda.value.toLowerCase().trim();
      filtrarResultados(terminoBusqueda);
    });
  
    const mostrarResultados = (resultados) => {
      divRes.innerHTML = "";
  
      resultados.map((item) => {
        divItem = document.createElement("div");
        divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91MteSqsrJL._AC_UF1000,1000_QL80_.jpg" class="card-img-top" alt="...">
          <div class="card-body" style="background: #3b3b3b; color:white">
            <h5 class="card-title"> ${item.name}</h5>
            <p class="card-text">
              <b>Estatus: </b>${item.episode}
            </p>
            <p class="card-text">
              <b>Especie: </b>${item.air_date}
            </p>
          </div>
        </div>
        `;
        divRes.appendChild(divItem);
      });
    };
  
    const filtrarResultados = async (terminoBusqueda) => {
      const totalPaginas = data.info.pages;
      const resultadosFiltrados = [];
      for (let i = 1; i <= totalPaginas; i++) {
        const paginaData = await obtenerPagina(i);
        const resultadosPagina = paginaData.results.filter((item) => {
          return (
            item.episode.toLowerCase().includes(terminoBusqueda) ||
            item.name.toLowerCase().includes(terminoBusqueda)
          );
        });
        resultadosFiltrados.push(...resultadosPagina);
      }
      mostrarResultados(resultadosFiltrados);
    };
  
    const obtenerPagina = async (pagina) => {
      let url = "https://rickandmortyapi.com/api/episode?page=" + pagina;
      const api = await fetch(url);
      const data = await api.json();
      return data;
    };
  
    mostrarResultados(data.results);
  };
  
  episodiosRick();