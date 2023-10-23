import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createElementWithClassAndData } from "./components/search-bar/search-bar.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";

const main = document.querySelector('[data-js="main"]');

const searchBar = createSearchBar();

const cardContainer = createElementWithClassAndData(
  "ul",
  "card-container",
  "card-container"
);

const navigation = createElementWithClassAndData(
  "nav",
  "navigation",
  "navigation"
);

const prevButton = createButton("previous", "button--prev", "button-prev");
const pagination = createPagination();
const nextButton = createButton("next", "button--next", "button-next");

main.append(searchBar, cardContainer);
main.insertAdjacentElement("afterend", navigation);
navigation.append(prevButton, pagination, nextButton);

// States
let page = 1;
let searchQuery = "";


async function fetchCharacters() {
  let URL = `https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${page}`;
  const response = await fetch(URL);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const data = await fetchCharacters();

let maxPage = data.info.pages;


pagination.textContent = `${page} / ${maxPage} `;

data.results.map((character) => {
  const { name, image, status, type, episode } = character;

  const card = createCharacterCard(name, image, status, type, episode);
  cardContainer.append(card);
});


// ---- Next Button ----

nextButton.addEventListener("click", async () => {
  if (page === maxPage) {
    return;
  }
  page++;
  pagination.textContent = `${page} / ${maxPage} `;
  cardContainer.innerHTML = "";

  const data = await fetchCharacters();

  const cardsData = data.results.map((character) => {
    const { name, image, status, type, episode } = character;

    const card = createCharacterCard(name, image, status, type, episode);
    cardContainer.append(card);
  });
});

// ---- Previous Button ----
prevButton.addEventListener("click", async () => {
  if (page === 1) {
    return;
  }
  page--;
  pagination.textContent = `${page} / ${maxPage} `;
  cardContainer.innerHTML = "";

  const data = await fetchCharacters();

  data.results.map((character) => {
    const { name, image, status, type, episode } = character;

    const card = createCharacterCard(name, image, status, type, episode);
    cardContainer.append(card);
  });
});

// ---- search bar ----
searchBar.addEventListener("submit", async (event) => {
  page = 1;
  event.preventDefault();
  cardContainer.innerHTML = "";
  const formData = new FormData(event.target);
  const dataSearch = Object.fromEntries(formData);
  searchQuery = dataSearch.query;

  const data = await fetchCharacters();

  if (data.hasOwnProperty("error")) {
    maxPage = 1;
    pagination.textContent = `${page} / ${maxPage} `;
    const errorMessage = document.createElement("div");
    const errorImage = document.createElement("img");
    errorImage.src =
      "./assets/pngtree-hand-drawn-cartoon-scratching-head-showing-yellow-robot-with-404-error-image_1310296.jpg";
    errorImage.alt = "error image";
    errorImage.className = "error_image";
    errorMessage.className = "error_message";
    errorMessage.textContent = `${data.error}`;
    return cardContainer.append(errorImage, errorMessage);
  }

  data.results.map((character) => {
    const { name, image, status, type, episode } = character;

    const card = createCharacterCard(name, image, status, type, episode);
    cardContainer.append(card);
  });

  maxPage = data.info.pages;
  pagination.textContent = `${page} / ${maxPage} `;
});
