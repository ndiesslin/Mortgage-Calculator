/* Import CalculateMortgage class for calculations. */
import CalculateMortgage from './calculate-mortgage';

/* Import FormValidate class for form validation. */
import FormValidate from './form-validate';

/* Create calculate class. */
const calculate = new CalculateMortgage();

/* Create form validation class. */
const formValidate = new FormValidate();

/* When form updates calculate changes. */
document.querySelector('.calculator').addEventListener('submit', (event) => {
  event.preventDefault();

  /* Get values from the submitted form. */
  const form = event.target;
  const yearsOfMortgage = form.querySelector('.input--years').value;
  const interestRate = form.querySelector('.input--interest').value;
  const loanAmount = form.querySelector('.input--amount').value;
  const annualTax = form.querySelector('.input--tax').value;
  const annualInsurance = form.querySelector('.input--insurance').value;

  /* Validate fields, return if not valid. */
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
  document.querySelector('.price__amount-principal').textContent = '$ ' + calculated.principalAndInterest;
  document.querySelector('.price__amount-tax').textContent = '$ ' + calculated.tax;
  document.querySelector('.price__amount-insurance').textContent = '$ ' + calculated.insurance;
  document.querySelector('.price__amount-total').textContent = '$ ' + calculated.monthlyPayment;

  /* Set results as active. */
  document.querySelector('.results').classList.add('results--active');
});