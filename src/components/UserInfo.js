export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
    this._userNameSelector = document.querySelector('.profile__title');
    this._userDescriptionSelector = document.querySelector('.profile__subtitle');

  }

  getUserInfo() {
    this._dataObject = {
      name: this._name.textContent,
      description: this._description.textContent
    }
    return this._dataObject;
  }

  setUserInfo({ inputName, inputDescription }) {
    this._userNameSelector.textContent = inputName.value;
    this._userDescriptionSelector.textContent = inputDescription.value;
  }
}
