import { HiBadgeCheck } from "react-icons/hi";
// import { useEffect, useRef } from 'react';
import Doris from '../../assets/team/Doris.png';
import Sitsofe from '../../assets/team/Sitsofe.png';
import William from '../../assets/team/William.png';
import George from '../../assets/team/George.png';
import { useInView } from "react-intersection-observer";

const teamData = [
    {
        name: 'S.K. Trehan',
        role: "Founder of S&L Trehan Charitable Foundation",
        role2: "Founder",
        image: William,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Lalita Trehan',
        role: "Co-Founder of S&L Trehan Charitable Foundation",
        role2: "Co-Founder",
        image: Doris,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Dr. Akhilesh Jain ',
        role: "Executive Director of S&L Trehan Charitable Foundation",
        role2: "Executive Director",
        image: George,
        badge: <HiBadgeCheck />,
    },
    {
        name: 'Dhruv Narayan Jha',
        role: "Project Manager of S&L Trehan Charitable Foundation",
        role2: "Project Manager",
        image: Sitsofe,
        badge: <HiBadgeCheck />,
    },
    
];

const Team = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // const initialDisplayCount = 4;
    // const [displayCount, setDisplayCount] = React.useState(initialDisplayCount);

    // const handleViewMore = () => {
    //     setDisplayCount(displayCount + initialDisplayCount);
    // };

    return (
        <div className='justify-center align-center mt-8 pb-16'>
            <div className=''>
                <div className='text-center mx-auto mb-4 mt-24'>
                   
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl text-gray-600 mb-4 md:max-w-[700px] md:ml-[25%] mt-6 md:p-0 p-2">
                        Meet Our Team
                    </h2>
                </div>
            </div>
            <div className="flex justify-center p-2 mt-8 relative">
                <div
                    ref={ref}
                    className={`grid md:grid-cols-4 grid-cols-1 gap-4 `}>
                    {teamData.map((team, index) => (
                        <div key={index}
                            className={`m-4 rounded-md relative pb-16 ${inView ? "zoom-in zoom-in-animation-active" : ""} `}  >
                            <img src={team.image} alt={`Team-${index + 1}`} className="w-full h-full object-cover object-center rounded-md" />
                            <div className="w-[70%] shadow-lg h-32 absolute bottom-0 left-1/2 pb-8 transform -translate-x-1/2 bg-white border-orange border-b-4 rounded-md text-center">
                                <h2 className=' font-quicksand mt-4 text-sm font-bold'>{team.name}</h2>
                                <div className='flex items-center justify-center mt-3 '>
                                    <p className='font-quicksand font-medium text-sm text-gray-600'>{team.role2}</p>
                                    <p className='ml-4 items-center text-orange'>{team.badge}</p>
                                </div>
                                <p className='mt-3 font-quicksand text-xs font-medium text-gray-600'>{team.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* After Team Data */}
            {/* .slice(0, displayCount) */}
            {/* {displayCount < teamData.length && (
                <div className='flex justify-center mt-4'>
                    <button
                        className='px-4 py-2 bg-orange hover:bg-primary text-white rounded-sm font-quicksand'
                        onClick={handleViewMore}
                    >
                        View More
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default Team;
