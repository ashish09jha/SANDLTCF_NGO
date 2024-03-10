import React, { useState } from 'react';
import styled from 'styled-components';

const UpcomingEventForm = () => {
    const [formData, setFormData] = useState({
        image: null,
        name: '',
        description: '',
        registrationDate: '',
        eventDate: ''
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({
                ...formData,
                image: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container>
            <Title>Add New Upcoming Event</Title>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="image">Image:</Label>
                    <Input type="file" id="image" name="image" onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description:</Label>
                    <TextArea id="description" name="description" rows="4" value={formData.description} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="registrationDate">Registration Date:</Label>
                    <Input type="text" id="registrationDate" name="registrationDate" value={formData.registrationDate} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="eventDate">Event Date:</Label>
                    <Input type="text" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    text-align: center;
    color: #333;
`;

const Form = styled.form`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    font-weight: bold;
    color: #555;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const Button = styled.button`
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export { UpcomingEventForm };
