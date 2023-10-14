import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            {/* <h3>This is Home</h3> */}
            {/* <div>{navigation.state === 'loading' ? 'Loading...' : '' }</div> */}
            <div>{navigation.state === 'loading' && 'Loading...'}</div> 
            <Outlet></Outlet>
        </div>
    );
};

export default Home;