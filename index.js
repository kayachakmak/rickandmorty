import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

const URL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  const response = await fetch(URL);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
const data = await fetchCharacters();
console.log(data);

const cardsData = data.results.map((character) => {
  const { name, image, status, type, episode } = character;
  
  const card = createCharacterCard(name, image, status, type, episode);
  cardContainer.append(card);
});
