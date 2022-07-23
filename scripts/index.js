let popup = document.querySelector('.edit-profile');

let button = document.querySelector('.profile__edit-icon');
let closeButton = document.querySelector('.popup__icon_close_profile');

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


//попап добавления карточки

let popupAddItem = document.querySelector('.add-item');
let buttonAddItem = document.querySelector('.profile__add-button');
let buttonCloseAddItem = document.querySelector('.popup__icon_close_item');

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


  //создание карточки с данными
function createCardSimple (link, name) {
  const cardTemplate = document.querySelector('#item-card').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__box-image').src = link;
  cardElement.querySelector('.element__header').textContent = name;

  // Поставить лайк
  const getLike = cardElement.querySelector('.element__like');
  getLike.addEventListener('click', function (event) {
    getLike.classList.add('element__bg-selected');
    console.log(getLike.classList);
  })

  //Удалить карточку
  const deleteCard = cardElement.querySelector('.element__trash');
  deleteCard.addEventListener('click', function (event) {
    cardElement.remove();
  })

  //Открыть попап c картинкой
  let popupOpenImage = cardElement.querySelector('.element__box-image');
  let popupFullImage = document.querySelector('.full-image');
  let imageCloseIcon =  document.querySelector('.popup__icon_close_image');
  let imagePopupConteiner =  document.querySelector('.popup__image');
  let imagePopupHeader = document.querySelector('.popup__header');

  function openClick() {
    popupFullImage.classList.add('popup_opened');
    imagePopupConteiner.src = link;
    imagePopupHeader.textContent = name;
  }

  popupOpenImage.addEventListener('click', openClick);


  //Закрыть попап с картинкой

  function closeClick() {
    popupFullImage.classList.remove('popup_opened');
  }

  imageCloseIcon.addEventListener('click', closeClick);

  return cardElement;
}  


  initialCards.forEach(function(item){
    console.log(item);

    let cardElement = createCardSimple (item.link, item.name);
    const blockofItems = document.querySelector('.elements');
    blockofItems.append(cardElement);

  })



//вставляют карточку с данными из попапа на страницу и закрыть попап

let formElementItem = document.querySelector('.form-item');

function formAddItem(evt) {
    evt.preventDefault();

    let cardEl = createCardSimple(inputItemLink.value, inputItemName.value);
    const blockofItems = document.querySelector('.elements');
    blockofItems.append(cardEl);

    closeAddItem();
}

formElementItem.addEventListener('submit', formAddItem); 
















     