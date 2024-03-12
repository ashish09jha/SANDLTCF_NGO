import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function GalleryPhotoUpdate() {
    const [images, setImages] = useState([]);
    const [newImage, setNewImage] = useState(null); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/ngo/Gallery");
            const data1 = response.data;
            const data = data1.data
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const handleAddPhoto = async () => {
        try {
            const formData = new FormData();
            formData.append('image', newImage);
            await axios.post("http://localhost:8000/ngo/Gallery", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchData();
            setNewImage(null);
        } catch (error) {
            console.error("Error adding photo:", error);
        }
    };

    const handleDeletePhoto = async (index) => {
        try {
            await axios.delete(`http://localhost:8000/ngo/Gallery/${index}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting photo:", error);
        }
    };

    const handleChange = (event) => {
        const imageFile = event.target.files[0];
        setNewImage(imageFile);
    }

    return (
        <Container>
            <ButtonContainer>
                <input type="file" onChange={handleChange} />
                <Button onClick={handleAddPhoto}>Add Photo</Button>
            </ButtonContainer>
            <Gallery>
                {images.map((image, index) => (
                    <ImageContainer key={index}>
                        <Image src={image.image} alt={`Image ${index}`} />
                        <DeleteButton onClick={() => handleDeletePhoto(index)}>Delete</DeleteButton>
                    </ImageContainer>
                ))}
            </Gallery>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 50px;
    padding: 20px;
`;

const ButtonContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
    margin-left: 10px;
`;

const Gallery = styled.div`
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
    top: 10px;
    right: 10px;
    padding: 6px 12px;
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

export default GalleryPhotoUpdate;
