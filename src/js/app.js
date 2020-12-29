export default class Validator {
  constructor(userName) {
    this.username = userName;
  }

  validateUsername() {
    if (/\d{4,}/.test(this.username) || !/^[a-z][\w-]*[a-z]$/i.test(this.username)) {
      return 'Неверный формат имени';
    } else {
      return this.username;
    }
  }

  // validateUsername() {
  //   const val1 = /^[\w-]+$/.test(this.username);
  //   const val2 = /\d{3}/.test(this.username);
  //   const val3 = /^[^\d-\_]/.test(this.username);
  //   const val4 = /[^\d-\_]$/.test(this.username);
  //
  //   return ((val1 === val3 === val4 === true) && (val2 === false));
  // }
}
