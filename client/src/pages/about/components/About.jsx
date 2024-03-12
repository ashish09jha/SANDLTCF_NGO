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
            desc: `Helping the underprivileged community towards development through education and skills training to help them to earn their livelihood with dignity and economic empowerment by networking with other groups and direct intervention for transforming their lives and develop confidence to succeed in their life.`,
        },
        {
            label: "Vision",
            value: "vision",
            desc: [
                "To bring out the divinity in mankind and seeks a world where people live in peace and prosperity and they have dignity, respect and equal opportunity.",
                "A happy, healthy and creative child whose rights are protected and honored in a society that is built on respect for dignity and justice for all.",
                "Economic empowerment by networking with other groups and direct intervention for transforming their lives and develop confidence to succeed in their life.",
                "Using latest technologies and knowledge in its activities at ground level, the grass root level and effective functioning in surroundings of construction sites of Millennium City.",
                "To contribute to the enhancement of a feeling of pride in being a responsible citizen to empower community and relevance to today's world.",
                "To make S&L TCF a reputed nonprofit organization that ensure lasting change for unprivileged children and restored their basic rights to education, healthcare, nutrition and holistic improvement .",
                "To ensure restoring the rights of underprivileged children ranges from making Mobile Schools function better, ensuring healthcare becomes a reality , addressing the issue of child labour , preventing child from trafficking and giving girls equal opportunities.",
                "Working towards achieving basic and lively hood literacy. Imparting free education and all possible assistance to the down trodden",
                "Launching programs for physical, mental and spiritual health as the reality of childhood is very different .",
                "Helping the underprivileged community towards development through education and skills training to help them to earn their livelihood with dignity."

            ].map((point, index) => <li key={index}>{point}</li>).reduce((acc, curr) => [acc, <br key={`br_${Math.random()}`} />, curr])
        },
        {
            label: "Values",
            value: "core-values",
            desc: [

                "Providing free basic education to Economically Weaker Sections / underprivileged / Differently Abled / Divyang / migrant children.",
                "Providing opportunity to  dropouts children and further connect them to skill development programmes so that they can come into the mainstream of the society.",
                "Preventing them from social ills such as; child marriage, drug addition, begging, rag-picking, etc."
            ].map((point, index) => <li key={index}>{point}</li>).reduce((acc, curr) => [acc, <br key={`br_${Math.random()}`} />, curr])
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
                            <div className=' border-l-4 border-orange md:-ml-1 -ml-8 max-w-full'>
                                <h1 className="mb-5 text-xl  max-w-[95%] w-full lg:text-2xl ml-3 text-gray-600 font-semibold font-raleway">
                                    Learn About Us
                                </h1>
                            </div>
                            <h1 className="mb-4 md:p-0 md:mb-8 text-3xl lg:text-5xl font-semibold md:ml-0 -ml-8 font-quicksand">
                                S&L Trehan Charitable Foundation
                            </h1>

                            <blockquote class="relative mb-4 text-md md:p-0 md:text-md md:ml-0 -ml-8 font-quicksand">
                                <p>&ldquo;All the resources over and above our needs should be spent on the needy and underprivileged children of God&rdquo;</p>
                                <footer class="text-right">- Surinder K. Trehan</footer>
                            </blockquote>



                            <Tabs value={activeTab} className='md:ml-0 -ml-8 md:mb-0 -mb-14'>
                                <TabsHeader
                                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 mt-4"
                                    indicatorProps={{
                                        className:
                                            "bg-transparent border-b-2 border-orange shadow-none rounded-none",
                                    }}
                                >
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            key={value}
                                            value={value}
                                            onClick={() => setActiveTab(value)}
                                            className={activeTab === value ? "text-gray-900 md:text-lg text-lg font-quicksand font-semibold text-orange" : "font-quicksand text-lg font-semibold"}
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
