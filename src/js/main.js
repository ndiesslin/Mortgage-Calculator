/* Load main CSS. */
import '../scss/main.scss';

/* Import calculateMortgage class for calculations. */
import calculateMortgage from './calculate-mortgage';


/* Create calculate class. */
let _calculate = new calculateMortgage();

/* When form updates calculate changes */
document.querySelector('.calculator').addEventListener('submit', (event) => {
  event.preventDefault();

  /* Get values from the submitted form. */
  let form = event.target;
  let yearsOfMortgage = form.querySelector('.calculator__input-years').value;
  let interestRate = form.querySelector('.calculator__input-interest').value;
  let loanAmount = form.querySelector('.calculator__input-amount').value;
  let annualTax = form.querySelector('.calculator__input-tax').value;
  let annualInsurance = form.querySelector('.calculator__input-insurance').value;

  /* Calculate initial values. */
  _calculate.yearsOfMortgage = yearsOfMortgage;
  _calculate.interestRate = interestRate;
  _calculate.loanAmount = loanAmount;
  _calculate.annualTax = annualTax;
  _calculate.annualInsurance = annualInsurance;
  let _calculated = _calculate.calculateAllNumbers();

  /* Set calculated values. */
  document.querySelector('.results__title-principal').textContent = '$ ' + _calculated.principalAndInterest;
  document.querySelector('.results__title-tax').textContent = '$ ' + _calculated.tax;
  document.querySelector('.results__title-insurance').textContent = '$ ' + _calculated.insurance;
  document.querySelector('.results__title-total').textContent = '$ ' + _calculated.monthlyPayment;
});