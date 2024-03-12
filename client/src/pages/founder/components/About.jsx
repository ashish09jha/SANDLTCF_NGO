import Founder from '../../../assets/team/William.png';

const About = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mb-16 mt-14">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  md:mb-0 mb-6">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Founder} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:order-2 md:mb-0 -mb-16">
                    {/* Right Section */}
                    <div className="right-section">
                        <div className="lg:order-1 ml-8 md:-mb-24" >
                            <div className=' border-l-4 border-orange md:-ml-1 -ml-8 max-w-full md:-mt-56'>
                                <h1 className="mb-5 text-xl max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    About the Founder
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-2xl lg:text-3xl font-semibold md:ml-0 -ml-8 font-quicksand ">
                                Setting Sail on an Extraordinary Voyage: Uncovering the Inspirational Path of the Founder
                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                The Vision of establishing <span className='text-orange font-medium'>Restoration Foundation International</span> was conceived by
                                <span className='text-orange font-semibold'> Mr. William Kojo Amoabeng</span>.
                            </p>
                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                <span className='text-orange font-semibold'> Mr. William Kojo Amoabeng</span> was involved in various children and youth initiatives in Ghana, Canada
                                and the USA for several years and as a result developed a strong passion to reach out to the un-reached children and youth especially those in critical conditions
                                deprivation , poverty and neglect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
