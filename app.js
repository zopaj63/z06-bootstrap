function showPokemon(items) {
    const source = document.querySelector('#pokemon-list').innerHTML;
    const template = Handlebars.compile(source);
    const context = { items: items };
    const html = template(context);

    const app = document.querySelector("#app");
    app.innerHTML = html;
}

// prvih 20 sa slice

fetch("https://pokeapi.co/api/v2/pokemon-color/red")
    .then(response => response.json())
    .then((json) => {
        console.log(Handlebars);
        showPokemon(json.pokemon_species);
    })
    .catch((error) => {
        console.error(error);
    });