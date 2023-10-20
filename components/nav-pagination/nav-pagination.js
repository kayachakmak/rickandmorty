import { createElementWithClassAndData } from "../search-bar/search-bar.js";

export function createPagination() {
  const pagination = createElementWithClassAndData(
    "span",
    "navigation__pagination",
    "pagination"
  );
  return pagination;
}
