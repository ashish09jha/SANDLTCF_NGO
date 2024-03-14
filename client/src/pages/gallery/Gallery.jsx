import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';
import Spinner from '../components/Spinner';
import Main from './component/Main'
import FullImage from '../common/fullImage';

const Gallery = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [location])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

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