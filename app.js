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
        setTimeout(() => {
            const originalPokemonCount = json.pokemon_species.length;
            const filteredPokemon = filterPokemonWith(json.pokemon_species, "p");
            const hiddenPokemonCount = originalPokemonCount - filteredPokemon.length;

            const div = document.createElement("div");
            div.innerHTML = hiddenPokemonCount;
            div.style.position = "fixed";
            div.style.top = 0;
            div.style.left = 0;
            document.body.appendChild(div);

            showPokemon(filteredPokemon);
            makeHeadersDarkBlue();
        }, 2000);
    })
    .catch((error) => {
        console.error(error);
    });