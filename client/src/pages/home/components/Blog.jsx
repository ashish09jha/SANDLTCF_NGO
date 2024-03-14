import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import card1 from "../../../assets/blog-1.jpg";
import card2 from "../../../assets/blog-2.jpg";
import card3 from "../../../assets/blog-3.jpg";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-card rounded-lg overflow-hidden shadow-md border border-gray-300 bg-white m-2"> {/* Added margin */}
            <div className="relative p-6">
                <div className="absolute top-0 right-0 transform -translate-x-3 -translate-y-3 text-4xl text-orange"><FaQuoteRight /></div>
                <div className="testimonial-image relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4 border-4 border-orange">
                    <img
                        src={testimonial.image}
                        alt="Testimonial Avatar"
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
                <h3 className="text-lg text-center font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-700 text-sm italic">{testimonial.testimony}</p> {/* Changed to italic */}
            </div>
        </div>
    );
};

const Blog = () => {
    const testimonialData = [
        {
            image: card3,
            name: 'Mr. T K Sharma IAS Retd. ',
            testimony: 'TK Sharma, served in civil services (Indian Administrative Service) and was Divisional Commissioner, Gugaon and after retiring he joined S&L Trust as member of Advisory Council and actively participating in day to day activities. ',
        },
        {
            image: card3,
            name: 'Mrs. Dolly Jain',
            testimony: 'Mrs. Dolly Jain, an industrialists & renowned philanthropist well known for her social and charitable activities. She has keen interest for welfare of unprivileged children and has active participation in monitoring of the Mobile Schools',
        },
        {
            image: card3,
            name: 'Mr. J K Dhar',
            testimony: 'JK Dhar did electrical engineering from NIT, Kozhikode, Kerala, having over 43 years of working experience that included positions of being a Director on Board /Country Manager.',
        },
        {
            image: card1,
            name: 'Mr. JK Mehta',
            testimony: 'Mr. Mehta has worked in Doordarshan and after retirement from Govt. he worked as Professor (mass communication), Amity University. He specializes in Media Management and advertising sector.',
        },
        {
            image: card2,
            name: 'Mr. Sunil Nanda',
            testimony: 'Mr. Sunil Nanda has worked as a Director in USAID and has experience of over 30 years in development sector. He is a philanthropist, participating in the various charities for the welfare of the down trodden people of the society.',
        },
        {
            image: card2,
            name: 'Mr. Sandeep Singh Rajput ',
            testimony: 'Mr. Rajput is an active and devoted social worker. He is Director of All India Citizen’s Alliance for progress & Development (AICAPD). He accumulated lots of experience in the field operation activities. ',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            // Responsive settings...
        ]
    };

    return (
        <section className="container mx-auto py-12">
            <div className='text-center mb-8'>
                <h2 className="text-3xl font-bold text-black mb-2">ADVISORY MEMBERS</h2>
                <div className="h-1 w-20 bg-orange mx-auto mb-4"></div>
            </div>

            <Slider {...settings}>
                {testimonialData.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </Slider>
        </section>
    );
};

export default Blog;
