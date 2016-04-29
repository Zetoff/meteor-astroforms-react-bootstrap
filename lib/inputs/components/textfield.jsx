import React from 'react';
import {FormGroup, ControlLabel, FormControl, InputGroup} from 'react-bootstrap';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.props.field.update(event.target.value);
  }
  renderFormControl() {
    return(<FormControl {...this.props.htmlAttributes} onChange={this.handleChange} defaultValue={this.props.value} />);
  }
  renderInput(){
    if(this.props.suffix || this.props.prefix){
      return(
        <InputGroup>
        {this.props.prefix ? <InputGroup.Addon>{this.props.prefix}</InputGroup.Addon> : null}
        {this.renderFormControl()}
        {this.props.suffix ? <InputGroup.Addon>{this.props.suffix}</InputGroup.Addon> : null}
        </InputGroup>
      );
    } else{
      return this.renderFormControl();
    }
  }
  renderValidationMessage() {
    const { validation } = this.props;
    if (validation.state && validation.message) {
      return (
        <span className="validation-message">{validation.message}</span>
      );
    }
  }
  render() {
    return (
      <FormGroup className="textfield-default" controlId="formControlsText" validationState={this.props.validation.state}>
        <ControlLabel>{this.props.label}</ControlLabel>
        {this.renderValidationMessage()}
        {this.renderInput()}
      </FormGroup>
    );
  }
}

export default TextField;
