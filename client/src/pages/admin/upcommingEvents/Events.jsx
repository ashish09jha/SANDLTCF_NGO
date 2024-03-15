import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Events() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

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
      await axios.delete(`http://localhost:8000/admin/${email}`);
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
        name: name,
        eventDate: eventDate,
        time: time,
        location: location,
        priority: localStorage.getItem("priority"),
      };
      await axios.post("http://localhost:8000/ngo/event", data);
      setEvents([...events, data]);
      setName("");
      setEventDate("");
      setTime("");
      setLocation("");
      setShowForm(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <EventsContainer>
      <ButtonContainer showForm={showForm}>
        <Button onClick={toggleForm}>Add Event</Button>
      </ButtonContainer>
      <FormContainer showForm={showForm}>
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
            <label htmlFor="date">Event Date:</label>
            <Input
              type="date"
              id="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="time">Time:</label>
            <Input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="location">Location:</label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </InputContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
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
  position: fixed;
  top: 120px;
  right: ${({ showForm }) => (showForm ? "20px" : "-300px")};
  transition: right 0.3s ease;
  z-index: 1000;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 60px;
  right: ${({ showForm }) => (showForm ? "-100px" : "20px")};
  z-index: 1000;
  transition: right 0.3s ease;
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

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

export default Events;
