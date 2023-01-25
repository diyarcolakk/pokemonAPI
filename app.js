let showCard = document.querySelector(".card-container");
let card = "";
const count = 205;
const apiLink = "https://pokeapi.co/api/v2/pokemon/1";
let counter = 1;
const colorPalette = {
  grass: "#BFDB38",
  fire: "#F47F3E",
  water: "#8BACF6",
  bug: "#379742",
  normal: "#FFE68B",
  poison: "#A483C5",
  electric: "#F6D63F",
  ground: "#8B6218",
  psychic: "#D5BD08",
  fighthing: "#C5B4C5",
  rock: "#9C9483",
  dragon: "#F6734A",
  ice: "#6AACF6",
  dark: "#314162",
};
const colorPaletteKeys = Object.keys(colorPalette); //Object Keylerini bir arraye attım
//
const getPokemon = async (i) => {
  const getPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
  const pokemonGetting = await getPoke.json();
  pokemonCardCreate(pokemonGetting);
};
//API alınıyor
function getAnPokemonArray() {
  for (let i = 1; i < count; i++) {
    getPokemon(i);
  }
}
getAnPokemonArray();
function pokemonCardCreate(pokeApi) {
  card = `
    <div class="pokemon-card-container" id=${counter}>
      <div class="pokemon-image-container">
        <img class="pokemon-img" src="${pokeApi.sprites.front_default}" alt="" />
      </div>
      <div class="pokemon-id"># ${pokeApi.id}</div>
      <p class="pokemon-name">${pokeApi.name}</p>
      <p class="pokemon-type">Type : ${pokeApi.types[0].type.name}</p>
    </div>
  `;
  showCard.insertAdjacentHTML("beforeend", card);
  let pokemonContainer = document.getElementById(`${counter}`);
  counter++;

  let temp = pokeApi.types[0].type.name;

  if (colorPaletteKeys.includes(pokeApi.types[0].type.name)) {
    pokemonContainer.style.backgroundColor = colorPalette[temp];
  }
}
