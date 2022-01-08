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
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
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



