import React from 'react';
import {FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';

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

  renderFormControl(){
    return(<FormControl {...this.props.htmlAttributes} value={this.state.value} type="text" placeholder="Enter text"/>);
  }
  
  renderFormWithOrWithoutPrefixOrSuffix(){
    if(this.props.suffix || this.props.prefix){
return(
      <InputGroup>
      {this.props.prefix ? <InputGroup.Addon>{this.props.prefix}</InputGroup.Addon> : null}
      {this.renderformControl()}
      {this.props.suffix ? <InputGroup.Addon>{this.props.suffix}</InputGroup.Addon> : null}
      </InputGroup>
    );
  }else{
    return this.renderformControl();
  }
  }

  render() {
    return (
      <FormGroup className="textfield-default" controlId="formControlsText">
        <ControlLabel>{this.props.label}</ControlLabel>
        {this.renderFormWithOrWithoutPrefixOrSuffix()}
      </FormGroup>
    );
  }
}

export default TextField;
