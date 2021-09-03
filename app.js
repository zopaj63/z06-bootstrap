function showPokemon(items) {
    const source = document.querySelector('#pokemon-list').innerHTML;
    const template = Handlebars.compile(source);
    const context = { items: items };
    const html = template(context);

    const app = document.querySelector("#app");
    app.innerHTML = html;
}

// prvih 20 sa slice

function makeHeadersDarkBlue() {
    const headers = document.querySelectorAll("th");
    headers.forEach(function (header) {
        header.style.color = "darkBlue";
    });
}

function filterPokemonWith(items, letter) {
    return items.filter(function (item) {
        return item.name[0] === letter;
    });
}

fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
    .then(response => response.json())
    .then((json) => {
        console.log(Handlebars);
        const filteredPokemon = filterPokemonWith(json.pokemon_species, "p");
        showPokemon(filteredPokemon);
        makeHeadersDarkBlue();
    })
    .catch((error) => {
        console.error(error);
    });