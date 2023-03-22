// Переменные - Popup Subscribe //
const signupPopup = document.querySelector(".popup.signup");
const signupForm = signupPopup.querySelector("form.form-signup");
const signupButton = document.querySelector(".discount-offer-btn");
const signupPopupCloseButton = document.querySelector(".popup.signup .popup__close-button");

// Функция открытия модального окна //
function openSignupPopup(signupPopup) {
    signupPopup.classList.add("popup_opened");
}

// Функция закрытия модального окна //
function closeSignupPopup(signupPopup) {
    signupPopup.classList.remove("popup_opened");
}

// Subscribe - кнопка новостной подписки //
signupButton.addEventListener("click", () => {
  openSubscribeForm();
});

signupForm.reset();

// открытие формы Subscribe
function openSubscribeForm() {
  openSignupPopup(signupPopup);
}

// отправка формы Subscribe
function submitSubscribeForm(evt) {
  evt.preventDefault();
  closeSignupPopup(signupPopup);
}
signupForm.addEventListener("submit", submitSubscribeForm);

// закрытие формы Subscribe по кнопке закрытия
signupPopupCloseButton.addEventListener("click", () =>
  closeSignupPopup(signupPopup)
);