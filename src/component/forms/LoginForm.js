import React, {Component} from 'react';
import FieldGroup from './FieldGroup';
import {Checkbox, Button} from 'react-bootstrap';

class LoginForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            data: { email: '', password: ''},
            errors: [] 
        };

        // If you are using arrow function syntax, you can omit the 
        // call to bind 'this' that was needed before
        
        //this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange = (e) => {
        var event = e.target;

        var newState = { data : {} };
        newState.data[event.name] = event.target;
        this.setState(newState);
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
                value={data.email}
                onChange={this.handleInputChange}
                label="Email address"
                placeholder="example@email.com"
              />
              <FieldGroup id="formControlsPassword" name="password" value={data.password} 
                onChange={this.handleInputChange} label="Password" type="password" />
              
              <Checkbox>
                Remember me
              </Checkbox>

              <Button type="submit">Submit</Button>
            </form>
          );

        return formInstance;
    }
}

export default LoginForm;