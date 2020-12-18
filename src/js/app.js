export default class Validator {
  constructor(userName) {
    this.username = userName;
  }

  validateUsername() {
    const val1 = /^[\w-]+$/.test(this.username);
    const val2 = /\d{3}/.test(this.username);
    const val3 = /^[^\d-\_]/.test(this.username);
    const val4 = /[^\d-\_]$/.test(this.username);

    // console.log(val1);
    // console.log(val2);
    // console.log(val3);
    // console.log(val4);

    return ((val1 === val3 === val4 === true) && (val2 === false));
  }
}
