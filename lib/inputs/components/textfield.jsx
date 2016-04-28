import React from 'react';
import {FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';

// testing purpose only. this should not be here on the final release
class TextField extends React.Component {
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
    // user updates
    this.updateValue(event.target.value);
  }
  updateValue(value) {
    this.setState({value: value});
  }
  render() {
    return (
      <FormGroup className="textfield-default" controlId="formControlsText">
        <ControlLabel>{this.props.label}</ControlLabel>
        <InputGroup>
          {this.props.prefix ? <InputGroup.Addon>{this.props.prefix}</InputGroup.Addon> : null}
            <FormControl {...this.props.htmlAttributes} value={this.state.value} type="text" placeholder="Enter text"/>
          {this.props.suffix ? <InputGroup.Addon>{this.props.suffix}</InputGroup.Addon> : null}
        </InputGroup>
      </FormGroup>
    );
  }
}

export default TextField;
