import React from 'react';
import {Link} from 'react-router-dom';
import Banner from '../banners/Heading';

const HomePage = () => 
    <div>
        <Banner />
        <Link to='/login'>Login!</Link>
    </div>;

export default HomePage;