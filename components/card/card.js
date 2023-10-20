export function createCharacterCard() { 
    const card = createElementWithClass('li','card');
    const cardImageContainer = createElementWithClass('div','card__image-container');
    const cardImage = createElementWithClass('img','card__image');
    // maybe add card image gradient?
    const cardContent = createElementWithClass('div','card__content');

    const cardTitle = createElementWithClass('h2','card__title');
    const cardInfo = createElementWithClass('dl','card__info');

    const cardInfoTitle1 = createElementWithClass('dt','card__info-title');
    const cardInfoTitle2 = createElementWithClass('dt','card__info-title');
    const cardInfoTitle3 = createElementWithClass('dt','card__info-title');

    const cardInfoDescription1 = createElementWithClass('dd','card__info-decription');
    const cardInfoDescription2 = createElementWithClass('dd','card__info-decription');
    const cardInfoDescription3 = createElementWithClass('dd','card__info-decription');

    cardInfo.append(cardInfoTitle1,cardInfoDescription1,cardInfoTitle2,cardInfoDescription2,cardInfoTitle3,cardInfoDescription3)
    cardImageContainer.append(cardImage)
    cardContent.append(cardTitle,cardInfo)

    card.append(cardImageContainer, cardContent)
    return card
}
function createElementWithClass(type,className) {
    const Element = document.createElement(type)
    Element.className = className
    return Element
}