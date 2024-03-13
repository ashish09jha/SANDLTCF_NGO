import { IoIosArrowForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaPhone } from 'react-icons/fa6';
import { TiSocialTwitter } from 'react-icons/ti'; // Import Twitter icon
import React from "react";

const Footer = () => {
    // Create an array of link texts
    const linkData = [
        { text: "Home", href: "/", color: "red" },
        { text: "About Us", href: "/about", color: "white" },
        { text: "Projects", href: "/recent", color: "red" },
        { text: "Gallery", href: "/gallery", color: "white" },
        { text: "Contact", href: "/about", color: "red" },
    ];

    // Function to get the current year
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };


    return (
        <section className='justify-center  items-center' style={{ background: "black" }}>
            <div className="bg-black p-4 ">
                <div className="container md:ml-0 ml-4 md:mx-auto md:flex md:justify-between md:mt-10 md:gap-6">
                    {/* Center Section */}
                    <div className="md:w-1/3 ">
                        <div className='border-l-4 pl-3 border-white md:pl-4 md:mt-0 mt-6'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva tracking-wide text-white'>ABOUT US</h2>
                        </div>
                        <div >
                            <p className=" font-quicksand md:text-md text-sm pb-4 p-2 text-white">
                                Welcome to S&L Trehan Charitable Foundation.<br /><br />Our mission is to help the underprivileged community towards development through education and skills
                                training, livelihoods, education, health, research, social and economic empowerment by networking with other groups and direct intervention for transforming their lives and develop
                                confidence to succeed in their life.
                            </p>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="md:w-1/3 text-center">
                        <div className='border-l-4 pl-3 border-white md:mt-0 mt-6 md:pl-4'>
                            <h2 className='text-2xl font-yeseva mb-8 font-yeseva text-white tracking-wide text-left'>POPULAR LINKS</h2>
                        </div>
                        <div className="grid md:grid-cols-1 grid-cols-2 gap-4 md:text-md text-sm md:ml-8">
                            {linkData.map((data, index) => (
                                <a key={index} href={data.href} className="font-quicksand flex items-center text-white text-md hover:text-orange  text-left" style={{ color: data.color }}>
                                    <IoIosArrowForward className='mr-4' />
                                    {data.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Left Section */}
                    <div className="md:w-1/3 ">
                        <div className='border-l-4 pl-3 border-white md:pl-4 md:mt-0 mt-10'>
                            <h2 className='text-2xl font-yeseva md:mb-8 mb-6 font-yeseva text-white tracking-wide'>OUR HEAD OFFICE</h2>
                        </div>
                        <div className='block items-center md:text-md text-sm'>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <IoLocationSharp className='mr-4 w-4 h-4' />
                                815 Indra Prakash Building, 21 Barakhambha Road, New Delhi
                            </p>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <FaPhone className='mr-4 h-4 w-4' />
                                011-23721201/ +91-9899801561
                            </p>
                            <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-white">
                                <MdEmail className='mr-4 w-4 h-4' />
                                sandltcf@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center md:mt-5 mt-1 md:mb-0 mb-10 text-white gap-6'>
                            <a href='https://web.facebook.com/profile.php?id=61553867905255' className='p-2 border border-white rounded-full inline-block'>
                                <BsFacebook className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>

                            <a href='https://www.instagram.com/restorationfoundation_int' className='p-2 border border-white rounded-full inline-block'>
                                <BsInstagram className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                            {/* Replace LinkedIn icon with Twitter icon */}
                            <a href='#' className='p-2 border border-white rounded-full inline-block'>
                                <TiSocialTwitter className='h-4 w-4 transition-transform transform hover:scale-110' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='justify-center items-center text-center md:mt-16 mt-10 mb-6 md:mb-4'>
                    <p className=' font-quicksand text-white md:text-md text-sm'
                    >© {getCurrentYear()} <span className='text-red md:text-md'>S&L Trehan Charitable Foundation</span>  Developed by <a href='#' className='font-medium md:text-md text-sm hover:text-gold'>Ashish Narayan Jha</a> </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
