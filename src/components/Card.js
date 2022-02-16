export default class Card {
  constructor(data, templateSelector, handleCardClick, handleOpenPopup, likeNumber, userId, handleAddLike, handleDeleteLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._usersLikes = data.likes;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenPopup = handleOpenPopup;
    this._likeNumber = likeNumber;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    console.log(this._templateSelector);
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__photo');
    this._cardLike = this._element.querySelector('.element__like');
    this._cardBasket = this._element.querySelector('.element__basket');
    this._setEventListeners();
    this._removeCardBasket();
    this._checkLike();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like__counter').textContent = this._likeNumber;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', () => {
      // this._handleLike();
      console.log(this);
      console.log(this._element);
      if (this._cardLike.classList.contains('element__like_active')) {
        this._handleDeleteLike(this);
      }
      else{
        this._handleAddLike(this);
      }
    });

    this._cardBasket.addEventListener('click', () => {
      this._handleOpenPopup(this);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  // _handleLike() {
  //   this._cardLike.classList.toggle('element__like_active');
  // }

  _removeCardBasket() {
    if(this._ownerId !== this._userId) {
      this._cardBasket.remove();
    }
  }

  _checkLike() {
    this._usersLikes.forEach((user) => {
      if(user._id === this._userId) {
        this._cardLike.classList.add('element__like_active');
      }
    })
  }


  getView() {
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }
}
