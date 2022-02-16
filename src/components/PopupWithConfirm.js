import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitButtonSelector = this._popup.querySelector('.submit-button');
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._card);
    });
  }

  getReadyToDelete(card) {
    this._card = card;
  }
}