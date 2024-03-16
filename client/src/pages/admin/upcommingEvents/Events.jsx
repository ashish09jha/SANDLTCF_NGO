import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Volunteer from './admin.jsx';
import  {localHost}  from '../../../../URL.js';

function Events() {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [addingNewEvent, setAddingNewEvent] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${localHost}/ngo/event`);
            const data = response.data.data;
            console.log(data);
            setEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    const handleDeleteCard = async (id) => {
        try {
            console.log("object")
            await axios.delete(`${localHost}/ngo/event/C/${id}`);
            setEvents(prevEvents => prevEvents.filter(events => events._id !== id));
        } catch (error) {
            console.error("Error deleting photo:", error);
        }
    };

    const handleSelectCard = async (index, id, status) => {
        console.log("object")
        try {
            const updatedEvent = [...events];
            updatedEvent[index].status = !updatedEvent[index].status;
            setEvents(updatedEvent);
            const data = {
                id: id,
                status: status,
            }
            await axios.patch(`${localHost}/ngo/event`, data);
        } catch (error) {
            console.log(`ERROR:${error}`)
        }
    };

    return (
        <Container>
            <Volunteer />
            <Gallery>
                {events.map((event,index )=> (
                    <Card key={event._id} selected={event.status}>
                        <EventName>{event.name}</EventName>
                        <ImageContainer>
                            <img src={event.image} alt={event.name} />
                            <ActionButtonContainer>
                                <SelectButton onClick={()=>handleSelectCard(index,event._id,event.status)}>{event.status?"Select":"Deselect"}</SelectButton>
                                <DeleteButton onClick={() =>handleDeleteCard(event._id)}>Delete</DeleteButton>
                            </ActionButtonContainer>
                        </ImageContainer>
                        <Content>
                            <Details>
                                <p><strong>Time:</strong> {event.time}</p>
                                <p><strong>Registration Date:</strong> {event.registrationDate}</p>
                                <p><strong>Event Date:</strong> {event.eventDate}</p>
                                <p><strong>Location:</strong> {event.location}</p>
                            </Details>
                            <Description>
                                <p><strong>Description:</strong></p>
                                <p>{event.description}</p>
                            </Description>
                        </Content>
                    </Card>
                ))}
            </Gallery>
        </Container>
    );
}

const EventName=styled.div`
font-weight: bold;
font-size: 24px; 
margin-top: 10px; 
`

const Container = styled.div`
    margin-top: -30px;
    padding: 20px;
`;

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
border-radius: 10px;
box-shadow: ${(props) => (props.selected ? '0 0 20px rgba(0, 123, 255, 0.3), 0 0 20px rgba(0, 123, 255, 0.3) inset' : '0 0 10px rgba(0, 0, 0, 0.1)')};
margin: 10px;
width: 300px;
overflow: hidden;
text-align: center;
position: relative;
border: ${(props) => (props.selected ? '2px solid #007bff' : '2px solid transparent')}; /* Add border color for selected cards */
background-color: ${(props) => (props.selected ? 'rgba(0, 123, 255, 0.1)' : 'white')}; /* Lighter background for selected cards */
cursor: pointer;
transition: box-shadow 0.3s ease, border 0.3s ease, background-color 0.3s ease; /* Add transition for smooth effect */

&:hover {
    box-shadow: ${(props) => (props.selected ? '0 0 20px rgba(0, 123, 255, 0.5), 0 0 20px rgba(0, 123, 255, 0.5) inset' : '0 0 15px rgba(0, 0, 0, 0.2)')};
}
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

const Details = styled.div`
    flex: 1;
    padding: 10px;
    border-right: 2px solid #eee;
`;

const Description = styled.div`
    flex: 1;
    padding: 10px;
`;

const ImageContainer = styled.div`
    position: relative;
    height: 400px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ActionButtonContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    display:flex;
    width:100%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    opacity: 0;
    transition: opacity 0.3s ease;
    ${Card}:hover & {
        opacity: 1;
    }
`;

const SelectButton = styled.div`
padding: 6px 12px;
margin-left:10px;
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

const DeleteButton = styled.div`
padding: 6px 12px;
    margin-right:10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #c82333;
    }
`;

export default Events;
