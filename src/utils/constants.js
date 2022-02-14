export const editButton = document.querySelector('.edit-button');
export const addButton = document.querySelector('.add-button');
export const formEdit = document.querySelector('.form-edit');
export const formAdd = document.querySelector('.form-add');
export const nameInput = document.querySelector('.field_type_name');
export const jobInput = document.querySelector('.field_type_description');

export const userDescription = {
  name: document.querySelector('.profile__title').textContent,
  about: document.querySelector('.profile__subtitle').textContent
};

export const elementsContainer = document.querySelector('.elements');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};