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
    const card = createCard(item.name, item.link);
    cardContainer.prependItem(card);
  }
}, elementsContainer);

cardContainer.renderItems();

//создание попапа-картинки
const popupPicture = new PopupWithImage('.popup-picture');

// попап РЕДАКТИРОВАНИЕ
const popupEdit = new PopupWithForm('.popup-edit', submitPopupEdit);
const user = new UserInfo(userDescription);
const userInformation = user.getUserInfo();

//попап ДОБАВЛЕНИЕ
const popupAdd = new PopupWithForm('.popup-add', submitPopupAdd);


function handleCardClick(name, link) {
  popupPicture.open(name, link);
  // popupPicture.setEventListeners();
}

function createCard(name, link) {
  const card = new Card(name, link, '.element-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function openPopupEdit() {
  popupEdit.open();
  nameInput.value = userInformation.name;
  jobInput.value = userInformation.description;
  // popupEdit.setEventListeners();
}

function openPopupAdd() {
  popupAdd.open();
  cardFormValidator.disableSubmitButton();
}

function submitPopupEdit(data) {
  user.setUserInfo(data);
  popupEdit.close();
}

function submitPopupAdd(data) {
  const card = createCard(data.title, data.link);
  cardContainer.prependItem(card);
  popupAdd.close();
}

// слушатели
addButton.addEventListener('click', () => {
  openPopupAdd();
});
editButton.addEventListener('click', () => {
  openPopupEdit();
});

