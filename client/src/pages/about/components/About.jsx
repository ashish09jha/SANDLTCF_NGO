import React from "react";
import Image from '../../../assets/carousel-3.jpg';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const About = () => {

    const [activeTab, setActiveTab] = React.useState("mission");

    const data = [
        {
            label: "Mission",
            value: "mission",
            desc: `Ministering to the needs of the young person and restoring them to their divine destiny`,
        },
        {
            label: "Vision",
            value: "vision",
            desc: `To develop a community of friendship, personal fulfillment and recreation for all participants`,
        },
        {
            label: "Values",
            value: "core-values",
            desc: `We are divinely Chosen to Share and Share. Donors, Board, Staff, Volunteers and Beneficiaries are set for social development
            and re-orientation. We respect each individual's dignity and uniqueness`,
        },
    ];

    return (
        <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 mb-16 mt-14">
                <div className="lg:order-1">
                    {/* Left Section */}
                    <div className="left-section md:ml-6  ">
                        <div className="lg:order-2 relative z-2">
                            <div className="about-img relative overflow-hidden p-5 pe-0 ">
                                <div className="absolute top-0 left-0 w-full h-full transform -skew-x-20 z-1"></div>
                                <img className="w-96 md:w-full h-auto relative z-2" src={Image} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:order-2">
                    {/* Right Section */}
                    <div className="right-section">
                        <div className="lg:order-1 ml-8" >
                            <div className=' border-l-4 border-green md:-ml-1 -ml-8 max-w-full'>
                                <h1 className="mb-5 text-xl  max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    Learn About Us
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-3xl lg:text-5xl font-semibold md:ml-0 -ml-8 font-quicksand">
                                Worldwide non-profit charity organization
                            </h1>

                            <p className=" mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand ">
                                Our mandate is to train, educate, entertain, develop and nurture (TEEN) the youth in the areas of Health, Environment, Education, Construction,
                                Water and Sanitaion to make them conscious and responsible leaders in their respective communities.
                            </p>

                            <Tabs value={activeTab} className='md:ml-0 -ml-8 md:mb-0 -mb-14'>
                                <TabsHeader
                                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mt-4"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-green shadow-none rounded-none",
                                    }}
                                >
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            onClick={() => setActiveTab(value)}
                                            className={activeTab === value ? "text-gray-900 md:text-lg text-lg font-quicksand font-semibold text-green" : "font-quicksand text-lg font-semibold"}
                                        >
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody>
                                    {data.map(({ value, desc }) => (
                                        <TabPanel key={value} value={value} className="font-quicksand md:text-md text-sm">
                                            {desc}
                                        </TabPanel>
                                    ))}
                                </TabsBody>
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
