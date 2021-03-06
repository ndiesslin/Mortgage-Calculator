/**
 * Form slider.
 * @namespace FormSlider
 * @class
 */
 class FormSlider {
  /* Get values for constructor. */
  constructor() {
    this.rangeInputGroup = '';
  }

  /**
   * @function processSlider 
   * @memberof FormSilder
   */
  processSlider () {
    const slider = this.rangeInputGroup.getElementsByClassName('range__slider')[0];
    const input = this.rangeInputGroup.getElementsByClassName('input')[0];

    this.constructor.sliderToInput(slider, input);
    this.constructor.inputToSlider(slider, input);
  }

  /* Get and set slider value to input. */
  /**
   * @function sliderToInput
   * @memberof FormSlider
   * @static
   */
  static sliderToInput(slider, input) {
    /* Get min max and value to set slider gradient. */
    const min = slider.min;
    const max = slider.max;

    /* Set slider background. */
    this.sliderSetBackground(slider, min, max);

    /* Add listener for changes. */
    slider.addEventListener('input', (event) => {
      const slider = event.target;
      const value = slider.value;

      input.value = value;

      /* Set slider background. */
      this.sliderSetBackground(slider, min, max);
    });
  }

  /* Get and set input value to slider. */
  /**
   * @function inputToSlider
   * @memberof FormSlider
   * @static
   */
  static inputToSlider(slider, input) {
    /* Add listener for changes. */
    input.addEventListener('input', (event) => {
      const input = event.target;
      const value = input.value;
      const min = slider.min;
      const max = slider.max;
  
      /* Set Slider value. */
      slider.value = value;
  
      /* Set slider background. */
      this.sliderSetBackground(slider, min, max);
    });
  }

  /* Visually set background of slider. */
  /**
   * @function sliderSetBackground
   * @memberof FormSlider
   * @static
   */
  static sliderSetBackground(slider, min, max) {
    let value = slider.value;
    slider.style.background = `linear-gradient(to right, #1B3979 0%, #1B3979 ${(value - min) / (max - min) * 100}%, #DDDDDD ${(value - min) / (max - min) * 100}%, #DDDDDD 100%)`;
  }
}

/* Export class from slider to be used elsewhere. */
export default FormSlider;