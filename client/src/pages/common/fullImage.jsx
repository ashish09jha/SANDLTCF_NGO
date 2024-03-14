import React, { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import styled from "styled-components";

function FullImage({ index, images }) {

  const [currentIndex, setCurrentIndex] = useState(index);
  const [currentImage, setCurrentImage] = useState(images[index]?.image);

  const handleLeftClick = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      setCurrentImage(images[newIndex]?.image);
    }
  };

  const handleRightClick = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < images.length) {
      setCurrentIndex(newIndex);
      setCurrentImage(images[newIndex]?.image);
    }
  };

  return (
    <Container>
      {currentIndex > 0 && <LeftArrow onClick={handleLeftClick} />}
      <img src={currentImage} alt="Full Image" />
      {currentIndex < images.length - 1 && (
        <RightArrow onClick={handleRightClick} />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: inline-block;
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

export default FullImage;
