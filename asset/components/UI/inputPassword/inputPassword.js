const InputPassword = function(parent) {
  this.input = parent.querySelector('[data-password="input"]');
  this.btn = parent.querySelector('[data-password="btn"]');
  this.state = false;
};

InputPassword.prototype = {
  init: function() {
    this.setListeners();
  },

  setListeners: function() {
    this.btn.addEventListener('click', this);
  },

  showPassword: function() {
    this.input.setAttribute('type', 'text');
  },

  hidePassword: function() {
    this.input.setAttribute('type', 'password');
  },

  tooglePassword: function() {
    this.state ? this.hidePassword() : this.showPassword();
    this.state = !this.state;
    this.btn.setAttribute('aria-pressed', this.state);
  },

  destroy: function() {
    this.btn.removeEventListener('click', this);
  },

  handleEvent: function(e) {
    switch(e.type) {
      case 'click':
        return this.tooglePassword();
      default:
        break;
    }
    return undefined;
  },
};

export default InputPassword;
