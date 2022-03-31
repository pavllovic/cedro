import './styles/profile.css';
import InputPassword from './components/UI/inputPassword/inputPassword';
import FormValidator from './lib/formValidator/formValidator';

const initPasswordToogleVisible = () => {
  const inputPasswordElement = document.querySelector('.js-inputPassword');
  const inputPassword = new InputPassword(inputPasswordElement);
  inputPassword.init();
  return inputPassword;
};

const initFormProfileValidate = () => {
  const form = document.querySelector('.js-formValidate');
  const formProfile = new FormValidator(form);
  formProfile.init();
  return formProfile;
};

const initInputMask = function() {
  const inputPhoneElement = document.querySelector('.js-inputPhone');

  const phoneMaskOption = { mask: '+{7} (000) 000-00-00' };
  const inputPhoneMask = new window.IMask(inputPhoneElement, phoneMaskOption);

  return {
    inputPhoneMask: inputPhoneMask,
  };
};

initInputMask();
initPasswordToogleVisible();
initFormProfileValidate();

window.initInputMask = initInputMask;
window.initFormProfileValidate = initFormProfileValidate;
window.initPasswordToogleVisible = initPasswordToogleVisible;

window.$(() => {
  window.$('.js-carousel').owlCarousel({
    autoWidth: true,
    stageOuterClass: 'carousel-outer',
    stageClass: 'carousel-stage',
    margin: 8,
    responsive: {
      992: {
        margin: 32,
      },
    },
  });
});
