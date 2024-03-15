import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Events() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/ngo/event");
        const resp = response.data.data;
        setEvents(resp);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:8000/ngo/event/${email}`);
      setEvents(events.filter((event) => event.email !== email));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        name: name,
        priority: localStorage.getItem("priority"),
      };
      await axios.post("http://localhost:8000/ngo/event", data);
      // Assuming you want to update the events list after adding a new event
      setEvents([...events, data]);
      // Reset form fields
      setName("");
      setEmail("");
      // Close the form after submission
      setShowForm(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <EventsContainer>
      <ButtonContainer>
        <Button onClick={toggleForm}>Add Event</Button>
      </ButtonContainer>
      {showForm && (
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <label htmlFor="name">Name:</label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email:</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputContainer>
            {/* No need for a submit button */}
          </Form>
        </FormContainer>
      )}
      <EventsList>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.name} />
            <EventDetails>
              <EventName>{event.name}</EventName>
              <EventDescription>{event.description}</EventDescription>
              <EventDate>Date: {event.date}</EventDate>
              <DeleteButton onClick={() => handleDelete(event.email)}>Delete</DeleteButton>
            </EventDetails>
          </EventCard>
        ))}
      </EventsList>
    </EventsContainer>
  );
}

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
  margin-left: 10px;
`;

const EventsContainer = styled.div`
  width: 90%;
  margin: 20px auto;
`;

const EventsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EventCard = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const EventDetails = styled.div`
  padding: 15px;
`;

const EventName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555;
`;

const EventDate = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DeleteButton = styled.button`
  background-color: #dc3545; /* Red color */
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

export default Events;
