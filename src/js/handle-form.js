/* Import calculateMortgage class for calculations. */
import calculateMortgage from './calculate-mortgage';

/* Import formValidate class for form validation. */
import formValidate from './form-validate';

/* Create calculate class. */
const _calculate = new calculateMortgage();

/* Create form validation class. */
const _formValidate = new formValidate();

/* When form updates calculate changes. */
document.querySelector('.calculator').addEventListener('submit', (event) => {
  event.preventDefault();

  /* Get values from the submitted form. */
  const form = event.target;
  const yearsOfMortgage = form.querySelector('.calculator__input-years').value;
  const interestRate = form.querySelector('.calculator__input-interest').value;
  const loanAmount = form.querySelector('.calculator__input-amount').value;
  const annualTax = form.querySelector('.calculator__input-tax').value;
  const annualInsurance = form.querySelector('.calculator__input-insurance').value;

  /* Validate fields, return if not valid. */
  if (!_formValidate.valid()) {
    return;
  }

  /* Calculate initial values. */
  _calculate.yearsOfMortgage = yearsOfMortgage;
  _calculate.interestRate = interestRate;
  _calculate.loanAmount = loanAmount;
  _calculate.annualTax = annualTax;
  _calculate.annualInsurance = annualInsurance;
  const _calculated = _calculate.calculateAllNumbers();

  /* Set calculated values. */
  document.querySelector('.results__price-principal').textContent = '$ ' + _calculated.principalAndInterest;
  document.querySelector('.results__price-tax').textContent = '$ ' + _calculated.tax;
  document.querySelector('.results__price-insurance').textContent = '$ ' + _calculated.insurance;
  document.querySelector('.results__price-total').textContent = '$ ' + _calculated.monthlyPayment;

  /* Set results as active. */
  document.querySelector('.results').classList.add('results--active');
});