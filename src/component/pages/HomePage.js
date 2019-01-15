import React from 'react';
import {Button} from 'react-bootstrap';
import Heading from '../banners/Heading';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <Heading />
                    <Link to='/signup'>
                        <Button style={{width : buttonWidth}} active>Signup</Button>
                    </Link>
                    <div>Already a member?</div>
                    <Link to='/login'>
                        <Button style={{width : buttonWidth}} active>Login</Button>
                    </Link>
            </div>
        );
    }
};

export default HomePage;