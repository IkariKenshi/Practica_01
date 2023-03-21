const LocationsRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/location?page=2"+ pagina;
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
                <b>Estatus: </b>${item.type}
            </p>
            <p class="card-text">
                <b>Especie: </b>${item.dimension}
            </p>
        </div>
        </div>
        `
        divRes.appendChild(divItem);
        
    })
} 

LocationsRick();