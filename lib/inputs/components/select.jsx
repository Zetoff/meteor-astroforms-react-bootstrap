import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class Select extends React.Component {
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
    return (
      <FormGroup className="select-default" controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" {...this.props.htmlAttributes} value={this.state.value} onChange={this.handleChange} placeholder="select">
          {this.props.options.map((option) => {
            return (
              <option value={option.value} key={option.value}>{option.label}</option>
            );
          })}
        </FormControl>
      </FormGroup>
    );
  }
}

export default Select;
