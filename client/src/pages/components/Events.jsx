import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Main() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/ngo/Gallery");
        const resp1 = resp.data;
        const data = resp1.data;
        const filterData = data.filter((element) => element.status);
        setGallery(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="text-center mx-auto mb-4">
        <p className="font-quicksand items-center font-bold text-2xl text-orange mb-2 ">
          Gallery
        </p>
      </div>
      {!gallery.length ? (
        <Container1>Coming Soon...</Container1>
      ) : (
        <Container>
          {gallery.map((element, index) => (
            <ImageContainer key={index}>
              <img src={element.image} alt={`Image ${index}`} />
            </ImageContainer>
          ))}
        </Container>
      )}
    </>
  );
}

const Container1 = styled.div`
  height: 100px;
  display: flex;
  font-size: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Main;
