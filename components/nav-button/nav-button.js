import { createElementWithClassAndData } from "../search-bar/search-bar.js";

export function createButton(kaya, className, DataJS) {
  const button = createElementWithClassAndData("button", "button", DataJS);
  button.classList.add(className);
  button.textContent = kaya;

  return button;
}
