/* Set calculate mortgage default values. */
const defaultYearsOfMortgage = 30;
const defaultInterestRate = 8.0;
const defaultLoanAmount = 1000;
const defaultTax = 1000;
const defaultAnnualInsurance = 300;

/**
 * Mortgage calculation.
 * @namespace calculateMortgage
 * @class
 */
class calculateMortgage {
  /* Get values for constructor. */
  constructor() {
    this.yearsOfMortgage = defaultYearsOfMortgage;
    this.interestRate = defaultInterestRate;
    this.loanAmount = defaultLoanAmount;
    this.annualTax = defaultTax;
    this.annualInsurance = defaultAnnualInsurance;
  }

  /**
   * @function calculateAllNumbers
   * @memberof calculateMortgage
   */
  calculateAllNumbers() {
    let calculatedPrincipalAndInterest = this.constructor.principalAndInterest(
      this.interestRate, 
      this.loanAmount, 
      this.yearsOfMortgage
    )
    let calculatedTax = this.constructor.calculateTax(this.annualTax);
    let calculatedInsurance = this.constructor.calculateInsurance(this.annualInsurance);
    let calculatedMonthlyPayment = this.constructor.calculateMonthlyPayment(
      calculatedPrincipalAndInterest, 
      calculatedTax, 
      calculatedInsurance
    );

    // @todo add notes
    /* @returns @type string of tax calculation. */
    return {
      principalAndInterest: calculatedPrincipalAndInterest,
      tax: calculatedTax,
      insurance: calculatedInsurance,
      monthlyPayment: calculatedMonthlyPayment
    }
  }

  /**
   * @function principalAndInterest
   * @memberof calculateMortgage
   * @static
   */
  static principalAndInterest(interestRate, loanAmount, yearsOfMortgage) {
    let calculated = (
      ((interestRate / 100) / 12) * 
      loanAmount / 
      (1 - Math.pow((1 + ((interestRate / 100) / 12)), - yearsOfMortgage * 12))
    );
    let roundedCalculation = calculated.toFixed(2);

    /* @returns @type string of principal interest calculation. */
    return roundedCalculation;
  }

  /**
   * @function calculateTax
   * @memberof calculateMortgage
   * @static
   */
  static calculateTax(annualTax) {
    let calculated = annualTax / 12;
    let roundedCalculation = calculated.toFixed(2);

    /* @returns @type string of tax calculation. */
    return roundedCalculation;
  }

  /**
   * @function calculateInsurance
   * @memberof calculateMortgage
   * @static
   */
  static calculateInsurance(annualInsurance) {
    let calculated = annualInsurance / 12;
    let roundedCalculation = calculated.toFixed(2);

    /* @returns @type string of insurance calculation. */
    return roundedCalculation;
  }

  /**
   * @function calculateMonthlyPayment
   * @memberof calculateMortgage
   * @static
   */
  static calculateMonthlyPayment(principleAndInterests, tax, insurance) {
    let calculated = (
      parseFloat(principleAndInterests) + 
      parseFloat(tax) + 
      parseFloat(insurance)
    );

    /* @returns @type string of monthly payment calculation. */
    let roundedCalculation = calculated.toFixed(2);

    return roundedCalculation;
  }
}

/* Export class from calculator to be used elsewhere. */
export default calculateMortgage;