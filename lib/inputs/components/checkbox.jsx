import React from 'react';
import {FormGroup, ControlLabel, Checkbox} from 'react-bootstrap';

class CheckboxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    //user updates
    this.updateValue(event.target.value);
  }
  updateValue(value) {
    this.setState({value: value});
  }
  render() {
    console.log(this.props);
    return (
      <FormGroup className="checkbox-default" controlId="formControlCheckBox">
        <ControlLabel>{this.props.label}</ControlLabel>
        {this.props.options.map((option) => {
          return (
            <Checkbox value={option.value} key={option.value}>{option.label}</Checkbox>
          );
        })}
      </FormGroup>
    );
  }

}

export default CheckboxComponent;
