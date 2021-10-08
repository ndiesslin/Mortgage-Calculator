/* Import CalculateMortgage class for calculations. */
import CalculateMortgage from './calculate-mortgage';

/* Import FormValidate class for form validation. */
import FormValidate from './form-validate';

/* Create calculate class. */
const calculate = new CalculateMortgage();

/* Create form validation class. */
const formValidate = new FormValidate();

/**
 * Form watcher for form changes.
 * @namespace FormWatcher
 * @class
 */
class FormWatcher {
  /* Get values for constructor. */
  constructor() {
    this.form = '';
  }

  /**
   * @function processForm 
   * @memberof FormWatcher
   */
  processForm () {
    /* When form updates calculate changes. */
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      /* Get values from the submitted form. */
      const targetForm = event.target;
      const yearsOfMortgage = targetForm.getElementsByClassName('input--years')[0].value;
      const interestRate = targetForm.getElementsByClassName('input--interest')[0].value;
      const loanAmount = targetForm.getElementsByClassName('input--amount')[0].value;
      const annualTax = targetForm.getElementsByClassName('input--tax')[0].value;
      const annualInsurance = targetForm.getElementsByClassName('input--insurance')[0].value;

      /* Validate fields, return if not valid. */
      formValidate.inputsToValidate = targetForm.getElementsByClassName('input');
      if (!formValidate.valid()) {
        return;
      }

      /* Calculate initial values. */
      calculate.yearsOfMortgage = yearsOfMortgage;
      calculate.interestRate = interestRate;
      calculate.loanAmount = loanAmount;
      calculate.annualTax = annualTax;
      calculate.annualInsurance = annualInsurance;
      const calculated = calculate.calculateAllNumbers();

      /* Set calculated values. */
      targetForm.parentNode.getElementsByClassName('price__amount-principal')[0].textContent = '$ ' + calculated.principalAndInterest;
      targetForm.parentNode.getElementsByClassName('price__amount-tax')[0].textContent = '$ ' + calculated.tax;
      targetForm.parentNode.getElementsByClassName('price__amount-insurance')[0].textContent = '$ ' + calculated.insurance;
      targetForm.parentNode.getElementsByClassName('price__amount-total')[0].textContent = '$ ' + calculated.monthlyPayment;

      /* Set results as active. */
      targetForm.parentNode.getElementsByClassName('results')[0].classList.add('results--active');
    });
  }
}

/* Export class from watcher to be used elsewhere. */
export default FormWatcher;