import { FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const TopBar = () => {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.930646448938!2d77.21926851506869!3d28.62934796653987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd33fcc00001%3A0x75a3b7f8abd91aeb!2sIndraprakash%20Building!5e0!3m2!1sen!2sin!4v1709192605950!5m2!1sen!2sin";
    const openGoogleMaps = () => {
        window.open(googleMapsUrl, "_blank");
    };

    return (
        <div className="absolute bg-gray-100 md:h-16 w-full top-0 left-0 z-3 border-b border-opacity-30">
            <div className="container md:mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row gap-2 items-center">
                        <div className="flex items-center md:pt-0 pt-2 align-center md:justify-center md:flex-row md:h-16 -mb-2 px-10 text-center gap-2 md:first:-ml-8">
                            <FaPhone className="text-orange md:h-4 md:w-4 h-3 w-3 mr-1" />
                            <a href="tel:+919899801561" className="text-sm md:my-0 font-quicksand cursor-pointer hover:text-orange">
                                011-23721201
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="border-l border-gray-400 h-12"></div> {/* Vertical Border */}
                        </div>
                        <div className="text flex items-center md:pt-2 pt-1 justify-center flex-row md:h-16 px-10 text-center gap-2 last:border-l-0">
                            <MdEmail className="text-orange md:h-4 md:w-4 w-3 h-3 mr-1" />
                            <a href="mailto:sandltcf@gmail.com" className="text-sm md:my-0 font-quicksand cursor-pointer hover:text-orange ">
                                sandltcf@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 md:gap-8 md:ml-auto">
                        <FaFacebook className="text-lg md:text-2xl text-gray-500 hover:text-blue-500 cursor-pointer" />
                        <FaTwitter className="text-lg md:text-2xl text-gray-500 hover:text-blue-500 cursor-pointer" />
                        <FaInstagram className="text-lg md:text-2xl text-gray-500 hover:text-blue-500 cursor-pointer mr-2" />
                        {/* Add margin-right to add spacing */}
                        <IoLocationSharp className="text-lg md:text-2xl text-orange hover:text-blue-500 cursor-pointer" onClick={openGoogleMaps}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
