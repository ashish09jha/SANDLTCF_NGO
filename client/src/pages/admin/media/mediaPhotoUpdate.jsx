import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function mediaPhotoUpdate() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("URL");
            const data = response.data;
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const handleAddPhoto = async () => {
        // Logic to add photo goes here
    };

    const handleDeletePhoto = async (index) => {
        // Logic to delete photo goes here
    };

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={handleAddPhoto}>Add Photo</Button>
            </ButtonContainer>
            <media>
                {images.map((image, index) => (
                    <ImageContainer key={index}>
                        <Image src={image.url} alt={`Image ${index}`} />
                        <DeleteButton onClick={() => handleDeletePhoto(index)}>Delete</DeleteButton>
                    </ImageContainer>
                ))}
            </media>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 20px;
`;

const ButtonContainer = styled.div`
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
`;

const media = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 10px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const DeleteButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 4px 8px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #c82333;
    }
`;

export default mediaPhotoUpdate;
