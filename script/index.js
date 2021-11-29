const editButton = document.querySelector('.edit-button');
const addButton = document.querySelector('.add-button');
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const closeButtonPopupEdit = document.querySelector('.close-button_popup_edit');
const closeButtonPopupAdd = document.querySelector('.close-button_popup_add');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.field_type_name');
const jobInput = document.querySelector('.field_type_description');
const titleInput = document.querySelector('.field_type_title');
const linkInput = document.querySelector('.field_type_link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const submitButton = document.querySelector('.submit-button');
const submitButtonAdd = document.querySelector('.submit-button_add');
const elementsContainer = document.querySelector('.elements');
const templateEl = document.querySelector('.element-template');

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

function open(popupType) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popupType.classList.add('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  close(popupEdit);
}

function close(popupType) {
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

  newCard.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  const removeButton = newCard.querySelector('.element__basket');
  removeButton.addEventListener('click', handleDelete);

  return newCard;
}

function handleAdd() {
  const inputText = titleInput.value;
  const inputImage = linkInput.value;

  const card = getCard({name: inputText, link: inputImage});
  elementsContainer.prepend(card);

  titleInput.value = '';
  linkInput.value = '';
}

function handleDelete(event) {
  const targetEl = event.target;
  const card = targetEl.closest('.element');
  card.remove();
}


addButton.addEventListener('click', () => {open(popupAdd);});
editButton.addEventListener('click', () => {open(popupEdit);});
closeButtonPopupEdit.addEventListener('click', () => {close(popupEdit);});
closeButtonPopupAdd.addEventListener('click', () => {close(popupAdd);});

formElement.addEventListener('submit', formSubmitHandler);
submitButtonAdd.addEventListener('click', handleAdd);


render();