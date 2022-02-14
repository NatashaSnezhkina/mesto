import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
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
  // initialCards,
  validationConfig
} from '../utils/constants.js';
import Api from '../components/Api.js';

// валидация форм
const editFormValidator = new FormValidator(validationConfig, formEdit);
const cardFormValidator = new FormValidator(validationConfig, formAdd);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

//создание попапа-картинки
const popupPicture = new PopupWithImage('.popup-picture');
popupPicture.setEventListeners();

// попап РЕДАКТИРОВАНИЕ
const popupEdit = new PopupWithForm('.popup-edit', submitPopupEdit);
popupEdit.setEventListeners();

//попап ДОБАВЛЕНИЕ
const popupAdd = new PopupWithForm('.popup-add', submitPopupAdd);
popupAdd.setEventListeners();

// попап УДАЛЕНИЕ 
const popupDelete = new PopupWithConfirm('.popup-delete', submitPopupDelete)
popupDelete.setEventListeners();

const user = new UserInfo(userDescription);

const cardContainer = new Section({
  renderer: (item) => {
    const card = createCard(item, item.likes.length);
    cardContainer.addItem(card);
  },
}, elementsContainer);

// API

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: 'b6ff83c2-3ced-4557-872e-eefa9152b997'
});


// карточки
api.getCards()
.then((cards) => {
  cardContainer.renderItems(cards);
})
.catch(err => {
  console.log(err => {
    console.log(err);
  })
}) 

function handleCardClick(name, link) {
  popupPicture.open(name, link);
}

function handleOpenPopup() {
  popupDelete.open();
}

function createCard(data, likeNumber) {
  const card = new Card(data, '.element-template', handleCardClick, handleOpenPopup, likeNumber);
  const cardElement = card.generateCard();
  // cardElement.querySelector('.element__basket').style.display = 'none';
  return cardElement;
}

function openPopupAdd() {
  popupAdd.open();
  cardFormValidator.disableSubmitButton();
}

function submitPopupAdd(data) {
  api.sendCard(data)
  .then((res) => {
    const card = createCard(res);
    cardContainer.prependItem(card);
    popupAdd.close();
  })
  .catch (err => {
    console.log(`Ошибка при добавлении карточки${err}`);
  })
}

function submitPopupDelete() {
  popupDelete.close();
}

// профиль 

api.getProfileInfo()
.then((data) => {
  const user = new UserInfo(data);
  const userInfo = user.getUserInfo();
  document.querySelector('.profile__title').textContent = user.name;
  document.querySelector('.profile__avatar').alt = userInfo.name;
  document.querySelector('.profile__avatar').src = userInfo.avatar;
  document.querySelector('.profile__subtitle').textContent = userInfo.about;
})
.catch(err => {
  console.log(err => {
    console.log(err);
  })
}) 

function openPopupEdit() {
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.about;
  popupEdit.open();
}

function submitPopupEdit(data) {
  user.setUserInfo(data);
  api.sendProfileInfo(user.getUserInfo())
  .then(() => {
    popupEdit.close();
  })
  .catch(err => {
    console.log(`Ошибка при редактировании профиля${err}`);
  })
  .finally(() => {
    editFormValidator.disableSubmitButton();
  })
}

// слушатели
addButton.addEventListener('click', () => {
  openPopupAdd();
});
editButton.addEventListener('click', () => {
  openPopupEdit();
  console.log(nameInput.value);
});



