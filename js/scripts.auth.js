class Input {
    constructor(label) {
      this.label = label;
      this.input = label.querySelector('.input');
      this.invalidMessage = label.querySelector('.input-invalid-message');
    }
    setRequiredAttribute() {
      this.input.setAttribute('required', 'required');
    }
  };
  const allLabelElements = document.querySelectorAll('.input-box');
  const SUBMIT_BUTTON = document.querySelector('.input__submit-button')
  const INPUTS = [];
  allLabelElements.forEach(label => {
    const input = new Input(label);
    INPUTS.push(input);
  })
  SUBMIT_BUTTON.addEventListener('click', () => {
    INPUTS.forEach(input => {
      if (!input.input.value) {
        input.setRequiredAttribute();
      }
    })
  });