export function createElementWithClassAndData(type, className, dataJS) {
  const Element = document.createElement(type);
  Element.className = className;
  Element.setAttribute("data-js", dataJS);
  return Element;
}

export function createSearchBar() {
  const searchBarContainer = createElementWithClassAndData(
    "div",
    "search-bar-container",
    "search-bar-container"
  );
  const searchBar = createElementWithClassAndData(
    "form",
    "search-bar",
    "search-bar"
  );
  searchBar.setAttribute("action", "");

  searchBarContainer.append(searchBar);

  const input = document.createElement("input");
  input.setAttribute("name", "query");
  input.className = "search-bar__input";
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "search characters");
  input.setAttribute("aria-label", "character name");

  const submitButton = document.createElement("button");
  submitButton.className = "search-bar__icon";
  submitButton.setAttribute("aria-label", "search for character");

  searchBar.append(input, submitButton);

  const searchBarIcon = document.createElement("img");
  searchBarIcon.src = "assets/magnifying-glass.png";
  searchBarIcon.alt = "";
  searchBarIcon.className = "search-bar__icon";

  submitButton.append(searchBarIcon);
  return searchBarContainer;
}
