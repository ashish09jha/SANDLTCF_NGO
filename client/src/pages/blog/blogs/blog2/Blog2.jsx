import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ScrollToTop from '../../../components/Scroll';
import Spinner from '../../../components/Spinner'

const Blog2 = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        return () => {
            clearTimeout(timer); // Clear the timeout when the component is unmounted or the dependency changes
        };
    }, []);
    return (
        <>
            {isLoading ?
                <Spinner />
                :
                <div>
                    <Navigation />
                    <Footer />
                    <ScrollToTop />
                </div>
            }
        </>
    )
}
export default Blog2;