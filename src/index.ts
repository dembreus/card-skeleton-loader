import "./card/card";

window.addEventListener("load", () => {
  render();
});

const render = () => {
  const body = document.querySelector("body") || new Node();
  const main = document.createElement("main");
  const card = document.createElement("skeleton-card");

  body.appendChild(main);
  main.appendChild(card);
};
