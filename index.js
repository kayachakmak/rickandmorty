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
let maxPage = 42;
let page = 1;
let searchQuery = "";
pagination.textContent = `${page} / ${maxPage} `;

let URL = `https://rickandmortyapi.com/api/character/?name=${searchQuery}&?page=${page}`;

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

const cardsData = data.results.map((character) => {
  const { name, image, status, type, episode } = character;

  const card = createCharacterCard(name, image, status, type, episode);
  cardContainer.append(card);
});

nextButton.addEventListener("click", async () => {
  if (page === maxPage) {
    return;
  }
  page++;
  pagination.textContent = `${page} / ${maxPage} `;
  cardContainer.innerHTML = "";
  URL = `https://rickandmortyapi.com/api/character/?name=${searchQuery}&?page=${page}`;

  const data = await fetchCharacters();

  const cardsData = data.results.map((character) => {
    const { name, image, status, type, episode } = character;

    const card = createCharacterCard(name, image, status, type, episode);
    cardContainer.append(card);
  });
});

prevButton.addEventListener("click", async () => {
  if (page === 1) {
    return;
  }
  page--;
  pagination.textContent = `${page} / ${maxPage} `;
  cardContainer.innerHTML = "";

  URL = `https://rickandmortyapi.com/api/character/?name=${searchQuery}&?page=${page}`;


  const data = await fetchCharacters();

  const cardsData = data.results.map((character) => {
    const { name, image, status, type, episode } = character;

    const card = createCharacterCard(name, image, status, type, episode);
    cardContainer.append(card);
  });
});

// ---- search bar ----
searchBar.addEventListener('submit', async (event) => {
  page = 1;
  event.preventDefault()
  cardContainer.innerHTML=''
  
  const formData = new FormData(event.target) 
  const dataSearch = Object.fromEntries(formData)
  searchQuery = dataSearch.query


  URL = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;

  const data = await fetchCharacters();


  const cardsData = data.results.map((character) => {
    const { name, image, status, type, episode } = character;

    const card = createCharacterCard(name, image, status, type, episode);
    cardContainer.append(card);
  });

  maxPage = data.info.pages
  pagination.textContent = `${page} / ${maxPage} `;
  

});
