/* Set inputs to validate. */
const inputsToValidate = document.querySelectorAll('.calculator__input');

/**
 * Form Validation.
 * @namespace formValidate
 * @class
 */
class formValidate {
  /* Get values for constructor. */
  constructor() {
    this.inputsToValidate = inputsToValidate;
  }

  /**
   * @function valid
   * @memberof formValidate
   */
  valid() {
    let valid = this.constructor.validateInputs(this.inputsToValidate);

    /* @returns @type boolean of form validation. */
    return valid;
  }

  /**
   * @function validateInputs
   * @memberof formValidate
   * @static
   */
  static validateInputs(inputs) {
    let valid = true;

    inputs.forEach( (input) => {
      if (input.value) {
        input.parentNode.classList.remove('calculator--invalid');
      } else {
        input.parentNode.classList.add('calculator--invalid');
        valid = false;
      }
    });

    /* @returns @type boolean of valid or not. */
    return valid;
  }
}

/* Export class from calculator to be used elsewhere. */
export default formValidate;