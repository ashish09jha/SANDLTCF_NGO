import React from "react";
import swal from "sweetalert";
import MTN from '../../../assets/MTN.png';
import VODA from '../../../assets/VODA.png'
import GCB from '../../../assets/GCB.png';
import ZENITH from '../../../assets/ZENITH.png';
import { FaPrayingHands } from "react-icons/fa";
import Typed from 'typed.js';
import { useEffect } from "react";

const Donate = () => {
    const typingRef = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(typingRef.current, {
            strings: [
                'Assistance',
                'Backing',
                'Aid',
                'Grant',
                'Endowment',
                'Benefaction',
                'Sponsorship',
                'Charity',
                'Gift',
                'Offering',
                'Subsidy',
                'Help',
            ],
            typeSpeed: 200,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const [loading, setLoading] = React.useState(false);
    const [activeForm, setActiveForm] = React.useState("donate");

    const [donateInfo, setDonateInfo] = React.useState({
        email: "",
        fullname: "",
        contact: "",
    })
    const handleClear = () => {
        setDonateInfo({
            email: "",
            fullname: "",
            contact: "",
        })
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Destructure the donateInfo object for clarity
        const { fullname, email, contact } = donateInfo;

        try {
            // Assuming you are using fetch, I've corrected the code
            const res = await fetch('https://v1.nocodeapi.com/kpanti/google_sheets/yyCouxnLhvkpKRdz?tabId=Donation', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([
                    [
                        new Date().toLocaleString(),
                        fullname,
                        email,
                        contact,
                    ],
                ]),
            });

            // Check if the response is successful
            if (res.ok) {
                // Use SweetAlert to show success message
                swal("Restoration Foundation International", "Information Submitted", "success");
                // Optionally, you can handle other actions after a successful submission here
            } else {
                // Handle errors if the response is not successful
                swal("Restoration Foundation International", "Error Sending Information", "error");
            }
        } catch (error) {
            // Handle errors in the fetch or other unexpected errors
            console.log(error);
            swal("Restoration Foundation International", "Error Sending Information", "error");
        }

        setLoading(false);
        handleClear();
    };

    return (
        <div className="relative w-full py-12 ">

            <div className="mx-auto flex flex-wrap items-center ml-12">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10 md:mt-4 -mt-2">
                    <div className="border-l-4 border-orange pl-2">
                        <h2 className='text-2xl font-quicksand text-orange font-medium ml-2'>Donate Now</h2>
                    </div>
                    <h2 className=' md:text-5xl text-3xl md:p-0 pr-1 font-quicksand mt-6 font-bold'>
                        Let us donate to needy people for better lives
                    </h2>
                    <p className='mt-6  font-quicksand max-w-[90%] md:text-lg text-sm'>
                        Your contribution has the power to transform lives. When you support our cause, you are making a significant impact.
                        Together, we can provide essential resources to those in need, ensuring a better future for all. Your generosity truly makes a difference.
                    </p>
                </div>
                {/* Right Column */}
                <div className="w-full lg:w-1/2 p-6">
                    <div className="bg-gray-200 p-6 rounded-md md:ml-0 -ml-14 md:mr-0 -mr-2">
                        <div className="flex justify-center gap-4 mb-6 mt-4">
                            <button
                                onClick={() => setActiveForm("donate")}
                                className={`px-8 py-2 ${activeForm === "donate" ? "bg-orange text-white rounded-sm font-quicksand" : "bg-gray-300 rounded-sm font-quicksand"
                                    }`}
                            >
                                Donate
                            </button>
                            <button
                                onClick={() => setActiveForm("contact")}
                                className={`px-8 py-2 ${activeForm === "contact" ? "bg-orange text-white rounded-sm font-quicksand" : "bg-gray-300 rounded-sm font-quicksand"
                                    }`}
                            >
                                Contact
                            </button>
                        </div>

                        {activeForm === "donate" && (
                            <form className="">
                                <div className="mb-6 border-gray-300 border-b-2">
                                    <div className="md:mb-2">
                                        <h1 className="text-center font-quicksand font-semibold text-xl"> Mobile Money</h1>
                                        <div className="flex gap-24 justify-center mt-2">
                                            {/* MTN */}
                                            <div className="mb-4 md:p-0 p-1">
                                                <h2 className=" text-md flex items-center gap-4 justify-center ">
                                                    <span className="font-medium font-quicksand">
                                                        MTN
                                                    </span>
                                                    <img
                                                        src={MTN}
                                                        alt="MTN MoMo"
                                                        className="h-12 w-12 object-center object-fit object-contain"
                                                    />
                                                </h2>
                                                <div className="">
                                                    <p className="font-quicksand font-medium text-md mt-1">----------</p>
                                                    <p className="font-quicksand mt-1 md:text-md text-sm">---------</p>
                                                </div>
                                            </div>
                                            {/* VODA */}
                                            <div>
                                                <h2 className=" text-md flex items-center gap-4 justify-center">
                                                    <span className="font-semibold font-quicksand">
                                                        Vodafone
                                                    </span>
                                                    <img
                                                        src={VODA}
                                                        alt="VODA MoMo"
                                                        className="h-12 w-12 mb-2 object-center object-fit object-contain"
                                                    />
                                                </h2>
                                                <div className="">
                                                    <p className="font-quicksand font-medium text-md">----------</p>
                                                    <p className="font-quicksand mt-1 md:text-md text-sm">----------</p>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className=" md:mb-0 mb-4">
                                    <h2 className="font-quicksand font-semibold text-xl text-center justify-center">Bank Account</h2>
                                    <div className="flex gap-24 justify-center mt-2">
                                        {/* MTN */}
                                        <div className="mb-4 md:p-0 p-1">
                                            <h2 className=" text-md flex items-center gap-4 justify-center ">
                                                <span className="font-medium font-quicksand">
                                                    Zenith
                                                </span>
                                                <img
                                                    src={ZENITH}
                                                    alt="MTN MoMo"
                                                    className="h-12 w-12 object-center object-fit object-contain"
                                                />
                                            </h2>
                                            <div className="">
                                                <p className="font-quicksand font-medium text-md mt-1">---------</p>
                                                <p className="font-quicksand mt-1 md:text-md text-sm">---------</p>
                                            </div>
                                        </div>
                                        {/* VODA */}
                                        <div>
                                            <h2 className=" text-md flex items-center gap-4 justify-center">
                                                <span className="font-semibold font-quicksand">
                                                    GCB
                                                </span>
                                                <img
                                                    src={GCB}
                                                    alt="VODA MoMo"
                                                    className="h-12 w-12 mb-2 object-center object-fit object-contain"
                                                />
                                            </h2>
                                            <div className="">
                                                <p className="font-quicksand font-medium text-md">---------</p>
                                                <p className="font-quicksand mt-1 md:text-md text-sm">----------</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="justify-center text-center flex items-center md:gap-4 mt-4 mb-4">
                                    <FaPrayingHands className="md:h-6 md:w-6 h-8 w-8 text-orange" />
                                    <p className="font-quicksand text-md">
                                        Thank you for your {''}
                                        <span className="font-semibold text-orange" ref={typingRef}></span>
                                    </p>
                                </div>
                            </form>
                        )}
                        {
                            activeForm === "contact" && (
                                <form onSubmit={handleSave} className="">
                                    <p className="font-quicksand mt-4 mb-4 text-center md:max-w-[90%]">
                                        Please fill out the form below, and we will get in touch with you
                                        shortly to facilitate your generous contribution.
                                    </p>
                                    <div className="mb-4">
                                        <label htmlFor="fullname" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            id="fullname"
                                            name="fullname"
                                            value={donateInfo.fullname}
                                            onChange={handleInputChange}
                                            className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block font-quicksand mb-2 text-gray-600 text-sm font-medium">Email</label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={donateInfo.email}
                                            onChange={handleInputChange}
                                            className="w-full border font-quicksand text-sm border-gray-300 focus:outline-none p-2"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="contact" className="block font-quicksand mb-2 text-gray-600 rounded-sm text-sm font-medium">Contact</label>
                                        <input
                                            required
                                            type="tel"
                                            id="contact"
                                            name="contact"
                                            value={donateInfo.contact}
                                            onChange={handleInputChange}
                                            className="w-full font-quicksand text-sm border border-gray-300 rounded-sm focus:outline-none p-2"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-orange w-full text-white font-medium rounded-sm font-quicksand md:mt-6 mt-4 px-4 py-2 hover:bg-primary mb-6"
                                    >
                                        {!loading ? (
                                            "Submit"
                                        ) : (
                                            "Submitting..."
                                        )}
                                    </button>
                                </form>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;
