import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => 
    <div>
        <h2>Home Page</h2>
        <Link to='/login'>Login!</Link>
    </div>;

export default HomePage;