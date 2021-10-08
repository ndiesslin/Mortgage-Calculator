/* Load main CSS. */
import '../scss/main.scss';

/* Import form handler. */
import FormWatcher from './form-watcher';

/* Create FormWatcher class. */
const formWatcher = new FormWatcher();

document.querySelectorAll('.calculator').forEach( (form) => {
  formWatcher.form = form;
  formWatcher.processForm();
});

/* Import form slider. */
import FormSlider from './form-slider';

/* Create FormSlider class. */
const formslider = new FormSlider();

/* Process each range group. */
document.querySelectorAll('.range-input-group').forEach( (rangeInputGroup) => {
  formslider.rangeInputGroup = rangeInputGroup;
  formslider.processSlider();
});