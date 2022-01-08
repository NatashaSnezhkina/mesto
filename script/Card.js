class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.element-template')
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLike();
    });

    this._element.querySelector('.element__basket').addEventListener('click', () => {
      this._handleDelete();
    });

    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleOpenPopup();
        });
  }

  _handleLike() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleDelete() {
    this._element.remove();
  }

  _handleOpenPopup() {
    popupPicture.querySelector('.popup-picture__image').src = this._link;
    popupPicture.querySelector('.popup-picture__image').alt = this._name;
    popupPicture.querySelector('.popup-picture__description').textContent = this._name;
    openPopup(popupPicture);
  }

  getView() {
    return this._element;
  }
}

export default Card;