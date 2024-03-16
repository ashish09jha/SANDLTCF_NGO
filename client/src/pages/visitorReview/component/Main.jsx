import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Volunteer from './admin.jsx';
import axios from 'axios';

const Main = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData=async()=>{
    try{
      const data1=await axios.get("http://sandltcf-ngo.onrender.com/ngo/visitorsReview");
      const data=data1.data.data;
      setReviews(data);
      console.log(data);
    }catch(error){
      console.log(`Error:${error}`);
    }
  }
  
  return (
    <Container>
      <Volunteer/>
      <CardContainer>
        {reviews.map((review, index) => (
          <Card key={index}>
            <Name>{review.personalDetail}</Name>
            <Suggestions>
                <SuggestionCard >{review.suggestion}</SuggestionCard>
            </Suggestions>
            <Time>{review.date}</Time>
          </Card> 
        ))}
      </CardContainer>
    </Container>
  );
};
// const VolunteerForm = styled(Volunteer)`
//   position: absolute; /* Position the form absolutely within the CardContainer */
//   z-index: 2; /* Ensure the form overlays the suggestions */
// `;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top:-120px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
  z-index:-1;
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

export default Main;
