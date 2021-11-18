const EditButton = document.querySelector(".edit-button");
const popup = document.querySelector(".popup");
const CloseButton = document.querySelector(".close-button");

function open() {
  popup.classList.add ("popup_opened");
}

function close() {
  popup.classList.remove ("popup_opened");
}

EditButton.addEventListener ('click', open);
CloseButton.addEventListener ('click', close);

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.field_name');
let jobInput = document.querySelector('.field_description');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
const SubmitButton = document.querySelector(".submit-button");

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  close();
}

formElement.addEventListener ('submit', formSubmitHandler);