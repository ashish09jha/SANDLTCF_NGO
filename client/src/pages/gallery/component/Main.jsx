import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Main() {
  const [Gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/ngo/Gallery");
        const resp1 = resp.data;
        const data = resp1.data;
        const filterData=await data.filter((element)=>{return element.status})
        setGallery(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!Gallery.length ? (
        <Container1>Comming Soon...</Container1>
      ) : (
        <Container>
          {Gallery.map((element, index) => (
                <ImageContainer>
                  <img key={index} src={element.image} alt={`Image ${index}`} />
                </ImageContainer>
           )
          )}
        </Container>
      )}
    </>
  );
}

const Container1=styled.div`
  height: 100px;
  display: flex;
  font-size:30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  margin: 10px;
  overflow: hidden;
  //   border-radius: 8px;
`;

export default Main;
