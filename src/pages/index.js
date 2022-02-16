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
  formAvatar,
  nameInput,
  jobInput,
  linkInput,
  userDescription,
  elementsContainer,
  profileAvatar,
  profileOverlay,
  validationConfig
} from '../utils/constants.js';
import Api from '../components/Api.js';

// валидация форм
const editFormValidator = new FormValidator(validationConfig, formEdit);
const cardFormValidator = new FormValidator(validationConfig, formAdd);
const avatarFormValidator = new FormValidator(validationConfig, formAvatar);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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

// попап АВАТАР 
const popupAvatar = new PopupWithForm('.popup-avatar', submitPopupAvatar)
popupAvatar.setEventListeners();

// console.log(userDescription.id);
const user = new UserInfo(userDescription);
console.log(user);

let userNew;

// API

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: 'b6ff83c2-3ced-4557-872e-eefa9152b997'
});

const promiseProfileInfo = api.getProfileInfo();
const promiseCards = api.getCards();

function createCard(data, likeNumber) {
  const card = new Card(data, '.element-template', handleCardClick, handleOpenPopup,
    likeNumber, userNew.getId(), handleAddLike, handleDeleteLike);
  const cardElement = card.generateCard();
  return cardElement;
}

// карточки
const cardContainer = new Section({
  renderer: (item) => {
    const card = createCard(item, item.likes.length);
    cardContainer.addItem(card);
  },
}, elementsContainer);

Promise.all([promiseProfileInfo, promiseCards])
.then(values => {
  user.setUserInfo(values[0]);
  user.setUserAvatar(values[0]);
  cardContainer.createCards(values[1]);
})
.catch(err => console.log(`Ошибка.....: ${err}`));
// получение карточек
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

function handleOpenPopup(card) {
  popupDelete.open();
  popupDelete.getReadyToDelete(card);
}

// добавление карточек
function openPopupAdd() {
  popupAdd.open();
  cardFormValidator.disableSubmitButton();
}

function submitPopupAdd(data) {
  popupAdd.renderLoading(true);
  api.sendCard(data)
    .then((res) => {
      const card = createCard(res, res.likes.length);
      cardContainer.prependItem(card);
      popupAdd.close();
      console.log(user.getId());
    })
    .catch(err => {
      console.log(`Ошибка при добавлении карточки${err}`);
    })
    .finally(() => {
      popupAdd.renderLoading(false);
    })
}

// удаление карточек
function submitPopupDelete(card) {
  const cardId = card._id;
  api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
      popupDelete.close();
    })
    .catch(err => {
      console.log(`Ошибка при удалении карточки${err}`);
    })
}
// лайк

function handleAddLike(card) {
  const cardId = card._id;
  api.addLike(cardId)
    .then((res) => {
      card._element.querySelector('.element__like__counter').textContent = res.likes.length;
      card._element.querySelector('.element__like').classList.add('element__like_active');
    })
    .catch(err => {
      console.log(`Ошибка при лайке карточки${err}`);
    })
}

function handleDeleteLike(card) {
  const cardId = card._id;
  api.deleteLike(cardId)
    .then((res) => {
      card._element.querySelector('.element__like__counter').textContent = res.likes.length;
      card._element.querySelector('.element__like').classList.remove('element__like_active');
    })
    .catch(err => {
      console.log(`Ошибка при удалении лайка карточки${err}`);
    })
}


// профиль 

api.getProfileInfo()
  .then((data) => {
    console.log("User id:", data._id);
    userNew = new UserInfo(data);
    const userInfo = userNew.getUserInfo();
    document.querySelector('.profile__title').textContent = userInfo.name;
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
  console.log(userInfo);
  console.log(nameInput);
  console.log(jobInput);
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.about;
  popupEdit.open();
}

function submitPopupEdit(data) {
  popupEdit.renderLoading(true);
  user.setUserInfo(data);
  api.sendProfileInfo(user.getUserInfo())
    .then((res) => {
      popupEdit.close();
      userNew = new UserInfo(res);
      const userInfo = userNew.getUserInfo();
      document.querySelector('.profile__title').textContent = userInfo.name;
      document.querySelector('.profile__avatar').alt = userInfo.name;
      document.querySelector('.profile__avatar').src = userInfo.avatar;
      document.querySelector('.profile__subtitle').textContent = userInfo.about;
    })
    .catch(err => {
      console.log(`Ошибка при редактировании профиля${err}`);
    })
    .finally(() => {
      editFormValidator.disableSubmitButton();
      popupEdit.renderLoading(false);
    })
}

function submitPopupAvatar(data) {
  popupAvatar.renderLoading(true);
  user.setUserAvatar(data);
  api.sendAvatar(data)
    .then((res) => {
      popupAvatar.close();
      userNew = new UserInfo(res);
      const userInfo = userNew.getUserInfo();
      document.querySelector('.profile__avatar').src = userInfo.avatar;
    })
    .catch(err => {
      console.log(`Ошибка при редактировании профиля${err}`);
    })
    .finally(() => {
      popupAvatar.renderLoading(false);
    })
}

function openPopupAvatar() {
  const userInfo = user.getUserInfo();
  linkInput.value = userInfo.avatar;
  popupAvatar.open();
  profileOverlay.classList.add('profile__avatar__overlay_closed');
}

// слушатели
addButton.addEventListener('click', () => {
  openPopupAdd();
});
editButton.addEventListener('click', () => {
  openPopupEdit();
});
profileAvatar.addEventListener('mouseenter', () => {
  profileOverlay.classList.remove('profile__avatar-overlay_closed')
})

profileAvatar.addEventListener('mouseleave', () => {
  profileOverlay.classList.add('profile__avatar-overlay_closed')
})

profileOverlay.addEventListener('click', () => {
  openPopupAvatar();
})

