const profilePopup = document.querySelector('.edit-profile');

const profileEditButton = document.querySelector('.profile__edit-icon');
const profileEditCloseButton = document.querySelector('.popup__icon_close_profile');

const inputName = document.querySelector('.popup__input_text_name');
const inputProfession = document.querySelector('.popup__input_text_profession');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const popupFullImage = document.querySelector('.full-image');
const imageCloseIcon =  document.querySelector('.popup__icon_close_image');
const cardTemplate = document.querySelector('#item-card').content;
const formElementItem = document.querySelector('.form-item');
const blockofItems = document.querySelector('.elements');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');

//попап добавления карточки
const popupAddItem = document.querySelector('.add-item');
const buttonAddItem = document.querySelector('.profile__add-button');
const buttonCloseAddItem = document.querySelector('.popup__icon_close_item');
const inputItemName = document.querySelector('.popup__input_text_item-name');
const inputItemLink = document.querySelector('.popup__input_text_item-link');

 //Открыть попап c картинкой
 const imagePopupConteiner =  document.querySelector('.popup__image');
 const imagePopupHeader = document.querySelector('.popup__image-header');




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



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}


function openProfilePopup() {
    openPopup(profilePopup);
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
}


profileEditButton.addEventListener('click', openProfilePopup);


function closeProfilePopup() {
  closePopup(profilePopup);
}

profileEditCloseButton.addEventListener('click', closeProfilePopup);


// Находим форму в DOM

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    closeProfilePopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit); 


//попап добавления карточки

function openAddItem() {
    formElementItem.reset();
    openPopup(popupAddItem);
}


buttonAddItem.addEventListener('click', openAddItem);

function closeAddItem() {
    closePopup(popupAddItem);
}

buttonCloseAddItem.addEventListener('click', closeAddItem);





  //создание карточки с данными
function createCardSimple (link, name) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const popupOpenImage = cardElement.querySelector('.element__box-image');
  const getLike = cardElement.querySelector('.element__like');
  const deleteCard = cardElement.querySelector('.element__trash');

  cardElement.querySelector('.element__box-image').src = link;
  cardElement.querySelector('.element__box-image').alt = "Фотография";
  cardElement.querySelector('.element__header').textContent = name;

  // Поставить лайк
  getLike.addEventListener('click', function (event) {
    getLike.classList.toggle('element__bg-selected');
  })

  //Удалить карточку
  deleteCard.addEventListener('click', function (event) {
    cardElement.remove();
  })

  //Открыть попап c картинкой

  function openPopupFullImage() {
    openPopup(popupFullImage);
    imagePopupConteiner.src = link;
    imagePopupConteiner.alt = "Фотография";
    imagePopupHeader.textContent = name;
  }

  popupOpenImage.addEventListener('click', openPopupFullImage);



  return cardElement;
}  
  initialCards.forEach(function(item){
    const cardElement = createCardSimple (item.link, item.name);
    blockofItems.append(cardElement);

  })



//вставляю карточку с данными из попапа на страницу и закрыть попап

function addFormItem(evt) {
    evt.preventDefault();
    const cardEl = createCardSimple(inputItemLink.value, inputItemName.value);
    blockofItems.prepend(cardEl);

    closeAddItem();
}

formElementItem.addEventListener('submit', addFormItem); 


//Закрыть попап с картинкой

function closePopupFullImage() {
  closePopup(popupFullImage);
}

imageCloseIcon.addEventListener('click', closePopupFullImage);







//закрытие попапов по оверлей

  const overlayList = Array.from(document.querySelectorAll('.popup'));
  overlayList.forEach((overlay) => {
    const container = overlay.querySelector('.popup__overlay');
    
    container.addEventListener('click',  function (evt) {
      evt.stopPropagation();
    })
    overlay.addEventListener('click', function() {
      closePopup(overlay);
    }
    )
    
  });



//esc закрытие попапов 

function handleKeydownPopupClose(evt) {
  if (evt.which === 27) {
    evt.preventDefault();
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

document.addEventListener('keydown', handleKeydownPopupClose);




     