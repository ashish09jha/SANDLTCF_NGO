import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Main = () => {
    return (
        <div className="relative w-full py-12">
            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 md:mt-16 -mt-2">
                    {/* Section Title */}
                    <div className="border-l-4 border-orange pl-2">
                        <h2 className='text-2xl font-quicksand text-orange font-medium ml-2'>Get In Touch</h2>
                    </div>
                    {/* Contact Info */}
                    <h2 className='md:text-5xl text-3xl md:p-0 pr-1 font-quicksand mt-6 font-bold'>
                        Contact Us
                    </h2>
                    {/* Quotation */}
                    <div className="mt-4"> {/* Reduced margin */}
                        <p className="text-gray-600 italic">"God is formless, serve God through children of God" - S.K Trehan</p>
                    </div>
                    {/* Organization Description */}
                    
                    {/* Additional Content */}
                    <div className="p-10">
                        {/* Additional content can be added here */}
                    </div>
                    {/* Contact Information */}
                    <div className="p-10 mt bg-gray-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Our Head Office</h3>
                        <p className="mb-2">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            <a href="tel:011-23721201">011-23721201</a> / <a href="tel:+919899801561">+91-9899801561</a>
                        </p>
                        <p className="mb-2">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <a href="mailto:sandltcf@gmail.com">sandltcf@gmail.com</a>
                        </p>
                        <p className="mb-2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            815 Indra Prakash Building, 21 Barakhambha Road, New Delhi
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.instagram.com/your_instagram_handle">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="https://twitter.com/your_twitter_handle">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a href="https://www.facebook.com/your_facebook_handle">
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6 md:mt-32">
                    <div className="md:mr-6 md:ml-0 -ml-12">
                        {/* Google Maps Embed */}
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.930646448938!2d77.21926851506869!3d28.62934796653987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd33fcc00001%3A0x75a3b7f8abd91aeb!2sIndraprakash%20Building!5e0!3m2!1sen!2sin!4v1709192605950!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-96"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
