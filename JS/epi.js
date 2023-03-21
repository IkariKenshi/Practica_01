const episodiosRick = async (pagina) => {
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
} 

episodiosRick();