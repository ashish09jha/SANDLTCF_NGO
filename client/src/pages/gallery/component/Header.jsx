import styled from "styled-components";

const Header = () => {

    return (
        <div className="relative w-full py-12 mt-10">
            <Container>GALLERY</Container>
        </div>
    );
};

const Container=styled.div`
width:100%;
height:20%;
display:flex; 
align-items:center;
justify-content:center;
margin:20px; 
font-size:50px;
color:#fff;
background-color:#333;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export default Header;
