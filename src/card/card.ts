import cardStyles from "!!raw-loader!./card.scss";
import cardHtml from "!!raw-loader!./card.html";

export class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let _cardTemplate = document.createElement("template");

    this._generateCardStyles(shadowRoot);

    _cardTemplate.innerHTML = cardHtml;
    shadowRoot.appendChild(_cardTemplate.content);
  }

  private _generateCardStyles(root: ShadowRoot) {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(cardStyles));
    root.appendChild(style);
  }
}

customElements.define("skeleton-card", Card);
