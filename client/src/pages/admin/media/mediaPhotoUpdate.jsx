import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {localHost} from "../../../../URL.js"

function MediaPhotoUpdate() {
    const [images, setImages] = useState([]);
    const [newImage, setNewImage] = useState(null); 

    useEffect(() => {
        fetchData(); 
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${localHost}/ngo/Media`);
            const data1 = response.data;
            const data = data1.data;
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const handleAddPhoto = async () => {
        try {
            if(!newImage){
                alert('Choose an image ')
                return;
            }
            const formData = new FormData();
            formData.append('image', newImage);
            await axios.post(`${localHost}/ngo/Media`, formData, {
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

    const handleDeletePhoto = async (id) => {

        const deleteData = async () => {
            try {
                await axios.delete(`${localHost}/ngo/Media/C/${id}`);
                setImages(prevImages => prevImages.filter(image => image._id !== id));
            } catch (error) {
                console.error("Error deleting photo:", error);
            }
        };
        
        deleteData();
        
    };

    const handleSelectImage = (index,id,status) => {
        const updatedImages = [...images];
        updatedImages[index].status = !updatedImages[index].status;
        setImages(updatedImages);
        const fetchData=async()=>{
            try{
                const data={
                    id:id,
                    status:status,
                }
                await axios.patch(`${localHost}/ngo/Media`,data);
            }catch(error){
                console.log(`ERROR:${error}`)
            }
        }
        fetchData();
    };

    const handleChange = (event) => {
        const imageFile = event.target.files[0];
        setNewImage(imageFile);
    };

    return (
        <Container>
            <ButtonContainer>
                <input type="file" onChange={handleChange} />
                <Button onClick={handleAddPhoto}>Add Photo</Button>
            </ButtonContainer>
            <Media>
                {images.map((image, index) => ( 
                    <ImageContainer key={index} selected={image.status}>
                        <Image src={image.image} alt={`Image ${index}`} />
                        <ImageOverlay>
                            <SelectButton onClick={() => handleSelectImage(index,image._id,!image.status)}>
                                {image.status ? "Deselect" : "Select"}
                            </SelectButton>
                            <DeleteButton onClick={() => handleDeletePhoto(image._id)}>Delete</DeleteButton>
                        </ImageOverlay>
                    </ImageContainer>
                ))}
            </Media>
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

const Media = styled.div`
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
    box-shadow: ${(props) => (props.selected ? '0 0 20px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)')};
    transform: ${(props) => (props.selected ? 'translateY(-5px)' : 'none')}; /* Added */
    transition: box-shadow 0.3s ease, transform 0.3s ease; /* Added */
    border: ${(props) => (props.selected ? '2px solid #007bff' : 'none')};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between; /* Adjusted */
    align-items: flex-start; /* Adjusted */
    padding: 10px; /* Adjusted */
    box-sizing: border-box; /* Adjusted */
    opacity: 0;
    transition: opacity 0.3s ease;
    ${ImageContainer}:hover & {
        opacity: 1;
    }
`;

const SelectButton = styled.button`
    padding: 6px 12px;
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

const DeleteButton = styled.button`
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

export default MediaPhotoUpdate;
