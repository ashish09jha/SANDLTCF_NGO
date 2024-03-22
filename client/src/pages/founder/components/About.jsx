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
                                <h1 className="mt-20 mb-5 text-xl max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    About the Founder
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-2xl lg:text-3xl font-semibold md:ml-0 -ml-8 font-quicksand ">
                                Mr. S.K.Trehan
                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                <span className='text-orange font-semibold'> Mr. S.K. Trehan</span> is the Founder Trustee & Chairman of S & L Trehan Charitable Foundation. He is one of the renowned philanthropists who left USA only to serve the nation. He worked for more than 35 years in US and came to India for a visit. While he was walking near a construction where he saw a young child whose mother tied him in a rope to a brick so that mother can work and child can’t go anywhere. His heart melted due to a mother labour problem. He decided to work for welfare of these underprivileged children through education and providing them nutritious meal so that they can focus better.
                            </p>
                            <p class="mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                               According to him, the three fundamental mantras for success are:<br></br><br></br>

                                <ul class="list-disc mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand">
                                    <li><b>Solid Concept</b>: Mr. Trehan emphasizes the importance of staying true to each concept and avoiding mere replication.</li>
                                    <li><b>Hard Work, Smart Work, Passion</b>: A successful venture requires a balanced blend of diligent effort, intelligent strategies, and unwavering passion.</li>
                                    <li><b>Engage with Stakeholders</b>:  Paying attention to all aspects during the implementation of plans is crucial to achieving the desired outcomes.</li>
                                </ul>


                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
