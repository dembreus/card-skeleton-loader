import { Card } from "./card/card";

window.addEventListener("load", () => {
  render();
});

const render = () => {
  const body = document.querySelector("body") || new Node();
  const main = document.createElement("main");
  const p = document.createElement("p");
  const card = document.createElement("skeleton-card");

  p.innerHTML = `
    this works
  `;

  console.log("Card >> ", Card);
  body.appendChild(main);
  main.appendChild(p);
  main.appendChild(card);
};
