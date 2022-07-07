let popup = document.querySelector('.edit-profile');

let button = document.querySelector('.profile__edit-icon');
let closeButton = document.querySelector('.edit-profile_close-icon');

let inputName = document.querySelector('.popup__input_text_name');
let inputProfession = document.querySelector('.popup__input_text_profession');
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




let popupAddItem = document.querySelector('.add-item');
let buttonAddItem = document.querySelector('.profile__add-button');
let buttonCloseAddItem = document.querySelector('.add-item_close-icon');

let inputItemName = document.querySelector('.popup__input_text_item-name');
let inputItemLink = document.querySelector('.popup__input_text_item-link');
let ItemName = document.querySelector('.element__header');
let ItemLink = document.querySelector('.element__box-image');

function openAddItem() {
    popupAddItem.classList.add('popup_opened');
    inputItemName.value = ItemName.textContent;
    inputItemLink.value = ItemLink.textContent;
}


buttonAddItem.addEventListener('click', openAddItem);

function closeAddItem() {
    popupAddItem.classList.remove('popup_opened');
}

buttonCloseAddItem.addEventListener('click', closeAddItem);



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


  initialCards.forEach(function(item){
    console.log(item);

    const cardTemplate = document.querySelector('#item-card').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__box-image').src = item.link;
    cardElement.querySelector('.element__header').textContent = item.name;



    // 1. Находишь elements
    const blockofItems = document.querySelector('.elements');
    // 2. Вставляешь в него cardElement

    blockofItems.prepend(cardElement);

  })


  