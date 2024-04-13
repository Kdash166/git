// Data for Gen 2 Pokémon types and their colors
const gen2PokemonTypes = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

// Function to capitalize a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to fetch and display Pokémon details
async function findPokemon() {
    try {
        let searchTerm = document.getElementById('search-input').value.toLowerCase();
        searchTerm = searchTerm.replace(/\./g, '').replace('♀', '-f').replace('♂', '-m');
        console.log('Search term:', searchTerm);

        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`);
        const data = await response.json();
        console.log('API Response:', data);

        // Update Pokémon details
        document.getElementById('pokemon-name').textContent = capitalize(data.name);
        document.getElementById('pokemon-id').textContent = data.id;
        document.getElementById('weight').textContent = data.weight;
        document.getElementById('height').textContent = data.height;
        document.getElementById('sprite').src = data.sprites.front_default;

        // Clear previous type elements
        const typesContainer = document.getElementById('types');
        typesContainer.innerHTML = '';

        // Create and append <p> elements for each type
        data.types.forEach(typeObj => {
            const typeName = capitalize(typeObj.type.name);
            const typeColor = gen2PokemonTypes[typeName.toLowerCase()];
            
            const typeElement = document.createElement('p');
            typeElement.textContent = typeName;
            typeElement.style.backgroundColor = typeColor;
            typeElement.style.padding = '8px'; 
            typeElement.style.color = 'white';
            typeElement.style.fontWeight = 'bold';
            typeElement.style.borderRadius = '6px';
            
            typesContainer.appendChild(typeElement);
        });

        // Update base stats
        const stats = data.stats.map(stat => stat.base_stat);
        document.getElementById('hp').textContent = stats[0];
        document.getElementById('attack').textContent = stats[1];
        document.getElementById('defense').textContent = stats[2];
        document.getElementById('special-attack').textContent = stats[3];
        document.getElementById('special-defense').textContent = stats[4];
        document.getElementById('speed').textContent = stats[5];
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        alert("Pokémon not found");
    }
}

// Event listeners
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', findPokemon);

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        findPokemon();
    }
});
