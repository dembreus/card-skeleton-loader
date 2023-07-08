import { Card } from "./card/card.js";

window.addEventListener("load", () => {
  render();
});

const render = () => {
  const main = document.querySelector("main") || new Node();
  const card = document.createElement("skeleton-card");

  Card;
  main.appendChild(card);
};
