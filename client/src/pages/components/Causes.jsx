import Img1 from '../../assets/causes-1.jpg';
import Img2 from '../../assets/causes-2.jpg';
import Img3 from '../../assets/causes-3.jpg';
import Img4 from '../../assets/causes-4.jpg';
import Img5 from '../../assets/causes-5.jpg';
import Img6 from '../../assets/causes-6.jpg';
import { GoArrowRight } from 'react-icons/go';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { Link } from 'react-router-dom';

const causesData = [
    {
        category: "Mobile School",
        image: Img1,
        title: 'Mobile School',
        progress: 2.54,
        goal: "5",
        raise: "750",
        description: 'With a firm initiative to help these children of the labour class, S & L Trehan Charitable Foundation, has launched Mobile School with afull-fledged mobile buses in National Capital Territory Region after conducting a baseline survey mainly aimed at bringing basic education to underprivileged children. Mobile school has basic facilities like any normal school in Buses. The mobile school will target 2000 migrant children.',
        link: "/donate",
        join: "/recent"
    },
    {
        image: Img2,
        category: "Article",
        title: 'Skill Development & Training',
        progress: 3.75,
        goal: "3",
        raise: "500",
        description: 'Surinder & Lalita Trehan Charitable Foundation has set up Skill Development & Vocational Education Centre, near Sultanpur Sanctuary, Farrukhnagar, Gurgaon wherein 1500 rural boys/ girls / women will be trained for various skill oriented programmes.Survey has been done in 5 selected villages in the vicinity.Helping the underprivileged community towards development through education and skills training, livelihoods.',
        link: "/donate",
        join: "/about"
    },
    {
        image: Img3,
        category: "Announcement",
        title: 'Balsthal Programme',
        progress: 5,
        goal: "2",
        raise: "350",
        description: '"Balsthal" is one of our flagship programme imparting free education to underprivileged/migrant children. We have established "Balsthal" centre especially for children of construction workers at L-Block,Cassia Marg, DLF City Phase-II wherein daily classes are held by trained teachers. Providing Free mid-day meal, study material and uniform, covering underprivilidged children of the labourers.',
        link: "/donate",
        join: "/about"
    },
    {
        image: Img4,
        category: "Announcement",
        title: ' Food Prog.',
        progress: 5,
        goal: "2",
        raise: "350",
        description: 'S&L Foundation has been providing free nutritious food 1000 needy people including children studying at Mobile School camps.S&L Foundation has been working for Covid affected people since first lockdown and supported more than 3000 familes in providing free ration covid relief material kits and cooked food and water to Covid patients and their attendants in Lockdown 1 and lockdown 2.',
        link: "/donate",
        join: "/about"
    },
    {
        image: Img5,
        category: "Announcement",
        title: 'Medical Assistance to Migrant Labour',
        progress: 5,
        goal: "2",
        raise: "350",
        description: '"Balsthal" is one of our flagship programme imparting free education to underprivileged/migrant children. We have established "Balsthal" centre especially for children of construction workers at L-Block,Cassia Marg, DLF City Phase-II wherein daily classes are held by trained teachers. Providing Free mid-day meal, study material and uniform, covering underprivilidged children of the labourers.',
        link: "/donate",
        join: "/about"
    },
    {
        image: Img6,
        category: "Vocational Training to Women",
        title: 'Vocational Training Prog. for Women',
        progress: 5,
        goal: "2",
        raise: "350",
        description: 'Surinder & Lalita Trehan Charitable Foundation has set up Skill Development & Vocational Education Centre, near Sultanpur Sanctuary, Farrukhnagar, Gurgaon wherein 1500 rural boys/ girls/women will be trained for various skill oriented programmes. Survey has been done in 5 selected villages in the vicinity. Helping the underprivileged community towards development through education and skills training, livelihoods.',
        link: "/donate",
        join: "/about"
    },
];


const Causes = () => {
    return (
        <div className='justify-center align-center md:mt-6 -mt-4'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-8'>
                    <p className="font-quicksand items-center font-bold text-2xl text-green mb-2 ">
                        Projects
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-8 md:p-6 p-6 ">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {causesData.map((cause, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                            <div className="image-container relative cursor-pointer overflow-hidden">
                                <img
                                    src={cause.image}
                                    alt="Blog Image"
                                    className="object-center object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>

                            <h3 className="text-sm md:text-lg hover:text-green cursor-pointer text-center font-medium font-quicksand mt-4 mb-2">{cause.title}</h3>
                            {/* <div className="text-sm text-gray-500 mb-4 mt-4 flex gap-4 justify-center">
                                <Progress percent={cause.progress} />
                            </div> */}
                            <div className='flex gap-16 mt-4 justify-center mb-4'>
                                <p className='font-quicksand'> No of Centres : <span className='font-quicksand font-bold text-green'>{cause.goal}</span></p>
                                <p className='font-quicksand'> Students Enrolled : <span className='font-quicksand font-bold text-green'>{cause.raise}</span> </p>
                            </div>

                            <p className="text-gray-900 mb-4 text-sm font-quicksand">{cause.description}</p>
                            <div className='justify-center items-center flex md:mt-2'>
                                <Link to={cause.join} className='flex items-center border-b-4 font-semibold border border-green hover:border-primary p-2 text-gray-600 font-quicksand rounded-md m-2 cursor-pointer'>
                                    Lean More
                                    <GoArrowRight className="ml-2 mr-2" />
                                </Link>
                                <Link to={cause.link} className='flex items-center border-b-4 font-semibold border border-green hover:border-primary p-2 text-gray-600 font-quicksand rounded-md m-2 cursor-pointer'>
                                    Donate
                                    <GoArrowRight className="ml-2 mr-2" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Causes;