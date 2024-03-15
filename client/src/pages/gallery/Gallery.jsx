import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';
import Spinner from '../components/Spinner';
import Main from './component/Main'

const Gallery = () => {
    const location = useLocation(); 

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <Navigation />
                    <Main />
                    <Footer />
                    <ScrollToTop />
                </div>

            }
        </>
    )

};


export default Gallery