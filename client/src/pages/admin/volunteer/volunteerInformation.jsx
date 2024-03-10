import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VolunteerInformation() {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/ngo/Volunteer");
                const data = response.data.data;
                console.log("Fetched volunteer data:", data);
                setVolunteer(data);
            } catch (error) {
                console.error("Error fetching volunteer data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {volunteer.map((element, index) => (
                <div key={index}>
                    <div>Name: {element.name}</div>
                    <div>Email: {element.email}</div>
                    <div>Description: {element.description}</div>
                </div>
            ))}
        </div>
        // <div>
        //   Hellow
        // </div>
    );
}

export default VolunteerInformation;
