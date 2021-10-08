/* Set inputs to validate. */
const inputsToValidate = document.querySelectorAll('.input');

/**
 * Form Validation.
 * @namespace FormValidate
 * @class
 */
class FormValidate {
  /* Get values for constructor. */
  constructor() {
    this.inputsToValidate = inputsToValidate;
  }

  /**
   * @function valid
   * @memberof FormValidate
   */
  valid() {
    let valid = this.constructor.validateInputs(this.inputsToValidate);

    /* @returns @type boolean of form validation. */
    return valid;
  }

  /**
   * @function validateInputs
   * @memberof FormValidate
   * @static
   */
  static validateInputs(inputs) {
    let valid = true;

    for (let input of inputs) {
      if (input.value) {
        input.parentNode.classList.remove('invalid');
      } else {
        input.parentNode.classList.add('invalid');
        valid = false;
      }
    };

    /* @returns @type boolean of valid or not. */
    return valid;
  }
}

/* Export class from validator to be used elsewhere. */
export default FormValidate;