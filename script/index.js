import Card from './Card.js';
import FormValidator from './FormValidator.js';

const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupPicture = document.querySelector('.popup-picture');
const formEdit = document.querySelector('.form-edit');
const formAdd = document.querySelector('.form-add');
const nameInput = document.querySelector('.field_type_name');
const jobInput = document.querySelector('.field_type_description');
const titleInput = document.querySelector('.field_type_title');
const linkInput = document.querySelector('.field_type_link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elementsContainer = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const editFormValidator = new FormValidator(validationConfig, formEdit);
const cardFormValidator = new FormValidator(validationConfig, formAdd);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

initialCards.forEach((item) => {
  const card = new Card(item);
  const cardElement = card.generateCard();
  elementsContainer.append(cardElement);
})

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', popupCloseEsc);
}

function initiatePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function submitProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEdit);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', popupCloseEsc);
}

function handleAdd(evt) {
  evt.preventDefault();
  const inputText = titleInput.value;
  const inputImage = linkInput.value;

  const card = new Card({ name: inputText, link: inputImage });
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);

  closePopup(popupAdd);

  titleInput.value = '';
  linkInput.value = '';
}

function popupCloseEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function disableButton() {
  const disabledButton = document.querySelector('.popup-add__submit-button');
  disabledButton.classList.add('popup__button_disabled');
  disabledButton.disabled = true;
}

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  disableButton();
});
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  initiatePopup();
});


popupAdd.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('close-button')) {
    closePopup(popupAdd);
  }
});

popupEdit.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('close-button')) {
    closePopup(popupEdit);
  }
});

popupPicture.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('close-button')) {
    closePopup(popupPicture);
  }
});

formEdit.addEventListener('submit', submitProfile);
formAdd.addEventListener('submit', handleAdd);