import React, { useState } from 'react';
import styled from 'styled-components';

const MyComponent = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
      suggestions: ['Go for a walk', 'Read a book', 'Cook a meal'],
      time: '12:00 PM',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      suggestions: ['Watch a movie', 'Take a nap', 'Call a friend'],
      time: '2:30 PM',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      email: formData.email,
      suggestions: [formData.suggestion],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setReviews([...reviews, newReview]);
    setFormData({
      name: '',
      email: '',
      suggestion: ''
    });
  };

  return (
    <Container>
      <CardContainer>
        {reviews.map((review, index) => (
          <Card key={index}>
            <Name>{review.name}</Name>
            <Email>{review.email}</Email>
            <Suggestions>
              {review.suggestions.map((suggestion, idx) => (
                <SuggestionCard key={idx}>{suggestion}</SuggestionCard>
              ))}
            </Suggestions>
            <Time>{review.time}</Time>
          </Card>
        ))}
      </CardContainer>
      <Form onSubmit={handleSubmit}>
        <InputLabel>Name:</InputLabel>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <InputLabel>Email:</InputLabel>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <InputLabel>Suggestion:</InputLabel>
        <TextArea name="suggestion" value={formData.suggestion} onChange={handleChange} required />
        <SubmitButton type="submit">Submit Review</SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
`;

const Card = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Name = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;

const Email = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SuggestionCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  color: #666;
`;

const Time = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-style: italic;
  color: #888;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
 
