let popup = document.querySelector('.popup');

let button = document.querySelector('.profile__edit-icon');
let closeButton = document.querySelector('.popup__icon');

let inputName = document.querySelector('.popup__input[name="name"]');
let inputProfession = document.querySelector('.popup__input[name="profession"]');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');


function openClick() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
}


button.addEventListener('click', openClick);


function closeClick() {
    popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closeClick);


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    closeClick();
}


formElement.addEventListener('submit', formSubmitHandler); 