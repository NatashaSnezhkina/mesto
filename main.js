(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._link=n,this._templateSelector=r,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return console.log(this._templateSelector),document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__photo"),this._cardLike=this._element.querySelector(".element__like"),this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._handleLike()})),this._element.querySelector(".element__basket").addEventListener("click",(function(){e._handleDelete()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_handleLike",value:function(){this._cardLike.classList.toggle("element__like_active")}},{key:"_handleDelete",value:function(){this._element.remove()}},{key:"getView",value:function(){return this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e){var t=o._form.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(o._errorClass),e.classList.add(o._inputErrorClass)})),r(this,"_hideInputError",(function(e){var t=o._form.querySelector("#".concat(e.id,"-error"));t.textContent=" ",t.classList.remove(o._errorClass),e.classList.remove(o._inputErrorClass)})),r(this,"_hasInvalidInput",(function(e){return Array.from(e).some((function(e){return!e.validity.valid}))})),r(this,"_toggleButtonError",(function(e){o._hasInvalidInput(o._inputs)?o.disableSubmitButton():o._ableSubmitButton()})),r(this,"_setInputListeners",(function(){o._inputs=o._form.querySelectorAll(o._inputSelector),o._submitButton=o._form.querySelector(o._submitButtonSelector),o._inputs.forEach((function(e){e.addEventListener("input",(function(){o._checkIfInputValid(e),o._toggleButtonError(o._submitButton)}))}))})),r(this,"enableValidation",(function(){o._form.addEventListener("submit",(function(e){e.preventDefault()})),o._setInputListeners()})),this._form=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,o;return t=e,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonError(this._submitButton),this._inputs.forEach((function(t){e._hideInputError(t)}))}},{key:"disableSubmitButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"_ableSubmitButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_checkIfInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(e){var t=this;this.clear(),e.forEach((function(e){t._renderer(e)}))}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__overlay")||t.target.classList.contains("close-button"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup-picture__image"),t._description=t._popup.querySelector(".popup-picture__description"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._description.textContent=e,f(y(u.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._submitButtonSelector=n._popup.querySelector(".submit-button"),n._inputList=Array.from(n._popup.querySelectorAll(".popup__input")),n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){v(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._dataObject={name:this._name,about:this._about,avatar:this._avatar},this._dataObject}},{key:"setUserInfo",value:function(e){this._name=e.name,this._about=e.about}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector(".edit-button"),L=document.querySelector(".add-button"),P=document.querySelector(".form-edit"),I=document.querySelector(".form-add"),B=(document.querySelector(".field_type_name"),document.querySelector(".field_type_description"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".elements")),q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.address,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=r}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getInfo",value:function(){return fetch("".concat(this._address,"//users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=new o(q,P),x=new o(q,I);V.enableValidation(),x.enableValidation();var D=new d(".popup-picture");D.setEventListeners(),new E(".popup-edit",submitPopupEdit).setEventListeners();var A=new E(".popup-add",(function(e){var t=M(e.title,e.link);U.prependItem(t),A.close()}));A.setEventListeners();var U=new u({renderer:function(e){var t=M(e.name,e.link);U.addItem(t)}},B),z=new T({address:"https://mesto.nomoreparties.co/v1/cohort-35",token:"b6ff83c2-3ced-4557-872e-eefa9152b997"});function F(e,t){D.open(e,t)}function M(e,n){return new t(e,n,".element-template",F).generateCard()}z.getCards().then((function(e){U.renderItems(e)})).catch((function(e){console.log((function(e){console.log(e)}))})),z.getInfo().then((function(e){var t=new j(e).getUserInfo();document.querySelector(".profile__title").textContent=t.name})).catch((function(e){console.log((function(e){console.log(e)}))})),L.addEventListener("click",(function(){A.open(),x.disableSubmitButton()})),C.addEventListener("click",(function(){openPopupEdit()}))})();