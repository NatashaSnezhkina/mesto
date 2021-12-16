const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupPicture = document.querySelector('.popup-picture');
const closeButtonPopupEdit = document.querySelector('.popup-edit__close-button');
const closeButtonPopupAdd = document.querySelector('.popup-add__close-button');
const closeButtonPopupPicture = document.querySelector('.popup-picture__close-button');
const formEdit = document.querySelector('.form-edit');
const formAdd = document.querySelector('.form-add');
const nameInput = document.querySelector('.field_type_name');
const jobInput = document.querySelector('.field_type_description');
const titleInput = document.querySelector('.field_type_title');
const linkInput = document.querySelector('.field_type_link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const elementsContainer = document.querySelector('.elements');
const templateEl = document.querySelector('.element-template');
const overlayPopupAdd = document.querySelector('.popup-add__overlay');
const overlayPopupPicture = document.querySelector('.popup-picture__overlay');
const overlayPopupEdit = document.querySelector('.popup-edit__overlay');

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

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
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
}

function render() {
  const html = initialCards.map((item, idx, arr) => {
    return getCard(item);
  });
  elementsContainer.append(...html);
}

function getCard(item) {
  const newCard = templateEl.content.cloneNode(true);
  const headerCard = newCard.querySelector('.element__title');
  headerCard.textContent = item.name;

  const photoCard = newCard.querySelector('.element__photo');
  photoCard.src = item.link;
  photoCard.alt = item.name;

  newCard.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  const removeButton = newCard.querySelector('.element__basket');
  removeButton.addEventListener('click', handleDelete);

  newCard.querySelector('.element__photo').addEventListener('click', function () {
    popupPicture.querySelector('.popup-picture__image').src = item.link;
    popupPicture.querySelector('.popup-picture__image').alt = item.name;
    popupPicture.querySelector('.popup-picture__description').textContent = item.name;
    openPopup(popupPicture);
  });

  return newCard;
}

function handleAdd(evt) {
  evt.preventDefault();
  const inputText = titleInput.value;
  const inputImage = linkInput.value;

  const card = getCard({ name: inputText, link: inputImage });
  elementsContainer.prepend(card);

  closePopup(popupAdd);

  titleInput.value = '';
  linkInput.value = '';
}

function handleDelete(event) {
  const targetEl = event.target;
  const card = targetEl.closest('.element');
  card.remove();
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

document.addEventListener('keydown', popupCloseEsc);

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  disableButton();
});
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  initiatePopup();
});
closeButtonPopupEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});
closeButtonPopupAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});
closeButtonPopupPicture.addEventListener('click', () => {
  closePopup(popupPicture);
});

overlayPopupAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

overlayPopupEdit.addEventListener('click', () => {
  closePopup(popupEdit);
});

overlayPopupPicture.addEventListener('click', () => {
  closePopup(popupPicture);
});

formEdit.addEventListener('submit', submitProfile);
formAdd.addEventListener('submit', handleAdd);

render();