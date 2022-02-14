import Card from "./Card.js";

export default class CardCreated extends Card {
  constructor(name, link, templateSelector, handleCardClick, handleBasketClick) {
    super(name, link, templateSelector, handleCardClick);
    this._handleBasketClick = handleBasketClick;
  }

  generateCard() {
    super.generateCard();
    this._cardBasket = this._element.querySelector('.element__basket');
  }

  _setEventListeners() {
    super._setEventListeners();

    this._cardBasket.addEventListener('click', () => {
      this.handleBasketClick();
    });
  }

  _handleDelete() {
    this._element.remove();
  }
}