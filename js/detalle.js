const banderas = document.getElementById('banderas');
const query = new URLSearchParams(window.location.search);
const params = query.get('name');

console.log(params);

const url = 'https://restcountries.eu/rest/v2/all';

//evento al caragar nuestro sitio web
document.addEventListener('DOMContentLoaded', e=>{
    fetchData();
})

const fetchData = async ()=>{
    try {
        const res = await fetch(url);
        const data = await res.json();

        const filtroData = data.filter(item => item.name === params);

        console.log(filtroData);
        banderillas(filtroData);

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
                    <b>Gentilicio:</b>
                    ${item.demonym}
                </p>
                <p>
                    <b>Lenguaje:</b>
                    ${item.languages[0].name}
                </p>
                <p>
                    <b>Codigo de area:</b>
                    ${item.callingCodes[0]}
                </p>
                <p>
                    <b>Dominio:</b>
                    ${item.topLevelDomain[0]}
                </p>


            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos;
}