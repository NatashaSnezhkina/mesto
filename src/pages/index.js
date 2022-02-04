import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  editButton,
  addButton,
  formEdit,
  formAdd,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  userDescription,
  elementsContainer,
  initialCards,
  validationConfig
} from '../utils/constants.js'

// валидация форм
const editFormValidator = new FormValidator(validationConfig, formEdit);
const cardFormValidator = new FormValidator(validationConfig, formAdd);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// создания контейнера для карточек
const cardContainer = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.element-template', handleCardClick);
    const cardElement = card.generateCard();
    cardContainer.addItem(cardElement);
  }
}, elementsContainer);

cardContainer.renderItems();


//создание попапа-картинки
const popupPicture = new PopupWithImage('.popup-picture');

function handleCardClick(name, link) {
  popupPicture.open(name, link);
  popupPicture.setEventListeners();
}

// попап РЕДАКТИРОВАНИЕ
const popupEdit = new PopupWithForm('.popup-edit', submitPopupEdit);
const user = new UserInfo(userDescription);

function submitPopupEdit() {
  user.setUserInfo({
    inputName: nameInput,
    inputDescription: jobInput
  });
  popupEdit.close();
}
//попап ДОБАВЛЕНИЕ
const popupAdd = new PopupWithForm('.popup-add', submitPopupAdd);

function submitPopupAdd(evt) {
  evt.preventDefault();
  const input = {
    name: titleInput.value,
    link: linkInput.value
  }

  const card = new Card(input, '.element-template', handleCardClick);
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);

  popupAdd.close();

  titleInput.value = '';
  linkInput.value = '';
}

addButton.addEventListener('click', () => {
  popupAdd.open();
  popupAdd.setEventListeners();
});

editButton.addEventListener('click', () => {
  popupEdit.open();
  const userInformation = user.getUserInfo();
  nameInput.value = userInformation.name;
  jobInput.value = userInformation.description;
});

formEdit.addEventListener('submit', submitPopupEdit);
formAdd.addEventListener('submit', submitPopupAdd);
