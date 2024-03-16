import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from 'axios'

const Volunteer = () => {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        suggestion: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setFormData({
            name: "",
            email: "",
            suggestion: "",
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            const data=await axios.post(`http://sandltcf-ngo.onrender.com/ngo/visitorsReview`,formData)
        }catch(error){
            console.log(`ERROR:${error}`);
        }
        setLoading(false);
        handleClear();
    };

    return (
        <div className="relative w-full py-12 mt-10">
            <div className="flex justify-end pr-6 mt-n4 mb-4">
                <Button
                    onClick={() => setShowForm(true)}
                    className="p-3 mt-2 justify-center bg-orange text-white border border-b-2 border-orange flex items-center font-quicksand hover:bg-primary hover:border-primary"
                >
                    Provide Feedback
                </Button>
            </div>

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
                    <div
                        className="bg-white p-6 rounded-md relative"
                        style={{ backgroundColor: "white", width: "500px" }} // Increased width to 500px
                    >
                        <div className="flex justify-end mb-4">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="flex flex-col gap-6">
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                type="text"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <input
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                type="email"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <textarea
                                id="suggestion"
                                name="suggestion"
                                value={formData.suggestion}
                                onChange={handleInputChange}
                                placeholder="Your Suggestion"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                                rows="3"
                            />

                            <Button
                                type="submit"
                                className="p-3 mt-2 justify-center bg-orange text-white border border-b-2 border-orange flex items-center font-quicksand hover:bg-primary hover:border-primary"
                            >
                                {!loading ? "Submit" : "Submitting..."}
                            </Button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Volunteer;
