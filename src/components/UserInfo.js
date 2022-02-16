export default class UserInfo {
  constructor({name, about, avatar, _id}) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
  }

  getUserInfo() {
    this._dataObject = {
      name: this._name,
      about: this._about,
      avatar: this._avatar,
      id: this._id
    }
    return this._dataObject;
  }

  setUserInfo(data) {
    this._name = data.name;
    this._about = data.about;
    this._id = data._id;
  }

  setUserAvatar(data) {
    this._avatar = data.avatar;
  }

  getId() {
    return this._id;
  }
}
