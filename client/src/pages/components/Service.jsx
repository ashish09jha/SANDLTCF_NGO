import { GiFruitBowl, GiWaterBottle, GiHealthCapsule, GiTeacher, GiSchoolBag, GiSkills, } from 'react-icons/gi';
import { MdMapsHomeWork } from 'react-icons/md';
import { FaPeopleCarry } from 'react-icons/fa';

const services = [
    {
        icon: <GiTeacher className='h-14 w-14 text-orange' />,
        title: 'Mobile School',
        description: 'With a firm initiative to help these children of the labour class. Mobile school has basic facilities like any normal school in Buses. ',
    },
    {
        icon: <GiSkills className='h-14 w-14 text-orange' />,
        title: 'Skill Development & Vocational Training ',
        description: 'Training Programmes for rural boys/ girls/women for various skill development.',
    },
    {
        icon: <GiHealthCapsule className='h-14 w-14 text-orange' />,
        title: 'Medical assistance to migrant labour',
        description: 'Delivering medical aids such as wheelchairs , medicines, and a dedicated Mobile Van taking them to hospitals in emergency .',
    },
    {
        icon: <GiSchoolBag className='h-14 w-14 text-orange' />,
        title: 'Balsthal Programme',
        description: '"Balsthal" is one of our flagship programme imparting free education to underprivileged/migrant children.',
    },
    {
        icon: <MdMapsHomeWork className='h-14 w-14 text-orange' />,
        title: 'Supporting Old Age Homes/Mentally retarded Persons',
        description: 'Our Trust has been supporting The Earth Saviour Foundation at Teri Village, Gurgaon. Trust has adopted Masoom Dunia , working for similar cause/special children.',
    },
    {
        icon: <FaPeopleCarry className='h-14 w-14 text-orange' />,
        title: 'Social Care',
        description: 'S&L Foundation has been providing free nutritious food to 1000 needy people including children studying at Mobile School campUs.',
    },
];

const Service = () => {
    return (
        <div className="justify-center align-center mt-6 md:pb-10 md:mb-14 mb-8 -pb-8">
            <div className="container">
                <div className="text-center mx-auto mb-4 mt-16">

                    <p className="font-quicksand items-center font-bold text-2xl text-orange mb-2 md:ml-[15%]">
                        Our Charitable Activities
                    </p>
                    <h2 className=" font-quicksand font-bold md:text-5xl text-3xl md:-p-0 p-4 text-gray-600 mb-4 md:-mb-6 md:max-w-[700px] md:ml-[32%] md:mt-6 mt-4">
                    God is formless, serve god through children of God
                    </h2>
                </div>
                <div className="services mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 md:mt-24 md:p-7 p-6 md:ml-24 ">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className=" flex items-center">
                                <div className=" mb-2">
                                    {service.icon}
                                </div>
                                <div className="border-l-4 border-orange rounded-lg ml-4 pl-4">
                                    <h3 className='font-quicksand font-bold text-2xl text-gray-600 mb-2 '>
                                        {service.title}
                                    </h3>
                                    <p className='mt-2 font-quicksand text-sm mb-4'>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
