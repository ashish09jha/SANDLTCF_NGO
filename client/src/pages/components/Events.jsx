import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/ngo/Gallery");
        const resp1 = resp.data;
        const data = resp1.data;
        const filteredData = data.filter((element) => element.status);
        setFilterData(filteredData);
        updateGallery(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filterData.length > 8 && !hovered) {
      const interval = setInterval(() => {
        updateGallery(filterData);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [filterData, hovered]);

  const updateGallery = (data) => {
    const showImage = [];
    for (let i = 0; i < 8; i++) {
      const x = Math.floor(Math.random() * data.length);
      showImage.push(data[x]);
    }
    setGallery(showImage);
  };

  const handleHover = () => {
    setHovered(!hovered);
  };

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
          <Row>
            {gallery.slice(0, 4).map((element, index) => (
              <ImageContainer key={index} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <img src={element.image} alt={`Image ${index}`} />
              </ImageContainer>
            ))}
          </Row>
          <Row>
            {gallery.slice(4, 8).map((element, index) => (
              <ImageContainer key={index} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                <img src={element.image} alt={`Image ${index}`} />
              </ImageContainer>
            ))}
          </Row>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px; /* Set your desired maximum width */
  margin: 0 auto; /* Center the container horizontally */
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Main;
