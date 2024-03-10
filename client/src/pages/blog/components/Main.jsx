import card1 from "../../../assets/blog-1.jpg";
import card2 from "../../../assets/blog-2.jpg";
import card6 from "../../../assets/blog-3.jpg";
import { FaCalendarAlt } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Main = () => {

    const blogData = [
        {
            category: "Community Outreach",
            image: card6,
            title: 'Empowering Local Communities through Education Initiatives',
            content: 'Discover how our organization is making education accessible and empowering local communities. Learn about our initiatives starting October 1, 2023.',
            author: 'Charity Foundation Team',
            date: 'October 10, 2023',
            link: "#",

        },
        {
            image: card1,
            category: "Impact Stories",
            title: 'Changing Lives: A Year in Review of our Philanthropic Journey',
            content: 'As we step into a new year, let us reflect on the positive impact we made in the past 12 months. Join us on this journey and explore the stories of lives transformed.',
            author: 'Charity Foundation Team',
            date: 'October 15, 2023',
            link: "#",

        },
        {
            image: card2,
            category: "Announcement",
            title: 'Building Hope: Our Latest Project for Shelter and Support',
            content: 'Learn more about our ongoing project focused on providing shelter and support to those in need. Discover the reasons behind our mission and how you can contribute.',
            author: 'Charity Foundation Team',
            date: 'October 20, 2023',
            link: "#",

        },
    ];

    return (
        <section className="p-6 md:mt-12">
            <div className="container mx-auto pb-8">
                <h2 className="md:text-4xl font-bold text-gray-600 text-2xl font-raleway mb-6 text-center md:mb-12">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogData.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                            <div className="image-container relative cursor-pointer">
                                <div className="image-overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-60"></div>
                                <img
                                    src={post.image}
                                    alt="Blog Image"
                                    className="object-center object-cover"
                                />
                                <div className="top-left-text bg-green text-white text-center text-sm font-semibold font-quicksand absolute top-4 md:pt-2 md:pb-2 md:pr-8 md:pl-8 pl-4  pr-4 pb-2 pt-2 rounded-sm">
                                    {post.category}
                                </div>
                            </div>

                            <h3 className="text-sm md:text-lg hover:text-green cursor-pointer font-medium font-quicksand mt-4 mb-2">{post.title}</h3>
                            <div className="text-sm text-gray-500 mb-4 mt-4 flex gap-4">
                                <div className="flex items-center">
                                    <FaCalendarAlt className="mr-1 md:h-4 md:w-4 text-green cursor-pointer hover:text-purple" />
                                    <p className="font-quicksand">{post.date}</p>
                                </div>
                                <div className="flex items-center">
                                    <IoPersonCircleOutline className="mr-1 md:h-6 md:w-6 text-green cursor-pointer hover:text-purple" />
                                    <p className="font-quicksand md:text-sm"> {post.author}</p>
                                </div>
                            </div>
                            <p className="text-gray-900 mb-4 text-sm font-quicksand">{post.content}</p>
                            <div className='md:p-2 p-2 md:mb-4 mb-3 bg-green hover:bg-primary mt-8 flex items-center text-white w-32 text-center hover:bg-blue hover:text-white rounded-md cursor-pointer '>
                                <Link to={post.link} className="text-center flex items-center">
                                    Read More
                                    <IoIosArrowForward className='ml-2' />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Main;
