import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {localHost} from '../../../../URL';
import { useNavigate } from 'react-router-dom';

function VolunteerInformation() {
    const [volunteer, setVolunteer] = useState([]);
    const navigate=useNavigate();
  
  useEffect(()=>{
    if(!localStorage.getItem("priority")){
      navigate("/");
    }
  },[])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${localHost}/ngo/Volunteer`);
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
            <TableWrapper>
                <table>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteer.map((element, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
        </Content>
    );
}

const Content = styled.div`
    padding-top: 80px; /* Add padding to create space between navbar and content */
    overflow: auto; /* Enable scrolling if content overflows */
`;

const TableWrapper = styled.div`
    margin-left: 250px; /* Adjust as per Sidebar width */
    overflow-x: auto; /* Enable horizontal scrolling if table content overflows */
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
`;

export default VolunteerInformation;
