import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { localHost } from '../../../URL';

const AdminForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [admin, setAdmin] = useState([]);
  
  const navigate = useNavigate(); 
  
  useEffect(()=>{
      localStorage.removeItem('priority');
      localStorage.removeItem('name');
  },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${localHost}/ngo/admin`);
        setAdmin(response.data.data);
      } catch (error) {
        console.log(`ERROR:${error}`);
      }
    }
    fetchData();
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleemailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let i = 0; i < admin.length; i++) {
      if (admin[i].name === username && admin[i].email === email){
        navigate("/editEvents");
        localStorage.setItem("priority",admin[i].priority);
        localStorage.setItem("name",admin[i].name);
        return;
      }
    }
    console.log("Invalid credentials");
  };

  return (
    <Container>
      <FormContainer>
        <h2>Admin Login</h2>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <Label htmlFor="email">email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleemailChange}
            required
          />
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f2f2f2; /* Greyish background */
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default AdminForm;
