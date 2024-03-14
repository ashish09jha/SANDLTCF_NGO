import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:8000/ngo/Gallery");
        const data = resp.data.data;
        const filteredData = data.filter((element) => element.status);
        if (filteredData.length < 8) {
          setGallery(filteredData);
        } else {
          updateGallery(filteredData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const updateGallery = (data) => {
    const showImage = data.slice(0, 8);
    setGallery(showImage);
  };

  return (
    <>
      <div className='text-center mb-8'>
                <h2 className="text-3xl font-bold text-black mb-2">Gallery</h2>
                <div className="h-1 w-10 bg-orange mx-auto mb-4"></div>
            </div>
      {!gallery.length ? (
        <Container1>Coming Soon...</Container1>
      ) : (
        <Container>
          <Row>
            {gallery.slice(0, 4).map((element, index) => (
              <ImageContainer key={index}>
                <img src={element.image} alt={`Image ${index}`} />
              </ImageContainer>
            ))}
          </Row>
          <Row>
            {gallery.slice(4, 8).map((element, index) => (
              <ImageContainer
                key={index + 4}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={element.image} alt={`Image ${index}`} />
                {index === 3 && (
                  <Link to="/gallery">
                    <Overlay />
                    <FiPlusStyled />
                    {hoveredIndex === 3 && <ViewMoreLink>View More</ViewMoreLink>}
                  </Link>
                )}
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(253, 107, 28, 0.8);
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

const ViewMoreLink = styled.span`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
`;

export default Main;
