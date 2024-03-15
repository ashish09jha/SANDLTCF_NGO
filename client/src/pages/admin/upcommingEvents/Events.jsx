import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Volunteer from './admin.jsx';

function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [addingNewEvent, setAddingNewEvent] = useState(false); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/ngo/Events");
            const data = response.data.data;
            setEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <Container>
            <Volunteer/>
            <Gallery>
                {events.map((event, index) => (
                    <EventContainer key={index}>
                        <p>{event.name}</p>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.location}</p> 
                    </EventContainer>
                ))}
            </Gallery>
        </Container>
    );
}

const Container = styled.div`
    margin-top: -20px;
    padding: 20px;
`;

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const EventContainer = styled.div`
    width: calc(33.33% - 20px);
    margin: 10px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Events;
