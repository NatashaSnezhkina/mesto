export default class UserInfo {
  constructor({name, description}) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    this._dataObject = {
      name: this._name.textContent,
      description: this._description.textContent
    }
    return this._dataObject;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.description;
  }
}
