import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function AdminInformation() {
  const [adminList, setAdminList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/admin");
      setAdminList(response.data.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: e.target.email.value,
        name: e.target.name.value,
        priority: localStorage.getItem("priority"),
      };
      await axios.post("http://localhost:8000/admin", data);
      const newAdmin = { name, email };
      setAdminList([...adminList, newAdmin]);
      setName("");
      setEmail("");
      setShowForm(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete(`http://localhost:8000/admin/${email}`);
      setAdminList(adminList.filter((admin) => admin.email !== email));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={toggleForm}>Add Admin</Button>
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
          </Form>
        </FormContainer>
      )}
      <Content>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th style={{ width: "100px" }}>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminList.map((admin, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>
                    <Button onClick={() => handleDelete(admin.email)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </Content>
    </>
  );
}

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form``;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
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

const Content = styled.div`
  padding-top: 10px;
  overflow: auto;
`;

const TableWrapper = styled.div`
  margin-left: 250px;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
`;

export default AdminInformation;
