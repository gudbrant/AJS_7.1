export default class Validator {
  constructor(userName) {
    this.username = userName;
  }

  validateUsername() {
    const val1 = /^[\w-]+$/.test(this.username);
    const val2 = /\d{3}/.test(this.username);
    const val3 = /^[^\d-\_]/.test(this.username);
    const val4 = /[^\d-\_]$/.test(this.username);

    return ((val1 === val3 === val4 === true) && (val2 === false));
  }
}
