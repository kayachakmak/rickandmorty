import { createElementWithClassAndData } from "../search-bar/search-bar.js";

export function createPagination() {
  const Pagination = createElementWithClassAndData(
    "span",
    "navigation__pagination",
    "pagination"
  );
  return Pagination;
}
