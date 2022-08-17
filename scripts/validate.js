//Сделайте функцию enableValidation ответственной за включение валидации всех форм. 
//Пусть она принимает как объект настроек все нужные функциям классы и селекторы элементов:

//enableValidation({
    //formSelector: '.popup__form',
    //inputSelector: 'popup__input',
    //submitButtonSelector: 'popup__button',
    //inactiveButtonClass: 'popup__button_disabled',
    //inputErrorClass: 'popup__input_type_error',
    //errorClass: 'popup__error_visible'
 // }); 


// const formElement = document.querySelector('.form-item');
// const formInput = formElement.querySelector('.popup__input'); 
// const formError = formElement.querySelector(`.${formInput.id}_error`);

const buttonElement = document.querySelectorAll('.popup__button');


  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}_error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
  
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
  
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
  };
  
  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('button_inactive');
      buttonElement.disabled = true;
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove('button_inactive');
      buttonElement.disabled = false;
    }
  }; 
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      setEventListeners(formElement);
     
    });
  };
  
  enableValidation();

  //прописать стили для баттон
  //и в хтмл условия валидити


