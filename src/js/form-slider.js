/* Get and set slider value to input. */
document.querySelectorAll('.range__slider').forEach( (slider) => {
  /* Get min max and value to set slider gradient. */
  const min = slider.min
  const max = slider.max
  const value = slider.value

  /* Set slider background. */
  slider.style.background = `linear-gradient(to right, #1B3979 0%, #1B3979 ${(value-min) /(max-min) * 100}%, #DDDDDD ${(value-min) / (max-min) * 100}%, #DDDDDD 100%)`;

  slider.addEventListener('input', (event) => {
    const slider = event.target;
    const value = slider.value;
    const target = slider.dataset.target;

    document.querySelector(target).value = value;

    /* Set slider background. */
    event.target.style.background = `linear-gradient(to right, #1B3979 0%, #1B3979 ${(slider.value-slider.min) / (slider.max-slider.min) * 100}%, #DDDDDD ${(slider.value-slider.min) / (slider.max-slider.min) * 100}%, #DDDDDD 100%)`;
  });
});

/* Get and set input value to slider. */
document.querySelectorAll('.range-input-group .calculator__input').forEach( (sliderInput) => {
  sliderInput.addEventListener('input', (event) => {
    const slider = event.target;
    const value = slider.value;
    const target = slider.dataset.target;

    document.querySelector(target).value = value;

    /* Set slider background. */
    document.querySelector(target).style.background = `linear-gradient(to right, #1B3979 0%, #1B3979 ${(slider.value-slider.min) / (slider.max-slider.min) * 100}%, #DDDDDD ${(slider.value-slider.min) / (slider.max-slider.min) * 100}%, #DDDDDD 100%)`;
  });
});