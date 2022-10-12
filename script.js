// En estas variables se guardara los elementos llamados por id
let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');

// Evento btn
searchBtn.addEventListener('click', () =>{
    // Nombre del pais que digita el usuario
    let countryName = countryInp.value;
    // Consumo de la API y le enviamos el nombre del pais
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL)
    .then(res => res.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
    });
});