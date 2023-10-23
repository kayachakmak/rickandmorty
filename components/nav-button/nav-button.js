import { createElementWithClassAndData } from "../search-bar/search-bar.js";

export function createButton(buttonName, className, DataJS) {
  const button = createElementWithClassAndData("button", "button", DataJS);
  button.classList.add(className);
  button.textContent = buttonName;

  return button;
}
