export default class UserInfo {
  constructor({name, about, avatar}) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    // this._id = id;
  }

  getUserInfo() {
    this._dataObject = {
      name: this._name,
      about: this._about,
      avatar: this._avatar,
      // id: this._id
    }
    return this._dataObject;
  }

  setUserInfo(data) {
    this._name = data.name;
    this._about = data.about;
  }

  // getId() {
  //   return this._id;
  // }
}
