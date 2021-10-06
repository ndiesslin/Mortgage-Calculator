/* Import calculateMortgage class for calculations. */
import calculateMortgage from '../calculate-mortgage';

/* Create calculate class. */
const _calculate = new calculateMortgage();
const _calculated = _calculate.calculateAllNumbers();

test('default calculation equals', () => {
  expect(_calculated.principalAndInterest).toBe('7.34');
});

test('default calculation equals', () => {
  expect(_calculated.tax).toBe('83.33');
});

test('default calculation equals', () => {
  expect(_calculated.insurance).toBe('25.00');
});

test('default calculation equals', () => {
  expect(_calculated.monthlyPayment).toBe('115.67');
});