import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

const Volunteer = () => {
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [eventInfo, setEventInfo] = useState({
        eventName: "",
        description: "",
        image: null,
        registrationDate: "",
        eventDate: "",
        location: "",
        time:"",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEventInfo((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setEventInfo((prevEvent) => ({
            ...prevEvent,
            image: file,
        }));
    };

    const handleClear = () => {
        setEventInfo({
            eventName: "",
            description: "",
            image: null,
            registrationDate: "",
            eventDate: "",
            location: "",
            time:"",
        });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData();
        formData.append("eventName", eventInfo.eventName);
        formData.append("description", eventInfo.description);
        formData.append("image", eventInfo.image);
        formData.append("registrationDate", eventInfo.registrationDate);
        formData.append("eventDate", eventInfo.eventDate);
        formData.append("location", eventInfo.location);
        formData.append("time", eventInfo.time);

        try {
            const response = await axios.post("http://localhost:8000/ngo/event", formData);
            console.log(response.data); 
            handleClear();
        } catch (error) {
            console.log(`ERROR: ${error}`);
        }
        
        setLoading(false);
    };

    return (
        <div className="relative w-full py-12 mt-10">
            <div className="flex justify-end pr-6 mt-n4 mb-4">
                <Button
                    onClick={() => setShowForm(true)}
                    className="p-3 mt-2 justify-center bg-orange text-white border border-b-2 border-orange flex items-center font-quicksand hover:bg-primary hover:border-primary"
                >
                    Create Event
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
                                id="eventName"
                                name="eventName"
                                value={eventInfo.eventName}
                                onChange={handleInputChange}
                                placeholder="Event Name"
                                type="text"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <textarea
                                id="description"
                                name="description"
                                value={eventInfo.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                                rows="3"
                            />
                            <input
                                id="image"
                                name="image"
                                onChange={handleImageChange}
                                type="file" // Change input type to file
                                accept="image/*" // Accept only image files
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <input
                                id="registrationDate"
                                name="registrationDate"
                                value={eventInfo.registrationDate}
                                onChange={handleInputChange}
                                placeholder="Registration Date"
                                type="date"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <input
                                id="eventDate"
                                name="eventDate"
                                value={eventInfo.eventDate}
                                onChange={handleInputChange}
                                placeholder="Event Date"
                                type="date"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
                            />
                            <input
                                id="time" // ID for event time input
                                name="time" // Name for event time input
                                value={eventInfo.time} // Value from state
                                onChange={handleInputChange} // Event handler
                                placeholder="Event Time" // Placeholder text
                                type="time" // Input type set to time
                                required // Required field
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none" // CSS classes
                            />
                            <input
                                id="location"
                                name="location"
                                value={eventInfo.location}
                                onChange={handleInputChange}
                                placeholder="Location"
                                type="text"
                                required
                                className="p-2 font-quicksand border border-gray-600 rounded-md focus:outline-none"
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
