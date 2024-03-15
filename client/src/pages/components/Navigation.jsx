import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './NavBar';
import TopBar from './TopBar';

const Navigation = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <TopBar />
            <div style={{ paddingTop: '0px' }}> {/* Adjust according to the height of your top bar */}
                <Navbar style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />
            </div>
        </>
    );
};

export default Navigation;
