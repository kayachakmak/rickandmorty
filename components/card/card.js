export function createCharacterCard(name, image, status, type, episode, index) {
  const card = createElementWithClass("li", "card");
  const cardImageContainer = createElementWithClass(
    "div",
    "card__image-container"
  );
  const cardImage = createElementWithClass("img", "card__image");
  // maybe add card image gradient?
  const cardContent = createElementWithClass("div", "card__content");

  const cardTitle = createElementWithClass("h2", "card__title");
  const cardInfo = createElementWithClass("dl", "card__info");

  const cardInfoTitle1 = createElementWithClass("dt", "card__info-title");
  const cardInfoTitle2 = createElementWithClass("dt", "card__info-title");
  const cardInfoTitle3 = createElementWithClass("dt", "card__info-title");
  // can change text content to be variables
  cardInfoTitle1.textContent = "Status";
  cardInfoTitle2.textContent = "Type";
  cardInfoTitle3.textContent = "Occurences";

  const cardInfoDescription1 = createElementWithClass(
    "dd",
    "card__info-description"
  );
  const cardInfoDescription2 = createElementWithClass(
    "dd",
    "card__info-description"
  );
  const cardInfoDescription3 = createElementWithClass(
    "dd",
    "card__info-description"
  );

  cardInfo.append(
    cardInfoTitle1,
    cardInfoDescription1,
    cardInfoTitle2,
    cardInfoDescription2,
    cardInfoTitle3,
    cardInfoDescription3
  );
  cardImageContainer.append(cardImage);
  cardContent.append(cardTitle, cardInfo);

  card.append(cardImageContainer, cardContent);

  //---- put content in cards:---
  cardImage.src = image;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardInfoDescription1.textContent = status;
  cardInfoDescription2.textContent = type;
  cardInfoDescription3.textContent = episode.length;

  card.style.animationDelay = `${0.2 * index}s`;

  return card;
}

function createElementWithClass(type, className) {
  const Element = document.createElement(type);
  Element.className = className;
  return Element;
}
