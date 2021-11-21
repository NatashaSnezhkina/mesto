const editButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.field_type_name');
const jobInput = document.querySelector('.field_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const submitButton = document.querySelector('.submit-button');

function open() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
}

function close() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  close();
}

editButton.addEventListener('click', open);
closeButton.addEventListener('click', close);

formElement.addEventListener('submit', formSubmitHandler);