import React, {Component} from 'react';
import FieldGroup from './FieldGroup';
import {Checkbox, Button} from 'react-bootstrap';

class LoginForm extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const formInstance = (
            <form>
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email address"
                placeholder="example@email.com"
              />
              <FieldGroup id="formControlsPassword" label="Password" type="password" />
              
              <Checkbox checked readOnly>
                Remember me
              </Checkbox>

              <Button type="submit">Submit</Button>
            </form>
          );

        return formInstance;
    }
}

export default LoginForm;