import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Events() {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        name: '',
        date: '',
        time: '',
        location: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [addingNewEvent, setAddingNewEvent] = useState(false); 
    const [showForm, setShowForm] = useState(false);

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

    const handleAddEvent = () => {
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          setIsLoading(true);
          await axios.post("http://localhost:8000/ngo/Events", newEvent);
          setEvents(prevEvents => [...prevEvents, newEvent]);
          setIsLoading(false);
          setAddingNewEvent(false);
          setNewEvent({
              name: '',
              date: '',
              time: '',
              location: ''
          });
          setShowForm(false); // Close the form after successful submission
      } catch (error) {
          console.error("Error adding event:", error);
          setIsLoading(false); // Reset loading state in case of error
      }
  };
  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={handleAddEvent}>Add Event</Button>
            </ButtonContainer>
            {showForm && (
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <label htmlFor="name">Name:</label>
                        <Input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={newEvent.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="date">Date:</label>
                        <Input 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={newEvent.date} 
                            onChange={handleChange} 
                            required 
                        />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="time">Time:</label>
                        <Input 
                            type="time" 
                            id="time" 
                            name="time" 
                            value={newEvent.time} 
                            onChange={handleChange} 
                            required 
                        />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="location">Location:</label>
                        <Input 
                            type="text" 
                            id="location" 
                            name="location" 
                            value={newEvent.location} 
                            onChange={handleChange} 
                            required 
                        />
                    </InputContainer>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </Form>
            )}
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
    margin-top: 50px;
    padding: 20px;
`;

const ButtonContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
`;

const Form = styled.form`
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    margin-bottom: 15px;
`;

const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
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
