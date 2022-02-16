class FormValidator {
  constructor(data, form) {
    this._form = form;
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  resetValidation() {
    this._toggleButtonError(this._submitButton);
    this._inputs.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
    this._submitButton.style.cursor = "default";
  }

  enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _showInputError = (input) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError = (input) => {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = ' ';
    errorMessage.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _hasInvalidInput = (inputs) => {
    return Array.from(inputs).some((element) => !element.validity.valid);
  }

  _toggleButtonError = (button) => {
    if (this._hasInvalidInput(this._inputs)) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  _checkIfInputValid(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    }
    else {
      this._showInputError(input);
    }
  }

  _setInputListeners = () => {
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkIfInputValid(input);
        this._toggleButtonError(this._submitButton);
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setInputListeners();
  };

}

export default FormValidator;



