class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    const _htmlTemplatePath = "../card/card.html";
    let _cardTemplate = document.createElement("template");

    fetch(`${_htmlTemplatePath}`).then(function (response) {
      response.text().then(function (text) {
        _cardTemplate.innerHTML = `${text}`;
        shadowRoot.appendChild(_cardTemplate.content);
      });
    });
  }
}

customElements.define("skeleton-card", Card);
