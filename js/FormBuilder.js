class FormBuilder {
  constructor(inputs) {
    this.inputs = this._getElementsFromSelector(inputs);
  }

  submit() {
    if (this._isValid()) alert('successfully signed up!');
    else alert('bad field format!');
  }

  _isValid() {
    for (let input of this.inputs) {
      const value = input.element.value;
      const rule = input.rule;

      if (!rule.test(value)) return false;
    }

    return true;
  }

  _getElementsFromSelector(elements) {
    let inputs = [];
    for (let el in elements) {
      inputs.push({
        element: document.querySelector(elements[el].selector),
        rule: elements[el].rule
      });
    }

    console.log(inputs);

    return inputs;
  }
}
