import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import { FiPlus, FiX } from "react-icons/fi";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Header from "./Header";
import {localHost} from "../../../../URL";

function Main() {
  const [gallery, setGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [zoom, setZoom] = useState(false);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${localHost}/ngo/Certificates`);
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

  useEffect(() => {
    if (gallery.length > 0) {
      setCurrentImage(gallery[currentIndex]?.image);
    }
  }, [gallery, currentIndex]);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
    setDirection("left");
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
    setDirection("right");
  };

  const handleZoom = useCallback((index) => {
    setZoom(true);
    setCurrentIndex(index);
    setCurrentImage(gallery[index].image);
    document.body.style.overflow = "hidden";
  }, [gallery]);

  const handleCloseZoom = () => {
    setZoom(false);
    document.body.style.overflow = "auto";
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (zoom) {
        if (e.keyCode === 37) {
          // Left arrow key
          handleLeftClick();
        } else if (e.keyCode === 39) {
          // Right arrow key
          handleRightClick();
        }
      }
    },
    [zoom, handleLeftClick, handleRightClick]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <Header/>
      {gallery.length === 0 ? (
        <Container1>Coming Soon...</Container1>
      ) : (
        <>
          <Container zoomed={zoom}>
            {gallery.map((element, index) => (
              <HoveredImageContainer
                key={index}
                onClick={() => handleZoom(index)}
                zoomed={zoom && currentIndex === index}
              >
                <img src={element.image} alt={`Image ${index}`} />
                <FiPlusStyled />
              </HoveredImageContainer>
            ))}
          </Container>
          <DarkOverlay zoomed={zoom} onClick={handleCloseZoom} />
          {zoom && (
            <ImageWrapper>
              <CloseButton onClick={handleCloseZoom}>
                <FiXStyled />
              </CloseButton>
              <LeftArrow onClick={handleLeftClick}>
                <IoMdArrowBackStyled />
              </LeftArrow>
              <FullImage
                id="full-image"
                src={currentImage}
                alt="Full Image" 
                direction={direction}
                className={zoom ? "active" : ""}
              />
              <RightArrow onClick={handleRightClick}>
                <IoMdArrowForwardStyled />
              </RightArrow>
            </ImageWrapper>
          )}
        </>
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  overflow: ${(props) => (props.zoomed ? "hidden" : "auto")};
  height: ${(props) => (props.zoomed ? "100vh" : "auto")};
`;

const HoveredImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: ${(props) => (props.zoomed ? "0" : "12px")};
  overflow: hidden;
  box-shadow: ${(props) =>
    props.zoomed ? "none" : "0px 4px 8px rgba(0, 0, 0, 0.1)"};
  transition: transform 0.3s ease;
  cursor: pointer;

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
  height:30%;
  width:30%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  z-index:3;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${HoveredImageContainer}:hover & {
    opacity: 1;
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: ${(props) => (props.zoomed ? "block" : "none")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 20;
  color: white;
  background-color: black;
  border: none;
  padding: 10px;
  border-radius: 50%;
`;

const LeftArrow = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 20;
  color: white;
  background-color: black;
  border: none;
  padding: 10px;
  border-radius: 50%;
`;

const RightArrow = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 20;
  color: white;
  background-color: black;
  border: none;
  padding: 10px;
  border-radius: 50%;
`;

const IoMdArrowBackStyled = styled(IoMdArrowBack)`
  outline: none;
`;

const IoMdArrowForwardStyled = styled(IoMdArrowForward)`
  outline: none;
`;

const FiXStyled = styled(FiX)`
  outline: none;
`;

const FullImage = styled.img`
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 120px);
  margin-top: 20px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: translateX(${(props) => (props.direction === 'left' ? '-100%' : '100%')});
  opacity: 0;
  &.active {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  text-align: center;
`;

export default Main;
