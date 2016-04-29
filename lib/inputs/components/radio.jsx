import React from 'react';
import {FormGroup, ControlLabel, Radio} from 'react-bootstrap';

class RadioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(props) {
    // makes component reactive to db changes
    this.updateValue(props.value);
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
            <Radio value={option.value} key={option.value} name={this.props.name}>{option.label}</Radio>
          );
        })}
      </FormGroup>
    );
  }

}

export default RadioComponent;
