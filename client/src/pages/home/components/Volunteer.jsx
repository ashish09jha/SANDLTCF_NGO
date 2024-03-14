import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import swal from "sweetalert";

const Volunteer = () => {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false); 

    const [donateInfo, setDonateInfo] = useState({
        email: "",
        fullname: "",
        reason: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDonateInfo((prevDonate) => ({
            ...prevDonate,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setDonateInfo({
            email: "",
            fullname: "",
            reason: "",
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        // Destructure the donateInfo object for clarity
        const { fullname, email, reason } = donateInfo;
    
        try {
            // Assuming you are using fetch, I've corrected the code
            const res = await fetch("http://localhost:8000/ngo/Volunteer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([
                    [
                        new Date().toLocaleString(),
                        fullname,
                        email,
                        reason,
                    ],
                ]),
            });
    
            // Check if the response is successful
            if (res.ok) {
                // Use SweetAlert to show success message
                swal(
                    "S&L Trehan Charitable Foundation",
                    "Information Submitted",
                    "success"
                );
                // Close the form after successful submission
                setShowForm(false);
                // Optionally, you can handle other actions after a successful submission here
            } else {
                // Handle errors if the response is not successful
                swal(
                    "S&L Trehan Charitable Foundation",
                    "Error Sending Information",
                    "error"
                );
            }
        } catch (error) {
            // Handle errors in the fetch or other unexpected errors
            console.log(error);
            swal(
                "S&L Trehan Charitable Foundation",
                "Error Sending Information",
                "error"
            );
        }
    
        setLoading(false);
        handleClear();
    };
    

    return (
        <div className="relative w-full py-12 mt-10">
            <div className="flex justify-center">
                <Button
                    onClick={() => setShowForm(true)} // Show the form when the button is clicked
                    className="p-3 mt-2 justify-center bg-orange text-white border border-b-2 border-orange flex items-center font-quicksand hover:bg-primary hover:border-primary"
                >
                    Become a Volunteer
                </Button>
            </div>

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-md" style={{ backgroundColor: 'white' }}>
                        <form onSubmit={handleSave} className="flex flex-col gap-6">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="absolute top-2 right-2 bg-gray-200 text-gray-800 px-2 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
                            >
                                Close
                            </button>
                            <input
                                id="fullname"
                                name="fullname"
                                value={donateInfo.fullname}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                type="text"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <input
                                id="email"
                                name="email"
                                value={donateInfo.email}
                                onChange={handleInputChange}
                                placeholder="Email Address"
                                type="email"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <textarea
                                id="reason"
                                name="reason"
                                value={donateInfo.reason}
                                onChange={handleInputChange}
                                placeholder="Why do you want to become a Volunteer?"
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
