import Img2 from '../../assets/event-1.jpg';
import Img3 from '../../assets/event-2.jpg';
import Img7 from '../../assets/event-7.jpg';
import { GoArrowRight } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';

const GalleryData = [
    {
        title: 'Trip to Sultanpur Bird Sanctuary',
        date: "02-March-24",
        time: "8:00 - 10:00",
        location: "Sultanpur, Haryana",
        buttonText: "Read More!",
        description: 'An educational trip for sec-29, Mobile school students to Sultanpur Bird Sanctuary.',
        image: Img2,
        link: "#",

    },
    {
        title: 'Certificate Distribution',
        date: "1-March-24",
        time: "8:00 - 10:00",
        location: "Gurgaon, Haryana",
        buttonText: "Join Now!",
        description: 'Certificate Distribution to Mobile School Students',
        image: Img7,
        link: "#",


    },
    {
        title: 'Birthday Celebration',
        date: "22-Mar-24",
        time: "8:00 - 10:00",
        location: "Gurgaon, Haryana",
        buttonText: "Join Now!",
        description: 'Birthday Celebration with Mobile School students',
        image: Img3,
        link: "#",
    },
];

const Gallery = () => {
    return (
        <div className='justify-center align-center md:mb-10'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-orange mb-2 ">
                        Gallery
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Gallery;