import React, {Component} from 'react';
import FieldGroup from './FieldGroup';
import {Button, Label} from 'react-bootstrap';

class SignupForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
          data: { email: '', password: '', confirmPassword : '', name : '' },
          errors: [] 
        };
      

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handlePasswordChange(e)
    {
      var event = e.target;
      
      this.setState( (state, props) => {
        state.data[event.name] = event.value;
        
        if(state.data.password !== state.data.confirmPassword)
        {
          state.passwordMisMatch = true;  
        }
        else
        {
          state.passwordMisMatch = false;  
        }
        
        return state;
      });
      
    }

    handleInputChange(e)
    {
        var event = e.target;

        var newData = { data : {} };
        newData.data[event.name] = event.value;
        this.setState(newData);
    }

    render()
    {
        var data = this.state.data;

        const formInstance = (
            
            <form>
              
              <FieldGroup
                id="formControlsEmail"
                type="email"
                name="email"
                label="Email address"
                value = {data.email}
                onChange = {this.handleInputChange}
                placeholder="example@email.com"
                required
              />
              <FieldGroup
                id="formControlsName"
                type="text"
                label="Name"
                name="name"
                value = {data.name}
                onChange = {this.handleInputChange}
              />
              
              <FieldGroup id="formControlsPassword" name="password" 
                value = {data.password} onChange = {this.handlePasswordChange} 
                required label="Password" type="password" />
              <FieldGroup id="formControlsConfirmPassword" name="confirmPassword"
                value = {data.confirmPassword} onChange = {this.handlePasswordChange} 
                required label="Confirm Password" type="password" />

              <div style={{height: '20px'}}>
              {
                this.state.passwordMisMatch &&  <Label style={{verticalAlign: 'top'}} bsStyle="danger">Passwords do not match</Label>  
              }
              </div>
              
              <Button type="submit">Submit</Button>
            </form>
          );

        return formInstance;
    }
}

export default SignupForm;