/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calculate-mortgage.js":
/*!**************************************!*\
  !*** ./src/js/calculate-mortgage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Set calculate mortgage default values. */
var defaultYearsOfMortgage = 30;
var defaultInterestRate = 8.0;
var defaultLoanAmount = 1000;
var defaultTax = 1000;
var defaultAnnualInsurance = 300;
/**
 * Mortgage calculation.
 * @namespace calculateMortgage
 * @class
 */

var calculateMortgage = /*#__PURE__*/function () {
  /* Get values for constructor. */
  function calculateMortgage() {
    _classCallCheck(this, calculateMortgage);

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


  _createClass(calculateMortgage, [{
    key: "calculateAllNumbers",
    value: function calculateAllNumbers() {
      var calculatedPrincipalAndInterest = this.constructor.principalAndInterest(this.interestRate, this.loanAmount, this.yearsOfMortgage);
      var calculatedTax = this.constructor.calculateTax(this.annualTax);
      var calculatedInsurance = this.constructor.calculateInsurance(this.annualInsurance);
      var calculatedMonthlyPayment = this.constructor.calculateMonthlyPayment(calculatedPrincipalAndInterest, calculatedTax, calculatedInsurance);
      /* @returns @object of mortgage calculation. */

      return {
        principalAndInterest: calculatedPrincipalAndInterest,
        tax: calculatedTax,
        insurance: calculatedInsurance,
        monthlyPayment: calculatedMonthlyPayment
      };
    }
    /**
     * @function principalAndInterest
     * @memberof calculateMortgage
     * @static
     */

  }], [{
    key: "principalAndInterest",
    value: function principalAndInterest(interestRate, loanAmount, yearsOfMortgage) {
      var calculated = interestRate / 100 / 12 * loanAmount / (1 - Math.pow(1 + interestRate / 100 / 12, -yearsOfMortgage * 12));
      var roundedCalculation = calculated.toFixed(2);
      /* @returns @type string of principal interest calculation. */

      return roundedCalculation;
    }
    /**
     * @function calculateTax
     * @memberof calculateMortgage
     * @static
     */

  }, {
    key: "calculateTax",
    value: function calculateTax(annualTax) {
      var calculated = annualTax / 12;
      var roundedCalculation = calculated.toFixed(2);
      /* @returns @type string of tax calculation. */

      return roundedCalculation;
    }
    /**
     * @function calculateInsurance
     * @memberof calculateMortgage
     * @static
     */

  }, {
    key: "calculateInsurance",
    value: function calculateInsurance(annualInsurance) {
      var calculated = annualInsurance / 12;
      var roundedCalculation = calculated.toFixed(2);
      /* @returns @type string of insurance calculation. */

      return roundedCalculation;
    }
    /**
     * @function calculateMonthlyPayment
     * @memberof calculateMortgage
     * @static
     */

  }, {
    key: "calculateMonthlyPayment",
    value: function calculateMonthlyPayment(principleAndInterests, tax, insurance) {
      var calculated = parseFloat(principleAndInterests) + parseFloat(tax) + parseFloat(insurance);
      /* @returns @type string of monthly payment calculation. */

      var roundedCalculation = calculated.toFixed(2);
      return roundedCalculation;
    }
  }]);

  return calculateMortgage;
}();
/* Export class from calculator to be used elsewhere. */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateMortgage);

/***/ }),

/***/ "./src/js/form-slider.js":
/*!*******************************!*\
  !*** ./src/js/form-slider.js ***!
  \*******************************/
/***/ (() => {

/* Get and set slider value to input. */
document.querySelectorAll('.range__slider').forEach(function (slider) {
  /* Get min max and value to set slider gradient. */
  var min = slider.min;
  var max = slider.max;
  var value = slider.value;
  /* Set slider background. */

  slider.style.background = "linear-gradient(to right, #1B3979 0%, #1B3979 ".concat((value - min) / (max - min) * 100, "%, #DDDDDD ").concat((value - min) / (max - min) * 100, "%, #DDDDDD 100%)");
  slider.addEventListener('input', function (event) {
    var slider = event.target;
    var value = slider.value;
    var target = slider.dataset.target;
    document.querySelector(target).value = value;
    /* Set slider background. */

    event.target.style.background = "linear-gradient(to right, #1B3979 0%, #1B3979 ".concat((slider.value - slider.min) / (slider.max - slider.min) * 100, "%, #DDDDDD ").concat((slider.value - slider.min) / (slider.max - slider.min) * 100, "%, #DDDDDD 100%)");
  });
});
/* Get and set input value to slider. */

document.querySelectorAll('.range-input-group .calculator__input').forEach(function (sliderInput) {
  sliderInput.addEventListener('input', function (event) {
    var slider = event.target;
    var value = slider.value;
    var target = slider.dataset.target;
    document.querySelector(target).value = value;
    /* Set slider background. */

    document.querySelector(target).style.background = "linear-gradient(to right, #1B3979 0%, #1B3979 ".concat((slider.value - slider.min) / (slider.max - slider.min) * 100, "%, #DDDDDD ").concat((slider.value - slider.min) / (slider.max - slider.min) * 100, "%, #DDDDDD 100%)");
  });
});

/***/ }),

/***/ "./src/js/form-validate.js":
/*!*********************************!*\
  !*** ./src/js/form-validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* Set inputs to validate. */
var inputsToValidate = document.querySelectorAll('.calculator__input');
/**
 * Form Validation.
 * @namespace formValidate
 * @class
 */

var formValidate = /*#__PURE__*/function () {
  /* Get values for constructor. */
  function formValidate() {
    _classCallCheck(this, formValidate);

    this.inputsToValidate = inputsToValidate;
  }
  /**
   * @function valid
   * @memberof formValidate
   */


  _createClass(formValidate, [{
    key: "valid",
    value: function valid() {
      var valid = this.constructor.validateInputs(this.inputsToValidate);
      /* @returns @type boolean of form validation. */

      return valid;
    }
    /**
     * @function validateInputs
     * @memberof formValidate
     * @static
     */

  }], [{
    key: "validateInputs",
    value: function validateInputs(inputs) {
      var valid = true;
      inputs.forEach(function (input) {
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
  }]);

  return formValidate;
}();
/* Export class from calculator to be used elsewhere. */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidate);

/***/ }),

/***/ "./src/js/handle-form.js":
/*!*******************************!*\
  !*** ./src/js/handle-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculate_mortgage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculate-mortgage */ "./src/js/calculate-mortgage.js");
/* harmony import */ var _form_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validate */ "./src/js/form-validate.js");
/* Import calculateMortgage class for calculations. */

/* Import formValidate class for form validation. */


/* Create calculate class. */

var _calculate = new _calculate_mortgage__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* Create form validation class. */


var _formValidate = new _form_validate__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* When form updates calculate changes. */


document.querySelector('.calculator').addEventListener('submit', function (event) {
  event.preventDefault();
  /* Get values from the submitted form. */

  var form = event.target;
  var yearsOfMortgage = form.querySelector('.calculator__input-years').value;
  var interestRate = form.querySelector('.calculator__input-interest').value;
  var loanAmount = form.querySelector('.calculator__input-amount').value;
  var annualTax = form.querySelector('.calculator__input-tax').value;
  var annualInsurance = form.querySelector('.calculator__input-insurance').value;
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

  var _calculated = _calculate.calculateAllNumbers();
  /* Set calculated values. */


  document.querySelector('.results__price-principal').textContent = '$ ' + _calculated.principalAndInterest;
  document.querySelector('.results__price-tax').textContent = '$ ' + _calculated.tax;
  document.querySelector('.results__price-insurance').textContent = '$ ' + _calculated.insurance;
  document.querySelector('.results__price-total').textContent = '$ ' + _calculated.monthlyPayment;
  /* Set results as active. */

  document.querySelector('.results').classList.add('results--active');
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scss/main.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scss/main.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Graphik-Medium.woff2 */ "./src/assets/fonts/Graphik-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/PublicoHeadline-Medium.woff2 */ "./src/assets/fonts/PublicoHeadline-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Graphik\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"Publico\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  font-weight: 400;\n}\nhtml, body {\n  font-family: \"Graphik\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.subtitle {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nhr {\n  margin: 0 0 1rem;\n  border: none;\n  border-bottom: solid 1px #DDDDDD;\n  width: calc(100% + 2rem);\n  margin-left: -1rem;\n}\n@media (min-width: 768px) {\n  hr {\n    width: 100%;\n    margin: 0 0 2.25rem;\n    margin-left: 0;\n  }\n}\n\ninput {\n  margin: 0;\n}\n\n.header {\n  margin: 0 0 3rem;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n}\n.header__h1 {\n  padding: 0.96875rem 1.0625rem;\n  margin: auto;\n  max-width: 71.25rem;\n  font-family: \"Publico\", sans-serif;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.5625rem;\n}\n@media (min-width: 768px) {\n  .header__h1 {\n    padding: 0.78125rem 1.0625rem;\n    font-size: 1.9375rem;\n    line-height: 2.4375rem;\n  }\n}\n\n.range-input-group {\n  display: grid;\n  grid-template-columns: minmax(max-content, 677px) minmax(max-content, 88px);\n  column-gap: 16px;\n  margin: 0 0 1.875rem;\n}\n\n.double-input-group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 16px;\n  margin: 0 0 2.25rem;\n}\n@media (min-width: 768px) {\n  .double-input-group {\n    column-gap: 24px;\n  }\n}\n\n.loan-amount-wrapper {\n  margin: 0 0 1.3125rem;\n}\n\n.range {\n  display: grid;\n  grid-template-columns: minmax(max-content, 27px) 1fr minmax(max-content, 27px);\n  align-items: center;\n}\n.range__slider {\n  margin: 0 1rem;\n  -webkit-appearance: none;\n  height: 0.5rem;\n  background: #1B3979;\n  outline: none;\n  border-radius: 8px;\n}\n@media (min-width: 768px) {\n  .range__slider {\n    height: 1rem;\n  }\n}\n.range__slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #ffffff;\n  cursor: pointer;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n  border-radius: 50%;\n}\n@media (min-width: 768px) {\n  .range__slider::-webkit-slider-thumb {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n}\n.range__slider::-moz-range-thumb {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #ffffff;\n  cursor: pointer;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n  border-radius: 50%;\n}\n@media (min-width: 768px) {\n  .range__slider::-moz-range-thumb {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n}\n.range__scale {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.9375rem;\n  line-height: 1.5rem;\n}\n@media (min-width: 768px) {\n  .range__scale {\n    font-family: \"Graphik\", sans-serif;\n    font-size: 1.25rem;\n    line-height: 1.875rem;\n  }\n}\n\n.button {\n  display: block;\n  width: 100%;\n  padding: 0.625rem;\n  color: #ffffff;\n  font-size: 1.125rem;\n  font-weight: 600;\n  line-height: 1.75rem;\n  text-align: center;\n  background-color: #316EEF;\n  border-radius: 8px;\n  border: none;\n}\n.button:hover {\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .button {\n    padding: 0.8125rem;\n    font-size: 1.25rem;\n    line-height: 1.875rem;\n  }\n}\n\n.calculator-wrapper {\n  display: grid;\n  padding: 0 1.0625rem 1.0625rem;\n  margin: auto;\n  max-width: 71.25rem;\n  grid-template-columns: 100%;\n}\n@media (min-width: 768px) {\n  .calculator-wrapper {\n    grid-template-columns: minmax(min-content, 667px) auto;\n  }\n}\n\n.calculator {\n  padding: 1rem 1rem 2.25rem;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n  border-radius: 0;\n  z-index: 2;\n}\n@media (min-width: 768px) {\n  .calculator {\n    padding: 1.5rem 1.5rem 2.125rem;\n    border-radius: 8px;\n  }\n}\n.calculator__title {\n  margin: 0 0 1rem;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.9375rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n}\n.calculator__label {\n  display: block;\n  margin: 0 0 0.5rem;\n  color: #2E2F2F;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n}\n.calculator__input {\n  position: relative;\n  border: solid 1px #BBBCBC;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  color: #000000;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  width: 100%;\n}\n.calculator__input:focus {\n  outline: none;\n  border: solid 1px #316EEF;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n}\n.calculator__input--with-cost {\n  padding: 0.875rem 1.5rem 0.875rem 2.3125rem;\n}\n.calculator__invalid-message {\n  display: none;\n}\n.calculator--invalid .calculator__input {\n  margin: 0 0 0.5rem;\n  border: solid 1px #D83E00;\n}\n.calculator--invalid .calculator__invalid-message {\n  display: block;\n  font-size: 0.8125rem;\n  color: #D83E00;\n}\n.calculator__input-years, .calculator__input-interest {\n  padding-right: 10px;\n  text-align: center;\n}\n.calculator__input-cost {\n  position: absolute;\n  z-index: 1;\n  padding: 0.9375rem 1.5625rem;\n  font-size: 1rem;\n  line-height: 1.25rem;\n}\n\n.results {\n  margin: 0 0.375rem;\n  padding: 3.5rem 2rem 3.375rem;\n  background-color: #FBFBFB;\n  display: none;\n  border-radius: 0 0 8px 8px;\n}\n@media (min-width: 768px) {\n  .results {\n    padding: 3.5rem 2rem 2.9375rem;\n    margin: 2.5rem 0 0;\n    display: block;\n    border-radius: 0 8px 8px 0;\n  }\n}\n.results--active {\n  display: block;\n}\n.results--active .results__price {\n  color: #000000;\n}\n.results__title {\n  margin: 0 0 1.5rem;\n}\n.results--title-main {\n  margin: 0 0 1.5rem;\n}\n.results__price {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  text-align: right;\n}\n@media (min-width: 768px) {\n  .results__price {\n    font-size: 1.5rem;\n    line-height: 2.375rem;\n    margin: 0 0 1rem;\n    color: #BBBCBC;\n    text-align: left;\n  }\n}\n.results--price-last {\n  margin: 0;\n}\n.results--price-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 1.5625rem 0 0.75rem;\n  border-bottom: solid 1px #DDDDDD;\n}\n@media (min-width: 768px) {\n  .results--price-wrapper {\n    display: block;\n    padding: 0;\n    border: none;\n  }\n}\n.results--price-wrapper-first {\n  padding: 0 0 0.75rem;\n}\n@media (min-width: 768px) {\n  .results--price-wrapper-first {\n    padding: 0;\n  }\n}\n.results__medium-title {\n  margin: 0;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.8125rem;\n  line-height: 1.1875rem;\n  color: #5D5D5D;\n}\n@media (min-width: 768px) {\n  .results__medium-title {\n    margin: 0 0 0.5rem;\n    font-size: 1.25rem;\n    line-height: 1.875rem;\n  }\n}\n.results__small-title {\n  margin: 0;\n  color: #5D5D5D;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.8125rem;\n  line-height: 1.1875rem;\n}\n@media (min-width: 768px) {\n  .results__small-title {\n    line-height: 1.75rem;\n    margin: 0 0 0.5rem;\n  }\n}\n.results__hr {\n  display: none;\n  margin: 0 0 1.5rem;\n}\n@media (min-width: 768px) {\n  .results__hr {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_typography.scss","webpack://./src/scss/main.scss","webpack://./src/scss/layout/_general.scss","webpack://./src/scss/base/_borders.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/layout/_form.scss","webpack://./src/scss/base/_colors.scss","webpack://./src/scss/modules/_buttons.scss","webpack://./src/scss/modules/_calculator.scss","webpack://./src/scss/modules/_results.scss"],"names":[],"mappings":"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","sourcesContent":["// Fonts\n$helvetica: 'Helvetica Neue', sans-serif;\n\n@font-face {\n  font-family: 'Graphik';\n  src: url(../assets/fonts/Graphik-Medium.woff2) format('woff2');\n  font-weight: 400;\n}\n$graphik: 'Graphik', sans-serif;\n\n@font-face {\n  font-family: 'Publico';\n  src: url(../assets/fonts/PublicoHeadline-Medium.woff2) format('woff2');\n  font-weight: 400;\n}\n$publico: 'Publico', sans-serif;\n\n// Base Typography settings\nhtml, body {\n  font-family: $graphik;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.subtitle {\n  font-family: $helvetica;\n  font-weight: 400;\n}","@font-face {\n  font-family: \"Graphik\";\n  src: url(../assets/fonts/Graphik-Medium.woff2) format(\"woff2\");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"Publico\";\n  src: url(../assets/fonts/PublicoHeadline-Medium.woff2) format(\"woff2\");\n  font-weight: 400;\n}\nhtml, body {\n  font-family: \"Graphik\", sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.subtitle {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nhr {\n  margin: 0 0 1rem;\n  border: none;\n  border-bottom: solid 1px #DDDDDD;\n  width: calc(100% + 2rem);\n  margin-left: -1rem;\n}\n@media (min-width: 768px) {\n  hr {\n    width: 100%;\n    margin: 0 0 2.25rem;\n    margin-left: 0;\n  }\n}\n\ninput {\n  margin: 0;\n}\n\n.header {\n  margin: 0 0 3rem;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n}\n.header__h1 {\n  padding: 0.96875rem 1.0625rem;\n  margin: auto;\n  max-width: 71.25rem;\n  font-family: \"Publico\", sans-serif;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.5625rem;\n}\n@media (min-width: 768px) {\n  .header__h1 {\n    padding: 0.78125rem 1.0625rem;\n    font-size: 1.9375rem;\n    line-height: 2.4375rem;\n  }\n}\n\n.range-input-group {\n  display: grid;\n  grid-template-columns: minmax(max-content, 677px) minmax(max-content, 88px);\n  column-gap: 16px;\n  margin: 0 0 1.875rem;\n}\n\n.double-input-group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 16px;\n  margin: 0 0 2.25rem;\n}\n@media (min-width: 768px) {\n  .double-input-group {\n    column-gap: 24px;\n  }\n}\n\n.loan-amount-wrapper {\n  margin: 0 0 1.3125rem;\n}\n\n.range {\n  display: grid;\n  grid-template-columns: minmax(max-content, 27px) 1fr minmax(max-content, 27px);\n  align-items: center;\n}\n.range__slider {\n  margin: 0 1rem;\n  -webkit-appearance: none;\n  height: 0.5rem;\n  background: #1B3979;\n  outline: none;\n  border-radius: 8px;\n}\n@media (min-width: 768px) {\n  .range__slider {\n    height: 1rem;\n  }\n}\n.range__slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #ffffff;\n  cursor: pointer;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n  border-radius: 50%;\n}\n@media (min-width: 768px) {\n  .range__slider::-webkit-slider-thumb {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n}\n.range__slider::-moz-range-thumb {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #ffffff;\n  cursor: pointer;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n  border-radius: 50%;\n}\n@media (min-width: 768px) {\n  .range__slider::-moz-range-thumb {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n}\n.range__scale {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.9375rem;\n  line-height: 1.5rem;\n}\n@media (min-width: 768px) {\n  .range__scale {\n    font-family: \"Graphik\", sans-serif;\n    font-size: 1.25rem;\n    line-height: 1.875rem;\n  }\n}\n\n.button {\n  display: block;\n  width: 100%;\n  padding: 0.625rem;\n  color: #ffffff;\n  font-size: 1.125rem;\n  font-weight: 600;\n  line-height: 1.75rem;\n  text-align: center;\n  background-color: #316EEF;\n  border-radius: 8px;\n  border: none;\n}\n.button:hover {\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .button {\n    padding: 0.8125rem;\n    font-size: 1.25rem;\n    line-height: 1.875rem;\n  }\n}\n\n.calculator-wrapper {\n  display: grid;\n  padding: 0 1.0625rem 1.0625rem;\n  margin: auto;\n  max-width: 71.25rem;\n  grid-template-columns: 100%;\n}\n@media (min-width: 768px) {\n  .calculator-wrapper {\n    grid-template-columns: minmax(min-content, 667px) auto;\n  }\n}\n\n.calculator {\n  padding: 1rem 1rem 2.25rem;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n  border-radius: 0;\n  z-index: 2;\n}\n@media (min-width: 768px) {\n  .calculator {\n    padding: 1.5rem 1.5rem 2.125rem;\n    border-radius: 8px;\n  }\n}\n.calculator__title {\n  margin: 0 0 1rem;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.9375rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n}\n.calculator__label {\n  display: block;\n  margin: 0 0 0.5rem;\n  color: #2E2F2F;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n}\n.calculator__input {\n  position: relative;\n  border: solid 1px #BBBCBC;\n  border-radius: 8px;\n  padding: 0.875rem 1.5rem;\n  color: #000000;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  width: 100%;\n}\n.calculator__input:focus {\n  outline: none;\n  border: solid 1px #316EEF;\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n}\n.calculator__input--with-cost {\n  padding: 0.875rem 1.5rem 0.875rem 2.3125rem;\n}\n.calculator__invalid-message {\n  display: none;\n}\n.calculator--invalid .calculator__input {\n  margin: 0 0 0.5rem;\n  border: solid 1px #D83E00;\n}\n.calculator--invalid .calculator__invalid-message {\n  display: block;\n  font-size: 0.8125rem;\n  color: #D83E00;\n}\n.calculator__input-years, .calculator__input-interest {\n  padding-right: 10px;\n  text-align: center;\n}\n.calculator__input-cost {\n  position: absolute;\n  z-index: 1;\n  padding: 0.9375rem 1.5625rem;\n  font-size: 1rem;\n  line-height: 1.25rem;\n}\n\n.results {\n  margin: 0 0.375rem;\n  padding: 3.5rem 2rem 3.375rem;\n  background-color: #FBFBFB;\n  display: none;\n  border-radius: 0 0 8px 8px;\n}\n@media (min-width: 768px) {\n  .results {\n    padding: 3.5rem 2rem 2.9375rem;\n    margin: 2.5rem 0 0;\n    display: block;\n    border-radius: 0 8px 8px 0;\n  }\n}\n.results--active {\n  display: block;\n}\n.results--active .results__price {\n  color: #000000;\n}\n.results__title {\n  margin: 0 0 1.5rem;\n}\n.results--title-main {\n  margin: 0 0 1.5rem;\n}\n.results__price {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  text-align: right;\n}\n@media (min-width: 768px) {\n  .results__price {\n    font-size: 1.5rem;\n    line-height: 2.375rem;\n    margin: 0 0 1rem;\n    color: #BBBCBC;\n    text-align: left;\n  }\n}\n.results--price-last {\n  margin: 0;\n}\n.results--price-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 1.5625rem 0 0.75rem;\n  border-bottom: solid 1px #DDDDDD;\n}\n@media (min-width: 768px) {\n  .results--price-wrapper {\n    display: block;\n    padding: 0;\n    border: none;\n  }\n}\n.results--price-wrapper-first {\n  padding: 0 0 0.75rem;\n}\n@media (min-width: 768px) {\n  .results--price-wrapper-first {\n    padding: 0;\n  }\n}\n.results__medium-title {\n  margin: 0;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.8125rem;\n  line-height: 1.1875rem;\n  color: #5D5D5D;\n}\n@media (min-width: 768px) {\n  .results__medium-title {\n    margin: 0 0 0.5rem;\n    font-size: 1.25rem;\n    line-height: 1.875rem;\n  }\n}\n.results__small-title {\n  margin: 0;\n  color: #5D5D5D;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.8125rem;\n  line-height: 1.1875rem;\n}\n@media (min-width: 768px) {\n  .results__small-title {\n    line-height: 1.75rem;\n    margin: 0 0 0.5rem;\n  }\n}\n.results__hr {\n  display: none;\n  margin: 0 0 1.5rem;\n}\n@media (min-width: 768px) {\n  .results__hr {\n    display: block;\n  }\n}","// Resets\n* { box-sizing: border-box; }\n\nbody {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nhr {\n  margin: 0 0 pxToRem(16);\n  border: none;\n  border-bottom: $baseBorderGrayHr;\n  width: calc(100% + pxToRem(32));\n  margin-left: - pxToRem(16);\n\n  @include breakpoint(medium) {\n    width: 100%;\n    margin: 0 0 pxToRem(36);\n    margin-left: 0;\n  }\n}\n\ninput {\n  margin: 0;\n}","// Borders\n$baseBorderRadius: 8px;\n$baseBorderGray: solid 1px $baseGrayBorder;\n$baseBorderGrayHr: solid 1px $baseGray;\n$baseBorderTertiaryRed: solid 1px $tertiaryRed;\n$baseBorderShadow: 0px 3px 10px rgba(0, 0, 0, 0.09);\n$baseBorderPrimaryBlue: solid 1px $primaryBlue;","/// Mixin to manage responsive breakpoints\n@mixin breakpoint($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n \n  // If the key doesn't exist in the map\n  @else {\n    @warn \"Unfortunately, no value could be retrieved from `#{$breakpoint}`. \"\n        + \"Available breakpoints are: #{map-keys($breakpoints)}.\";\n  }\n}",".header {\n  margin: 0 0 pxToRem(48);\n  box-shadow: $baseBorderShadow;\n\n  &__h1 {\n    padding: pxToRem(15.5) pxToRem(17);\n    margin: auto;\n    max-width: pxToRem($container-max-width);\n    font-family: $publico;\n    font-weight: 400;\n    font-size: pxToRem(20);\n    line-height: pxToRem(25);\n\n    @include breakpoint(medium) {\n      padding: pxToRem(12.5) pxToRem(17);\n      font-size: pxToRem(31);\n      line-height: pxToRem(39);\n    }\n  }\n}\n",".range-input-group {\n  display: grid;\n  grid-template-columns: minmax(max-content, 677px) minmax(max-content, 88px);\n  column-gap: 16px;\n  margin: 0 0 pxToRem(30);\n}\n\n.double-input-group {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 16px;\n  margin: 0 0 pxToRem(36);\n\n  @include breakpoint(medium) {\n    column-gap: 24px;\n  }\n}\n\n.loan-amount-wrapper {\n  margin: 0 0 pxToRem(21);\n}\n\n.range {\n  display: grid;\n  grid-template-columns: minmax(max-content, 27px) 1fr minmax(max-content, 27px);\n  align-items: center;\n\n  &__slider {\n    margin: 0 pxToRem(16);\n    -webkit-appearance: none;\n    height: pxToRem(8);\n    background: $primaryBlueDarkest;\n    outline: none;\n    border-radius: $baseBorderRadius;\n\n    @include breakpoint(medium) {\n      height: pxToRem(16);\n    }\n\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      width: pxToRem(24);\n      height: pxToRem(24);\n      background: $white;\n      cursor: pointer;\n      box-shadow: $baseBorderShadow;\n      border-radius: 50%;\n\n      @include breakpoint(medium) {\n        width: pxToRem(36);\n        height: pxToRem(36);\n      }\n    }\n\n    &::-moz-range-thumb {\n      width: pxToRem(24);\n      height: pxToRem(24);\n      background: $white;\n      cursor: pointer;\n      box-shadow: $baseBorderShadow;\n      border-radius: 50%;\n\n      @include breakpoint(medium) {\n        width: pxToRem(36);\n        height: pxToRem(36);\n      }\n    }\n  }\n\n  &__scale {\n    font-family: $helvetica;\n    font-size: pxToRem(15);\n    line-height: pxToRem(24);\n\n    @include breakpoint(medium) {\n      font-family: $graphik;\n      font-size: pxToRem(20);\n      line-height: pxToRem(30);\n    }\n  }\n}","// Colors\n$white: #ffffff;\n$baseBlack: #000000;\n$baseBlackLight: #2E2F2F;\n$baseBlackLighter: #5D5D5D;\n$baseGray: #DDDDDD;\n$baseGrayBackground: #FBFBFB;\n$baseGrayBorder: #BBBCBC;\n$primaryBlue: #316EEF;\n$primaryBlueDarkest: #1B3979;\n$tertiaryRed: #D83E00;",".button {\n  display: block;\n  width: 100%;\n  padding: pxToRem(10);\n  color: $white;\n  font-size: pxToRem(18);\n  font-weight: 600;\n  line-height: pxToRem(28);\n  text-align: center;\n  background-color: $primaryBlue;\n  border-radius: $baseBorderRadius;\n  border: none;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  @include breakpoint(medium) {\n    padding: pxToRem(13);\n    font-size: pxToRem(20);\n    line-height: pxToRem(30);\n  }\n}",".calculator-wrapper {\n  display: grid;\n  padding: 0 pxToRem(17) pxToRem(17);\n  margin: auto;\n  max-width: pxToRem($container-max-width);\n  grid-template-columns: 100%;\n\n  @include breakpoint(medium) {\n    grid-template-columns: minmax(min-content, 667px) auto;\n  }\n}\n\n.calculator {\n  padding: pxToRem(16) pxToRem(16) pxToRem(36);\n  box-shadow: $baseBorderShadow;\n  border-radius: 0;\n  z-index: 2;\n\n  @include breakpoint(medium) {\n    padding: pxToRem(24) pxToRem(24) pxToRem(34);\n    border-radius: $baseBorderRadius;\n  }\n\n  &__title {\n    margin: 0 0 pxToRem(16);\n    font-family: $helvetica;\n    font-size: pxToRem(15);\n    font-weight: 400;\n    line-height: pxToRem(24);\n  }\n\n  &__label {\n    display: block;\n    margin: 0 0 pxToRem(8);\n    color: $baseBlackLight;\n    font-size: pxToRem(14);\n    font-weight: 400;\n    line-height: pxToRem(24);\n  }\n\n  &__input {\n    position: relative;\n    border: $baseBorderGray;\n    border-radius: $baseBorderRadius;\n    padding: pxToRem(14) pxToRem(24);\n    color: $baseBlack;\n    font-size: pxToRem(16);\n    line-height: pxToRem(20);\n    width: 100%;\n\n    &:focus {\n      outline: none;\n      border: $baseBorderPrimaryBlue;\n      box-shadow: $baseBorderShadow;\n    }\n\n    &--with-cost {\n      padding: pxToRem(14) pxToRem(24) pxToRem(14) pxToRem(37);\n    }\n  }\n\n  &__invalid-message {\n    display: none;\n  }\n\n  &--invalid { \n    .calculator__input {\n      margin: 0 0 pxToRem(8);\n      border: $baseBorderTertiaryRed;\n    }\n\n    .calculator__invalid-message {\n      display: block;\n      font-size: pxToRem(13);\n      color: $tertiaryRed;\n    }\n  }\n\n  &__input-years, \n  &__input-interest {\n    // Add space for number increments when centered.\n    padding-right: 10px;\n    text-align: center;\n  }\n\n  &__input-cost {\n    position: absolute;\n    z-index: 1;\n    padding: pxToRem(15) pxToRem(25);\n    font-size: pxToRem(16);\n    line-height: pxToRem(20);\n  }\n}",".results {\n  margin: 0 pxToRem(6);\n  padding: pxToRem(56) pxToRem(32) pxToRem(54);\n  background-color: $baseGrayBackground; \n  display: none;\n  border-radius: 0 0 $baseBorderRadius $baseBorderRadius;\n\n  @include breakpoint(medium) {\n    padding: pxToRem(56) pxToRem(32) pxToRem(47);\n    margin: pxToRem(40) 0 0;\n    display: block;\n    border-radius: 0 $baseBorderRadius $baseBorderRadius 0;\n  }\n\n  &--active {\n    display: block;\n\n    .results__price {\n      color: $baseBlack;\n    }\n  }\n\n  &__title {\n    margin: 0 0 pxToRem(24);\n  }\n\n  &--title-main {\n    margin: 0 0 pxToRem(24);\n  }\n\n  &__price {\n    margin: 0;\n    font-size: pxToRem(16);\n    line-height: pxToRem(20);\n    text-align: right;\n\n    @include breakpoint(medium) {\n      font-size: pxToRem(24);\n      line-height: pxToRem(38);\n      margin: 0 0 pxToRem(16);\n      color: $baseGrayBorder;\n      text-align: left;\n    }\n  }\n\n  &--price-last {\n    margin: 0;\n  }\n\n  &--price-wrapper {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: pxToRem(25) 0 pxToRem(12);\n    border-bottom: $baseBorderGrayHr; \n\n    @include breakpoint(medium) {\n      display: block;\n      padding: 0;\n      border: none; \n    }\n  }\n\n  &--price-wrapper-first {\n    padding: 0 0 pxToRem(12);\n\n    @include breakpoint(medium) {\n      padding: 0;\n    }\n  }\n\n  &__medium-title {\n    margin: 0;\n    font-family: $helvetica;\n    font-size: pxToRem(13);\n    line-height: pxToRem(19);\n    color: $baseBlackLighter;\n\n    @include breakpoint(medium) {\n      margin: 0 0 pxToRem(8);\n      font-size: pxToRem(20);\n      line-height: pxToRem(30);\n    }\n  }\n\n  &__small-title {\n    margin: 0;\n    color: $baseBlackLighter;\n    font-family: $helvetica;\n    font-size: pxToRem(13);\n    line-height: pxToRem(19);\n\n    @include breakpoint(medium) {\n      line-height: pxToRem(28);\n      margin: 0 0 pxToRem(8);\n    }\n  }\n\n  &__hr {\n    display: none;\n    margin: 0 0 pxToRem(24);\n\n    @include breakpoint(medium) {\n      display: block;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./main.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/Graphik-Medium.woff2":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Graphik-Medium.woff2 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "840ddb2af0b18113d6ef.woff2";

/***/ }),

/***/ "./src/assets/fonts/PublicoHeadline-Medium.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/PublicoHeadline-Medium.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f9d937264cebf83392a.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _handle_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-form */ "./src/js/handle-form.js");
/* harmony import */ var _form_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-slider */ "./src/js/form-slider.js");
/* harmony import */ var _form_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_slider__WEBPACK_IMPORTED_MODULE_2__);
/* Load main CSS. */

/* Import form handler. */


/* Import form slider. */


})();

/******/ })()
;
//# sourceMappingURL=main.js.map