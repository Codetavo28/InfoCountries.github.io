function getCountry(done) {

    const  results = fetch("https://restcountries.com/v3.1/all");

    results
    .then(response => response.json())
    .then(data =>{
        done(data)
    });
}

getCountry(data =>{
    console.log(data);
    const div1 = document.querySelector('#countries-div')
    data.forEach(country => {
        
        const div2 = document.createElement('div')
        div2.innerHTML=
        `<img class="flags" src=${country.flags.svg} alt="">
        <h2 class="names">${country.name.common}</h2>
        <p class="data">Capital: ${country.capital}</p>
        <p class="data">Population: ${country.population}</p>
        <p class="data">Region: ${country.region}</p>
        `;
        div2.classList.add('countries')
        div1.append(div2)
    });
});

