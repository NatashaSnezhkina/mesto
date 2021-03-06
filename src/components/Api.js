export default class Api {
  constructor ({address, token}) {
    this._address = address;
    this._token = token;
  }

  _responseProcessing() {
    return (res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка ${res.status}`)
    })
  }

  getCards() {
    return fetch (`${this._address}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._responseProcessing())
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
    .then(this._responseProcessing())
  }

  getProfileInfo() {
    return fetch (`${this._address}//users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._responseProcessing())
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
      })
    })
    .then(this._responseProcessing())
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
    .then(this._responseProcessing())
  }

  deleteCard(cardId) {
    return fetch (`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(this._responseProcessing())
  }

  addLike(cardId) {
    return fetch (`${this._address}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(this._responseProcessing())
  }

  deleteLike(cardId) {
    return fetch (`${this._address}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(this._responseProcessing())
  }

}