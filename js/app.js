const banderas = document.getElementById('banderas');

const url = 'https://restcountries.eu/rest/v2/all';

//evento al caragar nuestro sitio web
document.addEventListener('DOMContentLoaded', e=>{
    fetchData();
})

const fetchData = async ()=>{
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        banderillas(data);
        formularioCliente(data);
        filtros(data);
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data =>{
    let elementos ='';
    data.forEach(item => {
        elementos +=`
        <article class="card">
            <img src="${item.flag} " alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Población:</b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región:</b>
                    ${item.region}
                </p>
                <p>
                    <a class="btn-back btn-modify" href="pais.html?name=${item.name}">Mas info</a>
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos;
}