export default class Api {
  constructor ({address, token}) {
    this._address = address;
    this._token = token;
  }

  getCards() {
    return fetch (`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  sendCard(data) {
    return fetch (`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  getProfileInfo() {
    return fetch (`${this._address}//users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  sendProfileInfo(data) {
    return fetch (`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
        // avatar: data.avatar
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  sendAvatar(data) {
    return fetch (`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  deleteCard(cardId) {
    return fetch (`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  addLike(cardId) {
    return fetch (`${this._address}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  deleteLike(cardId) {
    return fetch (`${this._address}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

}