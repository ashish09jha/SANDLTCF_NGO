import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [currentImage, setCurrentImage] = useState();
  const [zoom, SetZoom] = useState(false);

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

  const handleLeftClick = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      setCurrentImage(gallery[newIndex]?.image);
      console.log("called");
      console.log(currentImage);
    }
  };

  const handleRightClick = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < gallery.length) {
      setCurrentIndex(newIndex);
      setCurrentImage(gallery[newIndex]?.image);
    }
  };

  const handleZoom=(index)=>{
    SetZoom(true);
    setCurrentIndex(index);
    setCurrentImage(gallery[index].image);
  }

  const handleZoomOut=()=>{
    SetZoom(false);
  }

  return (
    <>
      {!gallery.length ? (
        <Container1>Coming Soon...</Container1>
      ) : (
        <>
          {zoom ? (
            <Container2>
              <LeftArrow onClick={handleLeftClick} />
              <img src={currentImage} alt="Full Image" />
              <RightArrow onClick={handleRightClick} />
              <Goback onClick={handleZoomOut}>Go Back</Goback>
            </Container2>
          ) : (
            <Container>
              {gallery.map((element, index) => (
                <HoveredImageContainer
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleZoom(index)}
                >
                  <img src={element.image} alt={`Image ${index}`} />
                  {hoveredIndex === index && <FiPlusStyled />}
                </HoveredImageContainer>
              ))}
            </Container>
          )}
        </>
      )}
    </>
  );
}

const Container2 = styled.div`
  position: relative;
  display: inline-block;
  
  img {
    max-width: 100vw;
    max-height: 100vh;
  }
`;


const LeftArrow = styled(BiArrowToLeft)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;

const RightArrow = styled(BiArrowToRight)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;

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
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    border-radius: 8px;
  }
`;

const FiPlusStyled = styled(FiPlus)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const HoveredImageContainer = styled(ImageContainer)`
  &:hover ${FiPlusStyled} {
    opacity: 1;
  }
`;

const Goback = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 2px solid #000;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
`;

export default Main;
