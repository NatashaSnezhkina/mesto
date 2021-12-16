const showInputError =(form, input, errorMessageClass, errorMessageText, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass);
}

const hideInputError =(form, input, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = ' ';
  errorMessage.classList.remove(errorMessageClass);
  input.classList.remove(inputErrorClass);
}

const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((element) => !element.validity.valid);
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  console.log(hasInvalidInput(inputs));
  if (hasInvalidInput(inputs)) {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  }
}

function checkIfInputValid (form, input, {inputErrorClass, errorClass}) {
  if(input.validity.valid) {
    hideInputError (form, input, errorClass, inputErrorClass);
  }
  else {
    showInputError(form, input, errorClass, input.validationMessage, inputErrorClass);
  }
}

const setInputListeners = (form, {inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass}) => {
  const inputs = form.querySelectorAll(inputSelector);
  const submitButton = form.querySelector(submitButtonSelector);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkIfInputValid (form, input, {inputErrorClass, errorClass});
      toggleButtonError(inputs, submitButton, inactiveButtonClass);
    });
  });
};

const enableValidation = ({formSelector, ...rest}) => {
  const forms = document.querySelectorAll(formSelector);

  forms.forEach((form)=>{
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    setInputListeners(form, rest);
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});