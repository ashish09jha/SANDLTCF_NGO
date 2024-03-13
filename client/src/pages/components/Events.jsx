import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const handleMouseEnter = (index) => {
    setHovered(!hovered);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHovered(!hovered);
    setHoveredIndex(null);
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
              <ImageContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={element.image} alt={`Image ${index}`} />
                {hoveredIndex === index && <Overlay />}
                {hoveredIndex === index && <FiPlusStyled />}
              </ImageContainer>
            ))}
          </Row>
          <Row>
            {gallery.slice(4, 8).map((element, index) => (
              <ImageContainer
                key={index}
                onMouseEnter={() => handleMouseEnter(index + 4)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={element.image} alt={`Image ${index}`} />
                {hoveredIndex === index + 4 && <Overlay />}
                {hoveredIndex === index + 4 && <FiPlusStyled />}
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
  max-width: 1000px; 
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 8px rgba(255, 165, 0, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

<<<<<<< HEAD
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(253, 107, 28, 0.8);;
`;

const FiPlusStyled = styled(FiPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 60%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  z-index: 1; 
`;

export default Main;
=======
export default Main;
>>>>>>> 56d99e69bd13676b36373e0cc1d89c788f1b7807
