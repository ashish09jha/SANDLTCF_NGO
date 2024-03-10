import Img2 from '../../assets/event-1.jpg';
import Img3 from '../../assets/event-2.jpg';
import Img7 from '../../assets/event-7.jpg';
import { GoArrowRight } from 'react-icons/go';
import { BsClock } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';

const eventsData = [
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

const Events = () => {
    return (
        <div className='justify-center align-center md:mb-10'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Upcoming Events
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-6">
                {eventsData.map((event, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                        <div className="image-container relative cursor-pointer">
                            <div className="image-overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-70"></div>
                            <img
                                src={event.image}
                                alt="Blog Image"
                                className="object-center object-cover"
                            />
                        </div>
                        <h3 className="text-sm md:text-lg hover:text-green cursor-pointer text-center capitalize font-semibold font-quicksand mt-4 mb-2">{event.title}</h3>
                        <div className="container mx-auto mt-8 pl-4 mb-4 flex flex-wrap items-center">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 lg:pr-10 ">
                                <p className='flex items-center gap-2 font-quicksand font-sm  pb-1'>
                                    <FaCalendarAlt className='text-green mr-2 h-4 w-4' />{event.date}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm  pb-1'>
                                    <BsClock className='text-green mr-2 h-4 w-4' />{event.time}
                                </p>
                                <p className='flex items-center gap-2 mt-3 font-quicksand font-sm  pb-1 '>
                                    <IoLocationSharp className='text-green mr-2 h-6 w-6 -ml-1' />{event.location}
                                </p>
                            </div>
                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 md:border-l-4 border-green pl-4 md:mt-0 mt-4 md:ml-0 -ml-4">
                                <p className=' text-sm font-quicksand'>{event.description}</p>
                                <a href={event.link} className='mt-4 border border-green w-32 justify-center border-b-4 md:ml-0 p-2 -ml-1 rounded-md flex items-center font-quicksand font-medium hover:border-primary'>
                                    {event.buttonText}
                                    <GoArrowRight className='ml-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Events;