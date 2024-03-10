import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function VolunteerInformation() {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/ngo/Volunteer');
                const data = response.data.data;
                console.log('Fetched volunteer data:', data);
                setVolunteer(data);
            } catch (error) {
                console.error('Error fetching volunteer data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Content>
            {volunteer.map((element, index) => (
                <CardContainer key={index}>
                    <Card>
                        <CardHeader>Sr.No: {index+1}</CardHeader>
                        <CardBody>
                            <CardBodyItem>Name: {element.name}</CardBodyItem>
                            <CardBodyItem>Email: {element.email}</CardBodyItem>
                            <Description>Description: {element.description}</Description>
                        </CardBody>
                    </Card>
                </CardContainer>
            ))}
        </Content>
    );
}

const Content = styled.div`
    padding-top: 80px; /* Add padding to create space between navbar and content */
    display: flex;
    flex-wrap: wrap;
`;

const CardContainer = styled.div`
    width: 50%;
    box-sizing: border-box;
    padding: 0 10px;
    margin-bottom: 20px;
`;

const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const CardHeader = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const CardBody = styled.div`
    flex: 1;
`;

const CardBodyItem = styled.div`
    margin-bottom: 5px;
`;

const Description = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 50px;
    overflow-y: auto;
`;

export default VolunteerInformation;
